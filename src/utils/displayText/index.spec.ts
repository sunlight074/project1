import { displayText } from '.';

describe('displayText', () => {
    it('should return firstName lastName', () => {
        expect(displayText('firstName' ,'lastName')).toBe('firstName lastName');
    });
});
