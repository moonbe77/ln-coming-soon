import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "HTTP method not accepted" });
  }
  res.statusCode = 200;
  res.json({ prodId: req.query.id , method: req.method });
};
