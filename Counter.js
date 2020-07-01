import React,{Component} from 'react';
import './App.css';



class Counter extends Component{
    
    state={
        lang:[
            {name:"php",count:0},
            {name:"javascript",count:0},
            {name:"flutter",count:0}

        ],
        
    }


    increment=(i)=>{
        const newlang=[...this.state.lang];
        newlang[i].count++;

        function swap(arr,i,j){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }

        this.setState({lang:newlang})




    }
    
    

   
    render(){

        
        

        return(
            <div className="allbtn">

               
                {
                    this.state.lang.map((lang ,i)=>{
                        return<div key={i}>
                            

                                <button  className="btn" onClick={this.increment.bind(this, i)}>{lang.name}<span className="span">{lang.count}</span></button>
                            </div>
                    })
                }
       
            </div>
        )
    }
}

export default Counter;