import { MigrationInterface, QueryRunner } from "typeorm";

export class DateFormatColumnsAdvertisement1681281569653 implements MigrationInterface {
    name = 'DateFormatColumnsAdvertisement1681281569653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "deleted_at" date`);
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "updated_at" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "created_at" date NOT NULL DEFAULT now()`);
    }

}
