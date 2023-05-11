import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationshipUserAddress1681753450395 implements MigrationInterface {
    name = 'AddRelationshipUserAddress1681753450395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "UQ_b4f5c94493f23641866f161e212" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "UQ_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "userId"`);
    }

}
