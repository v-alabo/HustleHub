import Business from "../models/business.js";

export const addBusiness = async (req, res) => {
  try {

    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "No form data received",
      });
    }
    const {
      businessName,
      ownerName,
      email,
      phone,
      whatsapp,
      instagram,
      category,
      lga,
      address,
      description,
      agree,
    } = req.body;

    const businessImg = req.files?.businessImg?.[0]?.path || req.files?.businessImg?.[0]?.url;
    const ownerImg = req.files?.ownerImg?.[0]?.path || req.files?.ownerImg?.[0]?.url;


    let keywords = [];
    let services = [];
    let businessHours =[];
    
    try {
      keywords = JSON.parse(req.body.keywords || "[]");
      services = JSON.parse(req.body.services || "[]");
      businessHours = JSON.parse(req.body.businessHours || "[]");
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid keywords or services format",
      });
    }

    if (
      !businessImg ||
      !ownerImg ||
      !businessName ||
      !ownerName ||
      !email ||
      !phone ||
      !whatsapp ||
      !instagram ||
      !category ||
      !lga ||
      !address ||
      !description 
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const existingBusiness = await Business.findOne({ businessName });
    if (existingBusiness) {
      return res.status(400).json({
        success: false,
        message: "Business already exists",
      });
    }

    const newBusiness = await Business.create({
      businessImg,
      ownerImg,
      businessName,
      ownerName,
      email,
      phone,
      whatsapp,
      instagram,
      category,
      lga,
      address,
      description,
      keywords,
      services,
      businessHours,
      agree,
    });
    res.status(201).json({
      success: true,
      message: "Business created successfully",
      business: newBusiness,
    });
  } catch (error) {
    console.log(error.message);
    console.log(JSON.stringify(error, null, 2));

    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
      error: error,
    });
  }
};

export const allBusiness = async (req, res) => {
    try{
        const businesses = await Business.find().sort({
            createdAt: -1,
        });
        res.status(200).json({
            success: true,
            count: businesses.length,
            businesses,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Server Error",
        });
      }
}

export const getBusiness = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "E no dey",
      });
    }

    const business = await Business.findById(req.params.id).lean();

    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }

    res.status(200).json({
      success: true,
      business,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const searchBusiness = async (req, res) => {
  try {
    const { q } = req.query;

    const businesses = await Business.find({
      businessName: { $regex: q, $options: "i" },
    });

    res.status(200).json({
      success: true,
      count: businesses.length,
      businesses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
