import { FormEvent } from 'react'

const FormInput = ({
  value,
  onChange,
  label,
  type = 'text',
  rounded = true,
  disabled = false
}: FormInputProps) => (
  <div className="field">
    {label && <label className="label">{label}</label>}
    <div className="control">
      <input
        className="input"
        value={value}
        onChange={onChange}
        required
        type={type}
        disabled={disabled}
      />
    </div>
  </div>
)

interface FormInputProps {
  value: string | number
  onChange: (event: FormEvent<HTMLInputElement>) => void
  label?: string
  type?: string
  rounded?: boolean
  disabled?: boolean
}

export default FormInput
