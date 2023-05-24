import mongoose from "mongoose";

const articleschema = new mongoose.Schema({
  title: { 
    type: String,
    required: "title is required" 
  },
  author: {
    type: String,
    required: "your name is required",
  },
  content: {
    type: String,
    required: "content is required",
  },
  image: {
    type: String,
  },
});
export default mongoose.model("articles", articleschema);
