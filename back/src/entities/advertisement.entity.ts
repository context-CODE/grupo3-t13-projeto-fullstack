import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

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

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0.0 })
  price: number | string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar", length: 300 })
  image: string;

  @Column({ default: true })
  is_available: boolean;

  @CreateDateColumn({ type: "date" })
  created_at: Date;

  @UpdateDateColumn({ type: "date" })
  updated_at: Date;

  @DeleteDateColumn({ type: "date", nullable: true })
  deleted_at: Date;
}
