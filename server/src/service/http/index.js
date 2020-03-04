const { Router } = require("express");
const {
  getFavoritePlace,
  getFavoritePlaces,
  createFavoritePlace
} = require("../../database/postgres/FavoritesPlaces");

const router = Router();

router.get("/", async (_, res) => {
  const places = await getFavoritePlaces();
  res.json({ data: places });
});

router.get("/:id", async (req, res) => {
  const place = await getFavoritePlace(req.params.id);
  res.json({ data: place });
});

router.post("/create", async (req, res) => {
  const place = await createFavoritePlace(req.body);
  res.json({ data: place });
});

module.exports = router;
