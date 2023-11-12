import Image from "next/image";

export function Header() {
  return (
    <header className='bg-white w-full px-4 drop-shadow-md'>
      <div className='max-w-7xl mx-auto flex py-4'>
        <Image
          src="/logo-header.png"
          height={72}
          alt='Capivara Caca com roupa do brasil'
          width={72}
        />
      </div>
    </header>
  )
}
