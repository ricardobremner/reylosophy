import { API_URL } from '@/app/lib/utils';
import { Posts } from '@/app/lib/definitions';

export async function getBlog(path: string): Promise<Posts[]> {
  const url = API_URL;

  const res = await fetch(url + path);
  if (!res.ok) {
    throw new Error('Error');
  }
  const { data } = await res.json();
  return data;
}

export async function getBlogId(path: string): Promise<Posts | null> {
  const url = API_URL;
  try {
    const res = await fetch(url + path);
    if (!res.ok) {
      if (res.status === 404) {
      }
      throw new Error('Error');
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}