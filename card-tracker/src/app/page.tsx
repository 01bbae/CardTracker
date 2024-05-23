'use client'
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

type Props = {
  params: {},
  searchParams: { [key: string]: string | string[] | undefined },
}

export default function Home(){
//   const { asPath } = useRouter();

//   useEffect(() => {
//   const hash = (asPath as string).split("#")[1]; // error=unauthorized_client&error_code=401error_description=Something+went+wrong
//   const parsedHash = new URLSearchParams(hash);
//   const errorHash = parsedHash.get("error_description"); // Something went wrong
// }, []); // `asPath` omitted from dependencies as ESLint states it won't change

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 comfortaa-font">
      <h1 className="font-comfortaa text-6xl m-4 p-4">
        Card Tracker
      </h1>
      <h2 className="font-sans text-xl">
        Get personalized recommendations for your credit card strategy!
      </h2>
      <div className="flex flex-row items-center justify-center m-2 p-4 font-sans">
        <Link href="/register">
          <button className="btn-primary btn-transition">
            Join Now
          </button>
        </Link>
        <Link href="/login">
          <button className="btn-primary btn-transition">
            Log In
          </button>
        </Link>
      </div>
    </main>
  );
}
