import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getMovies, getTopMovies, getTopSeries, getTopRecommended } from '../../services/getData'
import { Background, Info, Poster, Container, ContainerButtons} from './styles'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getImagens } from '../../services/utils/getImages'


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [topRecommended, setTopRecommended] = useState()


    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData(){


            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getTopRecommended()
            ])
            .then(([movie, topMovie, topSeries, topRecommended]) => {
                    setMovie(movie)
                    setTopMovies(topMovie)
                    setTopSeries(topSeries)
                    setTopRecommended(topRecommended)
            })
            .catch((error))


        }

        getAllData()
    }, [])


    return (
        <>
        { movie && (
            <Background img={getImagens(movie.backdrop_path)}>
                {showModal &&  <Modal movieId={movie.id} setShowModal={setShowModal}/>}
                <Container>
                    <Info>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <ContainerButtons>
                            <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                            <Button onClick={() => setShowModal(true)}>
                                Assista o Trailer
                            </Button>
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