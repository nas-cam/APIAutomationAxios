export const config = {
    user: {
        getUser: {
            name: 'getUser',
            method: 'GET',
            url: (username) => `user/${username}`
        },
        createUser: {
            name: 'createUser',
            method: 'POST',
            url: 'user'
        },
        createUserWithList: {
            name: 'createUserWithList',
            method: 'POST',
            url: 'user/createWithList'
        },
        userLogin: {
            name: 'userLogin',
            method: 'GET',
            url: (username, password) => `user/login?username=${username}&password=${password}`
        },
        userLoginByUsername: {
            name: 'userLoginByUsername',
            method: 'GET',
            url: (username) => `user/login?username=${username}`
        },
        deleteUserValidUsername: {
            name: 'deleteUserValid',
            method: 'DELETE',
            url: (username) => `user/${username}`
        },
        deleteUserInvalidUsername: {
            name: 'deleteUserInvalid',
            method: 'DELETE',
            url: (username) => `user/${username}`
        },
        updateUser: {
            name: 'updateUser',
            method: 'PUT',
            url: (username) => `user/${username}`
        },
        userLogout: {
            name: 'userLogout',
            method: 'GET',
            url: 'user/logout'
        }
    },

    pet: {
        addNewPet: {
            name: 'addNewPet',
            method: 'POST',
            url: 'pet'
        },
        editPet: {
            name: 'editPet',
            method: 'POST',
            url: 'pet'
        },
        findPetByStatus: {
            name: 'findPetByStatus',
            method: 'GET',
            url: (status) => `pet/findByStatus?status=${status}`
        },
        findPetById: {
            name: 'findPetById',
            method: 'GET',
            url: (petId) => `pet/${petId}`
        },
        deletePet: {
            name: 'deletePet',
            method: 'DELETE',
            url: (petId) => `pet/${petId}`
        }
    },

    store: {
        createOrder: {
            name: 'createOrder',
            method: 'POST',
            url: 'store/order'
        },
        getPurchaseByPetId: {
            name: 'getPurchaseByPetId',
            method: 'GET',
            url: (petId) => `store/order/${petId}`
        },
        getInventory: {
            name: 'getInventory',
            method: 'GET',
            url: 'store/inventory'
        },
        deleteOrderById: {
            name: 'deleteOrderById',
            method: 'DELETE',
            url: (orderId) => `store/order/${orderId}`
        }
    }
}