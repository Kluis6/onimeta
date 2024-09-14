"use client";

import { useEffect, useState } from "react";
import { Bs0Circle } from "react-icons/bs";

export default function Tabs() {
  // const useDeviceType = () => {
  //     const [isMobile, setIsMobile] = useState<boolean | null>(null);

  //     useEffect(() => {
  //       const userAgent = typeof window === 'undefined' ? '' : navigator.userAgent;
  //       const isMobileDevice = /Mobi|Android/i.test(userAgent);
  //       setIsMobile(isMobileDevice);
  //     }, []);

  //     return { isMobile };
  //   };

  //   const { isMobile } = useDeviceType();
  const [tab, setTab] = useState<Number>(0);

  return (
    <div className="w-full">
      <section className="flex justify-items-center items-center">
        <button
          className={`flex items-center justify-center w-full py-1.5 font-bold transition-all  ${
            tab === 0 ? "bg-blue-500 text-white" : "bg-blue-200 text-blue-950"
          }`}
          type="button"
          onClick={() => setTab(0)}
        >
          <span className="md:block block">resultados </span>
          {/* <Bs0Circle className="md:hidden block " /> */}
        </button>
        <button
          className={`flex items-center justify-center w-full py-1.5 font-bold transition-all  ${
            tab === 1 ? "bg-blue-500 text-white " : "bg-blue-200 text-blue-950"
          }`}
          type="button"
          onClick={() => setTab(1)}
        >
          Método 1
        </button>
        <button
          className={`flex items-center justify-center w-full py-1.5 font-bold transition-all  ${
            tab === 2 ? "bg-blue-500 text-white " : "bg-blue-200 text-blue-950"
          }`}
          type="button"
          onClick={() => setTab(2)}
        >
          Método 2
        </button>
        <button
          className={`flex items-center justify-center w-full py-1.5 font-bold transition-all  ${
            tab === 3 ? "bg-blue-500 text-white " : "bg-blue-200 text-blue-950"
          }`}
          type="button"
          onClick={() => setTab(3)}
        >
          Método 3
        </button>
      </section>
      <div className="w-full h-full bg-gray-100 p-4">
        {tab === 0 && <div>1</div>}
        {tab === 1 && <div>2</div>}
        {tab === 2 && <div>3</div>}
        {tab === 3 && <div>4</div>}
      </div>
    </div>
  );
}
