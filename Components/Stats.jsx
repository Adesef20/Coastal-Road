'use client';
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true }); 

  return (
    <section
      ref={ref}
      className="w-full bg-gray-200 shadow-lg rounded-2xl p-12"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-x divide-gray-500 text-center">
        <div className="px-4">
          <h2 className="text-5xl font-bold text-red-600">
            {inView && <CountUp end={2500} duration={5} />}+
          </h2>
          <p className="text-gray-700 mt-2">EMPLOYED STAFF</p>
        </div>

        <div className="px-4">
          <h2 className="text-5xl font-bold text-red-600">
            {inView && <CountUp end={400} duration={5} />}+
          </h2>
          <p className="text-gray-700 mt-2">PROJECT COMPLETED</p>
        </div>

        <div className="px-4">
          <h2 className="text-5xl font-bold text-red-600">
            {inView && <CountUp end={2345} duration={5} />}+
          </h2>
          <p className="text-gray-700 mt-2">KM OF ROADS CONSTRUCTED</p>
        </div>

        <div className="px-4">
          <h2 className="text-5xl font-bold text-red-600">
            {inView && <CountUp end={4} duration={5} />}+
          </h2>
          <p className="text-gray-700 mt-2">COUNTRY DOMICILED</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
