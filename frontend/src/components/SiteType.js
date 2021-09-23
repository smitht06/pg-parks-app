import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SiteType() {
    return (
        <div>
            <Card className='my-3 p-3 rounded'>
            <Link to="/sitetype">
                <Card.Img src='./images/adultfitness.jpeg' variant='top' />
            </Link>
                <Card.Body>
                    <strong>Hello world</strong>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SiteType
