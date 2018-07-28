import React,{Component} from 'react';
import{Row,Col} from 'antd';
import IndexMenu from '../../component/IndexMenu'
import IndexList from '../../component/IndexList'
export default class Index extends Component{

    render(){
        let tab = this.props.match.params.id;
        return(
           <Row className="wrap indexMenu">
               <Col md={6}>
                    <IndexMenu/>
               </Col>
               <Col md={18} className="indexMain">
                    <IndexList
                        {...{
                            tab 
                        }}
                    />
               </Col>
           </Row>
        )
    }
}




