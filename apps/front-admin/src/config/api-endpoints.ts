import { clientEnv } from "@/config/clientEnv";

function buildApiUrl(path: string) {
  return `${clientEnv.NEXT_PUBLIC_BASE_URL}${path}`;
}

export const ApiEndpoints = {
  signIn: buildApiUrl(`/api/collections/users/auth-with-password`),
  signUp: buildApiUrl(`/books/`),
  getUserInfo: (id: string) =>
    buildApiUrl(`/api/collections/users/records/${id}`),
  deleteBook: (id: number) => buildApiUrl(`/books/${id}`),
  getBook: (id: number) => buildApiUrl(`/books/${id}`),
  getAllBooks: buildApiUrl("/books"),
};
