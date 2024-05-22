import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation'

export async function getStaticProps(){
  const params = new URLSearchParams(window.location.hash.slice())

  if (params.get('error_code').startsWith('4')) {
    // show error message if error is a 4xx error
    window.alert(params.get('error_description'))
  }
}


export default function Home() {


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
