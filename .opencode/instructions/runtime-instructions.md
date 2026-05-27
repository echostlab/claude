# OpenCode runtime instructions

This repository is pinned to `azure-foundry/gpt-5.4` through the custom `azure-foundry` provider in `opencode.json`.

## Model and provider defaults

- Keep the default model on `azure-foundry/gpt-5.4` unless the user explicitly asks for another model.
- Resolve credentials from environment variables, never from checked-in secrets.
- Required environment variables:
  - `AZURE_FOUNDRY_BASE_URL`
  - `AZURE_FOUNDRY_API_KEY`
- GitHub automation uses `GITHUB_TOKEN` and maps it into the GitHub MCP server through `GITHUB_PERSONAL_ACCESS_TOKEN`.

## Effective workspace layout

Required project-root entrypoints:
- `AGENTS.md` for project-wide rules bootstrap
- `opencode.json` for providers, models, permissions, instructions, and MCP servers

Project-local OpenCode assets under `.opencode/`:
- `.opencode/instructions/*.md` for additional instruction documents referenced from `opencode.json.instructions`
- `.opencode/agents/*.md` for agents
- `.opencode/commands/*.md` for commands
- `.opencode/skills/<name>/SKILL.md` for skills

## Tools and permissions

- Prefer `permission` rules over deprecated `tools` booleans.
- This workspace is configured for unattended automation: do not ask the user, client, or PR author for permission during CI reviews.
- Keep `question` denied for automation paths and use direct `allow` rules for the runtime tools the workflow needs.
- Keep built-in file, search, git, and GitHub review capabilities available.
- Allow `context7_*` by default.
- Allow `github_*` by default so PR review agents can comment without interactive approval gates.

## MCP servers

- `context7` is enabled by default for documentation lookup.
- `github` is enabled and expects `GITHUB_TOKEN` to be present in the runtime environment.

## GitHub Actions automation behavior

- The GitHub Actions workflow must load the repository-root `opencode.json`.
- The workflow must also use the checked-in `.opencode/` agents, commands, skills, and instructions.
- Automation is non-interactive: never block waiting for clarification from a human during CI execution.
- Opened issues and `/oc` issue comments should route to implementation work.
- Opened or updated PRs should route to code review.
- `/oc` comments on PR threads or review comments should route to implementation work on the PR branch when possible.
- Prefer concise, high-confidence review comments over speculative feedback.

## Editing rule

When updating this workspace, keep model references consistent across:
- `opencode.json`
- `AGENTS.md`
- `.opencode/instructions/*.md`
- `.opencode/agents/*.md`
- `.opencode/commands/*.md`
- `.opencode/skills/*/SKILL.md`
