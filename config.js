export const config = {
    user: {
        getUser: {
            method: 'GET',
            url: (username) => `user/${username}`
        },
        createUser: {
            method: 'POST',
            url: 'user'
        },
        createUserWithList: {
            method: 'POST',
            url: 'user/createWithList'
        },
        userLogin: {
            method: 'GET',
            url: (username, password) => `user/login?username=${username}&password=${password}`
        },
        userLoginByUsername: {
            method: 'GET',
            url: (username) => `user/login?username=${username}`
        },
        deleteUserValidUsername: {
            method: 'DELETE',
            url: (username) => `user/${username}`
        },
        deleteUserInvalidUsername: {
            method: 'DELETE',
            url: (username) => `user/${username}`
        },
        updateUser: {
            method: 'PUT',
            url: (username) => `user/${username}`
        },
        userLogout: {
            method: 'GET',
            url: 'user/logout'
        }
    },

    pet: {
        addNewPet: {
            method: 'POST',
            url: 'pet'
        },
        editPet: {
            method: 'POST',
            url: 'pet'
        },
        findPetByStatus: {
            method: 'GET',
            url: (status) => `pet/findByStatus?status=${status}`
        },
        findPetById: {
            method: 'GET',
            url: (petId) => `pet/${petId}`
        },
        deletePet: {
            method: 'DELETE',
            url: (petId) => `pet/${petId}`
        }
    },

    store: {
        createOrder: {
            method: 'POST',
            url: 'store/order'
        },
        getPurchaseByPetId: {
            method: 'GET',
            url: (petId) => `store/order/${petId}`
        },
        getInventory: {
            method: 'GET',
            url: 'store/inventory'
        },
        deleteOrderById: {
            method: 'DELETE',
            url: (orderId) => `store/order/${orderId}`
        }
    }
}

