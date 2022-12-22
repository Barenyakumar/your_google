
import { useRouter } from "next/router"
import React from "react"


export default function SearchHeaderOption(props) {
  const router = useRouter()
  const selectTab = (title) => {
    router.push(`/search?term=${router.query.term}&searchType=${title=== "Images" ? "image" : ""}`)
  }
  
  return (
    <div
      onClick={() => selectTab(props.title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3  
    ${props.selected && "text-blue-500 border-blue-500"}`}
    >
      <div>
        <props.icon className="h-4" />
      </div>
      <div>{props.title}</div>
    </div>
  )
}
