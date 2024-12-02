import express from 'express';
import { userModel } from '../models/userModel.js';

const router = express.Router();

// POST route to save step count

router.post('/step-count', async (req, res) => {
  const { userId, stepCount, dailyStepCount, locations } = req.body;

  // Validate the input
  if (!userId) {
    return res.status(400).json({
      message: 'userId is required.',
    });
  }

  try {
    const user = await userModel.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.stepCount = stepCount;
    user.dailyStepCount = dailyStepCount;
    user.locations = locations;
    await user.save();

    // const newStepCount = new userModel({
    //   userId,
    //   stepCount,
    //   dailyStepCount,
    //   locations
    // });

    // Save the new step count to the database
    // Send success response
    res.status(201).json({
      message: 'Step count saved successfully!',
      stepCount
    });
  } catch (error) {
    console.error('Error saving step count:', error);
    res.status(500).json({ message: 'Failed to save step count', error });
  }
});

router.get('/', async (req, res) => {
  const { userId } = req.body;

  // Validate the input
  if (!userId) {
    return res.status(400).json({
      message: 'Both userId is required.',
    });
  }

  try {
    const user = await userModel.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Send success response
    res.status(201).json({
      message: 'User fetched successfully!',
      user
    });
  } catch (error) {
    console.error('Error saving step count:', error);
    res.status(500).json({ message: 'Failed to save step count', error });
  }
});
export default router;
