export const FALLBACK_PUBLIC_API_URL = 'http://127.0.0.1:8000/api';

export const getClientApiUrl = () =>
  import.meta.env.PUBLIC_API_URL || FALLBACK_PUBLIC_API_URL;
