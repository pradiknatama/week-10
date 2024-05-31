const { Film } = require("../models");

class filmRepository{
    static async create(req,res,next){        
        try {
            const { title,description,release_year,language_id,rental_duration,rental_rate,length,rating } = req;
            const film = await Film.create({
                title,
                description,
                release_year,
                language_id,
                rental_duration,
                rental_rate,
                length,
                rating
            });

            return film
        } catch (error) {
            next(error);
        }
    }
}

module.exports = filmRepository;