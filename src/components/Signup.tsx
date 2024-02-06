import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { signup } from "../api/script";

interface SignupProps {
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    setIsSignedUp: React.Dispatch<React.SetStateAction<boolean>>
}

const Signup: React.FC<SignupProps> = ({setUserId, setIsSignedUp}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleClick = () => {
        setIsSignedUp(true)
    }

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        let response: any = signup(username, password)
        //navigate(`/messenger/${response.user_id}`)
        console.log(response)
    }
    
    return (
        <div className="flex w-[620px] max-w-full flex-col items-center mt-8 mb-60 max-md:mb-10">
            <div className="justify-center items-stretch flex gap-2.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d8545d476fe2980b1e3f396760db63a2eb82cdb246746cd1de9e6b18ade7037?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-800 text-2xl grow whitespace-nowrap mt-6 self-end">
                    Home
                </div>
            </div>
            <div className="items-center border border-[color:var(--Gray-5,#E0E0E0)] self-stretch flex flex-col mt-12 p-10 rounded-lg border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-black text-3xl self-center whitespace-nowrap">
                    Sign Up
                </div>
                <div className="text-black text-base self-center whitespace-nowrap mt-4">
                    Create an account
                </div>
                <div className="text-neutral-600 text-sm self-stretch mt-10 max-md:max-w-full">
                    Username
                </div>
                <div className="text-zinc-800 text-base whitespace-nowrap border bg-stone-50 self-stretch justify-center rounded-md border-solid border-gray-200 items-start max-md:max-w-full max-md:pr-5">
                    <input className='w-full  pl-4 pr-16 py-4 bg-stone-50 rounded-md' name='username' placeholder='enter email address' type='text' onChange={handleUsername}/>
                </div>
                <div className="text-neutral-600 text-sm self-stretch mt-6 max-md:max-w-full">
                    Password
                </div>
                <div className="text-zinc-800 text-base whitespace-nowrap border bg-stone-50 self-stretch justify-center rounded-md border-solid border-gray-200 items-start max-md:max-w-full max-md:pr-5">
                    <input className='w-full  pl-4 pr-16 py-4 bg-stone-50 rounded-md' name='password' placeholder='enter password' type='password' onChange={handlePassword}/>
                </div>
                <div className="text-orange-400 text-base font-semibold self-stretch mt-6 max-md:max-w-full">
                    <button onClick={handleClick}>Already have an account?</button>
                </div>
                <button onClick={handleLogin} className="text-white text-base font-semibold whitespace-nowrap justify-center items-center bg-sky-800 self-stretch mt-10 px-16 py-5 rounded-md max-md:max-w-full max-md:px-5">
                    Log In
                </button>
            </div>
        </div>
    )
}

export default Signup