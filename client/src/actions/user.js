import axios from "axios";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/auth/registration`,
      { email, password }
    );
    //show message from server
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};
