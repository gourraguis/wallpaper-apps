import { FormEvent } from 'react'

const FormSelect = ({ value, onChange, options, label }: FormSelectProps) => (
  <div className="field">
    {label && <label className="label">{label}</label>}
    <div className="control">
      <div className="select is-fullwidth">
        <select value={value} onChange={onChange} required>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
)

interface FormSelectProps {
  value: string
  onChange: (event: FormEvent<HTMLSelectElement>) => void
  options: string[]
  label?: string
  className?: string
}

export default FormSelect
