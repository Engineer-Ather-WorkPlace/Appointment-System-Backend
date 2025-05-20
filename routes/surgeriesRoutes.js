
import express from 'express'
import { AddSurgery } from '../controller/surgery/addSurgery.js'

export const surgeryRoute = express.Router()

surgeryRoute.post ("/addSurgery", AddSurgery )