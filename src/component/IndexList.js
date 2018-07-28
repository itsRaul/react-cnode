import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import{List,Avatar} from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
import cfg from '../common/config/config'
import TxtTag from '../component/txtTag';


class IndexList extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            page:1,
            isStart:true
        }
    }
    componentDidMount(){
        this.getData(this.props.tab,this.state.page);
    }
    //判断是否需要重新渲染
    shouldComponentUpdate(nextProps,nextState){

        if(this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page);
            return false;
        }
        if(this.props.tab!==nextProps.tab){
            this.state.page = 1;
            this.getData(nextProps.tab,1);
            return false;
        }
        return true;
    };
    //主题首页
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"LIST_UPDATA"
            });
            axios.get(`${cfg.url}/topics?tab=${tab}&page=${page}&limit=10`).then((res)=>{
                //异步发起一个action
                dispatch({
                    type:"LIST_UPDATA_SUCC",
                    data:res.data
                })
            }).catch((error)=>{
                dispatch({
                    type:"LIST_UPDATA_REEOR",
                    data:error
                })
            })
        })
    }
    
    render(){
        let {loading,data} = this.props;
        let pagination = {
            current: this.state.page,
            pageSize: 10,
            total: 1000,
            onChange:((current)=>{
                this.setState({
                    page: current
                });
            })
        };
        return(
            <List
                loading = {loading}
                dataSource = {data}
                pagination= {pagination}
                renderItem = {item=>(
                    <List.Item
                        actions={['恢复:'+item.reply_count,'访问:'+item.visit_count]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.author.avatar_url} />}
                            title={
                                <div>
                                    <TxtTag
                                        {...{
                                            data:item
                                        }}
                                    />
                                    <Link to={"/details/"+item.id}>{item.title}</Link>
                                </div>
                            }
                            description={
                                (<p>
                                    <Link to={"/user/"+item.author.loginname}>
                                        {item.author.loginname}
                                    </Link>
                                    发表于:{item.create_at.split("T")[0]}
                                </p>)
                            }
                            />
                    </List.Item>
                )}
            />
        )
    }
}

export default connect(state=>state.list)(IndexList)