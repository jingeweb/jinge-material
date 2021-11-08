// import framework base style
import '../../../style';

// import app style
import './style';

import { i18n, bootstrap, chunk } from 'jinge';
import { getEnv } from '../service/env';
import { router } from '../service/router';
import { setCurrentLocale } from '../service/locale';

import App from './app';
import Routes from './routes';

chunk.meta = getEnv('meta');
Routes.forEach((r) => router.register(r));

setCurrentLocale(i18n.locale);
bootstrap(App, document.getElementById('root-app'));
