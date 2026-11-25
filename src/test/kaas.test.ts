import { describe, expect, it } from "vitest";
import { cheeses } from "@/data/cheeses";
import { vragen } from "@/data/quiz";

describe("kaasencyclopedie", () => {
  it("heeft minstens 40 kazen met een eigen afbeelding", () => {
    expect(cheeses.length).toBeGreaterThanOrEqual(40);
    expect(new Set(cheeses.map((c) => c.image)).size).toBe(cheeses.length);
    expect(cheeses.every((c) => c.image)).toBe(true);
  });
  it("quiz heeft 10 vragen", () => {
    expect(vragen).toHaveLength(10);
  });
});
