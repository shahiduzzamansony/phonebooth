import React from "react";
import Image from "next/image";
import logo from "../assets/apple_logo_black.svg_.png";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const session = false;
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-[#E7ECEE] p-3">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-14 opacity-75 transition cursor-pointer hover:opacity-100">
            <Image src={logo} alt="logo" fill objectFit="contain"></Image>
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Products</a>
        <a className="headerLink">Brands</a>
        <a className="headerLink">Dashboard</a>
        <a className="headerLink">About Us</a>
      </div>
      <div className="flex justify-center items-center space-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full text-white bg-gradient-to-br from-pink-400 to-red-600">
              5
            </span>
            <ShoppingCartIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={logo}
            alt="logo"
            width={34}
            height={34}
            className="cursor-pointer rounded-full"
          ></Image>
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  );
}

export default Header;
