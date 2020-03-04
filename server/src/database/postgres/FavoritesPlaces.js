const database = require("./../database");

const getFavoritePlace = async id => {
  try {
    const res = await database.query(
      "SELECT * FROM favorite_places where id = $1",
      [id]
    );
    if (res.rows.length === 0) return { error: `id: ${id} not found` };
    return res.rows;
  } catch (err) {
    return err;
  }
};

const getFavoritePlaces = async () => {
  try {
    const res = await database.query("SELECT * FROM favorite_places");
    return res.rows;
  } catch (err) {
    return err;
  }
};

const createFavoritePlace = async req => {
  try {
    const res = await database.query(
      "INSERT INTO favorite_places (user_id, title, longitude, latitude) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.user_id, req.name, req.longitude, req.latitude]
    );
    return res.rows;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getFavoritePlace,
  getFavoritePlaces,
  createFavoritePlace
};
