import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, Timestamp, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import UserEntity from './jobseekers_user.entity';


@Entity({ name: "portfolio" })
export default class PortfolioEntity extends BaseEntity {

    @PrimaryGeneratedColumn('uuid',{ name: "id" })
    id: string;

    @Column({name: "description" })
    description: string;

    @Column({name: "skills"})
    skills: string;


    @ManyToOne(type => UserEntity, user => user.portfolio)
    @JoinColumn({name: "user_id"})
    user: UserEntity;

}

