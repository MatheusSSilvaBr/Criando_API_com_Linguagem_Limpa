import { ISpecificationRepository } from "../repositories/ISpecificationRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationRepository) {

    }

    execute({description, name} : IRequest): void {

        const categoryAlreadtExists = this.specificationsRepository.findByName(name);

        if (categoryAlreadtExists) {
            throw new Error("Specification already exist");
        }
    
        this.specificationsRepository.create({name, description});

    }
}

export { CreateSpecificationService}