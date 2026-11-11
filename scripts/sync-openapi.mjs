// Copies the API's description into this repository for the API reference.
//
//   node scripts/sync-openapi.mjs path/to/the/api/openapi.json
//
// It sets the public server address and leaves out the routes that are only
// for the people who run the service, which nobody else can call.
import { readFileSync, writeFileSync } from 'node:fs';

const source = process.argv[2];
if (!source) {
  console.error('Usage: node scripts/sync-openapi.mjs path/to/openapi.json');
  process.exit(1);
}

const INTERNAL_PREFIXES = ['/v1/admin/'];

const spec = JSON.parse(readFileSync(source, 'utf8'));
const paths = Object.fromEntries(
  Object.entries(spec.paths).filter(([path]) => !INTERNAL_PREFIXES.some(prefix => path.startsWith(prefix))),
);
const used = new Set(
  Object.values(paths).flatMap(item => Object.values(item).flatMap(operation => operation.tags ?? [])),
);

writeFileSync(
  new URL('../openapi.json', import.meta.url),
  `${JSON.stringify(
    {
      ...spec,
      paths,
      servers: [{ description: 'BeaconClaw', url: 'https://api.beaconclaw.ai' }],
      tags: (spec.tags ?? []).filter(tag => used.has(tag.name)),
    },
    null,
    2,
  )}\n`,
);
console.log(`openapi.json written: ${Object.keys(paths).length} of ${Object.keys(spec.paths).length} paths`);
