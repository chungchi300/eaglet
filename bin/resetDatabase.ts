var path = require("path");
import "reflect-metadata";

import { Entity, Column, PrimaryColumn } from "typeorm";
import { createConnection } from "typeorm";
@Entity()
export class Photo {
  @PrimaryColumn() id: number;
  @Column() name: string;
}

console.log("reset database");
// require("../src/smartRequire");
// const sequelize = smartRequire("sequelize");
// const orm = smartRequire("orm");

// async function reloadDatabase() {
//   console.log("reloading");
//   await sequelize.sync({ force: true });

//   await orm.Feedback.create({
//     content: "safe start koa2 is easy h to use"
//   });
//   await orm.Feedback.create({
//     content: "safe start koa2 help me finish my work eariler"
//   });
//   process.exit(0);
// }
// try {
//   console.log("dirname", __dirname);
//   // global.srcRoot = __dirname.replace('bin', 'src');
//   // var config = require(path.join(__dirname, '../src/config/default.js'));

//   //

//   reloadDatabase().then(res => console.log("reload done"));
// } catch (err) {
//   throw new Error(err.message);
//   process.exit(1);
// }