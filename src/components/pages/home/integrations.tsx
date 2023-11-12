import { BRANDS } from "@/constants/brands";

export function Integrations() {
  return (
    <div className='max-w-5xl w-full py-6 md:py-10 mx-auto flex flex-col md:flex-row px-4 justify-center items-center'>
      <div className='flex flex-col justify-center max-w-md mb-4 md:mb-0'>
        <h2 className='text-black text-[1.5rem] md:text-[2rem] text-center mt-4 font-semibold'>
          Estamos onde você&nbsp;precisa!
        </h2>
        <p className='text-black text-center mt-2 md:mt-4 text-sm md:text-base w-full'>
          Temos integrações para atender seu público onde ele estiver, desde rede sociais até widgets para sites.
        </p>
        <div className="grid grid-cols-4 mt-8">
          {BRANDS.map(b => (
            <img src={b.image} alt={b.name} key={b.name} className="max-w-[40px] object-contain" />
          ))}
        </div>
      </div>
    </div>
  )
}
