var cr = require('../index')
  , expect = require('chai').expect
  , log = console.log.bind(console.log, __filename, '> ')

var VALID_EMAIL = 'test@test.com';
var INVALID_EMAIL = 'test@test..com';
var PHONE_NUMBERS = [
	'1-234-567-8901',
    '1-234-567-8901 x1234',
    '1-234-567-8901 ext1234',
    '1 (234) 567-8901',
    '1.234.567.8901',
    '1/234/567/8901',
    '12345678901'
]

describe('email', function(){
	it('valid emails should validate', function(){
		expect(cr.email.test(VALID_EMAIL)).to.be.ok;
	});
	it('invalid emails should not validate', function(){
		expect(cr.email.test(INVALID_EMAIL)).to.not.be.ok
	});
});

describe('email RFC 5322', function(){
	it('valid emails should validate', function(){
		expect(cr.email_rfc5322.test(VALID_EMAIL)).to.be.ok;
	});
	it('invalid emails should not validate', function(){
		expect(cr.email_rfc5322.test(INVALID_EMAIL)).to.not.be.ok
	});
});
