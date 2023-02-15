import { Entity, Column, OneToMany } from "typeorm";
import { Account } from "./Account";

import GenericEntity from "./GenericEntity";
import { LogTable } from "./LogTable";
import { Transaction } from "./Transaction";

@Entity("users")
export class User extends GenericEntity{
    @Column()
    firstName: String

    @Column()
    lastName: String

    @Column()
    username: String

    @Column()
    email: String

    @Column()
    password: String

    @OneToMany(() => Account, (account) => account.user)
    accounts: Account[]

    @OneToMany(() => Transaction, (transaction) => (transaction.user))
    transactions: Transaction[]

    @OneToMany(() => LogTable, (log) => (log.user))
    logs: LogTable[]
}