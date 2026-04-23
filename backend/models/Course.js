import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  title: String,
  duration: String,
  videoUrl: String,
});

const sectionSchema = new mongoose.Schema({
  sectionTitle: String,
  lectures: [lectureSchema],
});

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    instructorName: String,
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    category: String,
    rating: Number,
    students: Number,
    sections: [sectionSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);