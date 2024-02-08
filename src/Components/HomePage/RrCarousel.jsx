import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReviewCard from './ReviewCard';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
};

const reviewData = [
    {
      key: "1",
      title:'Trust and Relaibility',
      content: "I just got my car serviced from GoMechanic and had a great experience. Thank you, Sameer, for making the exploration and decision making process easy. My car has been serviced across Noida in the past but never from a person and company that pays so much attention to the little things - from the detailing of the car to well-functioning.",
      image: "/images/facebook.png",
      source:'facebook',
      author: "Saif Malik",
      workshopName: "S2Mechanic-Sector 18, Noida",
    },
    {
      key: "2",
      title:'Totally Satisfied',
      content: "Wonderful service by GoMechanic workshop in Noida. Authorized dealers just charge us more for the same service. Affordable and top quality car service. Cannot thank or recommend them enough, fantastic service.",
      image: "/images/google.png",
      source:'google',
      author: "Sachin Gwala",
      workshopName: "S2Mechanic-Sector 62, Noida",
    },
    {
      key: "3",
      title:'Very Effective',
      content: "GoMechanic in Noida is really helpful for me. visiting the workshop. I'm so pleased to use their free pick-up and drop-in service. Sumit Kumar really did a great job. He discussed with me all the details about my car servicing and repairs that were needed. They also delivered my car in just about 3-4 hours. Great services!",
      image: "/images/twitter.png",
      source:'twitter',
      author: "Gaurav Agrawal",
      workshopName: "S2Mechanic-Botanical Garden, Noida",
    },
    {
      key: "4",
      title:'Best Service Till Date',
      content: "I really recommend GoMechanic in Noida, because of the quality of services they offer. I used their comprehensive car service. Their services always comes with quality assurance. These guys have always been helpful and supportive to me!",
      image: "/images/google.png",
      source:'google',
      author: "Ashish Kumar",
      workshopName: "S2Mechanic-Sector 62, Noida",
    },
    {
      key: "5",
      title:'OutSpacing Staff',
      content: "I live in Noida where it is very difficult to find good service centres for my car. I tried GoMechanic once for the car’s service and I am really impressed by the quality of service. I loved the service.",
      image: "/images/twitter.png",
      source:'twitter',
      author: "Abhash Bhatt",
      workshopName: "S2Mechanic-Pari Chowk, Noida",
    },
    {
        key: "6",
        title:'Quality service',
        content: "A great car servicing experience I received today! I booked an appointment with the GoMechaninc in Noida for a regular car servicing. Well, they did a great job with their comprehensive service, my car is well-cleaned and polished, there were various services they performed while replacing with original parts. I’ll surely visit them again.",
        image: "/images/facebook.png",
        source:'facebook',
        author: "Faizan",
        workshopName: "S2Mechanic-Sector 16, Noida",
      },
    
  ];


  const items =reviewData.map((review) => (
    <ReviewCard
      key={review.key} // Ensure each card has a unique key
      title={review.title}
      content={review.content}
      image={review.image}
      source={review.source}
      author={review.author}
      workshopName={review.workshopName}
    />
  ))



export const RrCarousel = () => (

<div className='w-[840px] mt-5 ml-5 pt-5 h-[500px]  '>
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={4000}
    />

</div>


);