import {
  i18n
} from 'jinge';
import {
  Html5Router
} from 'jinge-ui-router';

import Routes from '../routes';
import {
  getEnv
} from './env';

export const router = new Html5Router();
router.register(...Routes);
router.otherwise('home');
router.baseHref = `${getEnv('baseHref')}${i18n.locale}/`;
router.start();
