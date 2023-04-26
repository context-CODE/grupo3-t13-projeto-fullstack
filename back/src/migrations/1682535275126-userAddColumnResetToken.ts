import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAddColumnResetToken1682535275126 implements MigrationInterface {
    name = 'UserAddColumnResetToken1682535275126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`);
    }

}
