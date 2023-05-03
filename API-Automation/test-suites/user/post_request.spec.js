import { createUser, createUserWithList } from "../../tasks/api-tasks.js";

describe("USER - POST API requests", () => {
  it("TC_3_2 Create new user", async () => {
    const response = await createUser();
    expect(response.status).toBe(200);
  });

  it("TC_7_1 Create user with list", async () => {
    const response = await createUserWithList();
    expect(response.status).toBe(200);
  });
});

