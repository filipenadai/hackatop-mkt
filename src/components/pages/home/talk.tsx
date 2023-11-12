export function Talk() {
  return (
    <div className='max-w-5xl w-full py-12 md:py-0 mx-auto flex flex-col-reverse md:flex-row px-4 justify-between items-center'>
      <img
        src="/talk.png"
        className='w-full object-contain mt-4 max-w-sm'
      />
      <div className='flex flex-col justify-center max-w-md mb-4 md:mb-0'>
        <h2 className='text-black text-[1.5rem] md:text-[2rem] text-center md:text-left mt-4 font-semibold'>
          Especialista em atender como ninguém!
        </h2>
        <p className='text-black text-center mt-2 md:mt-4 text-sm md:text-base md:text-left w-full'>
          Fazemos todo o acompanhamento de pós compra, a Caca irá notificar todo o processo desde a aquisição até a entrega e mais.
        </p>
      </div>
    </div>
  )
}
