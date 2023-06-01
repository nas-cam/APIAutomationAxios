import { addNewPet, deletePet, updatePet } from "../../../tasks/api-tasks.js";
import { newPetData, editPetData } from "../../../data/commonData.js"

describe('Edit pet', () => {

    beforeEach(async () => {
        await addNewPet(newPetData);
    });

    it('TC_9_2 User is able to edit information about the pet', async () => {
        const response = await updatePet(editPetData);
        expect(response.status).toBe(200);
    });

    afterEach(async () => {
        await deletePet(editPetData.id);
    });
});

