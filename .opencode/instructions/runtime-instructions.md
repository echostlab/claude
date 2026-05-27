# OpenCode runtime instructions

This repository is pinned to `azure-foundry/gpt-5.4` through the custom `azure-foundry` provider in `opencode.json`.

## Model and provider defaults

- Keep the default model on `azure-foundry/gpt-5.4` unless the user explicitly asks for another model.
- Resolve credentials from environment variables, never from checked-in secrets.
- Required environment variables:
  - `AZURE_FOUNDRY_BASE_URL`
  - `AZURE_FOUNDRY_API_KEY`

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
- Keep built-in file and search tools available.
- Keep GitHub MCP tools approval-gated with `github_*: ask`.
- Allow Context7 MCP tools by default with `context7_*: allow`.

## MCP servers

- `context7` is enabled by default for documentation lookup.
- `github` is present but disabled until `GITHUB_TOKEN` is configured.

## Editing rule

When updating this workspace, keep model references consistent across:
- `opencode.json`
- `AGENTS.md`
- `.opencode/instructions/*.md`
- `.opencode/agents/*.md`
- `.opencode/commands/*.md`
- `.opencode/skills/*/SKILL.md`
