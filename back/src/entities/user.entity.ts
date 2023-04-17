import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./address.entity";
import Advertisement from "./advertisement.entity";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  profile_img: string;

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
  birthdate: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Advertisement, (advertisement) => advertisement.user)
  advertisements: Advertisement[];

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn()
  address: Address;
}
