import Route from '@ember/routing/route';

import { QUESTIONS } from './-utils/questions';

export default class IndexRoute extends Route {
  model() {
    return QUESTIONS;
  }
}
