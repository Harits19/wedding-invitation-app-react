import { createKysely } from "@vercel/postgres-kysely";
import { Database } from "../model";

const vercelDb = createKysely<Database>();

export default vercelDb;
