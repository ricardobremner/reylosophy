import { getBlogId } from '@/app/lib/data';
import { formatDateToLocal } from '@/app/lib/utils';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';

export default async function page({ params }: { params: Promise<{ id: number }> }) {
  const id = (await params).id
  const post = await getBlogId(`/blogs/${id}`);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div>
        <h2 className="text-center text-[32px] font-bold my-[30px] md:text-[42px]">{post.titulo}</h2>
        <p className="ml-4 mb-4 md:ml-36 md:mb-6 lg:ml-[22rem] text-gray-button">
          {formatDateToLocal(post.publishedAt || post.updatedAt)}</p>
        <Markdown className="mx-5 mb-6 md:mx-[150px] lg:mx-[350px] whitespace-pre-wrap"
          remarkPlugins={[remarkGfm]}>
          {post.contenido}
        </Markdown>
      </div>
    </article>
  )
}
