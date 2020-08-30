import { POSTCommand } from './POSTGameCommand';
import ICommandConfig from '../../../common/ICommandConfig';
import ICommandFactory from '../../../common/ICommandFactory';

export class GameCommandFactory implements ICommandFactory {
    makeCommand = (config: ICommandConfig) => {
        if (config.commandName == POSTCommand.name) {
            return new POSTCommand(config.args);
        } else {
            throw new Error('Command not found');
        }
    }
}