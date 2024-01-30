import React from 'react'
import { UnitContact } from "./index";

interface ContactProps {
  contacts: object[]
}

const Contacts: React.FC<ContactProps> = ({contacts}) => {
  return (
    <div className="flex flex-col items-stretch pb-12 mx-auto w-full bg-gray-50 max-w-[480px]">
      <div className="flex flex-col justify-end items-stretch px-10 py-5 w-full border-b border-solid border-b-[color:var(--Gray-6,#F2F2F2)]">
        <div className="text-3xl text-black">Inbox</div>
        <div className="flex flex-col justify-center items-start py-4 pr-16 pl-3 mt-3 w-full bg-white rounded-lg border border-solid border-[color:var(--Gray-5,#E0E0E0)]">
          <div className="flex gap-2 items-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b826a810fb0b9a5f98dd48d81a127d99f0947a77800a4a511b5727e87b6be73?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="object-contain object-center shrink-0 justify-center items-center self-start w-4 aspect-square"
            />
            <div className="grow text-sm font-light tracking-tight whitespace-nowrap text-zinc-500">
              Search for message
            </div>
          </div>
        </div>
      </div>
      {
        contacts.map((contact) => {
          return (
            <div className="flex gap-2 justify-between items-stretch px-7 pb-3 mt-6">
              <div className="flex gap-0 justify-between items-stretch self-start">
                <div className="flex flex-col flex-1 items-stretch font-medium whitespace-nowrap text-neutral-600">
                  <div className="text-sm">{contact.username}</div>
                  <div className="mt-1.5 text-xs">
                    Click to see new messages
                  </div>
                </div>
              </div>
            </div>
          )
          
        })
      }
    </div>
  )
}

export default Contacts