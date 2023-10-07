import React, { useEffect, useState } from 'react';
import { getTopSeries } from '../../services/getData';
import { Background, Container} from './styles';
import { getImagens } from '../../services/utils/getImages'

function Series() {
    const [topSeries, setTopSeries] = useState([]);
    console.log(topSeries)

    useEffect(() => {
        async function fetchTopSeries() {
            const series = await getTopSeries();
            setTopSeries(series);
        }

        fetchTopSeries();
    }, []);

    return (
        <Container>
            {topSeries.map((series, index) => (
                <Background key={index} img={getImagens(series.backdrop_path)} > 
                    <h1>{series.name}</h1>
                </Background>
            ))}
        </Container>
    );
}

export default Series;