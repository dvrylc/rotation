// Setup
import express from 'express';
const router = express.Router();

// Routes
router.get('/token', tokenHandler);

// Route handlers
function tokenHandler(req, res) {
  res.send({
    token: null
  });
}

// Export
export default router;
