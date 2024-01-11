"use client";

import { useMemo, useState } from "react";
import { JobResults, ResultHit } from "../types/result";
import AnnotatedFasta from "../ui/annotated-fasta";
import ResultsTable from "../ui/result-table";
import Select from "../ui/select";
import { useSort } from "../hooks/use-sort";
import { usePagination } from "../hooks/use-pagination";

export default function ResultsControl({ result }: { result: JobResults }) {
  const sequences = useMemo(
    () =>
      result.resultHits
        .map((result) => result.name)
        .filter((value, index, array) => array.indexOf(value) === index),
    [result.resultHits],
  );

  const [selectedSequence, setSelectedSequence] = useState("");

  const itemsFiltered = useMemo(() => {
    return result.resultHits.filter((item) =>
      !selectedSequence ? true : item.name === selectedSequence,
    );
  }, [result.resultHits, selectedSequence]);

  const resultSequencesFiltered = useMemo(() => {
    return result.resultSequences.filter((item) =>
      !selectedSequence ? true : item.name === selectedSequence,
    );
  }, [result.resultSequences, selectedSequence]);

  const { itemsSorted, sortState, sortBy } = useSort<ResultHit>({
    items: itemsFiltered,
    initialSort: { prop: "score", sort: "asc" },
  });

  const { pageSize, currentPage, totalNumPages, setPage } = usePagination({
    numItems: itemsFiltered.length,
    pageSize: 10,
  });

  return (
    <div>
      <div className="mb-4">
        <Select
          label="Selecione sequência"
          name="sequence"
          value={selectedSequence}
          onChange={(value) => {
            setSelectedSequence(value);
            setPage(0);
          }}
          items={sequences.map((sequence) => ({
            value: sequence,
            label: sequence,
          }))}
        />
      </div>
      <div className="flex space-x-16">
        <div className="basis-1/2">
          <ResultsTable
            itemsSorted={itemsSorted}
            sortState={sortState}
            sortBy={sortBy}
            currentPage={currentPage}
            pageSize={pageSize}
            totalNumPages={totalNumPages}
            setPage={setPage}
          />
        </div>
        <div className="basis-1/2">
          <AnnotatedFasta
            resultHits={result.resultHits}
            resultSequences={resultSequencesFiltered}
          />
        </div>
      </div>
    </div>
  );
}
