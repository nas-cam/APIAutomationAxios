import { deleteOrderById } from "../../tasks/api-tasks.js";



describe('STORE - DELETE API - positive', function() {
    
    it('TC_14_1 User is able to delete order', async() => {
        const response = await deleteOrderById();
        expect(response.status).toBe(200);
    });
        
});
    