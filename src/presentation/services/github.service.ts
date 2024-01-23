import { GitHubIssue, GitHubStar } from "../../interfaces";

export class GitHubService {
  constructor() {}

  onStar(payload: GitHubStar): string {
    const { action, repository, sender } = payload;

    return `User ${sender.login} ${action} a star on ${repository.full_name}`;
  }

  onIssue(payload: GitHubIssue): string {
    const { sender, action, repository, issue } = payload;

    return `User ${sender.login} ${action} an issue on ${repository.full_name} with title: ${issue.title}`;
  }
}
