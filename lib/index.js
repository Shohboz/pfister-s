const http = require("http");
const Router = require("router");
const bodyParser = require("body-parser");
const finalhandler = require("finalhandler");
const multer = require("multer");
const { create } = require("./controllers");
const config = require("../config");

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

router.use(bodyParser.json());

router.get("/:id", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.params));
});

router.post("/upload", upload.array("files"), create);

const server = http.createServer((req, res) =>
  router(req, res, finalhandler(req, res))
);

server.listen(config.port || 3000);
