"use client";
import Link from "next/link";
import { useState } from "react";

import { BsList, BsPersonCircle, BsXLg } from "react-icons/bs";
import { LuClover } from "react-icons/lu";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => setMenu(!menu);

  const [dialog, setDialog] = useState<boolean>(false);
  const toggleDialog = () => setDialog(!dialog);

  const [side, setSide] = useState<boolean>(false);
  const toggleSide = () => setSide(!side);
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-full top-0 left-0  sticky">
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

            <button
              className="size-8 flex items-center justify-center invisible md:visible "
              onClick={toggleDialog}
            >
              <BsPersonCircle className="text-white text-2xl" />
            </button>
            <button
              className="size-8 flex items-center justify-center invisible md:visible "
              onClick={toggleSide}
            >
              <BsPersonCircle className="text-white text-2xl" />
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
      <div
        className={`h-screen absolute top-0 w-full z-10 transition-all duration-150 ${
          menu ? "" : "-translate-x-full "
        }`}
      >
        <section>
          <div className="bg-neutral-50 h-screen">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-1">
                <LuClover className="text-blue-600 text-xl " />
                <h1 className="text-blue-600 font-bold text-base">OniMeta</h1>
              </div>

              <button onClick={toggleMenu} type="button" className="px-2">
                <BsXLg className="font-bold" />
              </button>
            </div>
            <section className="p-4">
              <div className="w-full bg-neutral-200 p-4 space-y-4">
                <h3 className="text-center text-xl font-bold">Bem vindo</h3>
                <section className="flex flex-col items-center gap-4 ">
                  <input
                    type="text"
                    className="w-full p-2"
                    placeholder="Digite seu login "
                  />
                  <div className="relative w-full">
                    <input
                      type="password"
                      className="w-full p-2"
                      placeholder="digite sua senha"
                    />
                    <button type="button"></button>
                  </div>

                  <button
                    type="button"
                    className="bg-blue-500 p-2 w-full text-white font-bold"
                  >
                    Entrar
                  </button>
                  <Link href={""} className="text-sm">
                    Esqueceu sua senha?
                  </Link>
                  <Link href={""} className="text-sm">
                    Cria conta
                  </Link>
                </section>
                <></>
              </div>
              <ul className="space-y-2 invisible">
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/maismilionaria"}
                  >
                    +milionária
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/megasena"}
                  >
                    mega-sena
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/lotofacil"}
                  >
                    lotofácil
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/quina"}
                  >
                    quina
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"lotomania"}
                  >
                    lotomania
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/timemania"}
                  >
                    timemania
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/duplasena"}
                  >
                    dupla sena
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/federal"}
                  >
                    federal
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/diasorte"}
                  >
                    dia de sorte
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-sans font-semibold"
                    href={"/supersete"}
                  >
                    super sete
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>

      <div
        className={`absolute top-0 left-0 flex items-center justify-center w-full h-screen z-10 bg-black/25 ${
          dialog ? "block" : "hidden"
        }`}
      >
        <div onClick={toggleDialog} className="text-2xl font-bold p-9 bg-white">
          vai la
        </div>
      </div>
      <div
        className={`z-10 absolute top-0 left-0 w-full h-screen bg-white transition-all duration-200  ${
          side ? "" : "-translate-x-full "
        }`}
        onClick={toggleSide}
      >
        modal
        <div className="bg-red-500 p-8"></div>
      </div>
    </>
  );
}
