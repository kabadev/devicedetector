import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    device: {
      type: String,
    },
  },
  { timestamps: true }
);

const Device =
  mongoose.models.devices || mongoose.model("devices", deviceSchema);

export default Device;
