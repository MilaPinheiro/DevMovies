import { useState, useEffect } from 'react'

import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButtons} from './styles'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import { getImagens } from '../../services/utils/getImages'

function Home() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [topRecommended, setTopRecommended] = useState()


    useEffect(() => {
        async function getMovies(){
            const {data: { results }
        } = await api.get('/movie/popular')
    
            setMovie(results[12])
        }


        async function getTopMovies(){
            const {data: { results }
        } = await api.get('/movie/top_rated')
    
            console.log(results)
            setTopMovies(results)
        }
    
        
        async function getTopSeries(){
            const {data: { results }
        } = await api.get('/tv/top_rated')
    
            console.log(results)
            setTopSeries(results)
        }

        
        async function getTopRecommended(){
            const {data: { results }
        } = await api.get('/movie/now_playing')
    
            console.log(results)
            setTopRecommended(results)
        }


        getMovies()
        getTopMovies()
        getTopSeries()
        getTopRecommended()
    }, [])


    return (
        <>
        { movie && (
            <Background 
                img={getImagens(movie.backdrop_path)}
            >
                <Container>
                    <Info>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <ContainerButtons>
                            <Button red>Assista Agora</Button>
                            <Button>Assista o Trailer</Button>
                        </ContainerButtons>
                    </Info>
                    <Poster>
                        <img src={getImagens(movie.poster_path)} 
                        alt="capa-do-filme"/>
                    </Poster>
                </Container>
            </Background>
        )}
        
        { topMovies && <Slider 
            info={topMovies}
            title={'Top Filmes'}
        />}
         { topSeries && <Slider 
            info={topSeries}
            title={'Top Séries'}
        />}
          { topRecommended && <Slider 
            info={topRecommended}
            title={'Filmes Recomendados'}
        />}
        </>
    )

}

export default Home