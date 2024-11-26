import { getBlog } from '@/app/lib/data';
import { formatDateToLocal } from '@/app/lib/utils';
import Link from 'next/link';
import { Posts } from '@/app/lib/definitions';

export default async function Post() {
  const blogs = await getBlog('/blogs');

  return (
    <article className="grid gap-3 mt-16 md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)]">
      {blogs.toReversed().map((blog: Posts) => (
        <div className="mx-8 mb-8" key={blog.id}>
          <h2 className="text-center text-2xl md:text-xl lg:text-[26px] font-bold mb-6">{blog.titulo}</h2>
          <p className="text-blue-button">{formatDateToLocal(blog.publishedAt)}</p>
          <hr className="border-black mb-4" />
          <p className="mb-4">{blog.descripcion}</p>
          <Link href={`/articulos/${blog.url}`}>
            <button className="font-bold underline text-black hover:text-blue-button">Leer más.</button>
          </Link>
        </div>
      ))}
    </article>
  )
}
