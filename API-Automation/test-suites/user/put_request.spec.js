import { updateUser } from "../../tasks/api-tasks.js";

describe("USER - PUT API - positive", () => {
  it("TC_4_1 User is able to update information of user in system", async () => {
    const response = await updateUser();
    expect(response.status).toBe(200);
  });
});
