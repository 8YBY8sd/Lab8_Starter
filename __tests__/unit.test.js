// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// matches valid phone numbers
test('123-456-7890 returns true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('(123) 456-7890 returns true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
// return a false response
test('110 returns false', () => {
    expect(functions.isPhoneNumber('110')).toBe(false);
});
test('911 returns false', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
});


// matches valid emails
test('bingyang@email.com returns true', () => {
    expect(functions.isEmail('bingyang@email.com')).toBe(true);
});

test('bingyang@e_mail.com returns true', () => {
    expect(functions.isEmail('bingyang@e_mail.com')).toBe(true);
});
// return a false response
test('bingyang@ returns false', () => {
    expect(functions.isEmail('bingyang@')).toBe(false);
});

test('@example.com returns false', () => {
    expect(functions.isEmail('@example.com')).toBe(false);
});


// The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
test('b1234 returns true', () => {
    expect(functions.isStrongPassword('b1234')).toBe(true);
});
test('b12_34 returns true', () => {
    expect(functions.isStrongPassword('b12_34')).toBe(true);
});
// return a false response
test('1234 returns false', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});
test('a1234567890123456789 returns false', () => {
    expect(functions.isStrongPassword('a1234567890123456789')).toBe(false);
});

// test isDate(date)
test('00/00/0000 returns true', () => {
    expect(functions.isDate('00/00/0000')).toBe(true);
});
test('1/1/1111 returns true', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});
// return a false response
test('/1/1111 returns false', () => {
    expect(functions.isDate('/1/1111')).toBe(false);
});
test('jan/1/1111 returns true', () => {
    expect(functions.isDate('jan/1/1111')).toBe(false);
});


// test isHexColor(color)
test('#000000 returns true', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('#123 returns true', () => {
    expect(functions.isHexColor('#123')).toBe(true);
});
// return a false response
test('#1 returns false', () => {
    expect(functions.isHexColor('#1')).toBe(false);
});
test('#1234567 returns false', () => {
    expect(functions.isHexColor('#1234567')).toBe(false);
});