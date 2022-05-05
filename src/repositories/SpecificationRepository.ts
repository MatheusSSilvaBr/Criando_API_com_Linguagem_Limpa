import { Specification } from "../modules/cars/models/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications : Specification [];

    constructor() {
        this.specifications = [];
    }

    create({name, description}: ICreateSpecificationDTO) : void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at:new Date()
        });

        this.specifications.push(specification);
    }

    findByName(name:string): Specification {
        const specification = this.specifications.find((category) => category.name === name);
        return specification;
    }
}    

export { SpecificationRepository}