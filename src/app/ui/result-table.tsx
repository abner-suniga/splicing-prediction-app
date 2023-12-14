export default function ResultTable() {
  return (
    <table className="min-w-full divide-y divide-gray-200 table-auto">
      <thead className="bg-green-500">
        <tr>
          <th className="px-6 py-3 text-sm font-medium text-white tracking-wider text-left ">
            Sequence
          </th>
          <th className="px-6 py-3 text-sm font-medium text-white tracking-wider text-right">
            Position
          </th>
          <th className="px-6 py-3 text-sm font-medium text-white tracking-wider text-center">
            Hit
          </th>
          <th className="px-6 py-3 text-sm font-medium text-white tracking-wider text-right">
            Score
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {Array.from({ length: 10 }).map((_, index) => (
          <tr className={`${index % 2 === 0 ? " bg-gray-50" : ""}`}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              ExampleSeq1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
              200
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
              TCGAG<b>GT</b>AAGTG
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
              0.999977
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
