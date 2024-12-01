import mongoose from 'mongoose';

const stepCountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the user model (ObjectId)
    ref: 'User',                           // Reference to the User model
  },
  stepCount: {
    type: Number,
    min: 0,                                // Step count cannot be negative
  },
}, {
  timestamps: true,                        // Automatically adds createdAt and updatedAt fields
});

// Create the StepCount model using the schema
export const stepCountModel = mongoose.model('StepCount', stepCountSchema);
