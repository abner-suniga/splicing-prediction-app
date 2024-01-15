"use client";

import { Job } from "@/app/types/jobs";
import JobStatusChip from "@/app/ui/job-status-chip";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

export default function ResultsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchJobs = async () => {
      const token = await getToken();
      const response = await fetch(`http://localhost:3001/v1/jobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });
      const data = await response.json();
      const dataProcessed = data
        .map((job: any) => ({
          ...job,
          createdAt: new Date(job.createdAt),
          updatedAt: new Date(job.updatedAt),
        }))
        .sort((a: Job, b: Job) => +b.createdAt - +a.createdAt);
      setJobs(dataProcessed);
    };

    fetchJobs();
  }, [getToken]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold mb-4">Execuções</h1>
        <a
          className="inline-block w-fit rounded border border-emerald-600 bg-emerald-600 px-10 py-2 text-md font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500"
          href="/platform/jobs/new"
        >
          Nova execução
        </a>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="">
            <tr>
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ID
              </th>
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Data
              </th>
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Modelo
              </th>
              <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th />
            </tr>
          </thead>

          <tbody className="font-mono divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {job.id}
                </td>
                <td className="text-left whitespace-nowrap px-4 py-2 text-gray-700">
                  {job.createdAt.toLocaleDateString("pt-BR")} - {job.createdAt.toLocaleTimeString("pt-BR")}
                </td>
                <td className="text-left whitespace-nowrap px-4 py-2 text-gray-700">
                  {job.model}
                </td>
                <td className="text-left whitespace-nowrap px-4 py-2 text-gray-700">
                  <JobStatusChip status={job.status} />
                </td>
                <td>
                  <a
                    className="font-sans inline-block w-fit rounded border border-emerald-600 bg-emerald-600 px-4 py-1 text-xs font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500"
                    href={`/platform/jobs/${job.id}`}
                  >
                    Visualizar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
