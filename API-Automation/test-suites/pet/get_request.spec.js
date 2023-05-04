import { findPetById, findPetByStatus, addNewPet } from "../../tasks/api-tasks.js";
import { newPetData } from "../../data/commonData.js";
import _ from "lodash";

describe('Search order', () => {
    let petId;

    beforeEach(async () => {
        const response = await addNewPet(newPetData)
        petId = response.data.id;
        return petId;
    });

    afterEach(async () => {
        if (petId) {
            await findPetByStatus()
        }
    });

    it('TC_10_1 User is able to find the pet by status', async () => {
        const response = await findPetByStatus();
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, newPetData));
    });

    it('TC_10_2 User is able to find pet by Id', async () => {
        const response = await findPetById();
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, newPetData));
    });

});

