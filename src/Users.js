import React, { Component } from 'react'

export default class Users extends Component {

    state = {
        loading: true,
        person: '',
    }



    componentDidMount() {
        const url = 'https://api.randomuser.me/'; 
          fetch(url).then(res => res.json())
            .then(data => {
                this.setState({
                    person: data.results[0],
                    loading: false
            })
            });
     
        
    }

    render() {
        const { loading , person} = this.state
        return (
					<div
						style={{
							margin: 20,
							padding: 30,
							border: '2px black solid',
							width: 300,
							height: 400,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						{loading || !person ? (
							<div>Loading...</div>
						) : (
							<div style={{}}>
								<img
									style={{ border: '1px grey solid', borderRadius: '55%' }}
									src={person.picture.large}
									alt="logo"
								/>

								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<div>
										{person.name.title}. {person.name.first}-
									</div>

									<span>{person.name.last}</span>
									<div>city: {person.location.city}</div>
									<span>Email: {person.email}</span>
								</div>
							</div>
						)}
					</div>
				);
    }
}
