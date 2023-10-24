import React from "react";
import Fortinet from "../images/about/fortinet.png";
import Lenovo from "../images/about/lenovo.png";
import Microsoft from "../images/about/microsoft.png";
import Symantec from "../images/about/symantec.png";
import Ubi from "../images/about/ubi.png";

export default function LogoCloud() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              The tools we use
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A curated selection of essential instruments and software that
              empower our operations and innovation.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              className="max-h-12 w-full object-contain object-left"
              src={Fortinet}
              alt="Fortinet"
              width={105}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src={Lenovo}
              alt="Lenovo"
              width={104}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src={Microsoft}
              alt="Microsoft"
              width={140}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src={Symantec}
              alt="Symantec"
              width={136}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-left"
              src={Ubi}
              alt="Ubiquity"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
