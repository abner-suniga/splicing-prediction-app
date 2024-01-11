"use client";

import { PageControll } from "./page-controll";

export default function ResultsTable({
  itemsSorted,
  sortState,
  sortBy,
  currentPage,
  pageSize,
  totalNumPages,
  setPage,
}: {
  itemsSorted: any;
  sortState: any;
  sortBy: any;
  currentPage: any;
  pageSize: any;
  totalNumPages: any;
  setPage: any;
}) {
  return (
    <div>
      <div className="rounded-lg border border-gray-200">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="">
              <tr>
                <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Sequence
                </th>
                <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Type
                </th>
                <th
                  className="cursor-pointer text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                  onClick={() => sortBy("position")}
                >
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        sortState.prop === "position" &&
                        sortState.sort === "asc"
                          ? "rotate-180"
                          : ""
                      } h-4 w-4`}
                      viewBox="0 0 20 20"
                      fill={
                        sortState.prop === "position" ? "#030712" : "#9ca3af"
                      }
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Position
                  </div>
                </th>
                <th className="text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Hit
                </th>
                <th
                  className="cursor-pointer text-right whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                  onClick={() => sortBy("score")}
                >
                  <div className="flex justify-end items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        sortState.prop === "score" && sortState.sort === "asc"
                          ? "rotate-180"
                          : ""
                      } h-4 w-4`}
                      viewBox="0 0 20 20"
                      fill={sortState.prop === "score" ? "#030712" : "#9ca3af"}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Score
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-xs">
              {itemsSorted
                .slice(
                  currentPage * pageSize,
                  currentPage * pageSize + pageSize,
                )
                .map((result: any, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? " bg-gray-50" : "bg-gray-100"
                    }`}
                  >
                    <td className="font-mono text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {result.name.slice(0, 30)}
                    </td>
                    <td className="font-mono text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {result.type}
                    </td>
                    <td className="font-mono text-center whitespace-nowrap px-4 py-2 text-gray-700">
                      {result.position}
                    </td>
                    <td className="font-mono text-center whitespace-nowrap px-4 py-2 text-gray-700">
                      {result.hit.slice(0, 5)}
                      <span className="font-semibold bg-emerald-400">
                        {result.hit.slice(5, 6)}
                      </span>
                      {result.hit.slice(6)}
                    </td>
                    <td className="font-mono text-right whitespace-nowrap px-4 py-2 text-gray-700">
                      {result.score.toFixed(5)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <PageControll
          currentPage={currentPage}
          totalNumPages={totalNumPages}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
