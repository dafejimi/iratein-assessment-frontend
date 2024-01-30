import React, {useState} from 'react'

interface TextboxProps {
  userId: number
}

const Textbox: React.FC<TextboxProps> = ({userId}) => {
  let socket: WebSocket = new WebSocket(
    `http://127.0.0.1:8000//ws/users/${userId}}/chat/`
  );
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleInputMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value)
  }

  const messageSubmitHandler = () => {
    if (inputMessage) {
      socket.send(
        JSON.stringify({
          action: "message",
          message: inputMessage,
          user: userId,
        })
      );
    }
    setInputMessage("");
  };
  return (
    <div className="flex gap-5 justify-between items-stretch px-4 py-4 mt-96 rounded-lg border border-solid bg-stone-50 border-[color:var(--Gray-6,#F2F2F2)] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <input placeholder='Write your message' type='text' className="flex-auto my-auto text-sm text-zinc-500" onChange={handleInputMessage}/> 
      <button onClick={messageSubmitHandler}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8b68f4f6b8ce440dd27ab3fb65f547efbd1f8739521425b20c441dc3579745?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="object-contain object-center shrink-0 w-8 aspect-square"
        />
      </button>
      
    </div>
  )
}

export default Textbox