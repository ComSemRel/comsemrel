import { ICommand } from '@comsemrel/interfaces';
import { IRenderer } from '@comsemrel/interfaces';
import ICliApp from './ICliApp';

class CliApp implements ICliApp {
	constructor( commands: Set<ICommand>, renderer: IRenderer ) {
		// TSLint, Y R U so annoyin' (╯°□°）╯︵ ┻━┻
	}
}

export default CliApp;
