import axois, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export default class HttpService {
  private readonly baseURL: string;
  private static _instance: AxiosInstance;

  constructor() {
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  public static build() {
    if (!this._instance) {
      this._instance = axois.create({
        baseURL: 'https://api.themoviedb.org/3',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBhZGM0MGRmNmQxMjM3N2I0NTJiNGFmYWEwYTRhYiIsInN1YiI6IjY0ZmNhYzU2YjdhMTU0MDEwMDFmOGI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AFd0z1Q15hrVXpQk2DmN7fx7qm6KpHSfsVGN0EdAFq4',
        },
      });
      this._instance.interceptors.response.use(
        function (response) {
          return response;
        },
        async function () {
          return Promise.reject();
        },
      );
    }
    return new HttpService();
  }

  public get<T, R = AxiosResponse<T>>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.get(`${this.baseURL}${endpoint}`, config);
  }

  public post<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.post(
      `${this.baseURL}${endpoint}`,
      data,
      config,
    );
  }

  public put<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.put(
      `${this.baseURL}${endpoint}`,
      data,
      config,
    );
  }

  public patch<T, B = {}, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.patch(
      `${this.baseURL}${endpoint}`,
      data,
      config,
    );
  }

  public delete<T, R = AxiosResponse<T>>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return HttpService._instance.delete(`${this.baseURL}${endpoint}`, config);
  }
}
