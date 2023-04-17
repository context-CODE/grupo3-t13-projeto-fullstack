import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("adresses")
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 8,
  })
  zip_code: string;

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

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => User, (user) => user.address)
  user: User;
}
