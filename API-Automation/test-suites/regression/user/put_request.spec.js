import { updateUser } from "../../../tasks/api-tasks.js";
import { updateUserData } from "../../../data/commonData.js";
import _ from "lodash";

describe("Update user", () => {

  it("TC_4_1 User is able to update information of user in system", async () => {
    const response = await updateUser(updateUserData);
    expect(response.status).toBe(200);
    expect(_.isEqual(response.data, updateUserData));
  });

});
