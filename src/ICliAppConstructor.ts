import ICliApp from './ICliApp';
import ICommand from './ICommand';
import IRenderer from './IRenderer';

interface ICliAppConstructor {
	new( commands: Set<ICommand>, renderer: IRenderer ): ICliApp;
}

export default ICliAppConstructor;
