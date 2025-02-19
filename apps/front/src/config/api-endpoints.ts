
function buildApiUrl(path: string) {
    return `${process.env.BASEURL}${path}`;
}


export const ApiEndpoints={
    createBook:(id:number)=>buildApiUrl(`/books/${id}`),
    updateBook:(id:number)=>buildApiUrl(`/books/${id}`),
    deleteBook:(id:number)=>buildApiUrl(`/books/${id}`),
    getBook:(id:number)=>buildApiUrl(`/books/${id}`),
    getAllBooks:buildApiUrl('/books'),
}