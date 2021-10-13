import { Router } from "express";

export default interface RouteSlice {
    router: Router;
    path: string;
}