import React from "react"
import style from "@/assets/styles/dashboard.module.css"
import { PiSlidersHorizontal, PiCaretLeft, PiCaretRight } from "@/utils"

export default function Home() {
  return (
    <section className="dashboard-content">
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
      <div className="mt-10">
        <div>
          <h2 className="font-semibold">Recommeded Recipes</h2>
          <p className="text-gray-600">Based on your preferences</p>
        </div>
        <div className="flex items-center gap-4">
          <button className={style.btn}>
            <PiCaretLeft size={24} />
          </button>
          <button className={style.btn}>
            <PiCaretRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
