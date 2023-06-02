import { Searchbar } from "./components/Searchbar";
import {
  SectionManifesto,
  SectionHomes,
  SectionOther,
} from "./components/Sections";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Home() {
  return (
    <div className="bg-rce-shot-2 bg-gray-500 bg-fixed bg-top bg-cover bg-no-repeat text-gray-100 w-full relative">
      <div className="flex flex-col justify-center items-center bg-black/60 px-20 py-64 mx-auto">
        <div className="mx-auto w-[80%]">
          <h1 className="text-5xl text-center md:text-6xl font-bold mb-1 transition-all ease-in duration-150">
            Rainbow Heritage Group
          </h1>
          <h2 className="text-md md:text-xl mx-2 rounded-full text-center font-semibold mb-2 text-white/70 transition-all ease-in duration-150">
            A Legacy of <span className="text-white">Excellence</span> and{" "}
            <span className="text-white">Efficiency</span>.
          </h2>
        </div>
        <div className="w-full mt-4 px-4 py-4">
          <Searchbar />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <SectionHomes />
        <SectionManifesto />
        <SectionOther />
      </div>
    </div>
  );
}
