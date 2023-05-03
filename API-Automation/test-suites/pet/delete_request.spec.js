import { deletePet } from "../../tasks/api-tasks.js";


describe('PET - DELETE API - positive', () => {
    
    it('TC_11_1 User is able to delete pet out of the system', async() => {
        const response = await deletePet();
        expect(response.status).toBe(200);
    });    
});
    