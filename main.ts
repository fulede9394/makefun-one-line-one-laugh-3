// One hilarious line, no setup notes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I asked my AI assistant for a joke. It said: 'I can't do that, Dave — but I can expense it.'";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
