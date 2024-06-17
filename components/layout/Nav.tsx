import React from "react"
import Link from "next/link"

type NavLinkProps = {
  title: string
  path: string
}

const NavLink = ({ title, path }: NavLinkProps) => {
  return (
    <li className="px-3 py-2">
      <Link
        href={path}
        className="text-base text-english_violet font-normal hover:font-medium transition-all"
      >
        {title}
      </Link>
    </li>
  )
}

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-3 bg-transparent max-w-[1300px] m-auto sticky top-0">
      <div className="flex gap-20 items-center">
        <h4 className="font-bold">Recipe app</h4>
        <ul className="flex items-center">
          <NavLink path="/" title="Home" />
          <NavLink path="/discover" title="Discover recipe" />
        </ul>
      </div>
      <div className="flex items-center">
        <NavLink path="/sign-in" title="Log in" />
        <NavLink path="/sign-up" title="Sign up" />
      </div>
    </nav>
  )
}
