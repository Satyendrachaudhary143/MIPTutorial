export const isAuthenticated = (req, res, next) => { 
    try {
        const authheader = req.headers.authorization;
        if (!authheader || !authheader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Authorization header missing or malformed" });
        }   
        const token = authheader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = {
      id: decoded.userId,
      role: decoded.role,
    };
        next();
    } catch (error) {
            res.status(500).json({ error: err.message });
    }
}