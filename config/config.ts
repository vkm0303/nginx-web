import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {
    name: 'E-Nginx',
    locale: true,
    layout: 'side',
  },
  // proxy: {
  //   '/api': {
  //     target: 'http://127.0.0.1:8080/',
  //     changeOrigin: true,
  //   },
  // },
  routes: routes,
  mfsu: {},
  // fastRefresh: {},
});
