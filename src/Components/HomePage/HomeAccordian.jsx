import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function HomeAccordion() {
  return (

<div>
<div className='w-28 h-[2px] bg-red-500 ml-10 mt-5'></div>

    <div className='text-3xl font-bold mb-5 mt-5 ml-10 -tracking-wide '><h1>Common Car Service Questions In  Noida</h1></div>
    <div className='w-[800px] ml-10 mt-10'>
      <Accordion preExpanded={['a']}>
        <AccordionItem uuid="a">
          <AccordionItemHeading>
            <AccordionItemButton >
            What sort of car services does GoMechanic offers in Noida?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            At all the GoMechanic workshops in Noida, we ensure that we are capable of satisfying every car service need of yours. We offer a wide array of car services from car repair, denting/painting, car tyres replacement, and many more incomparable services to choose from.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="b">
          <AccordionItemHeading>
            <AccordionItemButton>
            Why should I prefer the GoMechanic in Noida for resolving my car servicing problems?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            The GoMechanic has a team of experts and the diverse scope of services that are offered at such a low price, making us more profound in offering your car the best service it deserves. Moreover, up to 40% savings are a great add-on to your cart.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="c">
          <AccordionItemHeading>
            <AccordionItemButton>
            What makes the GoMechanic different from other car service centres in Noida?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            We serve you with top of the line experience, as our services are much convenient, affordable, and reliable. At GoMechanic workshops in Noida, we have trained staff that services your car using 100% genuine spare parts and products to deliver a service that you admire.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="d">
          <AccordionItemHeading>
            <AccordionItemButton>
            Does the GoMechanic in Noida offer a warranty for car services and repairs?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            Indeed, on all the car repairs and services from the GoMechanic, we offer our customers with an assured 1000kms/1-month warranty. On the off chance if you feel your car isn’t functioning appropriately, don’t hesitate to get in touch with us. 
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="e">
          <AccordionItemHeading>
            <AccordionItemButton>
            How can I schedule a service appointment with the GoMechanic in Noida?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            It is quite easier and simple to book a car service appointment with the GoMechanic in Noida. All you have to do is just select your car brand and model while choosing the desired service you want from our website or application. It is as simple as that! Or for a more humane experience, you can call or WhatsApp us on 93888 93888.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="f">
          <AccordionItemHeading>
            <AccordionItemButton>
            Which quality of spare parts are installed by Gomechanic, Noida?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            The GoMechanic is established on the basic idea of quality and credibility. Henceforth, in our every workshop in Noida, your car will be serviced remarkably while installing 100% genuine OEM/OES spare parts with a warranty to ensure that no problem arises in the near future.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>



</div>

  );
}
