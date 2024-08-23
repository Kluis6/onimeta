import { BsBarChartLine } from "react-icons/bs";


export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-screen">
      <div className=" px-4 py-2">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-2">
          <BsBarChartLine className="text-white" />
          <h1 className="text-white font-bold text-base">Meta Analytics</h1>
          </div>
          
        </div>{" "}
        <nav></nav>
      </div>
    </div>
  );
}
