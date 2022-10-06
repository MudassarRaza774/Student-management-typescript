import express from 'express'
const router = express.Router()
import controller from '../Controller/studentController'

router.post('/', controller.create)
router.get('/', controller.readAll)

router.delete('/:id', controller.delete)
router.put('/:id', controller.update)
router.get('/:id', controller.readOne)

export default router