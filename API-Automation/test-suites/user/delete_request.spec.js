import { deleteUserWithInvalidUsername, deleteUserWithValidUsername } from "../../tasks/api-tasks.js";

describe('USER - DELETE API - positive', function () {

    it('TC_6_1 User is able to delete user from the system', async () => {
        const response = await deleteUserWithValidUsername();
        expect(response.status).toBe(200);
    });

});

describe('USER - DELETE API - negative', function () {

    it('TC_7_2 User is not able to delete user without valid username', async () => {
        const response = await deleteUserWithInvalidUsername();
        expect(response.error).toBe("Request failed with status code 404");
    });
});

