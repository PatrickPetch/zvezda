import React from 'react'
import './News.scss'
import CardPiece from '../Common/CardPiece/CardPiece.js'
import { CardDeck } from 'react-bootstrap'


function News() {
    return (
        <div class="news">
            <h2> News </h2>
            <CardDeck>
                <CardPiece title="News1" textMain="TextMain1" textFooter="TextFooter1" />
                <CardPiece />
                <CardPiece />
            </CardDeck>



            
        </div>
    )
}

export default News
