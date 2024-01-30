import React, {useState, useEffect} from 'react'
import { Sidebar, Navbar, Inbox1, Inbox2 } from "../components/index";
import { useParams } from "react-router-dom";
import { getContacts, addContact } from "../api/script";

interface MessengerProps {
  userId: number
}

const Messenger: React.FC<MessengerProps> = ({userId}) => {
  const [contacts, setContacts] = useState<object[]>([])
  const [isContacts, setIsContacts] = useState<boolean>(false)
  const [messages, setMessages] = useState<object>({})
  const [typing, setTyping] = useState<boolean>(false)
  const [onlineUserList, setOnlineUserList] = useState<string[]>([]);

  let socket: WebSocket = new WebSocket(
    `http://127.0.0.1:8000//ws/users/${userId}}/chat/`
  );


  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    if (data.action === "message") {
      setMessages((prevState) => {
        let messagesState = JSON.parse(JSON.stringify(prevState));
        messagesState.results.unshift(data);
        return messagesState;
      });
      setTyping(false);
    } else if (data.action === "typing" && data.user !== userId) {
      setTyping(data.typing);
    }
    if (data.action === "onlineUser") {
      setOnlineUserList(data.userList);
    }
  };

  useEffect(() => {
    let api_contacts = getContacts(userId)
    if (contacts) setIsContacts(true)
  },[])

  return (
    <div className="bg-white">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="bg-[#003366] flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
          <Sidebar/>
        </div>
        <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch max-md:max-w-full">
            <Navbar />
            {
              isContacts ? (<Inbox2 contacts={contacts} userId={userId}/>) : (<Inbox1 />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messenger