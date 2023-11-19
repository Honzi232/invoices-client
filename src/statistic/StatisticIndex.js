import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import PersonStatisticsList from "./PersonStatistics";

const StatisticIndex = () => {

    const [Statistic, setStatistic] = useState({});

    useEffect(() => {
        apiGet(`/api/invoices/statistics`)
            .then((data) => {
                setStatistic(data);
            });

    }, []);

    return (
        <>
            <div>
                <h1>Statistika</h1>
                <hr />
                <h3>Statistika faktur</h3>

                <p>
                    <strong>Celková suma pro aktuální rok:</strong>
                    <br />
                    {Statistic.currentYearSum} Kč
                </p>
                <p>
                    <strong>Celková suma:</strong>
                    <br />
                    {Statistic.allTimeSum} Kč
                </p>
                <p>
                    <strong>Počet faktur celkem:</strong>
                    <br />
                    {Statistic.invoicesCount}
                </p>
            </div>

            <div>
                <PersonStatisticsList />
            </div>
        </>
    );
};


export default StatisticIndex;
