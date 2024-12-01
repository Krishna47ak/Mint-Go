import express from "express";
import { characterModel } from '../models/characterModel.js'; 
const router = express.Router();

// POST route to create a new character
router.post("/", async (req, res) => {
  const { name, level, description, imageUrl } = req.body;

  try {
    // Create a new character document
    const newCharacter = new characterModel({
      name,
      level,
      description,
      imageUrl,
    });

    // Save the new character to the database
    await newCharacter.save();

    // Send success response with the created character
    res.status(201).json({
      message: "Character created successfully!",
      character: newCharacter,
    });
  } catch (error) {
    console.error("Error creating character:", error);
    res.status(500).json({ message: "Failed to create character", error });
  }
});

export default router;
