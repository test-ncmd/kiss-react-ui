import React, { Component } from 'react';
import Axios from 'axios';

class STBTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        Axios.post('/backend', {
            data: {'key':'value'}
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    render() {
        return (
            <div>
                {this.state.loading ? 
                <div>
                    <p>{this.state.value}</p>
                    <form>
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                        <button type="submit" value="Submit">Submit</button>
                    </form>
                </div>
                :
                <p>Still Loading</p>
                }
            </div>
        );
    }
}

export default STBTemplate;