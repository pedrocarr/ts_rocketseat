import { Router } from "express";

import { createSpecificationContoller } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return createSpecificationContoller.handle(req, res);
});

export { specificationsRoutes };
