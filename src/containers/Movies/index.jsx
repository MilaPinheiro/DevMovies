import React, { useEffect, useState } from 'react';
import { Background, Container} from './styles';
import { getTopMovies } from "../../services/getData";
import { getImagens } from "../../services/utils/getImages";


function Movies() {
 
    const [topMovies, setTopMovies] = useState([]);
    console.log(topMovies)

    useEffect(() => {
        async function fetchTopMovies() {
            const movies = await getTopMovies();
            setTopMovies(movies);
        }

        fetchTopMovies();
    }, []);

    return (
        <Container>
            {topMovies.map((movies, index) => (
                <Background key={index} img={getImagens(movies.backdrop_path)} > 
                    <h1>{movies.title}</h1>
                </Background>
            ))}
        </Container>
    );
}

export default Movies;