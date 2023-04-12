import { MigrationInterface, QueryRunner } from "typeorm";

export class StartAdvertisementEntity1681277285424 implements MigrationInterface {
    name = 'StartAdvertisementEntity1681277285424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "advertisements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(60) NOT NULL, "model" character varying(120) NOT NULL, "year" integer NOT NULL, "fuel" character varying(20) NOT NULL, "color" character varying(20) NOT NULL, "quilometres" integer NOT NULL, "price" numeric(10,2) NOT NULL DEFAULT '0', "description" text NOT NULL, "image" character varying(300) NOT NULL, "is_available" boolean NOT NULL DEFAULT true, "created_at" date NOT NULL DEFAULT now(), "updated_at" date NOT NULL DEFAULT now(), "deleted_at" date, CONSTRAINT "PK_4818a08332624787e5b2bf82302" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "advertisements"`);
    }

}
