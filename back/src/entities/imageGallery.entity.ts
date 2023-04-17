import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("image_gallery")
export default class imageGallery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  image_url: string;
}
