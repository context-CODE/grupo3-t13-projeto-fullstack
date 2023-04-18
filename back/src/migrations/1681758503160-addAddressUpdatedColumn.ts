import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddressUpdatedColumn1681758503160 implements MigrationInterface {
    name = 'AddAddressUpdatedColumn1681758503160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "updated_at"`);
    }

}
