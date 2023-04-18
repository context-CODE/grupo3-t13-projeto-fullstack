import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Advertisement from "./advertisement.entity";

@Entity("image_gallery")
export default class ImageGallery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  image_url: string;

  @ManyToOne(() => Advertisement, (advertisement) => advertisement.imageGallery)
  advertisement: Advertisement;
}
