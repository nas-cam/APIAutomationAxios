import { createOrderData } from "../../../data/commonData.js";
import { getInventory, getPurchaseOrderByPetId, createOrder } from "../../../tasks/api-tasks.js";
import _ from "lodash";

describe('Search order', () => {
    let orderId;

    beforeEach(async () => {
        const response = await createOrder(createOrderData)
        orderId = response.data.id;
        return orderId;
    });

    it('TC_13_1 User is able to find purchase order by Id', async () => {
        const response = await getPurchaseOrderByPetId();
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, createOrderData));
    });

    it('TC_13_2 User is able to see inventory by status', async () => {
        const response = await getInventory();
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, createOrderData));
    });

    afterEach(async () => {
        if (orderId) {
            await getPurchaseOrderByPetId()
        }
    });

});
