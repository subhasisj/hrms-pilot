import express from 'express';
import { Requisition } from '../models/Requisition.js';

const router = express.Router();

// Get all requisitions
router.get('/', async (req, res) => {
  try {
    const requisitions = await Requisition.find().sort({ createdAt: -1 });
    res.json(requisitions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single requisition
router.get('/:id', async (req, res) => {
  try {
    const requisition = await Requisition.findById(req.params.id);
    if (!requisition) {
      return res.status(404).json({ message: 'Requisition not found' });
    }
    res.json(requisition);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create requisition
router.post('/', async (req, res) => {
  const requisition = new Requisition({
    ...req.body,
    createdBy: 'admin', // TODO: Replace with actual user ID from auth
  });

  try {
    const newRequisition = await requisition.save();
    res.status(201).json(newRequisition);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update requisition
router.patch('/:id', async (req, res) => {
  try {
    const requisition = await Requisition.findById(req.params.id);
    if (!requisition) {
      return res.status(404).json({ message: 'Requisition not found' });
    }

    Object.assign(requisition, req.body);
    requisition.updatedAt = new Date();
    
    const updatedRequisition = await requisition.save();
    res.json(updatedRequisition);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete requisition
router.delete('/:id', async (req, res) => {
  try {
    const requisition = await Requisition.findById(req.params.id);
    if (!requisition) {
      return res.status(404).json({ message: 'Requisition not found' });
    }

    await requisition.deleteOne();
    res.json({ message: 'Requisition deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const requisitionRoutes = router;