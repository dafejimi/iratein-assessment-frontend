import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar:React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="flex w-full grow flex-col items-center mx-auto px-6 py-10 max-md:px-5">
      <div className="justify-center items-stretch flex gap-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/984c8dade2e0fa238a6aaa1ccac109161fb23c0858a500ac4a6b1160477d3a8d?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl grow whitespace-nowrap mt-6 self-end">
          Home
        </div>
      </div>
      <div className="items-stretch rounded bg-white bg-opacity-10 self-stretch flex justify-between gap-3 mt-12 p-4 max-md:mt-10 max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaaa7d16c9bf38579844edb5b9398890ed126ffc4b62a36815fd358d57d35da3?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-base self-center grow whitespace-nowrap my-auto">
          Messages
        </div>
      </div>
      <div className="justify-between items-stretch bg-rose-100 self-stretch flex gap-2.5 mt-[756px] px-20 py-3 rounded-lg max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0857045750c1ffc2fcd9e1997ec03530a4edc18f8f7f5f8417116dcb4931f869?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
        />
        <button onClick={handleLogout}>
          <div className="text-red-600 text-base self-center my-auto">
            Log out
          </div>
        </button>
        
      </div>
    </div>
  );
}

export default Sidebar