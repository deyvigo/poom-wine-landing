import wineImg from './../../assets/wine.jpeg'

export const Mision = () => {
  return (
    <main className="text-white flex items-center flex-col p-4 gap-4">
      <picture className="w-[300px] overflow-hidden rounded-xl shadow-lg border-2 border-red-600 hover:scale-105 transition-all duration-200 ease-in-out">
        <img src={wineImg} alt="" />
      </picture>
      <p className="w-[300px]">
        Brindar productos de calidad a nuestros clientes. Con este propósito deseñamos, desarrollamos y producimos nuestro propio vino de granada, cumpliendo con los más exigentes estándares de calidad y sostenibilidad.
      </p>
    </main>
  )
}