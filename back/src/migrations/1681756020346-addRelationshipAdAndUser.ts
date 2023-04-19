import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationshipAdAndUser1681756020346 implements MigrationInterface {
    name = 'AddRelationshipAdAndUser1681756020346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD CONSTRAINT "FK_5b3a17dd0adeba4fbb27d977304" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP CONSTRAINT "FK_5b3a17dd0adeba4fbb27d977304"`);
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "userId"`);
    }

}
