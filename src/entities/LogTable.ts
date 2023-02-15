import { Entity, Column, ManyToOne } from "typeorm";

import GenericEntity from "./GenericEntity";
import { User } from "./User";

@Entity("log_table")
export class LogTable extends GenericEntity{
    @Column("text")
    description: String

    @Column()
    userId: number

    @Column()
    tree: String

    @Column()
    type: String

    @Column()
    color: String

    @ManyToOne(() => User, (user) => (user.logs))
    user: User
}