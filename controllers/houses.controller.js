import * as housesRepository from "../repositories/houses.repository.js"
import HTTPError from "../errorhandling/HTTPError.js";


export const getAllHouses = async (req, res, next) => {
    const allHouses = await housesRepository.getAllHouses();

    res.json(allHouses);
    if (allHouses.length === 0) {
      throw new HTTPError(404, "No houses found");
      };
    
    res.status(200).json(allHouses);
};

export async function getSingleHouse(req, res, next) {
      const id = req.params.id;
      const house = await housesRepository.getHouseById(id);

      if (!house) {
        throw new HTTPError(404, "House not found")
        };
      res.status(200).json(house);
};