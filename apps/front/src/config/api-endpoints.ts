function buildApiUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

function buildBackendApiUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BACKEND_API_URL}${path}`;
}

export const ApiEndpoints = {
  getAllItems: buildApiUrl(`/api/items`),
  getAllArmors: buildApiUrl(`/api/armors`),
  login: buildBackendApiUrl(`/api/collections/users/auth-with-password`),
  register: buildBackendApiUrl(`/api/collections/users/records`),
};
