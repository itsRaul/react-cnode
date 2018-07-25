import React,{Component} from 'react';
import TxtDetails from '../../component/TxtDetails'
import ReplyList from '../../component/ReplyList'
import data from './data';
export default class Details extends Component{

    render(){
        return(
            <div className="wrap">
               <TxtDetails
                    {...{
                        data:data.data,
                        loading:false
                    }}
               />
                <ReplyList
                    {...{
                        replies:data.data.replies,
                        replyCount:data.data.reply_count,
                        loading:false
                    }}
                />
            </div>
        )
    }
}




