"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Workout_1 = require("./entities/Workout");
exports.default = {
    entities: [Workout_1.Workout],
    dbName: "gymapp",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map