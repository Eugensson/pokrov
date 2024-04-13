import { Schema, model, models } from "mongoose";

const gallerySchema = new Schema(
  {
    _id: { type: String },
    title: { type: String },
    description: { type: String },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Gallery = models.gallery || model("gallery", gallerySchema);

export default Gallery;

export type GalleryType = {
  _id?: string;
  title?: string;
  description?: string;
  category: string;
  imageURL: string;
};
