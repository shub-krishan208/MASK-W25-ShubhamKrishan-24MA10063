import { verify } from "./jwt";

function middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Unauthorized: No token provided." });
  }
  const token = authHeader.split(" ")[1];
  const decodePayload = verify(token);

  if (!decodePayload) {
    return res
      .status(403)
      .json({ message: "Forbidden: Invalid or expired token." });
  }

  req.user = decodePayload;
  next();
}

export default middleware;
