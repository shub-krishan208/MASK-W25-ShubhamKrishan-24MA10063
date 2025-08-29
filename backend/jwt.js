import crypto from "crypto";
import { SECRET_KEY } from "./password";

function base64urlEncode(str) {
  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

// create a jwt
function create(payload) {
  const header = {
    alg: "HS256",
    type: "JWT",
  };

  payload.exp = Date.now() + 60 * 60 * 1000; // 1hr expiration
  const encHeader = base64urlEncode(JSON.stringify(header));
  const encPayload = base64urlEncode(JSON.stringify(payload));
  const signatureInput = `${encHeader}.${encPayload}`;
  const signature = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(signatureInput)
    .digest("base64url");
  return `${signatureInput}.${signature}`;
}

// Verify a JWT Token
function verify(token) {
  try {
    const [encHeader, encPayload, signature] = token.split(".");
    const signatureInput = `${encHeader}.${encPayload}`;
    // recreate signature
    const expectedSignature = crypto
      .createHmac("sha256", SECRET_KEY)
      .update(signatureInput)
      .digest("base64url");

    if (signature !== expectedSignature) {
      throw new Error("Invalid signature.");
    }

    const payload = JSON.parse(Buffer.from(encPayload, "base64url").toString());

    //check expiry
    if (Date.now() > payload.exp) {
      throw new Error("Token has expired");
    }
    return payload; // valid token
  } catch (err) {
    console.error("Sever error: ", err);
    return null;
  }
}

export { create, verify };
