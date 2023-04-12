import { MigrationInterface, QueryRunner } from "typeorm";

export class Number1681328770602 implements MigrationInterface {
    name = 'Number1681328770602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "price" numeric(10,2) NOT NULL`);
    }

}
