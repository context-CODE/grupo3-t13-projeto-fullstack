import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntityAddImgColumn1681767830149 implements MigrationInterface {
    name = 'UserEntityAddImgColumn1681767830149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_img" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_img"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthday" date NOT NULL`);
    }

}
