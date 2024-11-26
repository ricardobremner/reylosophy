import { Metadata } from 'next';
import Post from '@/app/ui/post';

export const metadata: Metadata = {
  title: 'Artículos'
};

export default async function Page() {

  return (
    <section>
      <h1 className="text-center text-5xl mt-20 p-2">El Blog de Rey</h1>
      <h2 className="text-center">Lifestyle Desing & Business</h2>
      <Post />
    </section>
  )
}