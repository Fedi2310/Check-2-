import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPlayer =({el})=>{
    return(
        <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.url} style={{width : '286px', height :'300px'}}/>
                            <Card.Body>
                     <Card.Title>{el.name}</Card.Title>
                    <Card.Text>
                        team : {el.team}
                        <br/>
                        <br/>
                        nationality : {el.nationality}
                        <br/>
                        <br/>
                        jerseyNumber : {el.jerseyNumber}
                        <br/>
                        <br/>
                        age : {el.age}
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                 </Card>
        </div>
    )
   
}
CardPlayer.defaultProps ={
    el :{
        "name"  : "nizar",
    "team"  : "ASM",
    "nationality" : "Tunisien",
    "jerseyNumber" : 8,
    "age" : 21,
    "url" : "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/INIESTA%202017-18.jpg"

    }

}
export default CardPlayer