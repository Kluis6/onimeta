"use client";
import Link from "next/link";
import { useState } from "react";

import { BsList } from "react-icons/bs";
import { LuClover } from "react-icons/lu";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => setMenu(!menu);
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-full top-0  sticky">
        <div className="px-4 md:px-0 py-2 flex items-center justify-between container mx-auto">
          <div className=" flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <LuClover className="text-white text-xl b" />
              <Link href={"/"}>
                <h1 className="text-white font-medium text-base">OniMeta</h1>
              </Link>
            </div>
          </div>
          <nav className="flex">
            <button
              className="size-8 flex items-center justify-center md:invisible"
              onClick={toggleMenu}
            >
              <BsList className="text-white text-2xl" />
            </button>

            {/* <ul className="flex gap-2">
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/maismilionaria"}
              >
                +milionária
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/megasena"}
              >
                mega-sena
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white decoration-1 hover:underline transition-all  underline-offset-2"
                href={"/lotofacil"}
              >
                lotofácil
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/quina"}
              >
                quina
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"lotomania"}
              >
                lotomania
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/timemania"}
              >
                timemania
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/duplasena"}
              >
                dupla sena
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/federal"}
              >
                federal
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/diasorte"}
              >
                dia de sorte
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-base font-sans font-semibold hover:decoration-white hover:underline decoration-1 transition-all  underline-offset-2"
                href={"/supersete"}
              >
                super sete
              </Link>
            </li>
          </ul> */}
          </nav>
        </div>
      </div>
      <div className={`bg-white shadow-md  h-screen absolute top-0 z-10 transition-all duration-150 ${menu === false ? "invisible w-[0vw] opacity-40":"visible w-[85vw]"}`}></div>
    </>
  );
}
