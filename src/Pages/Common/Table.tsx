const Table = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 ">
        <tr>
          <th scope="col" className="py-3 px-4 pe-0">
            <div className="flex items-center h-5">
              <input
                id="hs-table-pagination-checkbox-all"
                type="checkbox"
                className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="hs-table-pagination-checkbox-all"
                className="sr-only"
              >
                Checkbox
              </label>
            </div>
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
          >
            이름
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
          >
            생년월일
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
          >
            보호자 이름
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
          >
            보호자 전화번호
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
          >
            관계
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
          >
            상태
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500"
          >
            확인
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="py-3 ps-4">
            <div className="flex items-center h-5">
              <input
                id="hs-table-pagination-checkbox-1"
                type="checkbox"
                className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="hs-table-pagination-checkbox-1"
                className="sr-only"
              >
                Checkbox
              </label>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
            우의명
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
            1990.05.06
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
            우정태
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
            010-0000-0000
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
            부
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
            <select>
              <option>1차방문</option>
              <option>재방문</option>
              <option>수급자격심사중</option>
              <option>관리중</option>
            </select>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            <button
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none"
            >
              삭제
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
