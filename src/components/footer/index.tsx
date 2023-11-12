import Image from "next/image";

export function Footer() {
  return (
    <footer className='bg-green-500 w-full px-4 drop-shadow-md'>
      <div className='max-w-7xl mx-auto flex py-12 justify-between items-center text-white'>
        <p>Caca © {new Date().getFullYear()}</p>
        <p>Hackatop de MKT</p>
      </div>
    </footer>
  )
}
