import React from 'react';
import { directive } from "@babel/types";
import '../classwork1/myCarstyl.css'
import mybaloon from './baloon-4.png'
import mybaloon1 from './baloon-5.png'
import mybaloon2 from './baloon-6.png'
export default class Parent extends React.Component{
    
      render =() => {
          
          return <div>
              <Child myFunction={this.hello} />
              {/* <Child1/> */}
              {/* <Child2/>  */}
              
              
              
              </div>
          
             
      }
      hello = (data) => {
          console.log(data);
        //   {this.data.color}
        //   alert(data);
        //   <h1>{this.props.color}</h1>
  
        }
      
      }

    
   class Child extends React.Component{
          constructor(){
              super();
              this.state = {
                  color:"Color",
               }
          }
          talkToParent = () => {
              this.props.myFunction({
                    color:"this is a yellow baloon"
              })
              this.setState({
                  color:"yellow"     
              });
          };
          render = () => {
              return <div>
                  {/* <h1>{this.props.color}</h1> */}
                 
                     <div className="mainboday">
                     <h1 className="yelowbalonstyl">{this.state.color}</h1>
                    
                     
                     {/* {this.props.myFunction}
                     {this.props.color} */}
                     <img onClick={this.talkToParent} className="baloonstyl" src={mybaloon} alt=""/> 
                     </div>
                     <Child1 cFunction={this.props.myFunction}/>
              </div>
          }
      }
     class Child1 extends React.Component{
          constructor(){
              super();
              this.state = {
                  color:"Color",
              
              }
          }
          talkToParent1 = () => {
              this.props.cFunction({
                  color:"this is a green baloon"
              })
              this.setState({
                  color:"green"     
              });
          }
          render = () => {
              return <div>
                    <h1 className="grenbalonstyl">{this.state.color}</h1>
               {/* <h1>{this.props.color}</h1> */}
                     <img onClick={this.talkToParent1} className="baloonstyl1" src={mybaloon1} alt=""/>
                    <Child2 dFunction={this.props.cFunction}/>
         
              </div>
          }
      }
    class Child2 extends React.Component{
          constructor(){
              super();
              this.state = {
                  color:"Color"
              }
      
          }
          talkToParent2 = () => {
              this.props.dFunction({
                    color:"this is orange baloon"
              })
              this.setState({
                  color:"Orange"     
              });
          }
          render = () => {
              return <div>
                    <h1 className="orangbalonstyl">{this.state.color}</h1>
                  {/* <h1>{this.props.color}</h1> */}
                   
                     <img onClick={this.talkToParent2} className="baloonstyl2" src={mybaloon2} alt=""/>               
                   
              </div>
          }
      }