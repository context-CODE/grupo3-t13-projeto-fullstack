import { MigrationInterface, QueryRunner } from "typeorm";

export class StartAddressEntity1681747100676 implements MigrationInterface {
    name = 'StartAddressEntity1681747100676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying(8) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(25) NOT NULL, "street" character varying(40) NOT NULL, "number" integer NOT NULL, "complement" character varying(128), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "adresses"`);
    }

}
