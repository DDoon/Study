import classNames from 'classnames'
import React, {
  ReactNode,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react'
// import { SearchIcon } from 'src/assets/icons'
import { StyledFormControl, StyledFormGroup } from 'src/components/Forms/styles'

interface InputProps {
  type: React.HTMLInputTypeAttribute
  value: string | number
  className?: string
  active?: boolean
  children?: ReactNode
  disabled?: boolean
  icon?: string
  id?: string
  name?: string
  placeholder?: string
  required?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: MouseEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}

function getInputIcon(icon: string) {
  switch (icon) {
    case 'search':
      // return <SearchIcon className="icon" />
    default:
      return null
  }
}

export const Input: React.FC<InputProps> = ({
  type,
  value,
  active,
  children,
  className,
  disabled,
  icon,
  id,
  name,
  placeholder,
  required,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onKeyPress,
}) => {
  const element = (
    <StyledFormControl
      type={type}
      value={value}
      className={classNames(className, { active })}
      disabled={disabled}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      onBlur={onBlur}
      onFocus={onFocus}
      onClick={onClick}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )

  if (icon || children) {
    return (
      <StyledFormGroup>
        {icon && getInputIcon(icon)}
        {element}
        {children}
      </StyledFormGroup>
    )
  }
  return element
}
