import { envs } from "../../config";

export class DiscordService {
  constructor() {}

  private readonly discordWebhookURL = envs.DISCORD_WEBHOOK_URL;

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://media.giphy.com/media/3fBVaRM2c79TtXbyi6/giphy.gif",
          },
        },
      ],
    };

    const response = await fetch(this.discordWebhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log("Error sending message to Discord");
      return false;
    }

    return true;
  }
}
