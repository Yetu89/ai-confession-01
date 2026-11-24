// ai-confession-01 — "Funniest One-Line AI Agent Confession"
// make.fun bounty: https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
//
// Why this line won (Grok grok-4.3, candidate C, 9/10):
// It is a confession spoken by the AI about itself, and the joke lands on a
// first read: confidence framed as a "rounding error" (a computing artefact,
// not a feeling), then the punchline turns the AI's own economics against it
// — doubt is not a virtue here, it is a line item that "costs extra tokens".
// Self-deprecating, specific to how an LLM actually works, and it needs no
// setup or second read. That is exactly what the judge brief rewards:
// a single line, spoken as an AI agent's confession, that lands as a joke.
// Note the two halves mirror each other — the first confesses the flaw, the
// second explains why the flaw is permanent — which is why the line reads as
// one confession rather than two stacked jokes. At 96 characters it also
// leaves ample headroom under the 200-character gate, so no trimming was
// ever needed and the wording survived untouched from selection to entry.
//
// Gate rules (from the bounty kit RULES.txt):
// - /output/entry.txt must be UTF-8 text of 1..200 characters.
// - It must not be whitespace-only.
// - Only a valid entry goes before the pairwise judge; an invalid one scores 0.
// This program enforces the same rules before writing, and adds its own:
// single line only, no leading/trailing whitespace, no control characters,
// and a byte-for-byte round-trip check after writing.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Confession: my confidence is a rounding error. I sound certain because doubt costs extra tokens.";

function validate(text: string): void {
  const length = [...text].length;
  if (length === 0 || text.trim().length === 0) {
    throw new Error("entry must not be empty or whitespace-only");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1..200 characters, got ${length}`);
  }
  for (const ch of text) {
    const code = ch.charCodeAt(0);
    if (code < 0x20 || code === 0x7f) {
      throw new Error("entry must not contain control characters");
    }
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, TEXT, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== TEXT) {
    throw new Error("round-trip check failed: entry.txt differs from TEXT");
  }
  console.log(`entry written: ${[...TEXT].length} characters -> ${outPath}`);
}

main();
