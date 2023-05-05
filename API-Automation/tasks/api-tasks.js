import axiosInstance from "../support/axiosConfig.js";
import {
  createUserPath,
  createUserWithListPath,
  deleteUserInvalidUsernamePath,
  getUserPath,
  userLoginPath,
  userLoginPathUsername,
  deleteUserPath,
  userLogoutPath,
  addNewPetPath,
  editPetPath,
  findByStatusPath,
  findPetByIdPath,
  deletePetPath,
  createOrderPath,
  getPurchaseByPetIdPath,
  getInventoryPath,
  deleteOrderByIdPath
} from "../data/commonData.js";

export async function getUserByUsername() {
  try {
    return await axiosInstance.get(getUserPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(newUserData) {
  try {
    return await axiosInstance.post(createUserPath.path, newUserData);
  } catch (error) {
    console.error(error);
  }
}

export async function createUserWithList(createUserWithListData) {
  try {
    return await axiosInstance.post(
      createUserWithListPath.path,
      createUserWithListData
    );
  } catch (error) {
    console.error(error);
  }
}

export async function userLogin() {
  try {
    return await axiosInstance.get(userLoginPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function loginWithUsernameOnly() {
  try {
    return await axiosInstance.userLogin(userLoginPathUsername.path);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUserWithValidUsername() {
  try {
    const response = await axiosInstance.delete(deleteUserPath.path);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUserWithInvalidUsername() {
  try {
    return await axiosInstance.delete(
      deleteUserInvalidUsernamePath.path
    );
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(updateUserData) {
  try {
    return await axiosInstance.put(getUserPath.path, updateUserData);
  } catch (error) {
    console.error(error);
  }
}

export async function userLogout() {
  try {
    return await axiosInstance.get(userLogoutPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function addNewPet(newPetData) {
  try {
    return await axiosInstance.post(addNewPetPath.path, newPetData);
  } catch (error) {
    console.error(error);
  }
}

export async function updatePet(editPetData) {
  try {
    return await axiosInstance.post(editPetPath.path, editPetData);
  } catch (error) {
    console.error(error);
  }
}

export async function findPetByStatus() {
  try {
    return await axiosInstance.get(findByStatusPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function findPetById() {
  try {
    return await axiosInstance.get(findPetByIdPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function deletePet() {
  try {
    return await axiosInstance.delete(deletePetPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function createOrder(createOrderData) {
  try {
    return await axiosInstance.post(
      createOrderPath.path,
      createOrderData
    );
  } catch (error) {
    console.error(error);
  }
}

export async function getPurchaseOrderByPetId() {
  try {
    return await axiosInstance.get(getPurchaseByPetIdPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function getInventory() {
  try {
    return await axiosInstance.get(getInventoryPath.path);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteOrderById() {
  try {
    return await axiosInstance.delete(deleteOrderByIdPath.path);
  } catch (error) {
    console.error(error);
  }
}
