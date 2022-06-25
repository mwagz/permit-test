import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuizComponent extends Component {
  @tracked formValues = {};
  @tracked submitted = false;
  @tracked valid = false;
  @tracked showHints = true;
  @tracked showModal = false;

  get percentage() {
    if (!this.valid) {
      let { questions } = this.args;
      let correct = Object.keys(this.formValues).filter((uuid) => {
        return questions[uuid].answer === this.formValues[uuid];
      });

      return ((correct.length / this.args.questions.length) * 100).toFixed(2);
    }
  }

  @action
  updateModel(value, uuid) {
    this.formValues[uuid] = value;
  }

  @action
  submit(ev) {
    let { questions } = this.args;
    this.valid = Object.keys(this.formValues).every((uuid) => {
      return questions[uuid].answer === this.formValues[uuid];
    });

    if (Object.keys(this.formValues).length !== questions.length) {
      this.valid = false;
    }

    this.submitted = true;
    this.showModal = true;
    ev.preventDefault();
  }

  @action
  toggleHints() {
    this.showHints = !this.showHints;
  }

  @action
  closeModal() {
    this.showModal = false;
    this.valid = false;
  }
}
