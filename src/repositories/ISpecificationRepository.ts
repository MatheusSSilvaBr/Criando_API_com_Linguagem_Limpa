import { Specification } from "../modules/cars/models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({description, name}: ICreateSpecificationDTO) : void
    findByName(name: string) : Specification
}

export {ICreateSpecificationDTO, ISpecificationRepository}