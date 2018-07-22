import React,{Component} from 'react';
import{Layout,Row,Col,Divider,Dropdown,Button,Icon} from 'antd';
import Nav from './Nav'
export default class Head extends Component{

    render(){
        
        return(
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">CNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" className="divider"/>
                       <Nav
                            {...{
                                id:'nav',
                                mode:'horizontal'
                            }}
                       />
                    </Col>
                    <Col md={0} xs={24} className="xsNav">
                        <Dropdown
                            overlay={
                                <Nav
                                    {...{
                                        id:'xsNav',
                                        mode:'vertical'
                                    }}
                                />
                            }
                            trigger={['click','touchend']}
                            placement='bottomRight'
                        >
                            <Button><Icon type="appstore-o" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
                

            </Layout.Header>
        )
    }
}