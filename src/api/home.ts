import HttpService from '../adapter/axios';

const httpsService = HttpService.build();

export const getMovies = async () => {
  return await httpsService.get('/account/null/lists?page=1');
};
