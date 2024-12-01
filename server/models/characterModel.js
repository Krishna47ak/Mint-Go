  import mongoose from "mongoose";

  // Define the Character schema
  const characterSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true, // Removes any extra spaces from the name
      },
      level: {
        type: Number,
        min: 1, // Level should be at least 1
      },
      description: {
        type: String,
        required: false, // Description is optional
        trim: true, // Removes any extra spaces from the description
      },
      imageUrl: {
        type: String,
        required: false, // Image URL is optional
      },
    },
    {
      timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
  );

  // Create the Character model using the schema
  export const characterModel = mongoose.model("Character", characterSchema);
