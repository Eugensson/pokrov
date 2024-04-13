import dbConnect from "@/lib/dbConnect";
import Gallery from "@/lib/models/GalleryModel";

export const getImagesByCategory = async (category: string) => {
  try {
    await dbConnect();

    return await Gallery.find({ category }).lean();
  } catch (error) {
    throw new Error("Failed To Get Images " + error);
  }
};
