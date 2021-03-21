import React from 'react';

class Customer extends React.Component {
    render(){
        return (
            <div>
                <CustomerProfile image={this.props.image}/>
                <CustomerInfo gender={this.props.gender}
                    name={this.props.name}/>

            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.image} alt="images"/>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.gender}</p>
                <p>{this.props.content}</p>
       </div>
        )
    }
}

export default Customer;