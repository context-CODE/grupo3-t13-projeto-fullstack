import { ManyToOne } from "typeorm";
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import User from "./user.entity";
import Advertisement from "./advertisement.entity";

@Entity("comments")
export default class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  comment: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Advertisement, (advertisement) => advertisement.comments)
  advertisement: Advertisement;
}
