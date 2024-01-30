import React from 'react'
import AddContact from './AddContact'

const Inbox1: React.FC = () => {
    const handleAddContact = () => {
        return (
            <AddContact/>
        )
    }
  return (
    <div className="justify-center items-center bg-blue flex flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d52365e20909e7a3704b3f9253ecaa4d5b43b398304421d6ab9f80f27fe6c39?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
        className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full mt-56 max-md:mt-10"
        />
        <div className="text-zinc-500 text-xl whitespace-nowrap mt-4">
            No Chats
        </div>
        <div className="text-zinc-500 text-center text-sm max-w-[308px] mt-2">
            You have not received or send anyone a message.
        </div>
        <div className="justify-center items-stretch bg-sky-800 flex gap-2 mt-9 mb-72 px-11 py-4 rounded-md max-md:mb-10 max-md:px-5">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce25d8be38170eed8d09cbe631fbb0f507348437aa92078e0c7684f15ca6fc12?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <button onClick={handleAddContact}>
                <div className="text-white text-base self-center grow whitespace-nowrap my-auto">
                    Add a person
                </div>
            </button>            
        </div>
    </div>
  )
}

export default Inbox1