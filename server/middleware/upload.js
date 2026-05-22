import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "hustlehub",
      allowed_formats: ["jpg", "png", "jpeg", "webp"],
      resource_type: "image",
    };
  },
});

const upload = multer({ storage });

export default upload;