import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-bold">404 No Encontrado</h2>
      <p>No se pudo encontrar el artículo solicitado.</p>
      <Link href="/articulos"
        className="mt-4 rounded-md bg-gray-button px-4 py-2 text-sm text-white transition-colors hover:bg-purple-button">
        Regresar
      </Link>
    </main>
  );
}