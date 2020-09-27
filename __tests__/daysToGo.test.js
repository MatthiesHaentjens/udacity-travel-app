import { daysToGo } from "../src/client/js/daysToGo";

test('Returns a number given a data formatted as mm-dd-yyyy', () => {
    expect(daysToGo('12-31-2050')).toBeGreaterThan(0);
})