import app from "~/app";
const http = require("http");

// const smartRequire = require("./smartRequire");
// console.log("smartRequire", smartRequire);
// const config = smartRequire("config");

const port = parseInt("3000");
const server = http.createServer(app.callback());

server.listen(port);
server.on("error", error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(port + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(port + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on("listening", () => {
  console.log("Listening on port: %d", port);
});

module.exports = server;
