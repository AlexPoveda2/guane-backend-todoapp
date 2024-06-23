const jwt = require('jsonwebtoken');

const authMiddleware = (requiredRole) => (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret_key');
    req.user = decoded;

    // Check if user has the required role
    if (requiredRole && req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied. You do not have the required role.' });
    }

    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
