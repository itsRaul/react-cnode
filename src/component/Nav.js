import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import{Menu,Icon} from 'antd';

class Nav extends Component{
    constructor(props){
        super(props)
        let now =  this.getNow(this.props.location);
        this.state = {
            now
        }
    }
    getNow(location){
        let now = location.pathname.split("/");
        return now[1];
    }
    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now !== this.state.now){
            this.setState({
                now
            })
            return false;
        }
        return true;
    }
    render(){
        let {id,mode} = this.props;
        return(
            <Menu 
                mode={mode}
                    id={id}>
                <Menu.Item>
                    <Link to="/index/all"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/book"><Icon type="book" />教程</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="about"><Icon type="info-circle-o" />关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter((props)=>{
    let {mode,id,location} = props;
    return <Nav
        mode = {mode}
        id = {id}
        location = {location}
    />
});