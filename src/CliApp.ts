import ICliApp from './ICliApp';
import ICommand from './ICommand';
import IRenderer from './IRenderer';

class CliApp implements ICliApp {
	constructor( commands: Set<ICommand>, renderer: IRenderer );
}

export default CliApp;
