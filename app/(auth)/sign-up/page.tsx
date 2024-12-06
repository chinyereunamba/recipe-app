"use client"

import Form from "@/components/auth/Form"
import React, { FormEvent, useState } from "react"
import { FcGoogle } from "@/utils"

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    rePassword: "",
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    const { email, name, password } = user
    const data = {
      email: email,
      username: name,
      password: password,
    }
  }

  return (
    <section className="section flex justify-center gap-4 flex-col items-center min-h-dvh">
      <h1>Recipe app</h1>
      <button
        onClick={() => {}}
        className="max-w-[480px] w-full p-3 rounded-lg bg-white text-black"
      >
        <span className="flex items-center justify-center gap-3">
          <FcGoogle size={24} /> Sign up with Google
        </span>
      </button>
      <div className="max-w-[480px] w-full my-3">
        <p className="relative before:h-1/2 before:w-2 before:bg-black">OR</p>
      </div>
      <Form
        btnName="Sign up"
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
            name: "Name",
            type: "text",
            placeholder: "John Doe",
            value: user.name,
            handleChange(e) {
              setUser({ ...user, name: e })
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
          {
            name: "rePassword",
            type: "password",
            placeholder: "*********",
            value: user.rePassword,
            handleChange(e) {
              setUser({ ...user, rePassword: e })
              const checkPassword = ""
            },
          },
        ]}
        submitHandler={submitHandler}
        disabledFnc={
          !user.email || !user.password || !user.rePassword || !user.name
        }
      />
    </section>
  )
}
