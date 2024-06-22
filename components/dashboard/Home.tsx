import React from "react"
import style from "@/assets/styles/dashboard.module.css"
import { PiCaretLeft, PiCaretRight } from "@/utils"
import RecipeCard from "./RecipeCard"
import SectionTitle from "./SectionTitle"
import Header from "./Header"
import SectionIntroContainer from "../utils/SectionContainer"

export default function Home() {
  return (
    <section className="dashboard-content">
      <Header />
      <SectionIntroContainer>
        <SectionTitle
          title="Recommeded Recipes"
          description="Based on your preferences"
        />
        <div className="flex items-center gap-4">
          <button className={style.btn}>
            <PiCaretLeft size={20} />
          </button>
          <button className={style.btn}>
            <PiCaretRight size={20} />
          </button>
        </div>
      </SectionIntroContainer>
      <div className="mt-10">
        <RecipeCard />
      </div>
      <SectionIntroContainer>
        <SectionTitle
          title="Trending Recipes"
          description="Cooked by people with similar preferences "
        />

      </SectionIntroContainer>
    </section>
  )
}
