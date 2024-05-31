const { Film } = require("../models");
const models = require("../models");
const film_service = require("../service/film");

class FilmController {
  static async create(req, res, next) {
    const {
      title,
      description,
      release_year,
      language_id,
      rental_duration,
      rental_rate,
      length,
      rating,
    } = req.body;
    try {
      const film = await film_service.create({
        title,
        description,
        release_year,
        language_id,
        rental_duration,
        rental_rate,
        length,
        rating,
      });
      res.status(201).json(film);
    } catch (error) {
      next(error);
    }
  }
  static async upload(req, res, next) {
    const { id } = req.params;
    const file = req.file;
    const film = await Film.findByPk(id);
    if (!film) {
      return res.status(400).json({
        message: "User Not Found!",
      });
    }
    if (!file) {
      return res.status(400).json({
        message: "No image detected",
      });
    }
    const new_image_url = `http://localhost:3000/upload/${file.filename}`;
    await film.update({
      image_url: new_image_url,
    });
    res.status(201).json({
      message: "Success update image film ",
    });
  }
  static async get(req, res, next) {
    // set default nilai page =1 dan limit 5
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * limit;
    try {
      // find all untuk get semua data
      const data = await Film.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
      });
      res.status(200).json({
        totalItems: data.count,
        totalPages: Math.ceil(data.count / limit),
        currentPage: parseInt(page),
        films: data.rows,
      });
    } catch (error) {
      next(error);
    }
    // res.status(200).json("data");
  }
  static async getOne(req, res, next) {
    const { id } = req.params;
    // findOne untuk get 1 data
    const data = await Film.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json(data);
    // res.status(200).json("data");
  }
  // mendapatkan list film dan category
  static async getRelasi(req, res, next) {
    // find all untuk get semua data
    const data = await models.Film_Category.findAll({
      // untuk join/ associate
      include: [models.Film, models.Category],
    });

    res.status(200).json(data);
    // res.status(200).json("data");
  }
  static async create(req, res, next) {
    const {
      title,
      description,
      release_year,
      language_id,
      rental_duration,
      rental_rate,
      length,
      rating,
      spesial_feature,
      fulltext,
    } = req.body;
    try {
      const data = await Film.create({
        title,
        description,
        release_year,
        language_id,
        rental_duration,
        rental_rate,
        length,
        rating,
        spesial_feature,
        fulltext,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    const { id } = req.params;
    await Film.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: "successfully delete",
    });
  }
}
module.exports = FilmController;
