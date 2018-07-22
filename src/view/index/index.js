import React,{Component} from 'react';
import{Row,Col,Menu} from 'antd';
import IndexMenu from '../../component/IndexMenu'

export default class Index extends Component{

    render(){
        return(
           <Row className="wrap indexMenu">
               <Col md={6}>
                    <IndexMenu/>
               </Col>
               <Col md={18} className="indexMain">
                    main
               </Col>
           </Row>
        )
    }
}




