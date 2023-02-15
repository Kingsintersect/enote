import { Entity, Column } from "typeorm";

import GenericEntity from "./GenericEntity";

@Entity("admin_msg")
export class AdminMsg extends GenericEntity{
    @Column("text")
    message: string

    @Column()
    status: string
}