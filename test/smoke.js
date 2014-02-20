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
	'123-456-7890',
	'1-234-567-8901',
    '1-234-567-8901 x1234',
    '1-234-567-8901 ext1234',
    '1 (234) 567-8901',
    '1.234.567.8901',
    '12345678901',
    '1/234/567/8901'
]

var INVALID_PHONE_NUMBERS = [
    'a-234-567-8901',
    '+.234.567.8901',
    '123',
    'abc'
]

var EMAIL_ONLY_TEXT = 'Here\'s my email address: john.doe@gmail.com, Best, John'; 
var PHONE_ONLY_TEXT = 'Here\'s my phone number 123.456.7890, Cheers, Jane'; 
var EMAIL_PHONE_TEXT = 'My email address is john.doe@gmail.com. You can also call me at 123.456.7890. Thanks, John'; 

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

describe('extraction tests', function(){
	it('email from an email-only text', function(){
		var email = cr.extract('email', EMAIL_ONLY_TEXT)
		expect(email).to.exist;
		expect(email).to.not.be.empty;
		expect(email).to.equal('john.doe@gmail.com');
	});
	it('phone from a phone-only text', function(){
		var phone = cr.extract('phone', PHONE_ONLY_TEXT)
		expect(phone).to.exist;
		expect(phone).to.not.be.empty;
		expect(phone).to.equal('123.456.7890');
	});
	it('email & phone from an email & phone text', function(){
		var email = cr.extract('email', EMAIL_PHONE_TEXT)
		expect(email).to.exist;
		expect(email).to.not.be.empty;
		expect(email).to.equal('john.doe@gmail.com');
		var phone = cr.extract('phone', EMAIL_PHONE_TEXT)
		expect(phone).to.exist;
		expect(phone).to.not.be.empty;
		expect(phone).to.equal('123.456.7890');
	});
});
