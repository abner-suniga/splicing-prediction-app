"use client"

import React, { useEffect, useState } from "react";
import { JobResults, JobStatus } from "@/app/types/jobs";
import ResultsControl from "@/app/platform/jobs/[id]/result-control";
import JobStatusChip from "@/app/ui/job-status-chip";
import { useAuth } from "@clerk/nextjs";


export default function Results({ params }: { params: { id: string } }) {
  const [jobResult, setJobResult] = useState<JobResults | null>()
  const { getToken } = useAuth()
  
  useEffect(() => {
    const fetchJob = async () => {
      const token = await getToken()
      const response = await fetch(`http://localhost:3001/v1/jobs/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      })
      const data = await response.json()
      setJobResult(data)
    };

    fetchJob();

    const interval = setInterval(() => {
      if (jobResult?.status === JobStatus.PROCESSING) {
        fetchJob();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [params.id, jobResult?.status, getToken]);



  return (
    <main className="flex flex-col h-screen px-16 py-8 space-y-8">
      {jobResult ? (
        <>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold mb-4">
              Resultados da execução
            </h1>
            <JobStatusChip status={jobResult.status} />
          </div>
          <div className="flex flex-col space-y-2 text-sm font-mono rounded-lg border border-gray-300 px-3 py-2">
            <p >
              ID: {params.id}
            </p>
            <p>Modelo: {jobResult.model}</p>
          </div>
        </div>
        <ResultsControl result={jobResult}/>
        </>
      ) : (
        <div>Carregando resultados ...</div>
      )}
    </main>
  );
}
