import { request } from 'umi';

export default {
  getNginxStatus: async () => {
    request('api/nginx_status', { method: 'GET' });
  },
};
