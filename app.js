import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
   constructor(){
       super()
       this.state = {
           isDisable : true
       }
   }
    componentDidMount(){
        let content = document.getElementsByClassName('content')[0]
        let contentHeight = content.clientHeight;
        content.addEventListener('scroll',(e)=>{
            if(e.target.scrollTop > contentHeight){
               this.setState({isDisable:false})
            }
        })
    }
    render() {
        return (
            <div className="box">
                <div className="content">
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                           <br></br>
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                           <br></br>
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                           <br></br>
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                           <br></br>
                    <h4>Section One</h4>
                    <br></br>
                    <p>  Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sed voluptate error animi laboriosam veniam
                         assumenda dolorem, neque ea harum, quae, suscipit
                          quibusdam architecto minus corrupti a culpa quos
                           eius alias!</p>
                           <br></br>
                </div>
                <div className="footer">
                    <button className="btn" disabled={this.state.isDisable} onClick={()=>{
                        alert("ok run ")
                    }}>contenu</button>
                </div>
            </div>
        )
    };
}


ReactDOM.render(<App />, document.getElementById('root'))