const functions = require('../functions/functions')

beforeAll(() => initDatabase())
afterAll(() => closeDatabase())

const initDatabase = () => console.log('init db')
const closeDatabase = () => console.log('close db')
const sayHello = () => console.log('hello')

describe('functions should work', () => {
    beforeEach(() => sayHello())

    it('multiplies args', () => {
        expect(functions.mult(4, 8)).toBe(32)
    })
    
    it('should output hello world', () => {
            expect(functions.speak('hello', ' world')).toBe('hello world')
    })
})
