import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./address.entity";
import Advertisement from "./advertisement.entity";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 60,
  })
  name: string;

  @Column({
    type: "varchar",
    unique: true,
    length: 60,
  })
  email: string;

  @Column({
    type: "varchar",
    unique: true,
    length: 11,
  })
  cpf: string;

  @Column({
    type: "varchar",
    length: 18,
  })
  phone_number: string;

  @Column({
    type: "date",
  })
  birthday: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({
    type: "boolean",
  })
  is_advertiser: boolean;

  @Column({
    type: "varchar",
    length: 150,
  })
  password: string;

  @OneToMany(() => Advertisement, (advertisement) => advertisement.user)
  advertisements: Advertisement[];

  @OneToOne(() => Address, (address) => address.user)
  address: Address;
}
