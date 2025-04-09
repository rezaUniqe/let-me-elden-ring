function buildApiUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export const ApiEndpoints = {
  getAllItems: buildApiUrl(`/api/items`),
  getAllArmors: buildApiUrl(`/api/armors`),
};
