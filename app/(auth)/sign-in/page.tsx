"use client"

import Form from "@/components/auth/Form"
import { FormEvent, useState } from "react"

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    const email = user.email
    const password = user.password
  }
  return (
    <section className="section">
      <Form
        title="Sign in"
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
