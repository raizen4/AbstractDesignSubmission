import Axios from "axios";

export const resetPassword = async (token, newPass) => {
  try {
    const data = { psw: newPass };
    const params = new URLSearchParams();
    params.append("psw", newPass);

    const res = await Axios.post(
      `https://www.abstpswractmrm.net/youin/api/password/${token}`,
      stringifiedData,
      {
        headers: {
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
    throw new Error(`Unable to reset Password`);
  }
};
