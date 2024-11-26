import type { Metadata } from 'next';
import CardWrapper from '../ui/testimonials-cards';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coaching'
};

export default function Page() {
  return (
    <section>
      <h2 className="text-center m-20 text-[2rem] md:text-[3rem] lg:text-[3rem] ">Puedes vivir la vida que siempre has querido, déjame enseñarte cómo hacerlo.</h2>
      <div className="text-center  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[35px] pb-20 leading-loose m-3 md:mx-32 lg:mx-60 xl:mx-72 2xl:mx-96 space-y-4">
        <p>
          Por mucho tiempo pensé que tenía que trabajar sin parar hasta “jubilarme” para tener todo el tiempo libre y hacer lo que siempre he querido hacer.
        </p>
        <p>
          Después pensé que tenía que hacerme multimillonario antes de los 40 para jubilarme temprano y disfrutar más.
        </p>
        <p>
          Después me di cuenta que estaba sacrificando mi presente por un futuro que nadie me puede garantizar.
        </p>
        <p>
          El mundo ha cambiado mucho en los últimos 10 años, existen muchas maneras de generar ingresos desde cualquier parte del mundo. Puedes generar ingresos viviendo a tu manera, y a la misma vez ahorrar para tu futuro.
        </p>
        <p>
          Lifestyle redesign blueprint es un programa uno a uno que te ayudará a crear las bases para tu vida soñada, y a la misma vez, upgradear cada aspecto de tu vida.
        </p>
        <p>En este programa trabajamos en lo espiritual, mental y físico.</p>
        <p>
          La idea es encontrar un balance entre todas tus facetas para crear un estilo de vida que no solo alimente tus necesidades físicas, sino también tus necesidades mentales y espirituales.
        </p>
      </div>
      <p className="text-xl font-black ml-4 lg:ml-32">Durante las 12 semanas recibirás:</p>
      <div className="text-lg flex justify-center mb-16">
        <ul className="m-9">
          <li>Un plan de trabajo personalizado de acuerdo a tus metas.</li>
          <li>1 sesión semanal de coaching.</li>
          <li>Seguimiento y accountability semanal para mantener la motivación.</li>
          <li>Apoyo vía chat todos los días de la semana.</li>
          <li>Plantillas y Material pregrabado en diferentes temas de acuerdo a tus necesidades.</li>
        </ul>
      </div>
      <article className="bg-green-dark py-28">
        <h3 className="text-black text-4xl text-center">Lo que dicen los estudiantes</h3>
        <div className="grid gap-6 m-6 lg:grid-cols-2 lg:mx-36 lg:my-16">
          <CardWrapper />
        </div>
        <div className="text-black text-center md:text-3xl relative top-12 m-3">
          <p>¿Quiéres estos resultados para ti también?</p>
          <Link href="mailto:rey@reylosophy.com" className="inline-block underline hover:text-blue-950">¡Hablemos!</Link>
        </div>
      </article>
    </section>
  )
}