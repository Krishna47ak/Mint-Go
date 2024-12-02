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

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,     // Removes any extra spaces from the name
  },
  email: {
    type: String,
    lowercase: true, // Converts email to lowercase
    trim: true,     // Removes any extra spaces from the email
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'], // Email validation regex
  },
  tokens: {
    type: Number,
    min: 0,
  },
  rank: {
    type: Number,
    min: 0,
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

export const userModel = mongoose.model('User', userSchema);
