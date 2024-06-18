import Link from "next/link"
import React from "react"
import style from "@/assets/styles/layout.module.css"
type FooterLinkProps = {
  title: string
  path: string
}

const FooterLink = ({ path, title }: FooterLinkProps) => {
  return (
    <li className="py-2">
      <Link
        href={path}
        className="text-lavender_blush-400 hover:text-wisteria-900 transition-colors text-base"
      >
        {title}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className=" bg-midnight_green text-lavender_blush py-12">
      <div className="section flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div className="w-1/2 lg:border-r-2 lg:border-b-0 border-b-2 border-pearl-600">
          <h3>Recipe app</h3>
        </div>
        <div className="flex justify-between items-start w-1/2">
          <ul className={style.footer_links}>
            <h4 className={style.link_title}>Useful Links</h4>
            <FooterLink path="/about" title="About" />
            <FooterLink path="/contact" title="Contact" />
            <FooterLink path="/sign-in" title="Log in" />
            <FooterLink path="/sign-up" title="Sign up" />
          </ul>
          <ul className={style.footer_links}>
            <h4 className={style.link_title}>Other Links</h4>
            <FooterLink path="/terms" title="Terms and conditions" />
            <FooterLink path="/contact" title="Contact" />
            <FooterLink path="/privacy" title="Privacy Policy" />
          </ul>
          <ul className={style.footer_links}>
            <h4 className={style.link_title}>Social Media </h4>
            <FooterLink path="/facebook" title="Facebook" />
            <FooterLink path="/instagram" title="Instagram" />
            <FooterLink path="/x" title="Twitter" />
          </ul>
        </div>
      </div>
      <small className="flex justify-center text-center font-semibold pt-4 text-pearl">
        All rights reserved. &copy; Copyright 2024.
        <Link href={"https://chinyereunamba.vercel.app"} target="_blank">
         {" "} Chinyere Unamba
        </Link>
      </small>
    </footer>
  )
}
