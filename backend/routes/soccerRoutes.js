import {
  addNewPlayer,
  getPlayers,
  getPlayersWithID,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers.js";

export const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);

  app
    .route("/player/:PlayerId")
    .get(getPlayersWithID)
    .put(updatePlayer)
    .delete(deletePlayer);
};

//export default routes;
