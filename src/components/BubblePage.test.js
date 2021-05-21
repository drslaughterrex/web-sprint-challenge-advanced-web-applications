import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as fakeFetchColors } from "./fetchColors";

jest.mock("./fetchColors");

const fakeColors = [
	{
		color: "purple",
		code: {
			hex: "#6A33FF",
		},
		id: 1,
	},
	{
		color: "blue",
		code: {
			hex: "#0000FF",
		},
		id: 2,
	},
	{
		color: "green",
		code: {
			hex: "#2CB402",
		},
		id: 3,
	},
];

test("Renders BubblePage without errors", () => {
	render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
	render(<BubblePage />);
	fakeFetchColors.mockResolvedValueOnce(fakeColors);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
