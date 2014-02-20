var cr = require('../index')
  , _ = require('lodash')
  , expect = require('chai').expect
  , log = console.log.bind(console.log, __filename, '> ')

var VALID_EMAILS = [
	'john@mycompany.com',
	'john.doe@mycompany.com',
	'john+1@mycompany.com',
	'john.doe+1@mycompany.com',
	'john@mycompany.co.uk',
	'john.doe@mycompany.co.uk',
	'john+1@mycompany.co.uk',
	'john.doe+1@mycompany.co.uk'
]

var INVALID_EMAILS = [
	// 'john@mycompany..com',//@todo
	'john@mycompany.',
	'johnmycompany.com',
	'johnmycompanycom',
	'john@mycompanycom',
	'john*@mycompany.com'
]

var VALID_PHONE_NUMBERS = [
	'1-234-567-8901',
    '1-234-567-8901 x1234',
    '1-234-567-8901 ext1234',
    '1 (234) 567-8901',
    '1.234.567.8901',
    '12345678901'
]

var INVALID_PHONE_NUMBERS = [
    '1/234/567/8901',
    'a/234/567/8901'
]

describe('positive tests', function(){
	it('valid emails should validate', function(){
		_.each(VALID_EMAILS, function(it){
			expect(cr.email.test(it)).to.be.ok;
		})
	});
	it('valid phone numbers should validate', function(){
		_.each(VALID_PHONE_NUMBERS, function(it){
			expect(cr.phone.test(it)).to.be.ok;
		})
	});
});

describe('negative tests', function(){
	it('invalid emails should not validate', function(){
		_.each(INVALID_EMAILS, function(it){
			expect(cr.email.test(it)).to.not.be.ok;
		})
	});
	it('invalid phone numbers should not validate', function(){
		_.each(INVALID_PHONE_NUMBERS, function(it){
			expect(cr.phone.test(it)).to.not.be.ok;
		})
	});
});
