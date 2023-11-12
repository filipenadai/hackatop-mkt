export function Client() {
  return (
    <div className='max-w-5xl w-full py-12 md:py-0 mx-auto flex flex-col-reverse md:flex-row px-4 justify-between items-center'>
      <img
        src="/client-experience.png"
        className='w-full object-contain mt-4 max-w-sm'
      />
      <div className='flex flex-col justify-center max-w-md mb-4 md:mb-0'>
        <h2 className='text-black text-[1.5rem] md:text-[2rem] text-center md:text-left mt-4 font-semibold'>
          Uma experiência única para seu cliente!
        </h2>
        <p className='text-black text-center mt-2 md:mt-4 text-sm md:text-base md:text-left w-full'>
          Usando integrações como WhatsApp, Meta, X + AI, o público pode saber sobre seus produtos como se falasse com um amigo especialista, assim tomará as melhores decisões na hora da sua compra.
        </p>
      </div>
    </div>
  )
}
