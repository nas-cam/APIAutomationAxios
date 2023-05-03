import { newPetData } from "../../data/commonData.js";
import { addNewPet } from "../../tasks/api-tasks.js";
import _ from "lodash";

describe('PET - POST API - positive', () =>{
    
    it('TC_8_1 User is able to add new pet to the store', async() => {
        const response = await addNewPet();
        expect(response.status).toBe(200);
        expect (_.isEqual(response.data,newPetData));
    }); 
});

