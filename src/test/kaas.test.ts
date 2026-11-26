import { describe, expect, it } from "vitest";
import { cheeses, categorieen } from "@/data/cheeses";
import { vragen } from "@/data/quiz";

describe("kaasencyclopedie", () => {
  it("heeft minstens 40 kazen en overal een afbeelding", () => {
    expect(cheeses.length).toBeGreaterThanOrEqual(40);
    expect(cheeses.every((c) => c.image)).toBe(true);
  });
  it("heeft minstens 10 kazen in iedere regio", () => {
    expect(categorieen.length).toBeGreaterThanOrEqual(20);
    for (const regio of categorieen) {
      const aantal = cheeses.filter((c) => c.category === regio).length;
      expect(aantal, regio).toBeGreaterThanOrEqual(10);
    }
  });
  it("heeft voor iedere kaas een uniek id", () => {
    expect(new Set(cheeses.map((c) => c.id)).size).toBe(cheeses.length);
  });
  it("quiz heeft 10 vragen", () => {
    expect(vragen).toHaveLength(10);
  });
});
