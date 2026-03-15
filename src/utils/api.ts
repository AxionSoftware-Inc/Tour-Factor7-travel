export const FALLBACK_PUBLIC_API_URL = 'http://127.0.0.1:8000/api';

const buildApiUrl = (protocol: string, hostname: string, port: string) => {
  if (port === '3000') {
    return `${protocol}//${hostname}:8000/api`;
  }

  if (port === '3001') {
    return `${protocol}//${hostname}:8001/api`;
  }

  return `${protocol}//${hostname}:8001/api`;
};

export const getRuntimeApiUrl = () => {
  if (typeof window === 'undefined') {
    return FALLBACK_PUBLIC_API_URL;
  }

  const { protocol, hostname, port } = window.location;
  return buildApiUrl(protocol, hostname, port);
};

export const getClientApiUrl = () =>
  import.meta.env.PUBLIC_API_URL || getRuntimeApiUrl();

export const getServerApiUrl = (url: URL, internalApiUrl?: string | null) => {
  if (internalApiUrl) {
    return internalApiUrl;
  }

  return buildApiUrl(url.protocol, url.hostname, url.port);
};
