import { AxiosError, isAxiosError } from "axios";
import { newUserData } from "../../data/commonData.js";
import { createUser, deleteUserWithInvalidUsername, deleteUserWithValidUsername } from "../../tasks/api-tasks.js";

describe('Delete user', function () {
    let userId;

    beforeEach(async () => {
        const response = await createUser(newUserData)
        userId = response.data.id;
        return userId;
    });

    afterEach(async () => {
        if (userId) {
            await deleteUserWithValidUsername()
        }
    });

    it('TC_6_1 User is able to delete user from the system', async () => {
        const response = await deleteUserWithValidUsername();
        expect(response.status).toBe(200);
    });

});

