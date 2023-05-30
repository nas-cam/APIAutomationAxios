import { newUserData } from "../../../data/commonData.js";
import { createUser, deleteUserWithValidUsername } from "../../../tasks/api-tasks.js";

describe('Delete user', ()=> {
    let userId;

    beforeEach(async () => {
        const response = await createUser(newUserData)
        userId = response.data.id;
    });

    it('TC_6_1 User is able to delete user from the system', async () => {
        const response = await deleteUserWithValidUsername(newUserData.username);
        expect(response.status).toBe(200);
    });

});

