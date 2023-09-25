import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema(
  {
    country: {
      type: String,
    },
      states: [
        {
          state: String,
          cities: [],
        },
      ],
  },
  { timestamps: true }
);

export default mongoose.model("Location", LocationSchema);
