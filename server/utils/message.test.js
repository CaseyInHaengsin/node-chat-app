var expect = require('expect');
var {generateMessage} = require('./message');

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