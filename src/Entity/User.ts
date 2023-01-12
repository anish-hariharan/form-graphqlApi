import {Entity, Column, PrimaryGeneratedColumn } from "typeorm"


@Entity('user-forms')
export class User {
    @PrimaryGeneratedColumn({
        type:'int'
    })
    id: number

    @Column({
        type:'varchar'
    })
    name : string

    @Column({
        type: 'text'
    })
    email: string

    @Column({
        type:'varchar'
    })
    contact: string

    @Column({
        type:'int'
    })
    age: number

}