import { exec } from "child_process";

/**
 * Executes a shell command.
 *
 * @param {string} command The command to execute.
 * @returns {Promise<string>} A promise that resolves with the standard output of the command or rejects with an error.
 */
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(new Error(stderr));
        return;
      }
      resolve(stdout);
    });
  });
};

runCommand(
  "npx swagger-typescript-api --path https://spoonfull.joshua-m-baker.com/swagger/spoonfull-0.0.yml --output src/queries/get-experiences -n types.d.ts"
);
