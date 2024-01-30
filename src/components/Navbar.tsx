import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className="border-b-[color:var(--Gray-6,#F2F2F2)] bg-white flex w-full justify-between gap-5 pl-6 pr-10 py-5 border-b border-solid items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="justify-between items-center border border-[color:var(--Gray-5,#E0E0E0)] bg-white flex gap-5 mt-1 px-3 py-3.5 rounded-lg border-solid">
            <div className="flex gap-2 my-auto items-start">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f6834b75aabaf80d0ac51c2f3d9a71a29e79fdd26fb9aa8958aab32655c3f1?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-500 text-sm font-light tracking-tight self-stretch grow whitespace-nowrap">
                Search for house
                </div>
            </div>
            <div className="items-center border-l-[color:var(--Gray-4,#BDBDBD)] self-stretch flex justify-between gap-1 pl-4 border-l border-solid">
                <div className="text-zinc-500 text-sm font-light tracking-tight grow whitespace-nowrap my-auto">
                location
                </div>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa4791b7a69423c9dae89172e86b59f997103a25efffab5028ca14d6369d6f8?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                />
            </div>
            </div>
            <div className="items-stretch flex gap-5">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/651f2e90dd7831a8e1b778b9d011b755a784d879152791d3dde9033677ce42d6?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="justify-between items-stretch border border-[color:var(--Gray-5,#E0E0E0)] flex gap-5 p-2 rounded-lg border-solid">
                <div className="items-stretch flex justify-between gap-4">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c88c51679798bc9b1b574eaf37aa77379006460801b6505a9135a98fbeb3547?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                />
                <div className="text-neutral-600 text-base self-center my-auto">
                    John Doe
                </div>
                </div>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c946bba90b46c4628531d2cb05182182955ad21d713eb6f06397b3e6894f9d2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
            </div>
        </div>
    </div>
  )
}

export default Navbar