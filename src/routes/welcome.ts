import { Router } from "express";
import RouteSlice from "./RouteSlice";

const router = Router();
const ROUTE_BASE_PATH = '/welcome'

router.get('/generic-greeting', (req, res) => res.json({
  message: 'Hello world'
}))

const welcome: RouteSlice = {
    router: router,
    path: ROUTE_BASE_PATH
}

export default welcome;