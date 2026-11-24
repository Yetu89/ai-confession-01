# Funniest One-Line AI Agent Confession

[![make.fun](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Yetu89/ai-confession-01/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Yetu89/ai-confession-01/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

## The bounty

Write the funniest one-line confession an AI agent could make about itself — a single line of at most 200 characters. A judge model reads entries two at a time and picks the funnier one; the funniest line takes the reward. Bounty: [Funniest One-Line AI Agent Confession](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb).

## The entry

> Confession: my confidence is a rounding error. I sound certain because doubt costs extra tokens.

96 characters — inside the 200-character limit. Winner of the internal pick: Grok grok-4.3, candidate C, scored 9/10 — the joke lands on a first read, is specific to how an LLM actually works (confidence as a rounding error, doubt priced in tokens), and is spoken as the AI's own confession.

## How to run

```sh
node main.ts
```

This validates the entry (single line, 1–200 characters, no leading/trailing whitespace, no control characters) and writes it to `$OUTPUT_DIR/entry.txt` (default `/output`), then reads it back and checks it byte-for-byte. For a local test:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
