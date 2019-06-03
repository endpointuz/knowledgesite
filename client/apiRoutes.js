const host = 'http://185.8.212.25:9090';
const api = '';

export default {
  logIn: () => [host, api, 'auth/admin/login/'].filter(el => el).join('/'),

  /**
   * [agents API]
   */
  agentsList: () => [host, api, 'admin/agents/'].filter(el => el).join('/'),
  updateAgent: id => [host, api, `admin/agents/${id}/`].filter(el => el).join('/'),
  agentDetail: id => [host, api, `admin/agents/${id}/`].filter(el => el).join('/'),

  /**
   * [Catalog API]
   */
  cities: () => [host, api, 'admin/city/'].filter(el => el).join('/'),
  cityDetail: id => [host, api, `admin/city/${id}/`].filter(el => el).join('/'),
  cityPatch: id => [host, api, `admin/city/${id}/`].filter(el => el).join('/'),
  retails: () => [host, api, 'admin/retails/'].filter(el => el).join('/'),
  retailPatch: id => [host, api, `admin/retails/${id}/`].filter(el => el).join('/'),

  /**
   * [Interview API]
   */
  interviewList: () => [host, api, '/admin/interview/'].filter(el => el).join('/'),
  questions: id => [host, api, `/admin/interview/${id}/questions/`].filter(el => el).join('/'),
  answers: id => [host, api, `/admin/interview/${id}/answers/`].filter(el => el).join('/'),
};
