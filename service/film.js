const film_repository = require("../repositories/film");

class filmService {
  static async create(req, res, next) {
    // get dari user controller
    const {
      title,
      description,
      release_year,
      language_id,
      rental_duration,
      rental_rate,
      length,
      rating,
    } = req;
    // bcrypt password
    const film = await film_repository.register({
      title,
      description,
      release_year,
      language_id,
      rental_duration,
      rental_rate,
      length,
      rating,
    });

    return film;
  }
}

module.exports = filmService;
