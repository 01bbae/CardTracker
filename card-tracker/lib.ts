import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "./utils/supabase/server"
import { isAuthWeakPasswordError } from "@supabase/supabase-js"
import { create } from "domain"


export async function register(formData: FormData) {
    // add email confirmation logic
    // encrypt user password
    // add to database
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        first_name: formData.get('f_name') as string,
        last_name: formData.get('l_name') as string,
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        if (isAuthWeakPasswordError(error)) {
            for(let reason in error.reasons){
                console.log(reason);

                //TODO: implement a more robust error handling system
            }
        }
        console.log(error)
        redirect('/error')
    }
    // const { } = await supabase.from("Users").insert(data)
    revalidatePath('/', 'layout')
    redirect('/register/confirm')
}

export async function login(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        console.log(error);
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}