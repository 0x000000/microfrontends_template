import Vue from 'vue';
import Component from 'vue-class-component';
import Template from './button_template.html?style=./button_style.scss';

@Template
@Component({
  props: {
    text: String
  }
})
export default class ButtonView extends Vue {}
