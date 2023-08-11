
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAll } from "@/services/products";



export default function handler(req, res) {
  if(req.method === "GET"){
    const products = getAll();
    return res.status(200).json(products);
  }
  return res.status(404).send();
}
