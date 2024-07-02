import imgWine from './../../assets/wine.jpeg'

export const Vision = () => {
  return (
    <main className="text-white flex items-center flex-col p-4 gap-4">
      <picture className="w-[300px] overflow-hidden rounded-xl shadow-lg border-2 border-red-600 hover:scale-105 transition-all duration-200 ease-in-out">
        <img src={imgWine} alt="" />
      </picture>
      <p className="w-[300px]">
        Para 2030, posicionar a nuestra marca como una de las mejores empresas de producción y vino de granada mercado Estadounidense con la ayuda de nuestro personal capacitado y comprometido con la organización y la sociedad para atender eficazmente las exigencias de nuestros clientes y accionistas
      </p>
    </main>
  )
}