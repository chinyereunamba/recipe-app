import { FormEvent, useState } from "react"
import { PiEye, PiEyeClosed } from "@/utils"
import Link from "next/link"

type InputProps = {
  name: string
  type: "text" | "email" | "password"
  placeholder?: string
  value?: string
  handleChange: (e: string) => void
}

type FormProps = {
  formType?: string
  btnName: string
  inputFields: InputProps[]
  submitHandler: (e: FormEvent) => void
  disabledFnc?: boolean | undefined
  loader?: boolean | undefined
}

export default function Form({
  formType,
  btnName,
  inputFields,
  submitHandler,
  disabledFnc,
  loader,
}: FormProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="max-w-[480px] w-full">
      <form onSubmit={submitHandler}>
        {inputFields.map((field, index) => (
          <div className="my-3" key={index}>
            <label
              className="capitalize py-2 font-semibold"
              htmlFor={field.name}
            >
              {field.name == "rePassword" ? "Reenter Password" : field.name}
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
        {formType == "login" && (
          <div className="my-2">
            <p>
              <Link href={"/forgot-password"}>Forgot password?</Link>
            </p>
          </div>
        )}
        <div className="my-2">
          <button
            type="submit"
            className={`p-3 border rounded-lg bg-midnight_green w-full text-white`}
            disabled={disabledFnc}
          >
            {loader}
            {btnName}
          </button>
        </div>
      </form>
    </div>
  )
}
