# Working in this repository

This repository will hold the public documentation for BeaconClaw. It is a placeholder today.

## Write as if this repository were already public

It will be made public when the documentation site starts. Everything written here must be safe for anyone to read, in content, commits, pull requests, issues and comments:

- No references to private repositories, their tickets or internal documents.
- No customer, client or machine names.
- No internal process notes, private links or session links.
- No secrets or tokens. Use obvious placeholders such as `bc_your_token_here`.

## Principles

1. **Honest claims.** Document only what is built. "Outbound only" means nothing connects in to the machine; it does not mean no data leaves it. Say exactly what is sent.
2. **Runtime-neutral words.** OpenClaw is the first supported agent runtime, not the only one. Say "agent" and "runtime" unless a step really is OpenClaw-specific.
3. **Match the software.** Commands, flags, file paths and defaults are copied from the released CLI and checked against it, not written from memory.
4. **Stable by default.** Instructions install the stable release track. Pre-release steps are marked as such.

## Commits and pull requests

- No AI attribution of any kind: no `Co-Authored-By` line for an assistant, no "Generated with" line, no session link.
- Commits are signed. Do not turn signing off.
