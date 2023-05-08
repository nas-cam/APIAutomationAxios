import { updatePet } from "../../../tasks/api-tasks.js";
import { editPetData } from "../../../data/commonData.js"

describe('Edit pet', () => {

    it('TC_9_2 User is able to edit information about the pet', async () => {
        const response = await updatePet(editPetData);
        expect(response.status).toBe(200);
    });

});

