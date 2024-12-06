"use client"
import Form from "@/components/auth/Form"
import React, { FormEvent, useState } from "react"
import { sendPasswordResetEmail } from "firebase/auth"
import {auth} from '@/services/firebase'
import { useRouter } from "next/navigation"

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("")
  const router = useRouter()

  const submitHandler = () => {
    sendPasswordResetEmail(auth, email)
      .then()
      .catch((error) => console.log(error))
    router.push("/new-password")
  }
  return (
    <section className="section">
      <h1>Forgot Password</h1>
      <Form
        btnName="Send forgot password email"
        inputFields={[
          {
            name: "email",
            type: "email",
            placeholder: "carlos@gmail.com",
            value: email,
            handleChange(e) {
              setEmail(e)
            },
          },
        ]}
        submitHandler={submitHandler}
        // disabledFnc={!email}
      />
    </section>
  )
}
