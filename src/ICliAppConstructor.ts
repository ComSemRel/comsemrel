import { ICommand } from '@comsemrel/interfaces';
import { IRenderer } from '@comsemrel/interfaces';
import ICliApp from './ICliApp';

interface ICliAppConstructor {
	new( commands: Set<ICommand>, renderer: IRenderer ): ICliApp;
}

export default ICliAppConstructor;
