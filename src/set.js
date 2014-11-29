'use strict';

var Set = module.exports = function( elements ) {

	if( Array.isArray( elements )) {
		for( var element in elements ) {
			this[ elements[ element ]] = null;
		}
	} else if( elements instanceof( Set )) {
		for( element in elements ) {
			this[ element ] = null;
		}
	}
};

Set.prototype.toArray = function() {
	return Object.keys( this );
};

Set.prototype.equal = function( other ) {
	if( Object.keys( this ).length !== Object.keys( other ).length ) {
		return false;
	}

	for( var element in this ) {
		if( !( element in other )) {
			return false;
		}
	}

	return true;
};
