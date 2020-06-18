// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "HTTP method not accepted" });
  }

    res.statusCode = 200;
    res.json({ products: data, method: req.method });
};
