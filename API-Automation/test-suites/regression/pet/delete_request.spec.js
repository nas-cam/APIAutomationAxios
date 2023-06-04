import { newPetData } from "../../../data/commonData.js";
import { addNewPet, deletePet } from "../../../tasks/api-tasks.js";

describe('Delete pet', () => {
    let petId;

    beforeEach(async () => {
        const response = await addNewPet(newPetData)
        petId = response.data.id;
    });

    it('TC_11_1 User is able to delete pet out of the system', async () => {
        const response = await deletePet(petId);
        expect(response.status).toBe(200);
    });
});

