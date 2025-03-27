
import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import TestimonialCarousel from "@/components/Testimonial";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <About/>
      <WorkExperience/>
      <TestimonialCarousel/>
      <Contact/>
      <Footer/>
    </div>
  );
}
