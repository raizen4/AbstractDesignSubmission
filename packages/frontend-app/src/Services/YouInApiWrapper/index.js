import Axios from "axios";

export const resetPassword = async (token, newPass) => {
  try {
    const objectToBeSent = {
      psw: newPass,
    };

    const stringifiedData = JSON.stringify(objectToBeSent);
    const res = await Axios.post(
      `https://www.abstractmrm.net/youin/api/password/${token}`,
      stringifiedData,
      {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "test",
          password: "test",
        },
      }
    );

    return res.status;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to resetPassword`);
  }
};
