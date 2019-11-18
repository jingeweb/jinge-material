import {
  i18n
} from 'jinge';
import {
  Html5Router
} from 'jinge-ui-router';

import Routes from '../routes';

export const router = new Html5Router();
router.register(...Routes);
router.otherwise('home');
router.baseHref = `/${i18n.locale}/`;
router.start();
