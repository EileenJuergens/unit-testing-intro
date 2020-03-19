/* https://jestjs.io/docs/en/expect
* jest matchers and assertions
*/
import React from "react";
import { shallow, mount } from "enzyme";
import Example from "./Example";

describe("Truthiness", () => {
	it("should test toBe, toEqual", () => {
		expect(42).toBe(42);
		expect(42).toEqual(42);
		expect(42).not.toBe(3);

		const a = { a: 1 };
		const b = { a: 1 };
		expect(a).toEqual(b);
		expect(a).not.toBe(b);
	});

	it("should test boolean matchers", () => {
		expect(true).toBeTruthy();
		expect(false).toBeFalsy();

		expect("foo").toBeTruthy();
		expect("").toBeFalsy();

		expect(null).toBeNull();
		expect(undefined).toBeUndefined();
		expect(7).toBeDefined();
		expect(NaN).toBeNaN();
	});
});

describe("Numerics", () => {
	it("should test numbers", () => {
		expect(2).toBeGreaterThan(1);
		expect(1).toBeGreaterThanOrEqual(1);

		expect(1).toBeLessThan(2);
		expect(1).toBeLessThanOrEqual(1);
	});

	it("should test float numbers", () => {
		/* Don't use .toBe with floating-point numbers. Use toBeCloseTo instead
        *    0.1 + 0.2 = 0.30000000000000004
        */
		expect(0.1 + 0.2).not.toEqual(0.3);
		expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
	});
});

describe("Arrays", () => {
	it("should test arrays", () => {
		expect(["Alice", "Bob", "Eve"]).toHaveLength(3);

		//check if there's item in an array
		expect(["Alice", "Bob", "Eve"]).toContain("Alice");

		//check if an item with a specific structure and values is contained in an array.
		expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 });

		//the expected array is a subset of the received array
		expect(["Alice", "Bob", "Eve"]).toEqual(expect.arrayContaining(["Alice", "Bob"]));

		//check if it's sub object
		expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
	});
});

describe("functions", () => {
	it("should call error matchers", () => {
		//alias of toThrowError
		expect(func).toThrow();
		expect(func).toThrow("Out of cheese");
	});

	it("should test calls", () => {
		expect(func).toBeCalled();
		expect(func).toHaveBeenCalledTimes(1);
		expect(func).toBeCalledWith(expect.stringContaining("foo"));
		expect(func).toBeCalledWith(expect.stringMatching(/^[A-Z]\d+$/));
		expect(func).toBeCalledWith(expect.objectContaining({ x: expect.any(Number), y: expect.any(Number) }));
		expect(func).toHaveBeenLastCalledWith(expect.anything());
	});

	/*
    Mock functions are a way of testing how a function will
    perform without yet writing the details of the function.
    This can be useful when you’re writing code that requires a callback,
    yet don’t know how it will be implemented.
    */
	it("should call callback functions", () => {
		const mockCallback = jest.fn();
		func([0, 1], mockCallback);
		expect(mockCallback.mock.calls.length).toBe(2);
	});
});


