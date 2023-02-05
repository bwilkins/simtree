import { Container } from "@pixi/react";
import { GrowButton } from "../components/GrowButton";

export const Menu = ({growClick = () => {}}) => (
    <Container>
        <GrowButton onClick={growClick} />
    </Container>
)