const express = require("express");
const router = express.Router();
// middleware auth
const auth = require("../middleware/auth");

const FilmController = require("../controllers/filmController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../upload"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
router.post("/upload/:id", upload.single('image_url'),FilmController.upload);
router.post("/cek", FilmController.upload);

router.post("/create", auth, FilmController.create);
router.get("/cat", FilmController.getRelasi);
router.get("/", auth, FilmController.get);
router.get("/:id", FilmController.getOne);
router.delete("/delete/:id", FilmController.delete);

module.exports = router;
