import express from "express";
import { envs } from "./config";
import { GithubController } from "./presentation/github/controller";
import { GitHubService } from "./presentation/services/github.service";
import { DiscordService } from "./presentation/services/discord.service";
import { GitHubSha256Middleware } from "./presentation/middlewares/github-sha256.middleware";

(() => {
  main();
})();

function main() {
  const app = express();

  app.use(express.json());

  const githubService = new GitHubService();
  const discordService = new DiscordService();

  const controller = new GithubController(githubService, discordService);

  app.use(GitHubSha256Middleware.verifySignature);

  app.post("/api/github", controller.webHookHandler);

  app.listen(envs.PORT, () => {
    console.log(`Server running on port ${envs.PORT}`);
  });
}
