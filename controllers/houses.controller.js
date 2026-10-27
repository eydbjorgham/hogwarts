// Sá ikki heilt hvat stóð á myndini, so hetta er møguliga skeivt
import * as housesRepository from "../repos/house.repo"


export const getAllHouses = async (req, res) => {
    try {
    const allHouses = await housesRepository.getAllHouses();
    res.json(allHouses);
    if (allHouses.length === 0) {
      return res.status(404).json({
        error: "Houses not found",
      });
    }
    res.status(200).json(allHouses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
}

export async function getSingleHouse(req, res) {
    try {
      const id = req.params.id;
      const house = await housesRepository.getHouseById(id);

      if (house) {
        res.status(200).json(house);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error", code: err.code });
    }
}