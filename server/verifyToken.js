const jwt = require('jsonwebtoken');

// Example middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization header missing or invalid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user details to request object for further processing
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ message: 'Token verification failed' });
  }
};

// Example login route
app.post('/user/login', (req, res) => {
  const { username, password } = req.body;

  // Example: Check username and password against database
  if (username === 'example' && password === 'password') {
    // Generate JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Example protected route
app.get('api/user', verifyToken, (req, res) => {
  // Fetch user data or perform protected action
  res.json({ message: 'Successfully fetched users', data: [...users] });
});
module.exports = verifyToken ;