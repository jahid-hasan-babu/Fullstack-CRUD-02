import axios from "axios";
let BaseURL = "http://mern-crud-app-peach.vercel.app/api/v1";

//create student

export const registrationStudent = async (postBody) => {
  try {
    let res = await axios.post(BaseURL + "/create-studentList", postBody);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

//read student
export const studentListRequest = async () => {
  try {
    let res = await axios.get(BaseURL + "/read-studentsList");
    if (res.status === 200) {
      return res.data.data;
    } else {
      return false;
    }
  } catch (error) {
    return [];
  }
};

//read by id
export const studentListById = async (id) => {
  try {
    let res = await axios.get(BaseURL + "/read-oneStudent/" + id);
    if (res.status === 200) {
      return res["data"]["data"][0];
    } else {
      return false;
    }
  } catch (error) {
    return [];
  }
};

//update student
export const updateStudent = async (postBody, id) => {
  try {
    let res = await axios.post(BaseURL + "/update-student/" + id, postBody);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
//delete student
export const deleteStudent = async (id) => {
  try {
    let res = await axios.delete(BaseURL + "/delete-student/" + id);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
