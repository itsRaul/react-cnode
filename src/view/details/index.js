import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import TxtDetails from '../../component/TxtDetails'
import ReplyList from '../../component/ReplyList'
import data from './data';
import cfg from '../../common/config/config';

class Details extends Component{
    constructor(props){
        super(props)
        this.getData = this.getData.bind(this);
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        this.getData(id);
    }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
               type:"DETAILS_UPDATA"
            });
            axios.get(`${cfg.url}/topic/${id}`)
                .then((res)=>{
                    dispatch({
                        type:"DETAILS_UPDATA_SUCC",
                        data:res.data
                    })
                })
                .catch((error)=>{
                    dispatch({
                        type:"DETAILS_UPDATA_ERROR"
                    });
                })
        })
    }
    render(){
        let {loading,data} = this.props;
        let {replies,reply_count} = data;
        return(
            <div className="wrap">
               <TxtDetails
                    {...{
                        data:data,
                        loading:loading
                    }}
               />
                <ReplyList
                    {...{
                        replies:replies,
                        replyCount:reply_count,
                        loading:loading
                    }}
                />
            </div>
        )
    }
}

export default connect(state=>state.details)(Details)



