import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";
import HomeCard from "./HomeCard";
import AntdTable from "./Table/AntdTable";
import WhyChooseS2 from "./WhyChooseS2";
import { CompanyCarousel } from "./CompanyCarousel";
import HomeAccordian from "./HomeAccordian";
import DownloadS2 from "./DownloadS2";
import CustomCuratedService from "./CustomCuratedService";
import ChooseWorkshop from "./ChooseWorkshop";
import CarService from "./CarService";
import NewYearDeals from "./NewYearDeals";
import HowS2Works from "./HowS2Works";
import ExtraService from "./ExtraService";
import ReviewsRating from "./ReviewsRating";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const scrollX = window.scrollY || document.documentElement.scrollLeft;
    const sectionWidth = 770; // Adjust this value based on your section width
    const currentSection = Math.round(scrollY / sectionWidth);
    setActiveSection(currentSection);
  };

  useEffect(() => {
    const handleActiveSectionScroll = () => {
      if (sectionRef.current) {
        const contentWidth = sectionRef.current.scrollWidth;
        const sectionWidth = sectionRef.current.firstChild.offsetWidth; // Get the width of the first section
        const scrollPosition = activeSection * sectionWidth-80; // Calculate the scroll position based on section width
        sectionRef.current.scrollTo({
          behavior: "smooth",
          left: scrollPosition,
        });
      }
    };

    handleActiveSectionScroll(); // On initial render
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSectionScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSectionScroll);
    };
  }, [activeSection, sectionRef]);

  const sections = [
    "Our Services",
    "Curated Custom Service",
    "Monsoon Mist",
    "How S2Mechanic Works?",
    "Raitings & Reviews",
    "Frequently Asked Question",
    "Download App",
    "S2Mechanic Service Guide",
    "Price List",
  ];

  return (
    <div>
      <div className="relative">
      <div className="sticky top-36  ">
        <HomeCard />
</div>
        <Header />
        
        <div>
          {/* Scroll-x direction */}
          <div className="w-[850px] h-[60px] mt-5 bg-slate-100 ml-10 flex justify-between items-center sticky top-0 z-50">
            <div>
              <FaChevronLeft />
            </div>
            <div
              id="x"
              ref={sectionRef}
              className="w-[800px] h-[60px] bg-slate-100 pl-8   text-black flex overflow-hidden overflow-x-scroll gap-14 whitespace-nowrap items-center p-2"
            >
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={index + 1 === activeSection ? "active-section" : ""}
                >
                  {section}
                </div>
              ))}
            </div>
            <div>
              <FaChevronRight />
            </div>
          </div>

          {/* Other components */}
          <CarService />
          <ExtraService />
          <CustomCuratedService />
          <NewYearDeals />
          <ChooseWorkshop />
          <HowS2Works />
          <ReviewsRating />
          <HomeAccordian />
          <DownloadS2 />
          <CompanyCarousel />
          <WhyChooseS2 />
          <AntdTable />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
