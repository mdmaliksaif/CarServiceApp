import React from "react";

const HowS2Works = () => {
  const gm_works_Data = [
    {
      step: "1",
      title: "Select The Perfect Car Service",
      discription: "From GoMechanic's broad portfolio of services",
      img: "/images/h1.png",
    },
    {
      step: "2",
      title: "Schedule Free Doorstep Pick-up",
      discription: "We offer free pick up and drop for all services booked",
      img: "/images/h2.png",
    },
    {
      step: "3",
      title: "Track Your Car Service Real-Time",
      discription: "We will take care of everything from here!",
      img: "/images/h3.png",
    },
    {
      step: "4",
      title: "Earn While We Service",
      discription: "Spread the word! You get Rs.750. Your friends get Rs.750!",
      img: "/images/h4.png",
    },
  ];

  return (
    <div className="ml-14  space-y-5 m-2 my-5 cursor-pointer ">
      <div className="h-[2px] w-28 bg-[#E73C05]"></div>
      <h2 className="font-bold text-3xl">How GoMechanic works?</h2>
      <div className="pt-5  w-[850px]">
        {gm_works_Data.map((item, key) => (
          <div className="h-24 grid grid-cols-3 " key={key}>
            <div>
              <div className=" w-10 text-center  py-2 font-bold text-xl bg-[#f1f1f1]">
                {item.step}
              </div>
              {item.step != gm_works_Data.length ? (
                <div className="w-0.5 ml-5 h-16 bg-[#f1f1f1]"></div>
              ) : (
                ""
              )}
            </div>
            <div className="-ml-52">
              <div className="font-bold text-xl">{item.title}</div>
              <div className="text-sm text-[#4a4a4a] mt-4">
                {item.discription}
              </div>
            </div>
            <div>
              <img className=" h-28 -mt-5   " src={item.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowS2Works;
