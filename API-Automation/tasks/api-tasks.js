import axiosInstance from "../support/axiosConfig.js";
import {
  createUserPath,
  createUserWithListData,
  createUserWithListPath,
  deleteUserInvalidUsernamePath,
  getUserPath,
  newUserData,
  updateUserData,
  userLoginPath,
  userLoginPathUsername,
  deleteUserPath,
  userLogoutPath,
  addNewPetPath,
  newPetData,
  editPetPath,
  editPetData,
  findByStatusPath,
  findPetByIdPath,
  deletePetPath,
  createOrderPath,
  createOrderData,
  getPurchaseByPetIdPath,
  getInventoryPath,
  deleteOrderByIdPath
} from "../data/commonData.js";

export async function getUserByUsername() {
  try {
    const response = await axiosInstance.get(getUserPath.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function createUser() {
  try {
    const response = await axiosInstance.post(createUserPath.path, newUserData);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function createUserWithList() {
  try {
    const response = await axiosInstance.post(
      createUserWithListPath.path,
      createUserWithListData
    );
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function userLogin() {
  try {
    const response = await axiosInstance.get(userLoginPath.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function loginWithUsernameOnly() {
  try {
    const response = await axiosInstance.userLogin(userLoginPathUsername.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function deleteUserWithValidUsername() {
  try {
    const response = await axiosInstance.delete(deleteUserPath.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function deleteUserWithInvalidUsername() {
  try {
    const response = await axiosInstance.delete(
      deleteUserInvalidUsernamePath.path
    );
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function updateUser() {
  try {
    const response = await axiosInstance.put(getUserPath.path, updateUserData);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function userLogout() {
  try {
    const response = await axiosInstance.get(userLogoutPath.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function addNewPet() {
  try {
    const response = await axiosInstance.post(addNewPetPath.path, newPetData);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function updatePet() {
  try {
    const response = await axiosInstance.post(editPetPath.path, editPetData);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function findPetByStatus() {
  try {
    const response = await axiosInstance.get(findByStatusPath.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function findPetById() {
  try {
    const response = await axiosInstance.get(findPetByIdPath.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function deletePet() {
  try {
    const response = await axiosInstance.delete(deletePetPath.path);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function createOrder() {
  try {
    const response = await axiosInstance.post(
      createOrderPath.path,
      createOrderData
    );
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      error: error.response.status,
      error: error.message
    };
  }
}

export async function getPurchaseOrderByPetId() {
  try {
    const response = await axiosInstance.get(getPurchaseByPetIdPath.path);
    return {
      status: response.status,
      data: response.data
    }
  }
  catch (error) {
    return {
      error: error.response.status,
      error: error.message
    }
  }
}

export async function getInventory(){
  try{
    const response = await axiosInstance.get(getInventoryPath.path);
    return{
      status: response.status,
      data: response.data
    }
  }
  catch(error){
    return{
      error: error.response.status,
      error: error.message
    }
  }
}
export async function deleteOrderById(){
  try{
    const response = await axiosInstance.delete(deleteOrderByIdPath.path);
    return{
      status: response.status,
      data: response.data

    }
  }
  catch(error){
    return{
      error: error.response.status,
      error:error.message
    }
  }
}
