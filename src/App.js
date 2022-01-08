import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setLoading(true);

		try {
			const response = await fetch(url);
			const tours = await response.json();
			//console.log(tours);//
			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours left</h2>
					<button type="button" className="btn" onClick={() => fetchTours()}>
						Refresh
					</button>
				</div>
			</main>
		);
	}

	const removeTours = (id) => {
		const newTours = tours.filter((tours) => tours.id !== id);
		setTours(newTours);
	};

	return (
		<main>
			<Tours tours={tours} removeTours={removeTours} />
		</main>
	);
};

export default App;
