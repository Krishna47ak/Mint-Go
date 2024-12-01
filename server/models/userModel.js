import mongoose from 'mongoose';
import { characterModel } from './characterModel';  // Path to your character model file

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
  characterId: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the Character model
    ref: 'Character',                     // Specifies that the characterId refers to the Character model
    required: false,                       // The characterId is optional
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create a User model using the schema
const User = mongoose.model('User', userSchema);

export default User;
