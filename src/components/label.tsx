import React, { FC, ReactNode } from 'react'

export enum LabelType {
  M = 'M',
  XL = 'XL'
}

export type LabelProps = {
  type: LabelType
  children: ReactNode
  id?: string
}

const classes = {
  labelBase: 'block text-slate-700 font-semibold',
  labelSize: (type: LabelType) => {
    const sizeaMap = {
      [LabelType.M]: 'text-sm mb-1',
      [LabelType.XL]: 'text-lg leading-6 mb-4'
    }
    return sizeaMap[type]
  }
}

export const Label: FC<LabelProps> = ({ type, children, id }) => {
  return (
    <label
      className={`${classes.labelBase} ${classes.labelSize(type)}`}
      htmlFor={id}
    >
      {children}
    </label>
  )
}