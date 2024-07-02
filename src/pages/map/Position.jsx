import { IconBrandFacebookFilled, IconBrandInstagram } from '@tabler/icons-react'
import { IconFacebook } from './../../components/icons/IconFacebook'
import { IconInstagram } from '../../components/icons/IconInstagram'

export const Position = () => {
  return (
    <main className="text-white flex items-center flex-col p-4 gap-4">
      <div>
        <p className="text-xl font-semibold">Encuéntranos en:</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.989065770097!2d-79.04189702402684!3d-8.102594581052807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d96543f0d39%3A0xb0c0f8742ac2894d!2sAv.%20Mansiche%201080%2C%20Trujillo%2013011!5e0!3m2!1ses!2spe!4v1719899863551!5m2!1ses!2spe" className="w-[300px] h-[500px] rounded-lg border-2 border-red-500 fade-in" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="flex gap-2 items-center justify-center">
        <p className="font-semibold">Síguenos en:</p>
        <IconFacebook className="w-[40px] h-[40px]" />
        <IconInstagram className="w-[40px] h-[40px]"/>
      </div>
    </main>
  )
}
