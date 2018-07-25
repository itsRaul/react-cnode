import React,{Component} from 'react';
import {Tag} from 'antd';

//文章分类
const tab = {
    top:{
        color:"magenta",
        txt:"置顶"
    },
    good:{
        color:"lime",
        txt:"精华"
    },
    job:{
        color:"red",
        txt:"招聘"
    },
    share:{
        color:"green",
        txt:"分享"
    },
    ask:{
        color:"volcano",
        txt:"问答"
    },
    dev:{
        color:"geekblue",
        txt:"测试"
    }
}

export default class TxtTag extends Component{
    constructor(props){
        super(props);
        this.getTab = this.getTab.bind(this);
    }

    render(){
        let {
            data
        } = this.props
        
        //文章分类，根据getTab()的传入来判断
        let nowTab = tab[this.getTab (data)]

        return(
            <Tag color={nowTab.color}>{nowTab.txt}</Tag>
        )
    }

    //文章的分类，数据top为true调用函数top返回到tab
    getTab(data){
        return(
            data.top?
                "top":
            data.good?
                "good":data.tab
        )
    }
}