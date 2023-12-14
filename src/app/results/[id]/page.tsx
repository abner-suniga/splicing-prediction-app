import React from "react";
import ResultTable from "@/app/ui/result-table";
import AnnotatedFasta from "@/app/ui/annotated-fasta";

export default function Results({ params }: { params: { id: string } }) {
  return (
    <main className="flex flex-col h-screen p-32 space-y-16">
      <div>
        <h1 className="text-4xl font-semibold mb-4">Resultados execução: {params.id}</h1>
        <p>Modelo DSSP</p>
      </div>
      <div className="flex space-x-32">
        <div className="basis-1/2">
          <ResultTable />
        </div>
        <div className="basis-1/2">
          <AnnotatedFasta />
        </div>
      </div>
    </main>
  );
}
