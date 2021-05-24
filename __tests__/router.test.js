/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 describe('Testing router.pushToHistory', () => {
    test('Testing settings', () => {
        let currLength = history.length;
        pushToHistory('settings');
        expect(history.state.page).toBe('settings');
        expect(history.length).toBe(currentLength+1);
        
    })

    test('Testing entry', () => {
        const entryNum = 0;
        let currLength = history.length;
        pushToHistory('entry', entryNum);
        expect(history.state.page).toBe(`entry${entryNum}`);
        expect(history.length).toBe(currLength+1);
    })

    test('Testing default', () => {
        let currLength = history.length;
        pushToHistory('default');
        expect(history.state.page).toBe(undefined);
        expect(history.length).toBe(currLength+1);
    })
})

