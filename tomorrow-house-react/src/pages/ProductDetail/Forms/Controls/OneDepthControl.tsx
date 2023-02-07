import { useAppSelector, useAppDispatch } from 'src/hooks'
import { useFormControls } from "src/hooks/useFormControls"
import { getFirstOptions } from "src/app/product/detail"
import { Select } from "src/components"
import { addCheckout } from 'src/app/product/checkout'
import { ChangeEvent } from 'react'


interface OneDepthControlProps {
  id: string
}

export const OneDepthControl: React.FC<OneDepthControlProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const firtstOptions = useAppSelector(getFirstOptions)
  const selectId = `one-depth-control-${id}`

  const { getOptionId } = useFormControls()
  
  const updateItem = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    const optionId = getOptionId(value)
    dispatch(addCheckout(optionId))
    e.currentTarget.selectedIndex = 0
  }

  return(
    <Select id={selectId}
      placeholder={firtstOptions.placeholder}
      options={firtstOptions.options}
      required
      onChange={updateItem}
    />
  )
} 