import React, { FC } from 'react'
import { Label, LabelType } from './label'

export type InputProps = {
  type: 'text' | 'password' | 'email'
  label?: string
  id: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  name: string

}

export const Input: FC<InputProps> = ({ label, type, id, placeholder, onChange, name, value }) => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="mb-6 last:mb-0">
      <Label type={LabelType.M} id={id}>
        {label}
      </Label>
        <input
          className="w-full bg-white p-2 text-sm text-slate-700 font placeholder:text-slate-500 rounded-full outline outline-1 outline-grey hover:outline-yellow hover:outline-1 focus:outline-2 focus:outline-yellow"
          id={id}
          type={showPassword && type === 'password' ? 'text' : type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      </div>
  )
}
