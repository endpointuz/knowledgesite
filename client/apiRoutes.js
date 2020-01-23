const host = 'https://api.knowledge.uz';
const api = 'api';
const version = 'v1';

export default {
  courses: () => [host, api, version, 'core/courses/'].join('/'),
  courseDetail: slug => [host, api, version, 'core/courses', slug, ''].join('/'),
  callRequest: () => [host, api, version, 'support/call_request/'].join('/'),
  articles: () => [host, api, version, 'support/articles/'].join('/'),
  article: slug => [host, api, version, 'support/articles', slug, ''].join('/'),
};
