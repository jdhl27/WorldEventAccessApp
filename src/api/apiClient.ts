import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {getToken} from '../utils/auth';

const MAX_RETRIES = 3;
const baseAPI = 'https://api.worldeventaccess.com/api';

// Extender la interfaz InternalAxiosRequestConfig para incluir __retryCount
interface CustomInternalAxiosRequestConfig<T = any>
  extends InternalAxiosRequestConfig<T> {
  __retryCount?: number;
}

const apiClient: AxiosInstance = axios.create({
  baseURL: baseAPI,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getToken();
    if (token) {
      // Verificar que config.headers esté definido y sea un objeto
      if (config.headers && typeof config.headers === 'object') {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const {config, response} = error;
    console.log('response: ', response);

    if (config) {
      // Verificar que response y response.status estén definidos
      if (response && response.status >= 500) {
        const customConfig = config as CustomInternalAxiosRequestConfig;
        customConfig.__retryCount = customConfig.__retryCount || 0;

        if (customConfig.__retryCount < MAX_RETRIES) {
          customConfig.__retryCount += 1;

          // Espera un poco antes de reintentar
          await new Promise(resolve => setTimeout(resolve, 500));

          // Reintenta la petición
          return apiClient(customConfig);
        }
      }
    }

    // Si no podemos reintentar o el error es de cliente (4xx), rechazamos el error
    return Promise.reject(error);
  },
);

export default apiClient;
