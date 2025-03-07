import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  description: { type: String, required: true },
  logo: { type: String, required: true },
  currency: { type: String, required: true },
  jobType: { type: String, required: true },
  experience: { type: String, required: true },
  isbookmarked: { type: Boolean, required: true },
});

export const Job = mongoose.model("Job", jobSchema); // Named export
