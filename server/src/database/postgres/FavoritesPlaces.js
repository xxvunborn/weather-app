const database = require("./../database");

export const getFavoritePlaces = async () => {
  const res = await database.query("SELECT * FROM favorite_places");
  return res;
};

export const getFavoritePlaceById = async id => {
  const res = await database.query(
    "SELECT * FROM favorite_places WHERE id = ?",
    id
  );
  return res;
};

// TODO(cm): Whay is data?
export const createFavoritePlace = async data => {
  const res = await database.query("INSERT");
  return res;
};

export const updateFavoritePlace = async data => {
  const res = await database.query("UPDATE");
  return res;
};

export const deleteFavoritePlace = async data => {
  const res = await data.query("UPDATE deleted_at");
  return res;
};
