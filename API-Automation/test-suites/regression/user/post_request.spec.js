import { newUserData, createUserWithListData } from "../../../data/commonData.js";
import { createUser, createUserWithList, deleteUserWithValidUsername } from "../../../tasks/api-tasks.js";
import _ from "lodash";

describe("New user creation", () => {

  it("TC_3_2 Create new user", async () => {
    const response = await createUser(newUserData);
    expect(response.status).toBe(200);
    expect(_.isEqual(response.data, newUserData));
  });

  it("TC_7_1 Create user with list", async () => {
    const response = await createUserWithList(createUserWithListData);
    expect(response.status).toBe(200);
    expect(_.isEqual(response.data, createUserWithListData));
  });
  afterEach(async () => {
    await deleteUserWithValidUsername(newUserData.username);
  })
});

