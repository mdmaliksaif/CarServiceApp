import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GrFormPreviousLink } from "react-icons/gr";
import companyCarData from "./CarData";
// Company Modal Component
const CompanyModal = ({ onClose, onSelectCompany, openCarModal }) => {
  return (
    <div className="p-4 ">
      <div className="flex justify-between">
        <h2 className="font-semibold text-sm">Select Manufacturer</h2>
        <div>
          <RxCross1 onClick={onClose} />
        </div>
      </div>
      <div className="h-[30px] w-[350px] ring-1 flex p-2 mt-5  space-x-2  items-center">
        <div>
          <IoIosSearch />
        </div>
        <div>
          <input
            className="h-[30px] w-[318px] border-none focus:ring-0 focus:ring-opacity-0 outline-none placeholder:text-sm border-0 focus:outline-none"
            placeholder="Search Brands"
            type="text"
          />
        </div>
      </div>
      {/* Company modal component */}
      <div className="w-[330px] h-[210px] bg-slate-400 mt-5 ml-4 overflow-hidden overflow-y-scroll">
        <ul>
          {companyCarData.map((company) => (
            <li
              key={company}
              onClick={() => onSelectCompany(company.company, openCarModal)}
            >
              {company.company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Car Modal Component
// Car Modal Component
const CarModal = ({
  onClose,
  onSelectCar,
  openFuelTypeModal,
  selectedCompany,
  Carprevious,
}) => {
  // Find the selected company data
  const selectedCompanyData = companyCarData.find(
    (data) => data.company === selectedCompany
  );

  // Extract car models for the selected company
  const carModelsForSelectedCompany = selectedCompanyData?.carModels || [];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div>
            <GrFormPreviousLink onClick={Carprevious} />
          </div>
          <h2 className="text-sm font-semibold">Select Model</h2>
        </div>
        <div>
          <RxCross1 onClick={onClose} />
        </div>
      </div>

      <div className="h-[30px] w-[350px] ring-1 flex p-2 mt-5 space-x-2  items-center">
        <div>
          <IoIosSearch />
        </div>
        <div>
        <input
            className="h-[30px] w-[318px] border-none focus:ring-0 focus:ring-opacity-0 outline-none placeholder:text-sm border-0 focus:outline-none"
            placeholder="Search Models"
            type="text"
          />
        </div>
      </div>
      <div className="w-[330px] h-[210px] bg-slate-400 mt-5 ml-4 overflow-hidden overflow-y-scroll">
        <ul>
          {carModelsForSelectedCompany.map((car) => (
            <li
              key={car.name}
              onClick={() => onSelectCar(car.name, openFuelTypeModal)}
            >
              {car.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getFuelType = (company, carName) => {
  // Find the selected company data
  const selectedCompanyData = companyCarData.find(
    (companyData) => companyData.company === company
  );

  // Find the selected car model data
  const selectedCarModel = selectedCompanyData
    ? selectedCompanyData.carModels.find(
        (carModel) => carModel.name === carName
      )
    : null;

  // Access fuelType
  const fuelType = selectedCarModel ? selectedCarModel.fuelType : [];

  return fuelType;
};

// Fuel Type Modal Component
const FuelTypeModal = ({
  onClose,
  onSelectFuelType,
  selectedCar,
  Fuelprevious,
  Carcompany,
  CarName,
}) => {
  // const fuelTypes = ["PETROL", "DIESEL", "CNG"];
  const fuelType = getFuelType(Carcompany, CarName);
  return (
    <div className="p-4 ">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div>
            <GrFormPreviousLink onClick={Fuelprevious} />
          </div>
          <h2 className="text-sm font-semibold">Select Fuel Type</h2>
        </div>
        <div>
          <RxCross1 onClick={onClose} />
        </div>
      </div>
      <div className="h-[30px] w-[350px] ring-1 flex p-2 mt-5  space-x-2  items-center">
        <div>
          <IoIosSearch />
        </div>
        <div>
        <input
            className="h-[30px] w-[318px] border-none focus:ring-0 focus:ring-opacity-0 outline-none placeholder:text-sm border-0 focus:outline-none"
            placeholder="Search FuelType"
            type="text"
          />
        </div>
      </div>
      {/* Company modal component */}
      <div className="w-[330px] h-[210px] bg-slate-400 mt-5 ml-4 overflow-hidden overflow-y-scroll">
        <ul>
          {fuelType.map((fuelType) => (
            <li key={fuelType} onClick={() => onSelectFuelType(fuelType)}>
              {fuelType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HomeCard = () => {
  const [company, setCompany] = useState("Manufacturer");
  const [carName, setCarName] = useState("Car Model");
  const [fuelType, setFuelType] = useState("FuelType");
  const [isCompanyModalOpen, setCompanyModalOpen] = useState(false);
  const [isCarModalOpen, setCarModalOpen] = useState(false);
  const [isFuelTypeModalOpen, setFuelTypeModalOpen] = useState(false);

  const openCompanyModal = () => {
    setCompanyModalOpen(true);
  };

  const openCarModal = () => {
    setCarModalOpen(true);
    setCompanyModalOpen(false);
  };

  const SlideCarPrevious = () => {
    setCarModalOpen(false);
    setCompanyModalOpen(true);
  };

  const SlideFuelPrevious = () => {
    setFuelTypeModalOpen(false);
    setCarModalOpen(true);
  };

  const openFuelTypeModal = () => {
    setFuelTypeModalOpen(true);
    setCarModalOpen(false);
  };

  const closeModal = () => {
    setCompanyModalOpen(false);
    setCarModalOpen(false);
    setFuelTypeModalOpen(false);
  };

  const handleSelectCompany = (selectedCompany, nextModalOpener) => {
    setCompany(selectedCompany);
    nextModalOpener();
  };

  const handleSelectCar = (selectedCar, nextModalOpener) => {
    setCarName(selectedCar);
    nextModalOpener();
  };

  const handleSelectFuelType = (selectedFuelType) => {
    setFuelType(selectedFuelType);
    closeModal();
  };

  const anyOpen = isCarModalOpen || isCompanyModalOpen || isFuelTypeModalOpen;

  return (
    <div className="flex justify-end mr-6 -mt-[450px]">
      <div className="Fixed-card  ">
        {!anyOpen && (
          <div className="w-[365px] h-[450px] bg-white  z-20  shadow-2xl  shadow-slate-800  p-2">
            {/* Card Headline */}
            <div className="text-3xl font-bold  w-[300px] mt-5  ml-8 box-border">
              Experience The Best Car Services In Greater Noida
            </div>

            <div className="ml-8  mt-4  text-gray-700">
              Get instant quotes for your car Service{" "}
            </div>

            <div className="space-y-5 mt-3 ml-8">
              <div className="Modal-select">
                <div
                  className="ring-1 outline-none ring-black w-[270px] h-10 flex justify-between  p-2 font-bold text-gray-700 items-center text-sm"
                  onClick={openCompanyModal}
                >
                  <div className="hover:scale-105 duration-200">
                    {company} {carName}, {fuelType}
                  </div>
                  <div>
                    <FaAngleDown />
                  </div>
                </div>
              </div>

              {/* Your existing JSX */}
              <input
                type="tel"
                maxLength={10}
                placeholder="ENTER MOBILE NUMBER"
                className=" ring-1 outline-none ring-black w-[270px] h-10 pl-3 hover:placeholder:scale-105 placeholder:duration-200  placeholder:tracking-wider placeholder:text-gray-600   "
              />
              <button className="bg-red-600 w-[270px] h-10 text-sm font-bold outline-none  text-white ">
                <div className="hover:scale-105 duration-200">
                  CHECK PRICES FOR FREE
                </div>
              </button>
            </div>

            <div className="flex gap-5 mt-5 ml-6">
              {/* 1st */}
              <div className=" space-x-3 ">
                <div className="ml-3">
                  <span className="text-2xl text-green-700 font-semibold">
                    &#9733;&nbsp;
                  </span>
                  <span className="text-2xl text-green-700 font-semibold ">
                    4.7/<span className="text-sm">5</span>
                  </span>
                </div>
                <div className="text-xs mt-1 text-gray-700">
                  Based on 100000+ <div className="text-center">Reviews</div>
                </div>
              </div>

              {/* 2nd */}
              <div className="h-16 w-[1px] bg-black"></div>

              {/* 3rd */}

              <div className="text-gray-700">
                <div className="text-xl font-semibold">2,50,000+</div>
                <div className="text-xs mt-1 text-center">
                  Happy <div className="text-center"> Customers</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          {/* Modals */}

          {anyOpen && (
            <div className="   w-[400px] h-[350px] bg-white text-black shadow-lg shadow-gray-950 ">
              {isCompanyModalOpen && (
                <CompanyModal
                  onClose={closeModal}
                  onSelectCompany={handleSelectCompany}
                  openCarModal={openCarModal}
                />
              )}
              {isCarModalOpen && (
                <CarModal
                  onClose={closeModal}
                  onSelectCar={handleSelectCar}
                  openFuelTypeModal={openFuelTypeModal}
                  selectedCompany={company}
                  Carprevious={SlideCarPrevious}
                />
              )}
              {isFuelTypeModalOpen && (
                <FuelTypeModal
                  onClose={closeModal}
                  onSelectFuelType={handleSelectFuelType}
                  Carcompany={company}
                  CarName={carName}
                  Fuelprevious={SlideFuelPrevious}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
