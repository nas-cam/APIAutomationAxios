import { getInventory, getPurchaseOrderByPetId } from "../../tasks/api-tasks.js";
import _ from "lodash";


describe('STORE - GET API - positive', () => {
    
    it('TC_13_1 User is able to find purchase order by Id', async() => {
        const response = await getPurchaseOrderByPetId();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
    });
    
    it('TC_13_2 User is able to see inventory by status', async() =>{
        const response = await getInventory();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
    });
        
        
});
    