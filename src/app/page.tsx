import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h1>MAANG Engineer</h1>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-around p-24">
        <div className="flex content-start flex-wrap bg-gray-200">
          <h1>
            MAANG Engineer is a work-like learning experience to upskill as an
            engineer.
          </h1>
        </div>
        <div>
          <button
            className="
            bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Get started
          </button>
        </div>
      </main>
    </>
  );
}
