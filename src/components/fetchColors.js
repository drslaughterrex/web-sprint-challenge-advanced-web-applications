import { axiosWithAuth } from "../Helpers/axiosWithAuth";
import ColorList from "./ColorList"
export const fetchColors = () => {
	axiosWithAuth()
		.get("/colors")
		.then((res) => {
			console.log(res);
			ColorList(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
