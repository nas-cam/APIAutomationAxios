import { createUser, deleteUserWithValidUsername, updateUser } from "../../../tasks/api-tasks.js";
import { newUserData, updateUserData } from "../../../data/commonData.js";
import _ from "lodash";

describe("Update user", () => {
let userId;

  beforeEach(async () => {
    const response = await createUser(newUserData)
    userId = response.data.id;
});

  it("TC_4_1 User is able to update information of user in system", async () => {
    const response = await updateUser(newUserData.username,updateUserData);
    expect(response.status).toBe(200);
    expect(_.isEqual(response.data, updateUserData));
  });

  afterEach(async () => {
    if (userId) {
        await deleteUserWithValidUsername(newUserData.username);
    }
});

});
