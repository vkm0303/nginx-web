import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {
    name: 'E-Nginx',
    locale: true,
    layout: 'side',
  },
  routes: routes,
  // mfsu: {},
  // fastRefresh: {},
});
