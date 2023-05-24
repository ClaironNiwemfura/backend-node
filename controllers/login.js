import userModel from "../models/user.js";

const loginUser = async (req, res) => {
  try {
    const body = req.body;
    let email = body.email;

    const user = await userModel.findOne({ email });
    

    if (user) {
     return res.json({
        message: "Login successfull",
        
      });
    } else {
      return res.json({
        message: "User not found. Please register first.",
      });
    }

  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).json({
      message: "Error occurred",
    });
  }
};
export default loginUser;
