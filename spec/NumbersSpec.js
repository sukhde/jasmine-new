describe("Numbers", function () {
    it("When all the numbers are positive, it should return the sum of all the numbers", function () {
        expect(positiveSum([4, 5])).toEqual(9);
    });

    it("When there is a negative number in the provided array, it should not be included as part of the sum", function () {
        expect(positiveSum([-5, 7])).toEqual(7);
    });


    it("should return a sum of 0 , When the provided array is empty", function () {
        expect(positiveSum([])).toEqual(0);
    });

    it("should return a sum of 0,when  all negative numbers are provided in array ", function () {
        expect(positiveSum([-4, -8])).toEqual(0);
    });
});
describe("Dvisible Numbers", function () {

    it("When a number is divisible by both of the provided divisors, it should return true.", function () {
        expect(isDivisible(12, 2, 4)).toEqual(true);
    });
    it("When the number is smaller then both the provided divisors, it should return false.", function () {
        expect(isDivisible(1, 2, 4)).toEqual(false);
    });

    it("When the number is not divisible by only one of the provided divisors it should return false.", function () {
        expect(isDivisible(4, 2, 3)).toEqual(false);
    });
    it("When the number is not divisible by any of the provided divisors it should return false.", function () {
        expect(isDivisible(5, 3, 2)).toEqual(false);
    });
});
describe("some characters", function () {

    it("When there is only 1 characters in the string, it returns itself", function () {
        expect(solution('a')).toEqual('a');
    });
    it("When there are multiple characters in the string it returns the string, reversed.", function () {
        expect(solution('multiple')).toEqual('elpitlum');
    });
    it("When there are no characters in the string, it returns empty string.", function () {
        expect(solution('')).toEqual('');
    });

});
describe("Something Unique", function () {
    it("when there are no number it should be return empty array", function () {
        expect(reverseSeq()).toEqual([]);
    })
})