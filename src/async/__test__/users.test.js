import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const mockdata = { name: "username", age: 20 };
    axios.get.mockResolvedValue({ data: mockdata });
    await expect(getUsers()).resolves.toEqual(mockdata);
  });
});
