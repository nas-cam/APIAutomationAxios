import { findPetById, findPetByStatus } from "../../tasks/api-tasks.js";


describe('PET - GET API - positive', () => {

    it('TC_10_1 User is able to find the pet by status', async () => {
        const response = await findPetByStatus();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
    });

    it('TC_10_2 User is able to find pet by Id', async () => {
        const response = await findPetById();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
    });

});

