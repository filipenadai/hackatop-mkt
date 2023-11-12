export function Remember() {
  return (
    <div className='max-w-5xl w-full py-12 md:py-24 mx-auto flex flex-col md:flex-row px-4 justify-between items-center'>
      <div className='flex flex-col justify-center max-w-md mb-4 md:mb-0'>
        <h2 className='text-black text-[1.5rem] md:text-[2rem] text-center md:text-left mt-4 font-semibold'>
          Lembramos por você
        </h2>
        <p className='text-black text-center mt-2 md:mt-4 text-sm md:text-base md:text-left w-full'>
          Fazemos o acompanhamento de datas especiais e oferecemos sugestões para um evento tão importante.
        </p>
      </div>
      <img
        src="/remember.png"
        className='w-full object-contain mt-4 max-w-md'
      />
    </div>
  )
}
