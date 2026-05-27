# OpenCode project rules

This file contains the substantive project rules for this repository. It is loaded through `opencode.json.instructions` so that most checked-in instruction markdown can live under `.opencode/` while preserving OpenCode's required project-root entrypoints.

## Effective workspace layout

Required project-root entrypoints:
- `opencode.json` — project configuration using the official schema
- `AGENTS.md` — project rules bootstrap loaded automatically by OpenCode

Active project-local OpenCode assets under `.opencode/`:
- `.opencode/instructions/*.md` — additional instruction documents loaded via `opencode.json.instructions`
- `.opencode/agents/*.md` — custom agents
- `.opencode/commands/*.md` — reusable slash commands
- `.opencode/skills/<name>/SKILL.md` — reusable skills

## Active runtime defaults

- Default model: `azure-foundry/gpt-5.4`
- Default agent: `build`
- Built-in `build`, `plan`, `general`, `explore`, and `scout` are all pinned to `azure-foundry/gpt-5.4`
- Custom migrated agents and commands are also pinned to `azure-foundry/gpt-5.4`

## Azure AI Foundry provider config

The checked-in provider is a custom OpenCode provider named `azure-foundry`.

Required environment variables:
- `AZURE_FOUNDRY_BASE_URL` — full OpenAI-compatible Azure Foundry endpoint
- `AZURE_FOUNDRY_API_KEY` — Azure Foundry API key

Recommended endpoint pattern:
- `https://<resource>.openai.azure.com/openai/v1`

If your deployment endpoint differs, set `AZURE_FOUNDRY_BASE_URL` to the exact compatible base URL exposed by your Azure AI Foundry deployment.

## MCP servers configured in opencode.json

- `context7` — enabled by default via `npx -y @upstash/context7-mcp`
- `github` — configured but disabled by default until `GITHUB_TOKEN` is available

Additional runtime instructions are loaded through `opencode.json.instructions`:
- `.opencode/instructions/project-rules.md`
- `.opencode/instructions/runtime-instructions.md`
- `.opencode/instructions/customization-surfaces.md`

## Migration rules

- Treat `.opencode/agents/*.md` as the canonical replacement for legacy `.agent.yaml` / `.agent.md` style definitions.
- Treat `.opencode/commands/*.md` as the canonical replacement for legacy `.prompt.md` slash prompts.
- Treat `AGENTS.md` plus optional `instructions` entries in `opencode.json` as the canonical replacement for legacy instruction files.
- Keep skill packages in `.opencode/skills/<name>/SKILL.md` with lowercase hyphenated names.
- Prefer `permission` rules over deprecated `tools` booleans when authoring agents.
- Keep `description` values short, keyword-rich, and specific so OpenCode can discover the right agent or skill.

## Chronicle compatibility note

The original Chronicle prompts depended on source-specific session-store tooling. In OpenCode, the migrated chronicle agents and commands should work from:
- repository history
- exported chat/session logs
- local notes and standup files
- task documents supplied by the user

If that data is missing, the agent should say so explicitly instead of pretending session telemetry exists.

## Schema note

The repository keeps a custom provider alias named `azure-foundry` in `provider.azure-foundry`, but the active checked-in default model is `azure-foundry/gpt-5.4` because that is accepted by the current published OpenCode schema. If you prefer selecting the custom alias interactively after startup, use `/models` once the Azure Foundry environment variables are set.

## Customization references

For the current canonical mapping between prompts, instructions, commands, agents, and skills, see `.opencode/instructions/customization-surfaces.md`.
