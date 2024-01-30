import React from 'react'
import { Signup, Login } from '../components/index'

interface AuthProps {
    isSignedUp: boolean,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    setIsSignedUp: React.Dispatch<React.SetStateAction<boolean>>
}

const Auth: React.FC<AuthProps> = ({isSignedUp, setUserId, setIsSignedUp}) => {

    return (
        <div className="items-center bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
            {isSignedUp ? (<Login setUserId={setUserId}/>) : (<Signup setUserId={setUserId} setIsSignedUp={setIsSignedUp}/>)}
        </div>
    )
}

export default Auth