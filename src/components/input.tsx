import React, { FC } from 'react'
import { Label, LabelType } from './label'

export type InputProps = {
  type: 'text' | 'password' | 'email'
  label: string
  id: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  name: string

}

export const Input: FC<InputProps> = ({ label, type, id, placeholder, onChange, name }) => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="mb-6 last:mb-0">
      <Label type={LabelType.M} id={id}>
        {label}
      </Label>
      <div className="relative">
        {type === 'password' && (
          <div
            className="absolute flex items-center right-0 inset-y-0 pr-3"
            onClick={() => setShowPassword(!showPassword)}
          >
          </div>
        )}
        <input
          className="w-full bg-slate-50 p-2 text-[20px] text-slate-700 font placeholder:text-slate-500 rounded outline outline-1 outline-slate-200 hover:outline-yellow-600 hover:outline-1 focus:outline-2 focus:outline-yellow-600"
          id={id}
          type={showPassword && type === 'password' ? 'text' : type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  )
}