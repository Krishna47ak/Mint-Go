import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitube: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
})

const stepCountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the user model (ObjectId)
    ref: 'User',                           // Reference to the User model
  },
  stepCount: {
    type: Number,
    min: 0,                                // Step count cannot be negative
  },
  dailyStepCount: {
    type: Number,
    min: 0,                                // Step count cannot be negative
  },
  locations: [locationSchema]
}, {
  timestamps: true,                        // Automatically adds createdAt and updatedAt fields
});

// Create the StepCount model using the schema
export const stepCountModel = mongoose.model('StepCount', stepCountSchema);
