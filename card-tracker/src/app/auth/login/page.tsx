import Link from "next/link";
import Header from "../../header";
import { login } from "../../../../lib";

export async function loginOnSubmit(formData: FormData) {
  "use server";
  await login(formData);
}

export default function Login() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-row p-16 m-4 font-sans">
        <div className="grow"></div>
        <div className="border p-32 rounded-lg shadow-lg shadow-white">
          <form
            className="flex flex-col items-center justify-center"
            action={loginOnSubmit}
          >
            <div className="flex flex-col m-2">
              <label>Email</label>
              <input
                className="rounded-sm text-black"
                type="text"
                name="email"
              ></input>
            </div>
            <div className="flex flex-col m-2">
              <label>Password</label>
              <input
                className="rounded-sm text-black"
                type="password"
                name="password"
              ></input>
            </div>
            <input
              className="border border-white m-4 px-4 py-2 rounded-md btn-transition"
              type="submit"
              value="Log In"
            ></input>
          </form>
          <div>
            Don't have an account? Click{" "}
            <Link className="underline" href="/register">
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
