import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Workout {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name!: string;

  @Property()
  duration: string;

  @Property()
  calories: number;

  @Property()
  category: string;
}
