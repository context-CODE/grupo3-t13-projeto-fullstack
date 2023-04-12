import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaTest1681328338917 implements MigrationInterface {
    name = 'SchemaTest1681328338917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" ALTER COLUMN "price" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" ALTER COLUMN "price" SET DEFAULT '0'`);
    }

}
