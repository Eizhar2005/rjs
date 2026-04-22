import React from "react";
import RIghtcardcontent from "./RIghtcardcontent";
const Rightcard = (props) => {
  return (
     <div>
            <div className="relative w-72 h-140 rounded-[34px] overflow-hidden shadow-2xl bg-neutral-900">
        <img className='h-full w-full object'
          src={props.img}
          alt="woman using phone"
          className="absolute inset-0 w-full h-full object-cover"
        />
<RIghtcardcontent id={props.id} tags={props.tag}/> 
      </div>
    </div>
  );
};

export default Rightcard;
