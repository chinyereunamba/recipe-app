import React from "react"

export default function Intro() {
  return (
    <section className="section min-h-[75dvh] w-full flex items-center">
      <div className="flex flex-col gap-4 w-1/2 ">
        <h1 className="font-bold text-[3rem] leading-snug text-balance">
          Recipes for your home cooked meals
        </h1>
        <p className="text-lg text-text text-balance">
          Elevate your home cooked meals with our delicious recipe collection.
          <br />
          Impress your family with your culinary expertise and try our recipes
          today.
        </p>
        <div className="mt-8">
          <button className="bg-english_violet text-lavender_blush-900 px-5 py-3 rounded-3xl capitalize">
            Request a recipe
          </button>
        </div>
      </div>
    </section>
  )
}
