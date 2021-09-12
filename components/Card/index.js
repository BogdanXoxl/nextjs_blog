import {Container, Img, Title} from "./Card.styles";
import Link from "next/link";

const Card = ({id, title}) => {
    return (
        <Link href={'/posts/[id]'} as={`/posts/${id}`}><a>
            <Container>
                <Img
                    width="720px"
                    height="720px"
                    src="/assets/noimg.jpg"/>
                <Title>{title}</Title>
            </Container>
        </a></Link>
    );
};

export default Card;