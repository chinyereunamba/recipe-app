import React from "react"

export default function SectionIntroContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-10 flex items-center justify-between">{children}</div>
  )
}
