import mongoose from 'mongoose';

const requisitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  positions: {
    type: Number,
    required: true,
    min: 1,
  },
  jobType: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
  },
  experience: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  skills: [{
    type: String,
    required: true,
  }],
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Draft', 'Open', 'In Progress', 'On Hold', 'Closed'],
    default: 'Draft',
  },
  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Urgent'],
    default: 'Medium',
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: 'USD',
    },
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Requisition = mongoose.model('Requisition', requisitionSchema);