import _ from "lodash";
import { newUserData } from '../../data/commonData.js';
import { getUserByUsername, userLogin, userLogout } from '../../tasks/api-tasks.js';

describe('USER - GET API - positive test cases', () => {
    it('TC_5_2 User is able to perform a search with username', async () => {
        const response = await getUserByUsername();
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, newUserData));

    });

    it('TC_1_1 User is able to login with valid credentials', async () => {
        const response = await userLogin();
        expect(response.status).toBe(200)
    });

    it('TC_2_1 User is able to logout from the system', async () => {
        const response = await userLogout();
        expect(response.status).toBe(200);
    });
});


