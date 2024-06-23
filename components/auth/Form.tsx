import { FormEvent, useState } from "react"
import { PiEye, PiEyeClosed } from "@/utils"

type InputProps = {
  name: string
  type: "text" | "email" | "password"
  placeholder?: string
  value?: string
  handleChange: (e: string) => void
}

type FormProps = {
  title: string
  inputFields: InputProps[]
  submitHandler: (e: FormEvent) => void
}

export default function Form({ title, inputFields, submitHandler }: FormProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="p-3 max-w-[500px]">
      <h2>{title}</h2>
      <form onSubmit={submitHandler}>
        {inputFields.map((field, index) => (
          <div className="my-3" key={index}>
            <label
              className="capitalize py-2 font-semibold"
              htmlFor={field.name}
            >
              {field.name == "rePassword" ? "Re-enter Password" : field.name}
            </label>
            <div className="relative">
              <input
                type={
                  field.type == "password"
                    ? showPassword
                      ? "text"
                      : field.type
                    : field.type
                }
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                defaultValue={field.value}
                onClick={() => field.handleChange}
                className="border p-3 rounded-lg w-full"
                required
              />
              {field.type === "password" && (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <PiEyeClosed size={24} />
                  ) : (
                    <PiEye size={24} />
                  )}
                </span>
              )}
            </div>
          </div>
        ))}
        <div className="my-2">
          <button
            type="submit"
            className="p-3 border rounded-lg bg-midnight_green w-full text-white"
          >
            {title}
          </button>
        </div>
      </form>
    </div>
  )
}
