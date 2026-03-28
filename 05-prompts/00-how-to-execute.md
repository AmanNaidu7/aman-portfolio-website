# How to Execute Prompt Files with Codex

## Purpose

This folder contains reusable execution prompts for Codex or another AI coding assistant.

The goal is to avoid repeatedly typing long prompts in chat.

## Standard execution pattern

Use a short instruction like:

Read `05-prompts/01-build-ui-shell.md` and execute it.

Or:

Use `05-prompts/02-build-homepage.md` as the execution instructions.
Also use `01-planning` and `02-content` as the source of truth.
Implement changes in `03-app/portfolio-site`.

## Recommended short command

Use this pattern:

Read `05-prompts/<prompt-file>.md`.
Use it as the execution instructions.
Also use:
- `01-planning/*`
- `02-content/*`
Implement changes in:
- `03-app/portfolio-site`

## General rules for Codex

Codex should:
- read the referenced prompt file first
- read the relevant planning/content files before coding
- treat planning docs as source of truth
- keep the code modular and readable
- avoid unnecessary complexity
- avoid making unrelated changes

## Suggested workflow

1. Choose one prompt file.
2. Tell Codex to read and execute it.
3. Review the changes.
4. Run the local app.
5. Commit working changes.
6. Move to the next prompt file.

## Important note

Do not try to implement the whole website in one giant step.
Run one focused prompt file at a time.
