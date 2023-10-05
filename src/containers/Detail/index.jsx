import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  Container } from './styles'
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData'

function Detail(){
    const { id } = useParams()
    const[ movie, setMovie] = useState()
    const[ movieVideos, setMovieVideos] = useState()
    const[ movieCredits, setMovieCredits] = useState()
    const[ movieSimilar, setMovieSimilar] = useState()


    useEffect(() => {
        async function getAllData(){
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
            .then(([movie, videos, credits, similar]) => {
                    console.log({movie, videos, credits, similar})
                    setMovie(movie)
                    setMovieVideos(videos)
                    getMovieCredits(credits)
                    getMovieSimilar(similar)
            })
            .catch((error) =>  console.log(error))
        }

        getAllData()
    }, [])


    return (
        <Container>
            <div>Detalhe</div>
        </Container>
    )
}

export default Detail