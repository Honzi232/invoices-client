import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

function PersonStatisticsList() {

	const [statistics, setStatistics] = useState([]);

	useEffect(() => {
		async function fetchStatistics() {
			const data = await apiGet('/api/people/statistics');
			setStatistics(data);
		};
		fetchStatistics();
	}, []);

	return (
		<div>
			<hr />
			<h3>Přehled obratu podle osob</h3>

			<table className="table table-bordered">
				<thead>
					<tr>
						<th>#</th>
						<th>Osoba</th>
						<th>Obrat</th>
					</tr>
				</thead>
				<tbody>
					{statistics.map((statistics, index) => (
						<tr key={index + 1}>
							<td>{index + 1}</td>
							<td>{statistics.personName}</td>
							<td align="right">{statistics.revenue} Kč</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default PersonStatisticsList;