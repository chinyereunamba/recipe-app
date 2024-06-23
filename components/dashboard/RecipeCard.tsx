"use client"
import React, { useState } from "react"
import style from "@/assets/styles/dashboard.module.css"
import { FaStar, PiHeart, PiHeartBold } from "@/utils"

type TagProps = {
  icon?: React.JSX.Element
  tag: string
}

const Tag = ({ icon, tag }: TagProps) => {
  return (
    <div className="flex items-center gap-3 bg-success rounded-lg text-sm py-1 px-3 w-fit">
      {icon}
      {tag}
    </div>
  )
}

export default function RecipeCard() {
  const [liked, setLiked] = useState(false)
  return (
    <div className="max-w-72 w-full min-h-60 bg-white rounded-xl">
      <div className="h-36 border border-purple-800 rounded-xl relative">
        {liked ? (
          <PiHeartBold
            onClick={() => setLiked(!liked)}
            size={24}
            className={`${style.heart} text-error`}
          />
        ) : (
          <PiHeart
            onClick={() => setLiked(!liked)}
            size={24}
            className={style.heart}
          />
        )}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h4>Cased Salad</h4>
            <p>Mexican, Greens, Lunch</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaStar color="yellow" /> 3.8
          </div>
        </div>
        <div className="my-2 flex items-center gap-2">
          <Tag tag="Mexican" />
          <Tag tag="Mexican" />
        </div>
      </div>
    </div>
  )
}
