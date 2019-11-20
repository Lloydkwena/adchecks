import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props){
            super(props);
            this.state = {
                body: '',
                logs: []
            };
        // bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // this.logData();
        // console.log('handleChange to the rescue')
        axios.post('/logs', {
            body: this.state.body
        }).then(response => {
            // console
            console.log(response);
            // set state
            this.setState({
                logs: [...this.state.logs, response.data],
                body: ''
            });
            
        });
        // To clear the body
        this.setState({
                body: ''
            });
    }

    // logData(){
    //     axios.post('/logs', {
    //         body: this.state.body
    //     });
    // }

    handleChange(e){
        this.setState({
            body: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6"> 
                        <div className="card">
                            <div className="card-header">Log a Support Ticket</div>
                                
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <textarea
                                                onChange={this.handleChange}
                                                value={this.state.body}
                                                className="form-control"
                                                rows="5"
                                                maxLength="140"
                                                placeholder="write logs"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                           <lable for="active">Gategories</lable>
                                           <select className="form-control" name="active" id="active">
                                           <option value="" disabled>Select log Gategory</option>
                                           <option value="1">IT</option>
                                           <option value="2">Accounts</option>
                                           <option value="3">Sales</option>
                                           </select>
                                        </div>

                                        <input type="submit" value="Post" className="form-control" />    
                                    </form>
                                </div>    
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="card">
                            <div className="card-header">Recent Logs</div>

                            <div className="card-body">
                                {this.state.logs.map(post => <div key={post.id}>{post.body}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;