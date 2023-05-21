import React, {useState} from 'react'
import { Label, LabelType } from './label'
import { Option } from './option'

type RadioGroupProps = {
    options: React.ReactElement[]
    onChange?: (selectedIndex: number) => void
    value?: number
    labelText: string
}

export const RadioGroup = ({options, onChange, value, labelText}: RadioGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(value);
  function onSelect(index: number) {
    setSelectedIndex(index);
    onChange && onChange(index);
  }
  return (
    <>
        <Label type={LabelType.M} id="radio-group">{labelText}</Label>
        <div className='flex justify-evenly'>
            {options.map((el, index) => {
                return (
                    <Option 
                        key={index}
                        index={index}
                        selectedNumber={selectedIndex}
                        onSelect={(index) => onSelect(index)}
                    >
                        {el}
                    </Option>
                )
            })}
        </div>
    </>
  )
}