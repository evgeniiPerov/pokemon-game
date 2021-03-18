

//components

import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

//img import
import img from "../../assets/bg3.jpg";

//style
import s from './style.module.css'






function HomePage({ onChangePage }) {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page)
    }

    return (
        <div className={s.App}>

            <Header
                title="this is title Header"
                desc="this is descr Header"
                onClickButton={handleClickButton}
            />

            <Layout
                id='rules'
                title='this is first Layout'
                urlBg={img}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>


            </Layout>
            <Layout
                id='cards'
                title="Hello World!"
                colorBg >


            </Layout>
            <Layout
                id='about'
                title='this is third layout'
                urlBg={img}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
            </Layout>

        </div>
    );
}

export default HomePage;
