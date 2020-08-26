import React from 'react'
import './CardPiece.scss'

import { Card } from 'react-bootstrap';

function CardPiece(props) {
    return (
        <div class="card">
          <Card>
              <Card.Img variant="top" src={props.pic} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  {props.textMain}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className={`${props.textFooter}`}>{props.textFooter}</small>
              </Card.Footer>
          </Card>  
        </div>
    )
}

export default CardPiece
