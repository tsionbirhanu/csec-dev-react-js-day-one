import { Job } from "../models/jobModel.js";
export const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      description,
      logo,
      currency,
      jobType,
      experience,
      isbookmarked,
    } = req.body;

    const job = new Job({
      title,
      company,
      location,
      salary,
      description,
      logo,
      currency,
      jobType,
      experience,
      isbookmarked,
    });

    await job.save(); // Save the job to the database

    res.status(201).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

// Get all jobs
export const getJob = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({
      status: "success",
      results: jobs.length,
      data: {
        jobs,
      },
    });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

// Get a job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        status: "fail",
        message: "Job not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

// Update a job by ID
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run model validators on update
    });

    if (!job) {
      return res.status(404).json({
        status: "fail",
        message: "Job not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

// Delete a job by ID
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        status: "fail",
        message: "Job not found",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};
