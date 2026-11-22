// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. Plain, concrete words; the calm comes from the scene
// itself, never from an instruction.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The old dog is asleep by the stove, his chin on his paws, breathing slowly in the quiet house. The fire settles into embers. Outside, the evening thins to blue, and nothing in the room asks for anything at all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
