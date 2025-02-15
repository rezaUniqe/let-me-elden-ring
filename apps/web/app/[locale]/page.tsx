import BooksGrid from "@/app/[locale]/books-grid";

export default function Page() {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Featured Books</h1>
        <BooksGrid/>
      </div>
  );
}
