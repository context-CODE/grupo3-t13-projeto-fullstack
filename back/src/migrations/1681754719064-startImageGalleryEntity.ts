import { MigrationInterface, QueryRunner } from "typeorm";

export class StartImageGalleryEntity1681754719064 implements MigrationInterface {
    name = 'StartImageGalleryEntity1681754719064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image_gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image_url" character varying(150) NOT NULL, CONSTRAINT "PK_278b7928303c6293cf98ed65172" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "image_gallery"`);
    }

}
