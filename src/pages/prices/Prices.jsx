import imgWine from './../../assets/wine.jpeg'

export const Prices = () => {
  return (
    <main className="text-white flex items-center flex-col p-4 gap-4">
      <picture className="w-[300px] overflow-hidden rounded-xl shadow-lg border-2 border-red-600 hover:scale-105 transition-all duration-200 ease-in-out">
        <img src={imgWine} alt="" />
      </picture>
      <section>
        <p></p>
        <p className="">Precio: <span className="font-semibold">$10</span></p>
      </section>
    </main>
  )
}