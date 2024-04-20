import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import Workflow from "./Workflow";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="min-h-screen w-full  font-poppins bg-[#121212] ">
      <Navbar></Navbar>
      <Hero></Hero>
      <FeatureSection></FeatureSection>
      <Workflow></Workflow>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Footer></Footer>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
