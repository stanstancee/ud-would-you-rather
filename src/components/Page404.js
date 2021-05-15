import React from 'react';
import { Card, Button } from 'react-bootstrap'
import {Link} from "react-router-dom"




function Page404({ location ,history,id}) {
    return (

        <Card className="text-center" bg="warning">
            <Card.Header>Error 404</Card.Header>
            <Card.Body>
                <Card.Title>Could not find matching URL</Card.Title>
                {id? <Card.Text>
                    No match found for <code>{window.location.href}</code>.
                    Poll id {`"${id}" is incorrect`}
                </Card.Text>:<Card.Text>
                    No match found for <code>{location.pathname}</code>
                </Card.Text>}


                 {id? <Link to="/">  <Button variant="primary"  >Go Home</Button></Link>:  <Button variant="primary" onClick={()=>history.push("/")} >Go Home</Button>}


            </Card.Body>

        </Card>

    );
}

export default Page404;