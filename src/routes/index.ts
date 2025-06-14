import { Router } from 'express'

import * as PageController from '../controllers/pageController'

const router = Router()

router.get('/', PageController.home)
router.get('/sp', PageController.sp)
router.get('/rj', PageController.rj)
router.get('/sal', PageController.sal)

// router.get('/search', PageController.search)

export default router
