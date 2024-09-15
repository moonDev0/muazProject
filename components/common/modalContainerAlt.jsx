import React from "react";

function ModalContainerAlt({ children, height, width }) {
  return (
    <div className="fixed bg-[#2A2E4398] inset-0 h-screen flex justify-center items-center z-50">
      <div className="relative">
        <div className="bg-white md:w-[100%] lg:w-[1000px] h-[560px] rounded-xl  relative overflow-y-auto scrollbar-hide " style={{height}}>
          {children}
        </div>

        
      </div>
    </div>
  );
}

export default ModalContainerAlt;
