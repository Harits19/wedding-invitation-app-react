import { DatabaseModel } from "../model";
import { GreetingRepositoryHandler } from "../repository/greeting-repository";
import { WeddingRepositoryHandler } from "../repository/wedding-repository";
// import { createKysely } from "@vercel/postgres-kysely";

// const vercelDb = createKysely<DatabaseModel>();

// export const weddingRepository = new WeddingRepositoryHandler({ vercelDb });
// export const greetingRepository = new GreetingRepositoryHandler({ vercelDb });

export const weddingRepository: any = {};
export const greetingRepository: any = {};
