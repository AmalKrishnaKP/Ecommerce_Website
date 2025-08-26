import express from 'express'
import { userAuthMidWare } from '../middleware/userAuth.middileware.js'
import { sellerAuthMidWare } from '../middleware/sellerAuth.middleware.js'
import { addIssue } from '../controller/support.controller.js'

const support = express.Router()

support.post('/issue', userAuthMidWare, addIssue)
support.post('/issue-seller', sellerAuthMidWare, addIssue)

export default support


