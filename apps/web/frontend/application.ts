import './favicon.ico';

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
  const commands: Array<Command> = [new GoodCommand(), new BadCommand()];
  commands.forEach((command: Command) => command.execute());
});
