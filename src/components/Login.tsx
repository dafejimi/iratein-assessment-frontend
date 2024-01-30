import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { login } from "../api/script";

interface LoginProps {
    setUserId: React.Dispatch<React.SetStateAction<number>>
}

const Login: React.FC<LoginProps> = ({setUserId}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        let response: any = login(username, password)
        navigate(`/messenger/${response.user_id}`)
        //console.log(response)
    }

    return (
        <div className="flex w-[620px] max-w-full flex-col items-center mt-8 mb-36 max-md:mb-10">
            <div className="justify-center items-stretch flex gap-2.5">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee32fcff3e0a036cc25fcd678ee8ca6fb0c905c4a76591113721cfc3e6a5408d?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-sky-800 text-2xl grow whitespace-nowrap mt-6 self-end">
                Home
                </div>
            </div>
            <div className="items-center border border-[color:var(--Gray-5,#E0E0E0)] self-stretch flex flex-col mt-12 p-10 rounded-lg border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-black text-3xl self-center whitespace-nowrap">
                    👋Welcome back
                </div>
                <div className="text-black text-base self-center whitespace-nowrap mt-4">
                    Login to your account
                </div>
                <div className="justify-center items-center border border-[color:var(--Gray-5,#E0E0E0)] self-stretch flex flex-col mt-10 px-16 py-4 rounded-lg border-solid max-md:max-w-full max-md:px-5">
                    <div className="flex items-stretch gap-4">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c87f30d550a7589a4b960d7813f1480eb356c0b6b964b9ad154f6656f615a614?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-sky-800 text-base self-center grow whitespace-nowrap my-auto">
                        <button>Continue with Google</button>
                    </div>
                    </div>
                </div>
                <div className="bg-zinc-100 self-center w-60 shrink-0 h-px mt-10" />
                <div className="text-neutral-600 text-sm self-stretch mt-10 max-md:max-w-full">
                    Email Address
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
                    Forgot Password?
                </div>
                <button onClick={handleLogin} className="text-white text-base font-semibold whitespace-nowrap justify-center items-center bg-sky-800 self-stretch mt-10 px-16 py-5 rounded-md max-md:max-w-full max-md:px-5">
                    Log In
                </button>
            </div>
        </div>
    )
}

export default Login