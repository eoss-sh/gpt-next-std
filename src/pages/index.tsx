import { useState } from "react"
import Loader from "@/components/loader"
import Avatar from "@/components/avatar"
import Answer from "@/components/answer"

export default function MyPage() {

  return (
    <div className="container">
      <Avatar />
      <Answer />
    </div>
  )
}