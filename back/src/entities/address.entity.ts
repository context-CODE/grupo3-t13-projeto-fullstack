import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("adresses")
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 8,
  })
  zipCode: string;

  @Column({
    type: "varchar",
    length: 2,
  })
  state: string;

  @Column({
    type: "varchar",
    length: 25,
  })
  city: string;

  @Column({
    type: "varchar",
    length: 40,
  })
  street: string;

  @Column({
    type: "integer",
  })
  number: number;

  @Column({
    type: "varchar",
    length: 128,
    nullable: true,
  })
  complement: string;
}
