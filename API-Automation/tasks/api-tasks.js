import { config } from "../../config.js";
import axiosInstance from "../support/axiosConfig.js";

export async function addNewPet(newPetData) {
  try {
    return await axiosInstance.post(config.pet.addNewPet.url, newPetData);
  } catch (error) {
    console.error(error.data.data);
  }
}

export async function createOrder(newOrderData) {
  try {
    return await axiosInstance.post(config.store.createOrder.url, newOrderData);
  } catch (error) {
    console.error(error.data);
  }
}

export async function createUser(newUserData) {
  try {
    return await axiosInstance.post(config.user.createUser.url, newUserData);
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function createUserWithList(newUserListData) {
  try {
    return await axiosInstance.post(
      config.user.createUserWithList.url,
      newUserListData
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function deleteOrderById(orderId) {
  try {
    return await axiosInstance.delete(
      config.store.deleteOrderById.url(orderId)
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function deletePet(petId) {
  try {
    return await axiosInstance.delete(config.pet.deletePet.url(petId));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function deleteUserWithInvalidUsername(username) {
  try {
    return await axiosInstance.delete(
      config.user.deleteUserValidUsername.url(username)
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function deleteUserWithValidUsername(username) {
  try {
    return await axiosInstance.delete(
      config.user.deleteUserInvalidUsername.url(username)
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function findPetById(petId) {
  try {
    return await axiosInstance.get(config.pet.findPetById.url(petId));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function findPetByStatus(status) {
  try {
    return await axiosInstance.get(config.pet.findPetByStatus.url(status));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function getInventory() {
  try {
    return await axiosInstance.get(config.store.getInventory.url);
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function getPurchaseOrderByPetId(petId) {
  try {
    return await axiosInstance.get(config.store.getPurchaseByPetId.url(petId));
  } catch (error) {
    console.error(error.data);
  }
}

export async function getUserByUsername(username) {
  try {
    return await axiosInstance.get(config.user.getUser.url(username));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function loginWithUsernameOnly(username) {
  try {
    return await axiosInstance.userLogin(
      config.user.userLoginByUsername.url(username)
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function updatePet(updatePetData) {
  try {
    return await axiosInstance.post(config.pet.editPet.url, updatePetData);
  } catch (error) {
    console.error(error.data);
  }
}

export async function updateUser(username, newUserData) {
  try {
    return await axiosInstance.put(
      config.user.updateUser.url(username),
      newUserData
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function userLogin(username, password) {
  try {
    return await axiosInstance.get(
      config.user.userLogin.url(username, password)
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function userLogout() {
  try {
    return await axiosInstance.get(config.user.userLogout.url);
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

