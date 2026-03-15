export const FALLBACK_PUBLIC_API_URL = 'http://127.0.0.1:8000/api';

const getRuntimeApiUrl = () => {
  if (typeof window === 'undefined') {
    return FALLBACK_PUBLIC_API_URL;
  }

  const { protocol, hostname, port } = window.location;

  if (port === '3000') {
    return `${protocol}//${hostname}:8000/api`;
  }

  if (port === '3001') {
    return `${protocol}//${hostname}:8001/api`;
  }

  return `${protocol}//${hostname}:8001/api`;
};

export const getClientApiUrl = () =>
  import.meta.env.PUBLIC_API_URL || getRuntimeApiUrl();
