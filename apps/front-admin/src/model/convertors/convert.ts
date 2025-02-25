import { PagedData } from "@/model/paged-data";
import { PagedApiData } from "@/model/api/create-paged-data-schema";
import { Book } from "@/model/book";
import { RawBook } from "@/model/api/books/raw-book";

type Mapper<Domain, Api> = {
  toDomain: (apiModel: Api) => Domain;
  toApi?: (domainModel: Domain) => Api;
};

export const bookMapper: Mapper<Book, RawBook> = {
  toDomain: (rawBook) => ({
    id: rawBook.id,
    genre: rawBook.genre,
    coverImage: rawBook.coverImage,
    title: rawBook.title,
    author: rawBook.author,
    description: rawBook.description,
    publicationYear: rawBook.publicationYear,
  }),
};

export function pagedDataConvertor<DomainData, ApiData>(
  mapper: Mapper<DomainData, ApiData>,
  pagedApiData: PagedApiData<ApiData>,
): PagedData<DomainData> {
  return {
    ...pagedApiData,
    items: pagedApiData.items.map(mapper.toDomain),
  };
}
