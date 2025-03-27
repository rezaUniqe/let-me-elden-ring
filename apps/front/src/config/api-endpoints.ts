
function buildApiUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}


export const ApiEndpoints={
    getALlItems:buildApiUrl(`/api/items`),
}