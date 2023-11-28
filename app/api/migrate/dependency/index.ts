import { GreetingRepositoryHandler } from "../repository/greeting-repository";
import { WeddingRepositoryHandler } from "../repository/wedding-repository";

export const weddingRepository = new WeddingRepositoryHandler();
export const greetingRepository = new GreetingRepositoryHandler();
