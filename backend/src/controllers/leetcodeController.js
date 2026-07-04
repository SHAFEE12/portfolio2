import leetcodeService from "../services/leetcodeService.js";

export const getProfile = async (req, res) => {
  try {
    const data = await leetcodeService.getProfile();

    res.status(200).json({
      success: true,
      data
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};