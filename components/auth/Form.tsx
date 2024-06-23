"use client"
import React, { FormEvent, useState } from "react"

type InputProps = {
  name: string
  type: "text" | "email" | "password"
  placeholder?: string
}

type FormProps = {
  title: string
  inputFields: InputProps[]
}

export default function Form({ title, inputFields }: FormProps) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    rePassword: "",
  })

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const email = user.email
        const password = user.password


    }
  return (
    <section>
      <h2>{title}</h2>
      <form onSubmit={submitHandler}>
        {inputFields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            name={field.name}
                placeholder={field.placeholder}
                // onChange={}
          />
        ))}
        <button type="submit">{title}</button>
      </form>
    </section>
  )
}
