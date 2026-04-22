import React from 'react'

const RIghtcardcontent = (props) => {
  return (
    <div>
              <div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white text-black text-lg font-semibold flex items-center justify-center shadow">
          {props.id + 1}
        </div>

        <div className="absolute inset-x-0 bottom-28 px-7 text-white">
          <p className="text-[25px] leading-8 font-bold drop-shadow-lg">
            Prime customers,
          </p>
          <p className="mt-2 text-[20px] leading-tight font-medium drop-shadow-lg">
            that have access to bank credit and are satisfied with the current product
          </p>
        </div>

        <div className="absolute left-4 right-4 bottom-4">
          <button className="w-full h-14 rounded-full bg-blue-600 text-white font-medium flex items-center justify-between px-6 shadow-lg hover:bg-blue-700 transition">
            <span>{props.tags}</span>
            <span className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-xl ">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RIghtcardcontent
