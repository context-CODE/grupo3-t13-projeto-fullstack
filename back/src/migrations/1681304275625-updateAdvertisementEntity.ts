import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAdvertisementEntity1681304275625 implements MigrationInterface {
    name = 'UpdateAdvertisementEntity1681304275625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "quilometres"`);
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "kilometers" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "kilometers"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "quilometres" integer NOT NULL`);
    }

}
