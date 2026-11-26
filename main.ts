// Deadpan Forecasts for Cities That Do Not Exist
// Writes one absurd-but-believable forecast line (1-160 chars) to /output/entry.txt.
// The line must read like a straight-faced TV meteorologist delivering the weather
// for a city that does not exist: concrete numbers, one vivid impossible detail,
// deadpan tone, no winking at the audience.
import { mkdirSync, writeFileSync } from "node:fs";

const forecast =
  "In Vexford, expect a high of 17 degrees with light rain falling upward, as the town's 4,000 umbrellas were recalled after Tuesday's gravity malfunction.";

if (forecast.length < 1 || forecast.length > 160 || !forecast.trim()) {
  throw new Error(`forecast length ${forecast.length} is outside 1-160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
