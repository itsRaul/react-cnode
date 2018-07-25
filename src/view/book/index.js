import React,{Component} from 'react';
import PublicCard from '../../component/PublicCard';
import data from './data';

export default class Book extends Component{
    render(){
        return(
            <div>
                <PublicCard
                    {...{
                        data
                    }}
                />
            </div>
        )
    }
}




