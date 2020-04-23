import React, { Component } from 'react';
import styles from './styles';


class Tables extends Component {
	state = {
		users: [],
		isLoaded: false,
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					//
					users: json,
				});
			});
    }
    getUsers = () => {
        this.setState({
            isLoaded: true, 
        })
    }

    deleteUser = (id) =>{
        this.setState(state => ({
            users: state.users.filter((user) =>  user.id !==id )
        }))
    }

	render() {
		const { isLoaded, users } = this.state;

        if (!isLoaded || users.length === 0) {
             return (
             <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
                <span>Loading... </span>
                <button
                    style={{
                        borderBottom: '2px solid grey',
                        padding: 5,
                        height: 30,
                        width: 90,
                        marginTop: 40,
                        borderRadius:4,
                         }}
                         onClick={this.getUsers}
                >
                    Get Users
                </button>
            </div>
        );
		} else {
			return (
				<div style={styles.tablediv}>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>Full Name</th>
								<th>Username</th>
								<th>Email</th>
								<th>Phone No.</th>
								<th>Website</th>
								<th>Company</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr
									key={user.id}
									style={
										user.id % 2 === 0
											? { backgroundColor: '#80CBC4', color: '#fff' }
											: { backgroundColor: '#9FA8DA', color: '#fff' }
									}
								>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.website}</td>
									<td>{user.company.name}</td>
									<td>
										<button
											onClick={() => {
												this.deleteUser(user.id);
											}}
											style={{ borderBottom: '2px solid grey', padding: 5 }}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}
	}
}
export default Tables;