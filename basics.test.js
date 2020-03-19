/* eslint-disable no-undef */
/* Jest basic example */

// Basic example
it("should do something", () => {
	expect(2).toEqual(2);
});

test("if it works", () => {
	expect(1).toEuqal(1);
});

//Scoping
describe("test name", () => {
	describe("sub test name", () => {
		const test = 2;

		it("should do something", () => {
			expect(test).toEqual(2);
		});
	});

	it("should do something", () => {
		expect(2).toEqual(2);
	});
});

//Setup
describe("sub test name", () => {
	const test = 2;

	//excute before each test
	beforeEach(() => {
		init();
	});
	afterEach(() => {
		clearData();
	});

	//excute once before all test, especially for async funcion(cann't do it inline)
	beforeAll(() => {
		return init();
	});
	afterAll(() => {
		return clearData();
	});

	it("should do something", () => {
		expect(test).toEqual(2);
	});
});
