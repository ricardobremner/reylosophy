import type { Metadata } from 'next';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter'
};

export default function page() {
  return (
    <section className="h-full">
      <article className="black-text h-[33rem] pt-4 bg-green-dark md:flex md:flex-row md:justify-evenly md:items-center">
        <div>
          <h3 className="text-2xl text-center font-bold py-1 mb-4 md:text-xl md:mr-16 md:mb-2 lg:text-[2.5rem] lg:mr-[1px] lg:mb-4">¿Quieres vivir una vida a tu medida?</h3>
          <p className="w-[300px] mx-auto mb-8 md:text-sm lg:text-xl lg:w-[600px]">Únete al newsletter para recibir estrategias, inspiración, casos de éxito y recursos que te ayudarán a encontrar la libertad que estás buscando. Es una mezcla de filosofía, lifehacks y negocios.</p>
        </div>
        <div>
          <ArrowDownIcon className="w-12 mx-auto text-gray-button md:hidden" />
          <ArrowRightIcon className="w-12 mx-auto text-gray-button hidden md:block md:w-14 lg:w-24" />
        </div>
        <div>
          <Link href="https://tumedida.reylosophy.com/" target='blank'>
            <button className="m-auto justify-center items-center my-12 rounded-3xl bg-gray-button text-white p-2 
          w-[9rem] h-28 hover:bg-purple-button transition duration-500 hover:duration-700 flex md:h-12">Suscríbete</button>
          </Link>
        </div >
      </article>
      <article>
        <div className="text-center  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[35px] leading-loose m-8 md:mx-32 md:my-9 lg:mx-60 lg:my-10 xl:mx-72 xl:my-16 2xl:mx-96 2xl:my-20 space-y-4">
          <p>Mi nombre es Rey Hernández.</p>
          <p> Ayudo a profesionales talentosos cómo tu a potenciar sus talentos e intereses para construir una vida en libertad.
          </p>
          <p>&#91;Para los que buscan la libertad&#93;</p>
          <p>Todo se trata de libertad.</p>
          <p>
            Libertad es poder decidir que quieres hacer con tu tiempo, con quien quieres trabajar, en que quieres trabajar y cuando quieres hacerlo.
          </p>
          <p>
            Vivir en libertad no es una vida sin responsabilidades, es una vida en la que decidimos las responsabilidades que queremos tomar.
          </p>
          <p>
            No es una vida sin problemas, sino una vida en la que los problemas que enfrentamos son importantes para nosotros y nos encaminan a la mejor versión de nosotros.
          </p>
          <p>La libertad no tiene que ver con estatus, fama o poder.</p>
          <p>Estas son métricas externas.</p>
          <p>La Libertad se trata de expresar quien eres realmente, respetar tus valores — COHERENCIA.</p>
          <p>Todo empieza con una pregunta: ¿Qué quieres realmente?</p>
          <p>El camino hacía la libertad es para los valientes que se atreven a hacerse esta pregunta.</p>
        </div>
      </article>
    </section>
  )
}