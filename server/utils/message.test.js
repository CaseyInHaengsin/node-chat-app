var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
            //call generateMessage with a test value
            //store response
            //assert from matches value passed in
            //text matches up
            //createdAt Value is a number

            var from = 'Casey';
            var text = 'My test';
            var message = generateMessage(from, text);
            expect(typeof message.createdAt).toBe('number');
            //expect(message.createdAt).toBeA('number'); 
            expect(message).toMatchObject({from, text});
            

    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'deb'; 
        var latitude = 15; 
        var longitude = 19; 
        var url = 'https://www.google.com/maps?q='; 
        var message = generateLocationMessage(from, latitude, longitude); 

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});

    });
})