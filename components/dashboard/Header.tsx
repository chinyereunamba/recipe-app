import React from "react"
import { PiSlidersHorizontal } from "@/utils"
import style from "@/assets/styles/dashboard.module.css"

export default function Header() {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className={style.input}
        name="search"
        placeholder="What do you want to eat today?"
      />
      <button className={style.btn} name="filterBtn">
        <PiSlidersHorizontal size={24} />
      </button>
    </div>
  )
}
