import React from 'react'
import { Messages, Contacts, Textbox } from "./index";

interface InboxProps {
  contacts: object[],
  userId: number
}

const Inbox2: React.FC<InboxProps> = ({contacts, userId}) => {
  return (
    <div className="justify-center bg-white max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
        <div className="flex flex-col items-stretch w-[35%] max-md:ml-0 max-md:w-full">
          <Contacts contacts={contacts}/>
          <Messages userId={userId}/>
        </div>
      </div>
    </div>
  )
}

export default Inbox2
