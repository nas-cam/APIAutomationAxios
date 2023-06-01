import { createUser, userLogin, addNewPet, createOrder, userLogout, deleteUserWithValidUsername, deleteOrderById, deletePet } from "../../../tasks/api-tasks.js";
import { newUserData, newPetData, createOrderData } from "../../../data/commonData.js";
import _ from "lodash"

describe('Smoke test', () => {

    it('TC_1_1 Smoke test', async () => {
        const responseUser = await createUser(newUserData);
        expect(responseUser.status).toBe(200);
        expect(_.isEqual(responseUser.data, newUserData));

        const responseLogin = await userLogin();
        expect(responseLogin.status).toBe(200)

        const responsePet = await addNewPet(newPetData);
        expect(responsePet.status).toBe(200);
        expect(_.isEqual(responsePet.data, newPetData));

        const responseOrder = await createOrder(createOrderData);
        expect(responseOrder.status).toBe(200);
        expect(_.isEqual(responseOrder.data, createOrderData));

        const responselogout = await userLogout();
        expect(responselogout.status).toBe(200);
    });
    afterEach(async () => {
        await deleteUserWithValidUsername(newUserData.username);
        await deletePet(newPetData.id);
        await deleteOrderById(createOrderData.id);
    })
});

