import { Entity, Column, ManyToOne } from "typeorm";

import GenericEntity from "./GenericEntity";
import { User } from "./User";

@Entity("Accounts")
export class Account extends GenericEntity{
    @Column("int")
    smart_card_no: number

    @Column()
    type: String // Bank, Electricity, TV Sub

    @Column()
    user_id: String

    @ManyToOne(() => User, (user) => user.accounts)
    user: User
}