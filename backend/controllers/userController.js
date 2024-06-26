import User from "../models/userModel.js";

const getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (e){
        console.log("Error in getUsersForSidebar:", e.message )
        res.status(500).json({error: "Internal Server Error"});
    }
};

export default getUsersForSidebar;