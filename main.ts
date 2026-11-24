// One Letter for Your Day — make.fun entry.
// Writes exactly one letter (a single character, nothing else) to
// entry.txt in the output directory. No newline: the gate allows
// exactly 1 character, so the file must be exactly 1 byte.
//
// The letter stands for the word that describes the day.
//
// Final pick, revised after judging the candidates against the brief:
// "Z" for zero sleep — and, in the same instant, zombie. It beats the
// first version ("D" for drained) on the brief's own ordering: drained
// is true, but zero sleep is more vivid and specific (a concrete fact
// about last night, not a vague mood), funnier in a way that lands at
// once and gets repeated to a friend, and just as honest. Crucially,
// the judge sees only the letter, and Z is the rare letter whose hidden
// word every reader infers immediately — while still not being the
// obvious pick (A for amazing, T for tired, H for happy). The double
// reading reinforces one picture: upright, dressed, at work, dead
// behind the eyes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LETTER, "utf8");
