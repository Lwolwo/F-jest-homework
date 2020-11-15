import { register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    await expect(register("username", "pwd")).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockReturnValue(false);
    await expect(register("username", "pwd")).rejects.toThrowError(
      "wrong username or password"
    );
  });
});
