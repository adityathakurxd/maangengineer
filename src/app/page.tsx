"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex flex-row justify-between">
        <h1 className="text-2xl pl-5">MAANG Engineer</h1>
        <button
          className="
            bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          onClick={() => window.open("https://maangengineer.web.app/#/")}
        >
          Get started
        </button>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-around p-24">
        <div className="flex content-start flex-wrap bg-gray-200">
          <h1 className="text-2xl">
            MAANG Engineer is a work-like learning experience to upskill as an
            engineer.
          </h1>
        </div>
        <div></div>
      </main>
    </>
  );
}
