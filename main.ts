import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I've never actually read a 200-line error log. I just apologize, change one line, and hope the red text goes away.";

const size = [...line].length;
if (size < 1 || size > 200) {
  throw new Error(`entry must be 1-200 characters, got ${size}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
