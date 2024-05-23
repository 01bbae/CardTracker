import Link from "next/link";
import Header from "../../header";
import { register } from "../../../../lib";
import { redirect } from "next/navigation";

export async function registerOnSubmit(formData: FormData) {
  "use server";
  await register(formData);
}

export default function Register() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-row p-16 m-4 font-sans">
        <div className="grow"></div>
        <div className="border p-32 rounded-lg shadow-lg shadow-white">
          <form
            className="flex flex-col items-center justify-center"
            action={registerOnSubmit}
          >
            <div className="flex flex-col m-2">
              <label>First Name</label>
              <input className="rounded-sm text-black" type="text" name="f_name"></input>
            </div>
            <div className="flex flex-col m-2">
              <label>Last Name</label>
              <input className="rounded-sm text-black" type="text" name="l_name"></input>
            </div>
            <div className="flex flex-col m-2">
              <label>Email</label>
              <input className="rounded-sm text-black" type="email" name="email"></input>
            </div>
            <div className="flex flex-col m-2">
              <label>Password</label>
              <input className="rounded-sm text-black" type="password" name="password"></input>
            </div>
            <input
              className="border border-white m-4 px-4 py-2 rounded-md btn-transition"
              type="submit"
              value="Register"
            ></input>
          </form>
          <div>
            Have an account already? Click{" "}
            <Link className="underline" href="/login">
              here
            </Link>
            .
          </div>
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
}
