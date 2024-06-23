"use client"

import Form from "@/components/auth/Form"
import React, { FormEvent, useState } from "react"

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    name:"",
    password: "",
    rePassword: "",
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section>
      <Form
        title="Sign un"
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
            },
          },
        ]}
        submitHandler={submitHandler}
      />
    </section>
  )
}
