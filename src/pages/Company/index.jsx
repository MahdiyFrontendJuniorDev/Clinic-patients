import React from "react";
import ReactCarousel from "../../components/carousel";
import Layout from "../../components/Layout/index";
import "./company.css";
function Company() {
  return (
    <Layout>
      <section className="companyBg ">
        <div className="max-w-6xl mx-auto space-y-8 text-white pt-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl font-semibold text-center">
              Meet the team
            </h1>
            <p className="text-center text-xl">
              We've assembled a world-class team with strong technical
              expertise, decades of industry experience, unwavering commitment
              to client success and a unified vision to transform digital
              healthcare.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-2xl  lg:max-w-6xl mx-auto">
        <h1 className=" text-4xl lg:text-5xl text-center font-semibold pt-6 pb-6">
          Our Story
        </h1>
        <div className=" max-w-2xl lg:max-w-4xl text-gray-800 mx-auto space-y-4">
          <p className="font-serif text-md lg:text-lg text-center p-2">
            Doctor.com was founded in 2012 with the mission of helping
            healthcare organizations deliver a better customer experience at
            every step of the digital patient journey. Healthcare practitioners
            today struggle to thrive in an increasingly digital and
            consumer-driven world, lacking expertise or effective solutions.
            And, as patients, the care-seeking experience is often frustrating
            and arduous. By introducing a “customer experience” mindset to
            organizations — one that is value-based, modern, and efficient — we
            can help evolve the healthcare industry.
          </p>
          <p className="font-serif text-md lg:text-lg text-center p-2">
            We built our technology from the ground up to function as a holistic
            and robust customer experience platform — not another point
            solution. Today, we have the only offering in the industry that
            seamlessly integrates web-wide listings management, reputation
            insights, universal online scheduling, patient communications,
            provider data warehousing, and telemedicine. These services are
            enhanced by 50+ integrations with the most prominent healthcare
            directories, search engines, social media platforms, and EHR/PM
            systems. As a result, thousands of healthcare organizations of all
            sizes have been empowered by the Doctor.com platform to enhance
            their digital presence and credibility, increase patient trust, and
            grow their business.
          </p>
          <p className="font-serif text-md lg:text-lg text-center p-2">
            We built our technology from the ground up to function as a holistic
            and robust customer experience platform — not another point
            solution. Today, we have the only offering in the industry that
            seamlessly integrates web-wide listings management, reputation
            insights, universal online scheduling, patient communications,
            provider data warehousing, and telemedicine. These services are
            enhanced by 50+ integrations with the most prominent healthcare
            directories, search engines, social media platforms, and EHR/PM
            systems. As a result, thousands of healthcare organizations of all
            sizes have been empowered by the Doctor.com platform to enhance
            their digital presence and credibility, increase patient trust, and
            grow their business.
          </p>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto space-y-6 pt-6 pb-6">
          <h1 className="text-5xl font-semibold text-center">Meet the Team</h1>
        </div>
      </section>
      <section className="card-bg p-12">
        <ReactCarousel />
      </section>
      <div className="WorkBg w-full lg:h-48 lg:pt-12">
        <div className="flex justify-between items-center max-w-4xl mx-auto p-4">
          <h1 className="text-lg lg:text-2xl font-semibold font-serif">
            Want to work with us?
          </h1>
          <a
            className="border border-black lg:px-6 lg:py-4 font-semibold font-serif"
            href="#"
          >
            WE'RE HIRING
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Company;
