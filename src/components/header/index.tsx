import Image from "next/image";

export function Header() {
  return (
    <header className='bg-white w-full px-4 drop-shadow-md'>
      <div className='max-w-7xl mx-auto flex py-4 items-center justify-between'>
        <Image
          src="/logo-header.png"
          height={72}
          alt='Capivara Caca com roupa do brasil'
          width={72}
        />
        <a href="#form" className="text-white font-bold bg-green-500 py-2 px-4 rounded-lg">
          Experimente!
        </a>
      </div>
    </header>
  )
}
