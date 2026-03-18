import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    // 🔹 Check token exists
    if (!token) {
      return res.json({ success: false, message: "Not Authorized. Login Again." });
    }

    // 🔹 Verify token
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If it possesses an 'id', it is a normal user, NOT an admin.
    if (token_decoded && token_decoded.id) {
        return res.json({ success: false, message: "Not Authorized. Log in as admin." });
    }

    // Otherwise, we assume it's valid as only the backend issues token strings via adminLogin
    next(); 
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export default adminAuth;