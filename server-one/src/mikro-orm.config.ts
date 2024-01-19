import { __prod__ } from "./constants";
import { Workout } from "./entities/Workout";

export default {
  entities: [Workout],
  dbName: "gymapp",
  debug: !__prod__,
};
