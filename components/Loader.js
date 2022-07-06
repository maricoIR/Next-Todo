const Loader = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center mt-12 px-5">
      <div className="md:w-[800px] w-full rounded-md py-3 px-1 shadow-sm border border-darkborder bg-dark flex flex-col items-start gap-2">
        <div className="w-full flex items-center justify-center py-3 px-5">
          <span className="font-medium text-xl text-white">Loading ...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
