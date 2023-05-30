import axiosInstance from "../support/axiosConfig.js";
import { config } from "../../config.js";


export async function getUserByUsername(username) {
  try {
    return await axiosInstance.get(config.user.getUser.url(username));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function createUser(data) {
  try {
    return await axiosInstance.post(config.user.createUser.url, data);
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function createUserWithList(data) {
  try {
    return await axiosInstance.post(
      config.user.createUserWithList.url,
      data
    );
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function userLogin(username, password) {
  try {
    return await axiosInstance.get(config.user.userLogin.url(username, password));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function loginWithUsernameOnly(username) {
  try {
    return await axiosInstance.userLogin(config.user.userLoginByUsername.url(username));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function deleteUserWithInvalidUsername(username) {
  try {
    return await axiosInstance.delete(config.user.deleteUserValidUsername.url(username));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}
export async function deleteUserWithValidUsername(username) {
  try {
    return await axiosInstance.delete(config.user.deleteUserInvalidUsername.url(username));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function updateUser(username, data) {
  try {
    return await axiosInstance.put(config.user.updateUser.url(username), data);
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

export async function addNewPet(data) {
  try {
    return await axiosInstance.post(config.pet.addNewPet.url, data);
  } catch (error) {
    console.error(error.data.data);
  }
}

export async function updatePet(data) {
  try {
    return await axiosInstance.post(config.pet.editPet.url, data);
  } catch (error) {
    console.error(error.data);
  }
}

export async function findPetByStatus(status) {
  try {
    return await axiosInstance.get(config.pet.findPetByStatus.url(status));
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

export async function deletePet(petId) {
  try {
    return await axiosInstance.delete(config.pet.deletePet.url(petId));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function createOrder(data) {
  try {
    return await axiosInstance.post(
      config.store.createOrder.url,
      data
    );
  } catch (error) {
    console.error(error.data);
  }
}

export async function getPurchaseOrderByPetId(petId) {
  try {
    return await axiosInstance.get(config.store.getPurchaseByPetId.url(petId));
  } catch (error) {
    console.error(error.data);
  }
}

export async function getInventory() {
  try {
    return await axiosInstance.get(config.store.getInventory.url);
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}

export async function deleteOrderById(orderId) {
  try {
    return await axiosInstance.delete(config.store.deleteOrderById.url(orderId));
  } catch (error) {
    console.error("Error message: ", error.response.data.message);
  }
}
