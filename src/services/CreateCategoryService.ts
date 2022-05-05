import { ICategoriesRepository} from "../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService{
    constructor(private categoriesRepository: ICategoriesRepository) {

    }

    execute({description, name} : IRequest): void {

        const categoryAlreadtExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadtExists) {
            throw new Error("Category already exist");
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export {CreateCategoryService}