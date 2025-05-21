
import express from 'express'
import { AddNewSurgery } from '../controller/surgery/addNewSurgery.js'
import { AddNewSurgeon } from '../controller/surgery/AddSurgeon.js'
import { getAllSurgeries } from '../controller/surgery/getAllSurgeries.js'

export const addNewSurgeryRoute = express.Router()

addNewSurgeryRoute.post ("/addNewSurgery", AddNewSurgery )

addNewSurgeryRoute.post ("/addNewSurgeon", AddNewSurgeon)

addNewSurgeryRoute.get("/getAllSurgeries", getAllSurgeries)