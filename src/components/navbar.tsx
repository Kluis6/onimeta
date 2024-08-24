import Link from "next/link";
import { BsBarChartLine } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-full">
      <div className=" px-4 py-2 flex items-center justify-between">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BsBarChartLine className="text-white" />
            <Link href={"/"}>
              <h1 className="text-white font-bold text-base">OniMeta</h1>
            </Link>
          </div>
        </div>
        <nav>
          <ul className="flex gap-2">
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
          </ul>
        </nav>
      </div>
    </div>
  );
}
