var chai = require( 'chai' );
var expect = chai.expect;
var Set = require( '../src/set' );

describe( 'Set', function() {

	it( 'should create a set', function() {
		expect( new Set() ).to.be.an( 'object' );
	});

	it( 'should create a set from an array', function() {
		var s = new Set([ 'a', 'b' ]);
		expect( s.a ).to.not.be.undefined;
		expect( s.b ).to.not.be.undefined;
	});

	it( 'should create a superset from a subset', function() {
		var s = new Set( new Set([ 'a', 'b' ]));
		expect( s.a ).to.not.be.undefined;
		expect( s.b ).to.not.be.undefined;
	});
});

describe( 'Set.toArray', function() {

	it( 'should return it\'s an array', function() {
		var s = new Set();
		expect( s.toArray() ).to.be.an( 'Array' );
	});

	it( 'should return it\'s elements in the array', function() {
		var s = new Set([ 'a', 'b' ]);
		expect( s.toArray() ).to.contain( 'a' );
		expect( s.toArray() ).to.contain( 'b' );
	});
});

describe( 'Set.equals', function() {

	it( 'should consider a set equal to itself', function() {
		var s = new Set([ 'a', 'b' ]);
		expect( s.equal( s )).to.be.true;
	});

	it( 'should consider two sets equal regardless of argument order', function() {
		var s1 = new Set([ 'a', 'b' ]);
		var s2 = new Set([ 'b', 'a' ]);

		expect( s1.equal( s2 )).to.be.true;
	});

	it( 'should consider two sets not equal when they do not have the same number of elements', function() {
		var s1 = new Set([ 'a' ]);
		var s2 = new Set();

		expect( s1.equal( s2 )).to.be.false;
	});

	it( 'should consider two sets not equal when they do not have the same elements', function() {
		var s1 = new Set([ 'a' ]);
		var s2 = new Set([ 'b' ]);

		expect( s1.equal( s2 )).to.be.false;
	});

	it( 'should not consider a subset to be equal to a superset', function() {
		var s1 = new Set([ 'a' ]);
		var s2 = new Set([ 'a', 'b' ]);

		expect( s1.equal( s2 )).to.be.false;
	});
});
