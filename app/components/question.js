import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuestionComponent extends Component {
  @tracked value = null;

  @action
  valueChanged({ target }) {
    this.value = Number(target.value);
    this.args.onChange(this.value, this.args.uuid);
  }
}
