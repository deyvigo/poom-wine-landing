import imgWine from './../../assets/wine.jpeg'

export const Prices = () => {
  return (
    <main className="text-white flex items-center flex-col p-4 gap-4">
      <p className="font-bold text-xl">Producto</p>
      <picture className="w-[300px] h-[400px] overflow-hidden rounded-xl shadow-lghover:scale-105 transition-all duration-200 ease-in-out">
        <img src={imgWine} className="object-cover w-[300px] h-[400px] border-2 border-red-600 rounded-xl fade-in" />
      </picture>
      <section>
        <p className="font-semibold">Vino de alta calidad a base de Granada</p>
        <p className="text-center">Precio: <span className="font-semibold">$10</span></p>
      </section>
    </main>
  )
}