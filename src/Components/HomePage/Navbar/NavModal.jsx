import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineMyLocation } from "react-icons/md";

const NavModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedState, setSelectedState] = useState("City");
  const modalRef = useRef(null);

  const states = [
    {
      State: "Delhi",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Gurgaon",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Noida",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Ghaziabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Mumbai",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Pune",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Hyderabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Bangalore",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Chennai",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Jaipur",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Chandigarh",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Ahmedabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Delhi",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Gurgaon",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Noida",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Ghaziabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Mumbai",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Pune",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Hyderabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Bangalore",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Chennai",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Jaipur",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Chandigarh",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Ahmedabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Delhi",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Gurgaon",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Noida",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Ghaziabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Mumbai",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Pune",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Hyderabad",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Bangalore",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Chennai",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Jaipur",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Chandigarh",
      Stateimage: "images/delhi.png",
    },
    {
      State: "Ahmedabad",
      Stateimage: "images/delhi.png",
    },
  ];

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state.State);
    handleModalToggle(); // Close the modal after selecting an item
  };

  return (
    <div>
      {/* Modal trigger */}
      <div
        className="relative flex items-center cursor-pointer text-white text-xl mt-3 -top-[1px]  mr-20"
        onClick={handleModalToggle}
      >
        <div className="font-medium w-auto mr-1 text-[16px] ">
          {selectedState || "Location"}
        </div>
        <div className="absolute top-[7px] -right-5">
          <FaAngleDown />
        </div>
      </div>

      {/* Modal content */}
      <div
        ref={modalRef}
        className={`fixed z-50 inset-0 overflow-y-auto ${
          showModal ? "flex" : "hidden"
        } justify-center items-center`}
        style={{ overflowY: "hidden" }}
      >
        <div className="bg-gray-900 opacity-75 absolute inset-0 "></div>
        <div id="modal" className=" relative z-50 bg-white   text-left overflow-y-scroll   shadow-xl max-w-4xl w-full -mt-2  h-[480px] p-3">
          <div className="px-4 py-5 sm:px-6">

<div className=" w-[850px] h-[80px] bg-white  pt-5 -mt-8 fixed">
            <h3 className="text-2xl  leading-6 font-bold text-gray-900 ">
              Choose Your City{" "}
            </h3>

            <h2 className="text-gray-500 text-xs mt-3 ">
              This Would help us in providing you quick service
            </h2>
            <div
              className="float-right -mt-10 text-2xl mr-2   hover:bg-gray-300 hover:rounded-full "
              onClick={handleModalToggle}
            >
              <RxCross1  />
            </div>

</div>

          </div  >
          <div className="w-24 h-10 mt-12 border-red-500 border-b-2 flex gap-3 ml-6">
            <img className="w-8 h-6 " src="/images/flag.jpg" alt="" />
            <h2 className="font-bold">India</h2>
          </div>
          <div className=" grid grid-cols-6 gap-4  ">
            {states.map((state, index) => (
              <div
                key={index}
                className="cursor-pointer  p-4 text-center hover:bg-gray-200"
                onClick={() => handleStateSelect(state)}
              >
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-10 h-10 " src={state.Stateimage} alt="" />
                  </div>
                  <div>{state.State}</div>
                </div>
              </div>
            ))}
          </div>
    {/* detect location */}

          <div className="w-[896px] -ml-3 h-[60px] bg-white top-[525px]  fixed flex justify-center items-center shadow-inner " >
            <div className="w-36 h-[35px] ring-1 ring-black flex justify-center items-center gap-2" onClick={handleModalToggle}>
              <div><MdOutlineMyLocation/></div>
              <div className="text-black text-xs font-medium">Detect my location</div>
              </div>
          </div>

      
        </div>



      </div>
    </div>
  );
};

export default NavModal;
