import express from 'express';
import {stepCountModel} from '../models/stepCountModel.js';  // Import the StepCount model

const router = express.Router();

// POST route to save step count
router.post('/step-count', async (req, res) => {
  const { userId, stepCount } = req.body;

  // Validate the input
  if (!userId || !stepCount) {
    return res.status(400).json({
      message: 'Both userId and stepCount are required.',
    });
  }

  try {
    // Create a new StepCount document
    const newStepCount = new stepCountModel({
      userId,
      stepCount,
    });

    // Save the new step count to the database
    await newStepCount.save();

    // Send success response
    res.status(201).json({
      message: 'Step count saved successfully!',
      stepCount: newStepCount,
    });
  } catch (error) {
    console.error('Error saving step count:', error);
    res.status(500).json({ message: 'Failed to save step count', error });
  }
});

export default router;
