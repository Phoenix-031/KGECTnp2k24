import Image from "next/image";
import Link from "next/link";
import React from "react";
import 'tailwindcss/tailwind.css';

function Footer() {
  return (
    <footer className="text-white-100 bg-[#0C84AA] h-28 w-screen">
      <div className=" container mx-2 mr-0 text-white flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center  uppercase text-gray-100"
        >
          <Image alt="Navbar Logo" src={"/kgec.svg"} width={60} height={60} />
          <p className="leading-5 text-xl mx-2"></p>
        </Link>
        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
        © TnP cell, Kalyani Government Engineering College
        </p>
        <a href="https://www.linkedin.com/company/tnpkgec/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
      <Image
        className="justify-self-end "
        alt="LinkedIn Profile"
        src="/linkedin.svg"
        width={40}
        height={40}
      />
    </a>
      </div>
    </footer>
  );
}

export default Footer;