---
description: Review the newest PR commits first with the dedicated reviewer agent
agent: reviewer
model: azure-foundry/gpt-5.4
---

Review the current pull request with high-signal feedback only.
If the prompt includes a previous PR head SHA, inspect the newly pushed commits and incremental diff first, then expand to the full PR context only when needed.
