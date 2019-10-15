import axios from "axios";

const instance = axios.create({
	baseURL: "https://myburger-64405.firebaseio.com/"
});

export default instance;
