import { updatePet } from "../../tasks/api-tasks.js";

describe('PET - PUT API - positive', () => {

    it('TC_9_2 User is able to edit information about the pet', async () => {
        const response = await updatePet();
        expect(response.status).toBe(200);
    });
});

