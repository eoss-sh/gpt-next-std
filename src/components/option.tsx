import { type } from 'os'
import React from 'react'

type OptionProps = {
    index: number
    selectedNumber?: number
    onSelect: (index: number) => void
    children: React.ReactNode
}

export const Option = (props: OptionProps) => {
    const isSelected = props.index === props.selectedNumber
  return (
    <div 
        className={`flex items-center gap-2 shadow cursor-pointer transition duration-300 mx-1 rounded-md px-2 py-2 flex-1 text-xs font-bold hover:shadow-md ${isSelected && "bg-yellow-200"}`}
        onClick={() => props.onSelect(props.index)}
    >
        <div className={`roundede-full h-4 w-4 border transition ${isSelected && "border-4 border-yellow-600 bg-yellow-200"}`}></div>
        {props.children}
    </div>
  )
}
