import { useState } from "react";
import AddClient from "../Common/AddClient";
import Table from "../Common/Table";

const List = () => {
  const [addStatus, setAddStatus] = useState<boolean>(false);

  const handleAddClientOpen = () => {
    setAddStatus((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col w-full h-full space-y-5 mx-5 my-5">
        <div className="flex items-center space-x-2">
          <div className="text-black-500 text-base font-bold">
            딜 / 파이프라인
          </div>

          <div className="flex-grow"></div>
          <button className="p-2 text-sm font-semibold rounded-lg border border-gray-400 text-gray-600 bg-gray-200 items-center">
            딜+
          </button>
          <input className="border rounded-xl border-gray-300 p-2 w-1/2" />
          <div className="flex-grow"></div>
        </div>
        <Table />
        {/* {addStatus && <AddClient />} */}
      </div>
      <AddClient />
    </>
  );
};

export default List;
