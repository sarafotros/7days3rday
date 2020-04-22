import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        items: [],
        isLoaded: false,
    }

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    render() {

        const { isLoaded, items } = this.state;
        
        if(!isLoaded){
            return <div>Loading...</div>
        }

        else {
            return (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.name} | { item.email}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
      
    }
}
