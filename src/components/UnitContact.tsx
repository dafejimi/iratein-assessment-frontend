import React from 'react'

const UnitContact: React.FC = () => {
  return (
    <div className="flex gap-2 justify-between items-stretch px-7 pb-3 mt-6">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7709c740ddb32a9545c43b1c5541bba5c4b6c427728250742ba9594ab8cebbe2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="object-contain object-center shrink-0 w-10 aspect-square"
        />
        <div className="flex gap-0 justify-between items-stretch self-start">
          <div className="flex flex-col flex-1 items-stretch font-medium whitespace-nowrap text-neutral-600">
            <div className="text-sm">Abraham</div>
            <div className="mt-1.5 text-xs">
              Kindly check out this images, they are very...
            </div>
          </div>
          <div className="flex flex-col items-stretch basis-0">
            <div className="text-xs text-black">12:23PM</div>
            <div className="justify-center items-stretch p-1.5 mt-2.5 text-xs text-white bg-blue-600 rounded-2xl aspect-[2.63]">
              2
            </div>
          </div>
        </div>
    </div>
  )
}

export default UnitContact