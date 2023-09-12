import React from 'react'

interface Props{
    type? : string
    // eslint-disable-next-line
    value?:string | any 
    placeholder?:string
    className?: string
    checked? : boolean
    required? : boolean
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Input:React.FC<Props> = ({type, value, placeholder,onChange,checked, required, className ='', ...rest}) => {
    return (
        <>
        <input className={` peer mt-1 block w-80 px-4 
        py-3 border border-slate-400 rounded-md text-sm shadow-sm placeholder:slate-400 
        focus:outline-none focus:border-cyan-500 disabled:shadow-none
        focus:ring-1 focus:ring-cyan-500 disabled:bg-slate-50  disabled:text-slate-500
        disabled:border-slate-200 disabled:shadow-slate-500 invalid:border-pink-500
        invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500`} type={type} placeholder={placeholder} 
        value={value} {...rest} onChange={onChange} checked={checked} required={required} /> 
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"> Please provide a valid email address.
        </p> 
        </>
      )
}
Input.defaultProps ={
    placeholder:"placeholder here"
    }