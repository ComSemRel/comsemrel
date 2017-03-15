import CliApp from './CliApp';
import ICliApp from './ICliApp';
import ICliAppConstructor from './ICliAppConstructor';
import ICommand from './ICommand';
import IRenderer from './IRenderer';

function creator( constructor: ICliAppConstructor, commands: Set<ICommand>, renderer: IRenderer ): ICliApp {
	return new constructor( commands, renderer );
}

function createCliApp( commands: Set<ICommand>, renderer: IRenderer ): ICliApp {
	return creator( CliApp, commands, renderer );
}

export default createCliApp;
