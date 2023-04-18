import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import ImageGallery from "./imageGallery.entity";
import User from "./user.entity";

@Entity("advertisements")
export default class Advertisement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 60 })
  brand: string;

  @Column({ type: "varchar", length: 120 })
  model: string;

  @Column({ type: "int" })
  year: number;

  @Column({ type: "varchar", length: 20 })
  fuel: string;

  @Column({ type: "varchar", length: 20 })
  color: string;

  @Column({ type: "int" })
  kilometers: number;

  @Column({ type: "int" })
  price: number;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar", length: 300 })
  image: string;

  @Column({ default: true })
  is_available: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.advertisements)
  user: User;

  @OneToMany(() => ImageGallery, (imageGallery) => imageGallery.advertisement)
  imageGallery: ImageGallery[];
}
