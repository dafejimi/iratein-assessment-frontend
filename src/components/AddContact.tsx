import React from 'react'

const AddContact: React.FC = () => {

    const handleAddContact = () => {}
    const handleCancel = () => {}
  return (
    <div className="bg-white flex flex-col justify-center items-stretch">
        <div className="bg-black bg-opacity-40 w-full max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:max-w-full">
                        <div className="justify-center items-center bg-white flex flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
                            <div className="flex w-[564px] max-w-full flex-col items-center mt-56 mb-36 max-md:my-10">
                                <div className="items-start bg-white self-stretch z-[1] flex mt-0 flex-col px-8 py-10 rounded-lg max-md:max-w-full max-md:px-5">
                                    <div className="self-stretch flex justify-between gap-1 items-start max-md:max-w-full max-md:flex-wrap">
                                        <div className="text-neutral-600 text-xl grow whitespace-nowrap">
                                            Invite a Person
                                        </div>
                                        <div className="justify-center items-center flex grow basis-[0%] flex-col mt-2">
                                            <div className="text-zinc-500 text-xl">No Chats</div>
                                                <div className="text-zinc-500 text-center text-sm self-stretch mt-2">
                                                    You have not received or send anyone a message.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-neutral-600 text-sm self-stretch max-md:max-w-full">
                                            Email Address
                                        </div>
                                        <div className="text-zinc-500 text-base whitespace-nowrap border border-[color:var(--Gray-5,#E0E0E0)] bg-stone-50 self-stretch z-[1] justify-center mt-3 pl-4 pr-16 py-5 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5">
                                            E.g john@gmail.com
                                        </div>
                                        <div className="text-white text-base whitespace-nowrap justify-center items-center bg-sky-800 self-center mt-0 w-[218px] max-w-full px-16 py-5 rounded-md max-md:px-5">
                                            Add a mate{" "}
                                        </div>
                                        <div className="text-zinc-500 text-sm font-light self-stretch max-md:max-w-full">
                                            <span className="">Name </span>
                                            <span className=" text-zinc-500">(Optional)</span>
                                        </div>
                                        <div className="text-zinc-500 text-base whitespace-nowrap border border-[color:var(--Gray-5,#E0E0E0)] bg-stone-50 self-stretch justify-center mt-3 pl-4 pr-16 py-5 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5">
                                            E.g john
                                        </div>
                                        <div className="items-stretch self-stretch flex justify-between gap-4 mt-10 max-md:max-w-full max-md:flex-wrap">
                                            <button onClick={handleCancel}>
                                                <div className="text-zinc-500 text-base whitespace-nowrap justify-center items-center border border-[color:var(--Gray-5,#E0E0E0)] grow px-16 py-4 rounded-lg border-solid max-md:px-5">
                                                    Cancel
                                                </div>
                                            </button>
                                            <button onClick={handleAddContact}>
                                                <div className="text-white text-base font-bold whitespace-nowrap justify-center items-center bg-sky-800 grow px-16 py-4 rounded-lg max-md:px-5">
                                                    Add person
                                                </div>
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default AddContact