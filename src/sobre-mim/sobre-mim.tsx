import { IoLogoInstagram, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5'
import { BiLogoGmail } from 'react-icons/bi'
import './css/sobre-mim.css'

export function SobreMim() {
  return (
    <div className="flex justify-between 2xl:max-w-6xl sm:max-w-4xl gap-10 max-2xl:flex-col max-2xl:items-center max-sm:pb-10 mx-auto h-96 text-zinc-50 py-10">
      <div className="flex max-sm:flex-col space-x-10 h-96 max-sm:h-[550px] max-sm:space-y-5">
        <div
          className="w-96 h-96 max-md:w-72 max-sm:h-full max-sm:w-full rounded-lg"
          id="img-perfil"
        ></div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xl font-medium">Luis Miguel Jacobus</label>
            <label className="text-sm font-medium">19 anos</label>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center gap-1.5 p-1 text-sm font-medium hover:bg-gradient-to-l hover:to-blue-700 hover:via-orange-500 hover:from-pink-600 rounded transition-colors duration-300">
              <IoLogoInstagram size={20} />
              <a href="https://www.instagram.com/luismigueljacobus?igsh=eWpwcm1rY3JxeHkz">
                @luismigueljacobus
              </a>
            </label>
            <label className="flex items-center gap-1.5 p-1 text-sm font-medium hover:bg-gradient-to-l hover:to-blue-950 hover:via-slate-700 hover:from-zinc-800 rounded transition-colors duration-300">
              <IoLogoGithub size={20} />
              <a href="https://github.com/Luis-Miguelj">
                github.com/Luis-Miguelj
              </a>
            </label>
            <label className="flex items-center gap-1.5 p-1 text-sm font-medium hover:bg-gradient-to-l hover:to-red-600 hover:via-yellow-400 hover:from-green-600 rounded transition-colors duration-300">
              <BiLogoGmail size={20} />
              luismigueljacobus01@gmail.com
            </label>
            <label className="flex items-center gap-1.5 p-1 text-sm font-medium hover:bg-gradient-to-l hover:to-green-700 hover:via-green-500 hover:from-white rounded transition-colors duration-300">
              <IoLogoWhatsapp size={20} />
              51 9 9895-5866
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-xl items-center break-words text-wrap max-2xl:pb-10 max-2xl:max-w-3xl space-y-10 px-5">
        <h1 className="text-xl font-medium">Seja Bem Vindo</h1>
        <div className="flex flex-col gap-2 max-2xl:w-full">
          <p>
            Me chamo Luís Miguel Jacobus, tenho 19 anos e atualmente trabalho na
            Prosolar Soluções em Energia. Monto orçamentos para os clientes e
            sou o responsavel pela infra de Ti da empresa. Me considero um
            Desenvolvedor FullStack Jr.
          </p>
          <p>
            Tenho conhecimento em HTML5, CSS3, JavaScript, TypeScript, ReactJs,
            NodeJs. Me destaco mais com programação front-end, porém, também
            tenho conhecimento em back-end. Esse blog está consumindo um API que
            serve como o back-end da aplicação.
          </p>
        </div>
      </div>
    </div>
  )
}
