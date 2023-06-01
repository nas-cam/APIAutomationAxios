import { newUserData } from "../../../data/commonData.js";
import { createUser, deleteUserWithValidUsername } from "../../../tasks/api-tasks.js";

describe('Delete user', () => {

    beforeEach(async () => {
        await createUser(newUserData);
    });

    it('TC_6_1 User is able to delete user from the system', async () => {
        const response = await deleteUserWithValidUsername(newUserData.username);
        expect(response.status).toBe(200);
    });

});

