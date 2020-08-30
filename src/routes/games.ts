import * as express from 'express';
import * as AppGameCommands from '../commands/application/games';
import { Games } from '../entity/Games';

var gamesRouter = express.Router();

const gameCommandFactory = new AppGameCommands.GameCommandFactory();

// GET - Get All
gamesRouter.get("/", (req, res, next) => {
    res.send('Hello world from Games');
});

// POST - Create
gamesRouter.post("/create", (req, res, next) => {
    const game:Games = JSON.parse(req.query.game);
    const commandName = 'POSTCommand';

    const commandConfig = {
        commandName,
        args: game,
    };

    const command = gameCommandFactory.makeCommand(commandConfig);
    const results = command.execute();

    const statusCode = results.status ? 200 : 500;

    res.status(statusCode).send('foo');
})

export default gamesRouter;