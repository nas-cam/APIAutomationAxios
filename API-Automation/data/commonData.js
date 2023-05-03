export const newUserData = {
  "id": 2,
  "username": "Username2",
  "firstName": "Firstname2",
  "lastName": "Lastname2",
  "email": "firstname@gmail.com",
  "password": "password",
  "phone": "123456789",
  "userStatus": 1
}

export const createUserPath = {
  "path": "user"
}

export const getUserPath = {
  "path": "user/Username2"
  //this shouldn't be hardcoded, there has to be the way to add this differently
}

export const createUserWithListData =
  [
    {
      "id": 3,
      "username": "Username3",
      "firstName": "Name3",
      "lastName": "lastName3",
      "email": "name3@gmail.com",
      "password": "password3",
      "phone": "45678976",
      "userStatus": 1
    },
    {
      "id": 4,
      "username": "Username4",
      "firstName": "Name4",
      "lastName": "lastname4",
      "email": "name4@gmail.com",
      "password": "password4",
      "phone": "0986756879",
      "userStatus": 0
    }
  ]

export const createUserWithListPath = {
  "path": "user/createWithList"
  //this shouldn't be hardcoded, there has to be the way to add this differently
}

export const userLoginPath = {
  "path": "user/login?username=Username2&password=password"
  //this shouldn't be hardcoded, there has to be the way to add this differently
}

export const userLoginPathUsername = {
  "path": "user/login?username=Username2"
  //this shouldn't be hardcoded, there has to be the way to add this differently
}

export const deleteUserInvalidUsernamePath = {
  "path": "user/Userna"
  //this shouldn't be hardcoded, there has to be the way to add this differently
}

export const updateUserData = {
  "id": 0,
  "username": "NekiUsername",
  "firstName": "Eywa",
  "lastName": "Addams",
  "email": "eywa.addams@gmail.com",
  "password": "password123",
  "phone": "385666777666",
  "userStatus": 0
}

export const deleteUserPath = {
  "path": "user/Username3"
  //this shouldn't be hardcoded, there has to be the way to add this differently
}

export const userLogoutPath = {
  "path": "user/logout"
}

export const newPetData = {
  "id": 5,
  "category": {
    "id": 5,
    "name": "Cat"
  },
  "name": "Frodo",
  "photoUrls": [
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F07%2Fwhite-ragdoll-cat-sitting-1030358882-2000.jpg"
  ],
  "tags": [
    {
      "id": 5,
      "name": "Pet"
    }
  ],
  "status": "available"
}

export const addNewPetPath = {
  "path": "pet"
}

export const editPetPath = {
  "path": "pet"
}

export const editPetData = {
  "id": 5,
  "category": {
    "id": 5,
    "name": "Cat"
  },
  "name": "Frodo",
  "photoUrls": [
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F07%2Fwhite-ragdoll-cat-sitting-1030358882-2000.jpg"
  ],
  "tags": [
    {
      "id": 5,
      "name": "Pet"
    }
  ],
  "status": "sold"
}

export const findByStatusPath = {
  "path": "pet/findByStatus?status=available"
}

export const findPetByIdPath = {
  "path": "pet/5"
}
export const deletePetPath={
  "path": "pet/5"
}
export const createOrderPath={
  "path": "store/order"
}
export const createOrderData={
    "id": 1,
    "petId": 55555,
    "quantity": 1,
    "shipDate": "2023-04-17T13:43:45.853+0000",
    "status": "placed",
    "complete": true
}
export const getPurchaseByPetIdPath={
  "path": "store/order/1"
}
export const getInventoryPath={
  "path":"store/inventory"
}
export const deleteOrderByIdPath={
  "path": "store/order/1"
}

