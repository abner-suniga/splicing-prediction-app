"use client"

import React, { useEffect, useState } from "react";
import { JobResults, JobStatus } from "@/app/types/result";
import ResultsControl from "../result-control";
import JobStatusChip from "@/app/ui/job-status-chip";


export default function Results({ params }: { params: { id: string } }) {
  const [jobResult, setJobResult] = useState<JobResults | null>()

  console.log(jobResult)
  
  useEffect(() => {
    const fetchJob = () => {
      fetch(`http://localhost:3001/v1/jobs/${params.id}`, {
        cache: "no-store",
      }).then(res => res.json()).then(data => setJobResult(data));
    };

    fetchJob();

    const interval = setInterval(() => {
      if (jobResult?.status === JobStatus.PROCESSING) {
        fetchJob();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [params.id, jobResult?.status]);



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
            <p>Arquivo: fasta.example</p>
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
