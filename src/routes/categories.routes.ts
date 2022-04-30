import {Router} from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;

    const categoryAlreadtExists = categoriesRepository.findByName(name);

    if (categoryAlreadtExists) {
        return response.status(400).json({error : "category already exist"})
    }

    categoriesRepository.create({name, description});

    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all)
})

export {categoriesRoutes}