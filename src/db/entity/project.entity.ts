import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, Timestamp, Long, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import UserEntity from './jobseekers_user.entity';
import OfferEntity from './offer.entity';

@Entity({ name: "project" })
export default class ProjectEntity extends BaseEntity {

    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column({ length: 50, name: "title" })
    title: string;

    @Column({ name: "deadline", type: "timestamp" })
    deadline: Timestamp;

    @Column({ name: "required_skills" })
    requiredSkills: string;

    @Column({ name: "type" })
    type: string;

    @Column({ name: "description" })
    description: string;

    @Column({ name: "status" })
    status: string;

    @Column({ name: "min_insurance", type: "bigint"  })
    minInsurance: Long;

    @Column({ name: "hardness" })
    hardness: string;

    @ManyToOne(type => UserEntity, user => user.createdProjects)
    @JoinColumn({ name: "executive_id" })
    executiveUser: UserEntity;

    @ManyToOne(type => UserEntity, user => user.doingProjects)
    @JoinColumn({ name: "executer_id" })
    executerUser: UserEntity;

    @OneToMany(type => OfferEntity, offer => offer.project)
    offers: OfferEntity[];
}