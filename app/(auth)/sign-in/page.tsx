"use client"

import Form from "@/components/auth/Form"
import { FormEvent, useState } from "react"
import { FcGoogle } from "@/utils/index"
import { signIn, useSession } from "next-auth/react"

export default function SignIn() {
  const {data:session} = useSession()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    const { email, password } = user
  }
  return (
    <section className="section flex justify-center gap-4 flex-col items-center min-h-dvh">
      <h1>Recipe app</h1>
      <button onClick={()=>signIn("google")} className="max-w-[480px] w-full p-3  rounded-lg bg-white text-black">
        <span className="flex items-center justify-center gap-3">
          <FcGoogle size={24} /> Sign In with Google
        </span>
      </button>
      <div className="max-w-[480px] w-full">
        <p className="">OR</p>
      </div>
      <Form
        btnName="Sign in"
        inputFields={[
          {
            name: "email",
            type: "email",
            placeholder: "carlos@email.com",
            value: user.email,
            handleChange(e) {
              setUser({ ...user, email: e })
            },
          },
          {
            name: "password",
            type: "password",
            placeholder: "*********",
            value: user.password,
            handleChange(e) {
              setUser({ ...user, password: e })
            },
          },
        ]}
        submitHandler={submitHandler}
      />
    </section>
  )
}
