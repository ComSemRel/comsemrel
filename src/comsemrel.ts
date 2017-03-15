/*! comsemrel | (c) 2017 Comandeer | MIT license (see LICENSE) */
import commands from './commands';
import createCliApp from './createCliApp';
import ICliApp from './ICliApp';
import Renderer from './Renderer';

const comsemrel = createCliApp( commands, Renderer );

export default comsemrel;
