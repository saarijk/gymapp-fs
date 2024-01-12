import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Workout } from "./entities/Workout";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  const workout = orm.em.create(Workout, {
    name: "my first workout",
    createdAt: "",
    updatedAt: "",
    duration: "",
    calories: 0,
    category: "",
  });
  await orm.em.persistAndFlush(workout);
};

main();
