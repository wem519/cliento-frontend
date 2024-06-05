const AddClient = () => {
  return (
    <div className="flex fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen items-center justify-center">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative rounded-lg mb-2 border border-gray-200 rounded-lg ">
          <div className="w-full p-2 bg-gray-200 p-3">
            <div className="flex items-center justify-between">딜 생성</div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col flex-grow">
              <div className="w-full p-3 bg-white">고객정보</div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="w-full p-3 bg-white">보호자정보</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
