import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeColumnPriceForInteger1681330494470 implements MigrationInterface {
    name = 'ChangeColumnPriceForInteger1681330494470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "price" numeric(10,2) NOT NULL DEFAULT '0'`);
    }

}
