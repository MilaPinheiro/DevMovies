import { Container } from './styles'
import { getImagens } from '../../services/utils/getImages'

function Card({ item }){

    return (
        <Container>
            <img src={getImagens(item.poster_path || item.profile_path || '')} />
            <h3>{item.title || item.name }</h3>
        </Container>
    )
}

export default Card