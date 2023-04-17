import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationshipAdAndImagesGallery1681755087546 implements MigrationInterface {
    name = 'AddRelationshipAdAndImagesGallery1681755087546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image_gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image_url" character varying(150) NOT NULL, "advertisementId" uuid, CONSTRAINT "PK_278b7928303c6293cf98ed65172" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image_gallery" ADD CONSTRAINT "FK_f2ddd86a30b1fdc78a0a238faf2" FOREIGN KEY ("advertisementId") REFERENCES "advertisements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_gallery" DROP CONSTRAINT "FK_f2ddd86a30b1fdc78a0a238faf2"`);
        await queryRunner.query(`DROP TABLE "image_gallery"`);
    }

}
