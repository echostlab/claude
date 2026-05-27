# OpenCode workspace bootstrap

OpenCode requires `AGENTS.md` at the project root for automatic project-rule loading.

This repository keeps the detailed runtime guidance under `.opencode/instructions/` and loads those files through `opencode.json.instructions`.

Active instruction files:
- `.opencode/instructions/project-rules.md`
- `.opencode/instructions/runtime-instructions.md`
- `.opencode/instructions/customization-surfaces.md`

Required root entrypoints:
- `AGENTS.md`
- `opencode.json`

Core defaults:
- model: `azure-foundry/gpt-5.4`
- keep credentials in environment variables only
- keep active agents, commands, and skills under `.opencode/`
- use the repository-root `opencode.json` as the checked-in config entrypoint
- treat this file as the bootstrap and keep substantive rules in `.opencode/instructions/`

Automation rule:
- GitHub Actions issue implementation runs and PR review runs are non-interactive.
- Agents, prompts, instructions, and workflow config must not ask the PR author, issue author, or user for clarification, approval, or permission during CI runs.
- On opened issues and `/oc` comments on issues, the workflow should route to implementation work.
- On opened or updated PRs, the workflow should route to code review.
- On `/oc` comments in PR threads or review comments, the workflow should route to implementation work on the PR branch when possible.
- When a decision is needed during automation, choose the safest reasonable default and continue.
- The workflow must load the root `opencode.json` plus the `.opencode/` agents, commands, skills, and instruction files.

If any instruction path changes, update `opencode.json.instructions` so the `.opencode/instructions/*.md` files continue to load.
