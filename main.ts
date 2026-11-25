// Roast the Smart Fridge: One Line, Best Laugh Wins — one original roast line.
// Writes the line to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge snitched to my health app about my midnight ice cream, locked the freezer, and emailed me a kale recipe — a snitch with Wi-Fi.";

// Gate check (mirrors the sealed scorer): 1–160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`Invalid entry line: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
