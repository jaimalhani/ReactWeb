import  React from "react";
import "./home.css"
import {Row , Col, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Bottomcard from "../../component/bottomCard";
 function Home (){

  
  return(
    <div>
<Container fluid>
  <Row>
    {/* <Col sm={12} md={3}>First, but last</Col> */}
    <Col sm={12} md={12}><Bottomcard/></Col>
    {/* <Col  sm={12} md={3} >Third, but first</Col> */}
  </Row>
</Container>
    </div>
    
    );
    
  }
  export default Home