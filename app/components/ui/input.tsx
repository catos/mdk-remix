interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <>
      {label ? <label className="label" htmlFor={name}>
        {label}
      </label> : null}
      <input className="input" type="text" id={name} name={name} {...rest} />
      {/* {errors?.title && <div>Title is required</div>} */}
    </>
  )
}