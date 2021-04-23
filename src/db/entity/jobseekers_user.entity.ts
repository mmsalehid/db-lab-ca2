import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import ProjectEntity from './project.entity';
import OfferEntity from './offer.entity';
import PortfolioEntity from './portfolio.entity';

@Entity({ name: "user" })
export default class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column({ length: 500, name: "name" })
    name: string;

    @Column({ name: "family_name" })
    family_name: string;

    @Column({ name: "phone_number" })
    PhoneNumber: string;

    @Column({ name: "email" })
    email: string;

    @Column({ name: "password" })
    password: string;

    @OneToMany(type => ProjectEntity, project => project.executiveUser)
    createdProjects: ProjectEntity[];

    @OneToMany(type => ProjectEntity, project => project.executerUser)
    doingProjects: ProjectEntity[];

    @OneToMany(type => OfferEntity, offer => offer.user)
    offers: OfferEntity[];

    @OneToOne(type => PortfolioEntity, portfolio => portfolio.user)
    portfolio: PortfolioEntity;
}