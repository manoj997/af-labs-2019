'use scrict';

import React,{Component} from 'react';

import Users from './Users';

export default class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[{
                id:Date.now(),
                name:'Amashi'
            }]
        }

    }


    render() {
        return <div>
            <h2>
                Users App
            </h2>

            <Users users={this.state.users}/>
        </div>;
    }
}