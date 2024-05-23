import Link from "next/link";

export default function Confirm(){
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center p-8 border border-white shadow-md shadow-white font-sans">
                <div className="mb-6">
                    <p>An email has been sent. Please click the link in the email to proceed with your account.</p>
                </div>
                <div>
                    <Link className="font-bold" href="/">Go to homepage &#x21A9;</Link>
                </div>
            </div>
        </div>
    )
}