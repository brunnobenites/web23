import { describe, test, expect } from "@jest/globals";
import Blockchain from "../src/lib/blockchain";

describe("Block tests", () => {
  test("Should has genenis block", () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
  });
});
