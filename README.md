# BeaconClaw docs

The source of [docs.beaconclaw.ai](https://docs.beaconclaw.ai): documentation for BeaconClaw, which shows you which AI agents you run, whether each is healthy, and who looks after it.

Pages are Markdown (MDX). The site is built by [Mintlify](https://mintlify.com) from this repository: everything merged to `main` is published.

## Layout

| Path | What it holds |
| --- | --- |
| `docs.json` | The site's settings and navigation |
| `index.mdx`, `how-it-works.mdx`, `security.mdx` | Getting started |
| `cli/` | Installing, updating and configuring the CLI |
| `concepts/` | Organizations and access, health, alerts |
| `guides/` | Enrolling an agent, API keys, maintenance from an agent, the MCP server |
| `openapi.json` | The API's description, which the API reference is generated from |

## Preview locally

```sh
npm install
npm run dev
```

The site opens at `http://localhost:3000`. To check for broken links and invalid settings:

```sh
npm run check
```

## Propose a change

Open a pull request. Please keep to what the software does today: commands, flags, paths and defaults are copied from the released CLI and the API description, not written from memory.

The CLI's own source is at [beaconclaw/beaconclaw](https://github.com/beaconclaw/beaconclaw).

## For agents

`AGENTS.md` has the writing rules. The published site serves `llms.txt`, `llms-full.txt`, and a Markdown version of every page (add `.md` to its address).
