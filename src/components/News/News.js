import React from 'react'
import './News.scss'
import CardPiece from '../Common/CardPiece/CardPiece.js'
import { CardDeck } from 'react-bootstrap'
import  Rover  from '../../img/rover.jpg'


function News() {
    return (
        <div className="news">
            <h2> News </h2>
            <CardDeck>
                <CardPiece class="card-piece" pic={ Rover } title="Landed on Mars" textMain="The rover from NASA has landed on Mars on 24 Aug" textFooter="More Detail" />
            </CardDeck>



            
        </div>
    )
}

export default News
