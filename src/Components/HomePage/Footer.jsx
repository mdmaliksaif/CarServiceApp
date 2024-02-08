import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsappSquare,
  FaYoutube,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-[1064px] w-full mt-auto  ">
      {/* 1st part (70% height) */}
      <div className="h-[750px] w-full bg-blue-950">
        {/* Flex DIV */}
        <div className="flex text-white justify-around pt-20  ">
          {/* Column 1 */}
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold mb-10 cursor-pointer">ABOUT US</h2>
            </div>
            <div  className="hover:scale-105 duration-150 hover:text-gray-400" >
              <a href="#faqs" >FAQs</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#contact-us" >Contact Us</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#careers" >Careers</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#terms-and-conditions" >Terms and Conditions</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#privacy-policy" >Privacy Policy</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#car-service-partner" >Car Service Partner</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#workshop-locater" >Workshop Locater</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#offers" >Offers</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#reviews" >Reviews</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#directory" >Directory</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold mb-10 cursor-pointer">OUR SERVICES</h2>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#scheduled-services" >Scheduled Services</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#ac-services" >AC Services</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#cleaning-and-detailing" >Cleaning and Detailing</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#lights-and-fitments" >Lights & Fitments</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#denting-painting" >Denting Painting</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#insurance-services" >Insurance Services</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#custom-repair" >Custom Repair</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#batteries" >Batteries</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#tyres" >Tyres</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#detailing-services" >Detailing Services</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#windshields-and-glass" >Windshields & Glass</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold mb-10 cursor-pointer">LUXURY BRANDS</h2>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#mercedes" >Mercedes</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400">
              <a href="#bmw" >BMW</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400" >
              <a href="#audi" >Audi</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#volvo" >Volvo</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#mitsubishi" >Mitsubishi</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#jaguar" >Jaguar</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#porsche" >Porsche</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#rolls-royce" >Rolls Royce</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#ferrari" >Ferrari</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#land-rover" >Land Rover</a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold mb-10 cursor-pointer">POPULAR BRANDS</h2>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#maruti-suzuki" >Maruti Suzuki</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#hyundai" >Hyundai</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#honda" >Honda</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#toyota" >Toyota</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400" >
              <a href="#tata" >Tata</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#mahindra" >Mahindra</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#cheverolet" >Cheverolet</a> 
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400" >
              <a href="#fiat" >Fiat</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#renault" >Renault</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400" >
              <a href="#kia" >Kia</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#skoda" >Skoda</a>
            </div>
            <div className="hover:scale-105 duration-150 hover:text-gray-400"> 
              <a href="#volkswagen" >Volkswagen</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part (30% height) */}
      <div className="h-[314px] w-full bg-gray-900">
        {/* Flex Div */}
        <div className="flex text-white justify-around p-16 ">
          {/* Column 1 */}
          <div className="space-y-5">
            <div>F-212 DLF NEW TOWN HEIGHTS,</div>
            <div>SECTOR 91,Garhi Harsaru ,Gurugram,Haryana,122505</div>
            <div className="flex space-x-6 text-3xl">
              <div>
                <FaFacebookF className="hover:scale-110 duration-150" />
              </div>
              <div>
                <FaTwitter className="hover:scale-110 duration-150" />
              </div>
              <div>
                <FaSquareInstagram className="hover:scale-110 duration-150" />
              </div>
              <div>
                <FaWhatsappSquare className="hover:scale-110 duration-150" />
              </div>
              <div>
                <FaYoutube className="hover:scale-110 duration-150" />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <div>
                <IoMdMail />
              </div>
              <div>Email</div>
            </div>

            <div className="flex items-center space-x-2">
              <div>
                <FaPhoneAlt />
              </div>
              <div>Phone Number</div>
            </div>

            <div className="flex items-center space-x-2">
              <div>
                <FaCalendarAlt />
              </div>
              <div>Working Days</div>
            </div>

            <div className="flex items-center space-x-2">
              <div>
                <FaClock />
              </div>
              <div>Working Hours</div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-5">
            <div>Info@goMechanic.in</div>
            <div>9388893888</div>
            <div>Monday - Sunday</div>
            <div>7:00AM - 9:00PM(IST)</div>
          </div>

          {/* Column 4 */}
          <div className="space-y-5">
            <div>
              <img src="/images/gplink.png" alt="" />
            </div>
            <div>
              <img src="/images/aslink.png" alt="" />
            </div>
          </div>


        </div>
{/* last line */}
<div className=" flex justify-center ">
  <div className="text-white ">©  2016-2024 Service Easy Technology Private Limited</div>
</div>
      </div>
    </div>
  );
};

export default Footer;
