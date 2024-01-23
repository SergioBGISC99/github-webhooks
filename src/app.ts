import express from "express";
import { envs } from "./config";
import { GithubController } from "./presentation/github/controller";
import { GitHubService } from "./presentation/services/github.service";
import { DiscordService } from "./presentation/services/discord.service";

(() => {
  main();
})();

function main() {
  const app = express();

  app.use(express.json());

  const githubService = new GitHubService();
  const discordService = new DiscordService();

  const controller = new GithubController(githubService, discordService);

  app.post("/api/github", controller.webHookHandler);

  app.listen(envs.PORT, () => {
    console.log(`Server running on port ${envs.PORT}`);
  });
}
