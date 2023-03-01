import axios from "axios";

export const GetAge = async (name) => {
  try {
    let response = await axios.get(`https://api.agify.io/?name=${name}`);
    // toast.success("Successfully Signed Up");
    return response.data;
  } catch (error) {
    // toast.error("signup failed");
    console.log("Error while calling signup API ", error);
  }
};
export const GetCountry = async (name) => {
  try {
    let response = await axios.get(`https://api.nationalize.io/?name=${name}`);
    // toast.success("Successfully Signed Up");
    return response.data;
  } catch (error) {
    // toast.error("signup failed");
    console.log("Error while calling signup API ", error);
  }
};
export const GetGender = async (name) => {
  try {
    let response = await axios.get(`https://api.genderize.io/?name=${name}`);
    // toast.success("Successfully Signed Up");
    return response.data;
  } catch (error) {
    // toast.error("signup failed");
    console.log("Error while calling signup API ", error);
  }
};
