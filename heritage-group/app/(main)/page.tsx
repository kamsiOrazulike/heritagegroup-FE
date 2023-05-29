import { AiOutlineArrowDown } from "react-icons/ai";

const Section = () => {
  return (
    <>
      <div className="flex flex-row w-full mx-auto mt-[-28px] pb-12 bg-black/30">
        {/* <!-- Section: Design Block --> */}
        <section className="w-[100%] text-gray-800 text-center md:text-left">
          <div className="block shadow-lg bg-gray-200">
            <div className="flex flex-wrap items-center">
              <div className="bg-yellow-500 grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
                <div className="px-6 py-32 md:px-12">
                  <h2 className="text-3xl font-bold">
                    <span className="text-gray-900">
                      What do we have to offer?
                    </span>
                  </h2>
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full md:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-gray-900">
                      Integrated Construction
                    </span>
                  </h2>
                  <p className="text-gray-700 mb-6 pb-2">
                    We deliver stellar civil construction projects in housing,
                    roads and facility infrastructure. Our project consultants
                    are some of the best in their field locally. This ensures
                    that we deliver on our promise to deliver versatile services
                    valued at home and abroad.
                  </p>
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className="bg-contour bg-gray-500 bg-fixed bg-center bg-cover bg-no-repeat text-gray-100 w-full relative">
      <div className="bg-black/30 px-12 py-64 mx-auto">
        <div className="w-[90%] md:w-[50%] flex flex-col justify-start">
          <h1 className="text-5xl text-left md:text-6xl font-bold mb-1 transition-all ease-in duration-150">
            Rainbow Heritage Group
          </h1>
          <h2 className="text-md md:text-xl mx-2 rounded-full text-left font-semibold mb-2 text-white/70 transition-all ease-in duration-150">
            A Legacy of <span className="text-white">Excellence</span> and{" "}
            <span className="text-white">Efficiency</span>.
          </h2>
        </div>
        <img
          src="https://www.rainbowheritage.com.ng/wp-content/uploads/2021/09/Exterior-5-scaled.jpg"
          alt="Fixed Image"
          className="md:absolute top-[20%] right-0 h-half w-[90%] md:w-[40%] rounded-l-lg shadow-lg" 
        />
      </div>

      <Section />
    </div>
  );
}
