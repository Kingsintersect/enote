import { Entity, Column, Double, ManyToMany, ManyToOne } from "typeorm";

import GenericEntity from "./GenericEntity";
import { User } from "./User";

@Entity("transactions")
export class Transaction extends GenericEntity{
    @Column()
    payment_channel: String

    @Column()
    description: String

    @Column({type: "double"})
    amount: Double

    @Column()
    userId: number

    @Column()
    username: String

    @Column()
    doneeId: number

    @Column()
    doneeName: String

    @Column()
    type: String

    @Column()
    orderId: number

    @Column()
    status: String

    @ManyToOne(() => User, (user) => user.transactions)
    user: User
}