import React from 'react'
import Textbox from './Textbox'

interface MessageProps {
  userId: number
}

const Messages: React.FC<MessageProps> = ({userId}) => {
  return (
    <div className="flex flex-col items-stretch max-w-[738px]">
      <div className="flex flex-col justify-center items-start px-8 py-5 w-full bg-white border-b border-solid border-b-[color:var(--Gray-6,#F2F2F2)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 items-stretch">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
            className="object-contain object-center shrink-0 w-10 aspect-square"
          />
          <div className="flex flex-col flex-1 items-stretch my-auto text-center whitespace-nowrap">
            <div className="text-lg leading-5 text-neutral-600">Abraham</div>
            <div className="mt-1 text-xs leading-3 text-green-800">Online</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch px-8 mt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="self-center text-xs font-medium whitespace-nowrap text-zinc-500">
          
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c9ce1dba4512346f99d828675c5ef3fa68689dc960b670bac3a987c82530ba?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="object-contain object-center self-center mt-4 aspect-[9.09] w-[671px] max-md:max-w-full"
        />
        <div className="mt-5 text-base font-bold text-neutral-600 max-md:max-w-full">
          
        </div>
        <div className="flex flex-col justify-center items-stretch self-end px-2.5 pt-2.5 pb-4 mt-14 whitespace-nowrap bg-cyan-50 rounded-lg max-md:mt-10">
          <div className="text-sm text-neutral-600">
            
          </div>
          <div className="self-end mt-1.5 text-xs text-zinc-500">12:00pm</div>
        </div>
      </div>
      <div className="flex flex-col items-stretch px-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-stretch self-start px-2.5 pt-2.5 pb-5 whitespace-nowrap bg-blue-50 rounded-none">
          <div className="text-sm text-neutral-600">
            
          </div>
          <div className="mt-1.5 text-xs text-zinc-500">12:00pm</div>
        </div>
        <Textbox userId={userId}/>
      </div>
    </div>
  )
}

export default Messages

