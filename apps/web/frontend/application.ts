import './favicon.ico';
import './application.scss';

import Vue from 'vue';
import AppView from './components/app/app_view';


interface Command {
  execute(): void
}

class GoodCommand implements Command {
  execute(): void {
    console.log("Hi!");
  }
}

class BadCommand implements Command {
  execute(): void {
    throw "Boom!";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#app',
    render: h => h(AppView)
  });

  const commands: Array<Command> = [new GoodCommand(), new BadCommand()];
  commands.forEach((command: Command) => command.execute());
});
