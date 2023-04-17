import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationshipAdAndImageGallery1681755774587 implements MigrationInterface {
    name = 'AddRelationshipAdAndImageGallery1681755774587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_gallery" ADD "advertisementId" uuid`);
        await queryRunner.query(`ALTER TABLE "image_gallery" ADD CONSTRAINT "FK_f2ddd86a30b1fdc78a0a238faf2" FOREIGN KEY ("advertisementId") REFERENCES "advertisements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_gallery" DROP CONSTRAINT "FK_f2ddd86a30b1fdc78a0a238faf2"`);
        await queryRunner.query(`ALTER TABLE "image_gallery" DROP COLUMN "advertisementId"`);
    }

}
