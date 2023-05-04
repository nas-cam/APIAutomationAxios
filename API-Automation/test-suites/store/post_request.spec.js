import { createOrder } from "../../tasks/api-tasks.js";
import { createOrderData } from '../../data/commonData.js';
import _ from "lodash";

describe('Creating order', () => {

    it('TC_12_1 User is able to make and order for a pet', async () => {
        const response = await createOrder(createOrderData);
        expect(response.status).toBe(200);
        expect(_.isEqual(response.data, createOrderData));
    });
});

