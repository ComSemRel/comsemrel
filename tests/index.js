const chai = require( 'chai' );
const expect = chai.expect;
const browser = require( '../src/index' );

describe( 'module', () => {
	it( 'exports CLIApp instanc', () => {
		expect( browser.default ).to.be.an( 'object' );
	} );
} );
