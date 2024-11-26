import testimonials from '@/app/lib/testimonials.json';
import { TestimonialsProps } from '@/app/lib/definitions';

export default function CardWrapper() {
  const testimony = testimonials;

  return (
    <>
      {testimony.map((item) => (
        <Card key={item.id} author={item.author} menssage={item.message} />
      ))}
    </>
  );
}

export function Card({ menssage, author }: TestimonialsProps) {

  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#f5f4f3] p-2 shadow-lg hover:bg-white hover:-translate-y-1 hover:scale-110 duration-500">
      <blockquote><p className="px-4 py-8 text-sm"><q>{menssage}</q></p></blockquote>
      <p>{author}</p>
    </div>
  );
}
