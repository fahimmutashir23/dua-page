const RightNav = () => {
  return (
    <div className="w-[330px] mt-[80px]">
      <div className=" h-screen overflow-hidden  bg-white rounded-xl px-4 py-2">
        <div className="bg-white py-8">
          <h1 className="text-xl font-medium text-center bg-white text-black">
            Settings
          </h1>
        </div>
        <div className="bg-white space-y-3">
          <div className="collapse collapse-arrow join-item border rounded-xl">
            <input type="radio" name="my-accordion-4"/>
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className="text-[#1FA45B] font-semibold text-sm bg-slate-100">Language Settings</h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex justify-evenly bg-white mt-4">
                <button className="btn bg-[#1FA45B] border-none text-white w-24">English</button>
                <button className="btn bg-[#1FA45B] border-none text-white w-24">বাংলা</button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4"/>
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className="text-black font-semibold text-sm bg-slate-100">General Settings</h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex justify-evenly bg-white mt-4">
                <button className="btn bg-[#1FA45B] border-none text-white w-24">English</button>
                <button className="btn bg-[#1FA45B] border-none text-white w-24">বাংলা</button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4"/>
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className="text-black font-semibold text-sm bg-slate-100">Font Settings</h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex justify-evenly bg-white mt-4">
                <button className="btn bg-[#1FA45B] border-none text-white w-24">English</button>
                <button className="btn bg-[#1FA45B] border-none text-white w-24">বাংলা</button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4"/>
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className="text-black font-semibold text-sm bg-slate-100">Appearance Settings</h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex justify-evenly bg-white mt-4">
                <button className="btn bg-[#1FA45B] border-none text-white w-24">English</button>
                <button className="btn bg-[#1FA45B] border-none text-white w-24">বাংলা</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
