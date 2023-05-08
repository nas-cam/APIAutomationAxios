import { newPetData } from "../../../data/commonData.js";
import { addNewPet } from "../../../tasks/api-tasks.js";
import _ from "lodash";

describe('Adding pet', () => {

    it('TC_8_1 User is able to add new pet to the store', async () => {
        const response = await addNewPet(newPetData);
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, newPetData));
    });
});

