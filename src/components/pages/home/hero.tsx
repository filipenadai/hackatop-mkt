export function Hero() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row px-4 justify-start items-center md:py-24'>
      <div className='md:h-full flex flex-col justify-center'>
        <h1 className='text-green-500 text-[3rem] md:text-[3.5rem] text-center md:text-left mt-4'>Uma nova
          <br />
          <strong>experiência</strong>
        </h1>
        <p className='text-black text-center mt-2 md:mt-4 text-md md:text-lg font-medium md:text-left'>Transforme a jornada em uma experiência memorável</p>
        <p className='text-black text-center mt-4 md:mt-6 text-sm md:text-base md:text-left max-w-lg'>A Caca é um IA que estuda seus produtos e proporciona uma experiência única na jornada de compra</p>
      </div>
      <img
        src="/caca-hero.png"
        className='w-full object-contain mt-4 max-w-md'
      />
    </div>
  )
}
