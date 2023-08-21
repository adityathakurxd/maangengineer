"use client";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <video controls muted>
            <source
              src="https://user-images.githubusercontent.com/53579386/261816229-593c267e-538c-47d5-905a-f332d7fac382.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Step into the shoes of a
            <br />
            MAANG Engineer
          </h1>
          <p className="mb-8 leading-relaxed">
            Learn data structures and algorithms through a practical approach.
            AI provides you feedback + suggestions on your approach to solving a
            real-world challenge.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => window.open("https://maangengineer.web.app/#/")}
            >
              Start Today
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
