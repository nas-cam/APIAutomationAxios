import { findPetById, findPetByStatus, addNewPet } from "../../../tasks/api-tasks.js";
import { newPetData } from "../../../data/commonData.js";
import _ from "lodash";

describe('Search order', () => {
    let petId;

    beforeEach(async () => {
        const response = await addNewPet(newPetData);
        petId = response.data.id;
    });

    it('TC_10_1 User is able to find the pet by status', async () => {
        const response = await findPetByStatus(newPetData.status);
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, newPetData));
    });

    it('TC_10_2 User is able to find pet by Id', async () => {
        const response = await findPetById(petId);
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, newPetData));
    });

    afterEach(async () => {
        if (petId) {
           // await deletePet(petId);
           //error deletePet not defined
        }
    });

});

