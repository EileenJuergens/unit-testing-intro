import React from "react";
import { shallow, mount } from "enzyme";
import Example from "./Example";

//https://enzymejs.github.io/enzyme/docs/api/
let wrapper;

describe("enzyme test", () => {
	beforeEach(() => {
		wrapper = shallow(<Example />);
		
		//print wrapper elements
		console.log(wrapper.debug());

	//full DOM rendering, render sub components
	// wrapper = mount(<ExampleApp />);
	});

	// Disable lifecycle methods of react within tests
	// const wrapper = mount(<ExampleApp />, { disableLifecycleMethods: true });

	describe("Rendering", () => {
		it("should test rendering", () => {
			expect(wrapper.find(".div")).toHaveLength(1);
			expect(wrapper.find("h1").text()).toBe("Heading");
			expect(wrapper.find(".button")).toHaveLength(1);
			expect(wrapper.find("span")).toHaveLength(2);

			//
			expect(wrapper.find("span").first().text()).toBe("span1");
			expect(wrapper.find("span").last().text()).toBe("span2");

			//hasClass, parent, children
			expect(wrapper.find(".span1").parent().hasClass("div")).toBeTruthy();
			expect(wrapper.find(".div").children().first().text()).toBe("Heading");
		});

		it("should test machthers", () => {
			//text()
			expect(wrapper.find("h1").text()).toBe("Heading");

			//type()
			expect(wrapper.find(".button").type()).toBe("button");

			//hasClass("classname")
			expect(wrapper.find("h1").hasClass("heading")).toBeTruthy();

			//exists()
			expect(wrapper.find("h1").exists()).toBeTruthy();

			//contains(node)
			expect(wrapper.contains(<span className="span1">span1</span>)).toBeTruthy();
		});
	});

	describe("Setting props and state", () => {
		it("should set props and state", () => {
			wrapper.setProps({ name: "name" });
			wrapper.setState({ hasName: true });

			expect(wrapper.props().name).toEqual("name");
			expect(wrapper.state("hasName")).toBeTruthy();
		});
	});

	describe("simulate and ", () => {
		it("should test simulate", () => {
			const spy = jest.spyOn(wrapper.instance(), "onClick");
			const spy2 = jest.spyOn(wrapper.instance(), "renderHeading");
			wrapper.instance().forceUpdate();

			expect(spy2).toHaveBeenCalled();
			expect(spy2).toHaveBeenCalledWith("Heading");

			const button = wrapper.find(".button");
			button.simulate("click");

			expect(spy).toHaveBeenCalled();
		});
	});
});


