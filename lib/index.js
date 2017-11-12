const http = require("http");
const Router = require("router");
const bodyParser = require("body-parser");
const finalhandler = require("finalhandler");
const config = require("../config");

const router = Router();

router.use(bodyParser.json());

router.get("/:id", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.params));
});

const server = http.createServer((req, res) =>
  router(req, res, finalhandler(req, res))
);

server.listen(config.port || 3000);
