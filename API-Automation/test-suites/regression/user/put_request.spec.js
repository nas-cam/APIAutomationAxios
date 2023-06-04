import { createUser, deleteUserWithValidUsername, updateUser } from "../../../tasks/api-tasks.js";
import { newUserData, updateUserData } from "../../../data/commonData.js";
import _ from "lodash";

describe("Update user", () => {

  beforeEach(async () => {
    await createUser(newUserData);
  });

  it("TC_4_1 User is able to update information of user in system", async () => {
    const response = await updateUser(newUserData.username, updateUserData);
    expect(response.status).toBe(200);
    expect(_.isEqual(response.data, updateUserData));
  });

  afterEach(async () => {
    await deleteUserWithValidUsername(newUserData.username);
  });

});
