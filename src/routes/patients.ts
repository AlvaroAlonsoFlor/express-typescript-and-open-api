import { Router, Request, Response } from "express";
import Patient from "../models/Patient";
import RouteSlice from "./RouteSlice";


const router = Router()
const ROUTE_BASE_PATH = '/patients'
const mockPatientList: Array<Patient> = [
    {
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@gmail.com',
        phone: '01235235823',
        id: 'JDoe1237815'
    },
    {
        name: 'Annie',
        surname: 'Doe',
        email: 'annie.doe@gmail.com',
        phone: '01223235823',
        id: 'ADoe1237235'
    }
]

router.get('/', (req: Request, res: Response) => {
    return res.json(mockPatientList);
})

const patients: RouteSlice = {
    router: router,
    path: ROUTE_BASE_PATH
}

export default patients;