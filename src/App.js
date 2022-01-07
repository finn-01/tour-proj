import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
	return (
		<div>
			<h2>Tours Project Setup</h2>
			<Loading />
			<Tours />
		</div>
	);
};

export default App;
