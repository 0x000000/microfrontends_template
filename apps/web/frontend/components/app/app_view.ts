import Vue from 'vue';
import Component from 'vue-class-component';
import Template from './app_template.html';
import ButtonView from "../button/button_view";

@Template
@Component({
  components: {
    psButton: ButtonView
  }
})
export default class AppView extends Vue {
  text: String = "Hi!";
}
