# OpenCode workspace bootstrap

OpenCode's rules documentation requires `AGENTS.md` in the project root for automatic project-rule loading.

This repository keeps most checked-in instruction markdown under `.opencode/instructions/` and loads those files through `opencode.json.instructions`.

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
- treat this file as the root bootstrap and keep detailed guidance in `.opencode/instructions/`

If any instruction path changes, update `opencode.json.instructions` so the `.opencode/instructions/*.md` files continue to load.
