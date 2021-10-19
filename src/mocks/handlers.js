import { rest } from "msw";

const products = [
  {
    price: 2.5,
    name: "Pera",
  },
  {
    price: 3.5,
    name: "Mela",
  },
  {
    price: 3.9,
    name: "Banana",
  },
];

export const handlers = [
  rest.get("/products", (req, res, ctx) => {
    res(ctx.status(200));
    return res(ctx.json(products));
  }),

  rest.post("/buy", (req, res, ctx) => {
    res(ctx.status(202));
    return res(ctx.json(JSON.parse(req.body)));
  }),
];
