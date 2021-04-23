import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, Timestamp, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import UserEntity from './jobseekers_user.entity';
import ProjectEntity from './project.entity';

@Entity({ name: "offer" })
export default class OfferEntity extends BaseEntity {

    @PrimaryGeneratedColumn('uuid',{ name: "id" })
    id: string;

    @Column({name: "offer_price" })
    offerPrice: BigInt;

    @Column({name: "deadline"})
    deadline: Timestamp;

    @Column({ name: "pre_payment" })
    prePayment: BigInt;

    @Column({ name: "is_accepted" })
    isAccepted: boolean;

    @Column({name: "insurance"})
    insurance: BigInt;


    @ManyToOne(type => UserEntity, user => user.createdProjects)
    @JoinColumn({name: "user_id"})
    user: UserEntity;

    @ManyToOne(type => ProjectEntity, project => project.offers)
    @JoinColumn({name: "executer_id"})
    project: ProjectEntity;
}
