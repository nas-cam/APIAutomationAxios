import { createOrderData } from "../../../data/commonData.js";
import { createOrder, deleteOrderById } from "../../../tasks/api-tasks.js";

describe('Delete order', () => {
    let orderId;

    beforeEach(async () => {
        const response = await createOrder(createOrderData)
        orderId = response.data.id;
    });

    it('TC_14_1 User is able to delete order', async () => {
        const response = await deleteOrderById(orderId);
        expect(response.status).toBe(200);
    });

});
