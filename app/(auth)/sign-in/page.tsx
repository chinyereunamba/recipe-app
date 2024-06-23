import Form from "@/components/auth/Form"

export default function SignIn() {
  return (
    <section>
      <Form
        title="Sign in"
        inputFields={[
          { name: "email", type: "email", placeholder: "carlos@email.com" },
          { name: "password", type: "password", placeholder: "*********" },
        ]}
      />
    </section>
  )
}
