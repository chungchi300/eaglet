import { basic, sequenlize } from "lib/parseError";
export default async function presentError(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    console.log(err);
    err.expose = true;

    switch (err.name) {
      case "SequelizeValidationError":
        err = sequenlize(err);
        break;
      default:
        err = basic(err);
    }
    ctx.body = err;
  }
}
