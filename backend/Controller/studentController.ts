import { Student } from "../model/studentModel";
import { Request, Response } from 'express'

class StudentController {

    async create(req: Request, res: Response) {
        const {
            firstName, lastName, gender, age
        } = req.body
        try {
            const result = await Student.create({ firstName, lastName, gender, age })
            res.status(200).send(result)
        } catch (err) {
            res.status(400).send("Fullfill Requirements: firstName, lastName, age, gender")
        }
    }

    async readAll(req: Request, res: Response) {
        const result = await Student.findAll({})
        if (result.length !== 0) {
            res.status(200).json({ Records: result })
        } else {
            res.status(500).send("Internal Server Error")
        }
    }

    async readOne(req: Request, res: Response) {
        const id = req.params.id
        const result = await Student.findByPk(id)
        if (result) {
            res.status(200).send(result)
        } else {
            res.status(404).send("No record found with this id")
        }
    }

    async update(req: Request, res: Response) {
        const id = req.params.id
        const result = await Student.update(req.body, { where: { id } })
        if (result[0]) {
            res.status(200).send("Record of given Id has updated")
        } else {
            res.status(400).send("Error updating data of given Id")
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id
        const result = await Student.destroy({ where: { id } })
        if (result) {
            res.status(200).send("Record with given ID Deleted")
        } else {
            res.status(404).send("No Record found with this id")
        }
    }
}

export default new StudentController