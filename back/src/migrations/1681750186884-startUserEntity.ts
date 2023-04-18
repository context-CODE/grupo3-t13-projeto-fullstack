import { MigrationInterface, QueryRunner } from "typeorm";

export class StartUserEntity1681750186884 implements MigrationInterface {
    name = 'StartUserEntity1681750186884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "cpf" character varying(11) NOT NULL, "phone_number" character varying(18) NOT NULL, "birthday" date NOT NULL, "description" text, "is_advertiser" boolean NOT NULL, "password" character varying(150) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
