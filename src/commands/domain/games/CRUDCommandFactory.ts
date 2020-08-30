import { CreateGame } from './CreateGame';
import ICommandConfig from '../../../common/ICommandConfig';
import ICommandFactory from '../../../common/ICommandFactory';

export class CRUDCommandFactory implements ICommandFactory {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateGame.name) {
            return new CreateGame(config.args);
        } else {
            throw new Error('Command not found');
        }
    } 
}