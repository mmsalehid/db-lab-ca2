import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, Timestamp, ManyToMany, ManyToOne, JoinColumn, Long } from 'typeorm';
import UserEntity from './jobseekers_user.entity';
import ProjectEntity from './project.entity';

@Entity({ name: "offer" })
export default class OfferEntity extends BaseEntity {

    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column({name: "offer_price", type: "bigint" })
    offerPrice: Long;

    @Column({name: "deadline", type: "timestamp"})
    deadline: Timestamp;

    @Column({ name: "pre_payment", type: "bigint"  })
    prePayment: Long;

    @Column({ name: "is_accepted" })
    isAccepted: boolean;

    @Column({name: "insurance", type: "bigint" })
    insurance: Long;


    @ManyToOne(type => UserEntity, user => user.createdProjects)
    @JoinColumn({name: "user_id"})
    user: UserEntity;

    @ManyToOne(type => ProjectEntity, project => project.offers)
    @JoinColumn({name: "executer_id"})
    project: ProjectEntity;
}
