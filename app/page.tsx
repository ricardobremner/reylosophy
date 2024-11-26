import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <div className="flex justify-center m-[10px] md:m-[20px] lg:m-[70px]">
        <h2 className="text-[3rem] text-center md:text-[5rem] lg:text-[5rem]">Crea una vida que refleje tu verdadera esencia.</h2>
      </div>
      <article className="pb-16 md:flex md:flex-row md:justify-evenly md:items-center">
        <div>
          <h3 className="text-2xl text-center font-bold py-1 mb-4 md:text-xl md:mr-16 md:mb-2 lg:text-[2.5rem] lg:mr-[1px] lg:mb-4">¿Quieres vivir una vida a tu medida?</h3>
          <p className="w-[300px] mx-auto mb-8 lg:text-xl lg:w-[600px]">Únete al newsletter para recibir estrategias, inspiración, casos de éxito y recursos que te ayudarán a encontrar la libertad que estás buscando. Es una mezcla de filosofía, lifehacks y negocios.</p>
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
        </div>
      </article>
      <article className="black-text w-full py-20 bg-green-dark">
        <picture>
          <img
            className="flex mx-auto relative top-12"
            src="/Profile-pic-home.png"
            width={200}
            height={200}
            alt="Foto de Rey" />
        </picture>
        <h2 className="text-center md:text-[23px] lg:text-[29px] xl:text-[31px] 2xl:text-[38px] font-bold mt-20 mx-10 mb-6"><span className="block">Hola — Me llamo Rey.</span> Ayudo a profesionales talentosos a alinear su estilo de vida con sus deseos y talentos.</h2>
        <div className="text-center md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[35px] leading-loose mx-3 p-2 md:mx-32 lg:mx-60 xl:mx-72 2xl:mx-96 space-y-4">
          <p><span className="block text-lg">&#91;Mi historia&#93;</span><br />
            He estado en todos los tipos de compañía: multinacional, start-up, gobierno, consultora. Tenía una sola cosa en la cabeza: dinero y status. Era el jefe de producto en una compañía de software reconocida, estaba viviendo mi sueño. Mi único problema: estaba quemado, no podía más. Lo peor de todo es que me di cuenta que no quería esa vida.
          </p>
          <p>
            Dejé una prometedora carrera como Product y Project Manager de Software para responder a la gran pregunta: ¿Qué quiero realmente?
          </p>
          <p>
            En el 2019 empezó mi exploración, fui al amazonas peruano a experimentar con sus plantas sagradas, me mudé al pacifico panameño para entregarme por completo al surf. Trabajé como consultor freelancer, entre muchas otras experiencias.
          </p>
          <p>
            Desde entonces me dedico a ayudar a la gente a tomar las riendas de su vida. En el 2022 empecé mi programa de coaching en el que he ayudado a decenas de personas a upgradear su vida en todos los sentidos.
          </p>
          <p>
            Adicionalmente he seguido preparándome en la medicina tradicional amazónica, ayudando a cientos de personas de todo el mundo en su proceso de sanación y evolución personal.
          </p>
          <p>
            Vivimos en un mundo confuso y complicado, cada vez más personas deciden que necesitan algo diferente. Por eso decidí combinar todo lo que he aprendido en mi camino para ayudar a otras personas a crear la vida que siempre han querido vivir — combinando ingeniería, espiritualidad, gestión de proyectos y productos, filosofía en una metodología que ayuda a las personas a crear cambios reales en sus vidas alineados a sus sueños y propósito.
          </p>
          <p>
            Actualmente vivo en el pacifico panameño con mi esposa. Disfruto de mi tiempo libre surfeando o estudiando, y ayudo a personas como tu a crear más tiempo libre y gozo en sus vidas.
          </p>
        </div>
      </article>
    </section>
  );
}
