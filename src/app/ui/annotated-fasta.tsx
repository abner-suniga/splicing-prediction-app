import { ResultHit, ResultSequence } from "../types/result";

function splitStringAtIndices(
  inputString: string,
  indices: number[],
): string[] {
  // Sort the indices array to ensure proper splitting
  indices.sort((a, b) => a - b);

  // Include the start of the string and the end of the string as part of the indices
  indices.unshift(0);
  indices.push(inputString.length);

  // Generate the substrings
  let substrings: string[] = [];
  for (let i = 0; i < indices.length - 1; i++) {
    let start = indices[i];
    let end = indices[i + 1];
    substrings.push(inputString.substring(start, end));
  }

  return substrings;
}

export default function AnnotatedFasta({
  resultHits,
  resultSequences,
}: {
  resultHits: ResultHit[];
  resultSequences: ResultSequence[];
}) {
  return (
    <div className="break-all font-mono text-sm h-[31rem] w-full overflow-auto rounded-lg pr-4">
      {resultSequences.map((sequence) => {
        const sequenceHits = resultHits.filter(
          (hit) => hit.name === sequence.name,
        );
        const sequenceHitsIndexes = sequenceHits
          .filter((hit) => hit.name === sequence.name)
          .map((hit) => [hit.position - 1, hit.position])
          .flat();

        return (
          <div
            key={sequence.name}
            className="rounded-lg border border-gray-200 px-3 py-2 mb-3 text-xs"
          >
            <div className="font-medium text-md mb-2">&gt;{sequence.name}</div>
            <div className="[&>*:nth-child(even)]:bg-emerald-400">
              {splitStringAtIndices(sequence.content, sequenceHitsIndexes).map(
                (s, i) => (
                  <span key={i}>{s}</span>
                ),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
