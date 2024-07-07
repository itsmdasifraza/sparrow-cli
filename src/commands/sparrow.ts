import { Command } from "commander";
import figlet from "figlet";

export class SparrowCommand {
  constructor(private program: Command) {}

  public exec = () => {
    this.program
      .command("sparrow")
      .description('Print "sparrow" in ASCII art')
      .action(() => {
        figlet.text(
          "SPARROW !",
          {
            horizontalLayout: "fitted",
            verticalLayout: "fitted",
            font: "Standard",
            width: 80,
            whitespaceBreak: true,
          },
          function (err, data) {
            if (err) {
              console.log("Something went wrong...");
              console.dir(err);
              return;
            }
            console.log(data);
          }
        );
      });
  };
}
