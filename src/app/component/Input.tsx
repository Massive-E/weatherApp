"use client"
import { BiSearch } from "react-icons/bi"
import React from "react"

interface InputProps{
    searchHandle: (e: React.KeyboardEvent<HTMLInputElement>) => void
        setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({searchHandle, setLocation}: InputProps) => {
    return (
        <form className="flex items-center md:w/24 w-full">
            <input
                type='text'
                placeholder="London" 
                className='w-3/4 bg-transparent border-b-2 border-slate-600	 outline-none text-slate-600 text-2xl'
                onKeyDown={searchHandle}
                onChange={(e) => setLocation(e.target.value)}
            />
            <div className="ml-[-25px] text-black cursor-pointer" >
                <BiSearch size={30}/>
            </div>
        </form>

    )
}

export default Input;
