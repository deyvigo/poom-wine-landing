import wineImg from './../../assets/poomwine.jpeg'

export const Mision = () => {
  return (
    <main className="text-white flex items-center flex-col p-4 gap-4">
      <picture className="w-[300px] h-[320px] overflow-hidden rounded-xl shadow-lghover:scale-105 transition-all duration-200 ease-in-out">
        <img src={wineImg} className="w-[300px] h-[320px] object-cover border-2 border-red-600 fade-in" />
      </picture>
      <p className="w-[300px]">
        Brindar productos de calidad a nuestros clientes. Con este propósito deseñamos, desarrollamos y producimos nuestro propio vino de granada, cumpliendo con los más exigentes estándares de calidad.
      </p>
    </main>
  )
}