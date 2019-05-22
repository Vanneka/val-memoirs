import React, { Component } from 'react'
import Modal from 'react-responsive-modal';


class Form extends Component {
	constructor(){
		super();
		this.state = {
		open: false,
		// postTitle: '',
		// postContent: '',
		firstName: ''
		// lastName: '',
		// userName: ''
		}

		this.onChange = this.onChange.bind(this);
	}
	
	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	onOpenModal = () => {
		this.setState({ open: true });
	  };
	 
	  onCloseModal = () => {
		this.setState({ open: false });
	  };
	
  render() {
	const { open } = this.state;
    return (
        <div className="share-btn mt-5">
		<div className="container">
			<div className="row text-center">
				<div action="" className="col-12 pt-4 form" >
					<input type="text" placeholder="Start sharing" disabled id="share-my-story" className="w-50 px-3 py-1 mr-0"></input>
					<button onClick={this.onOpenModal} className="px-4 py-1 m-0" >Start Sharing</button>
					<div className="guide-text">
						<small>Click the button to start sharing</small>
					</div>

		<Modal open={open} onClose={this.onCloseModal} center>
 <div className="modal-title">
			  <h3>Start sharing your story</h3>
		  </div>

		  <div className="modal-body p-5">
		  <div className="form-group userName">
		  <div className="col-6">
		  <label htmlFor="first-name">First name:</label>
		  <input class="form-control" type="text" name="" id="" value={this.state.firstName} onChange={this.onChange}/>
		  </div>

		  <div className="col-6">
		  <label htmlFor="last-name">Last name:</label>
		  <input class="form-control" type="text" name="" id="" value={this.state.lastName}/>
		  </div>
		  </div>

		  <div className="form-group userName col-6">
		  <label htmlFor="user-name">Username:</label>
		  <input class="form-control" type="text" name="" id="" value={this.state.userName}/>
		  </div>

		  <div className="form-group gender">
		  <label htmlFor="Gender">Gender:</label>
			<select className="form-control" id="exampleFormControlSelect1" name="gender">
			<option value="Male">Male</option>
				<option value="Female">Female</option>
    </select>
		  </div>

		  <div className="form-group post-title">
		  <div className="col-12">
		  <label htmlFor="post-title">Post Title:</label>
		  <input class="form-control" type="text" name="" id="" value={this.state.postTitle}/>
		  </div>
		  </div>

		  <div className="form-group post-title">
		  <div className="col-12">
		  <label htmlFor="post-content">Post Content:</label>
		  <textarea class="form-control" name="" id="" cols="30" rows="10" value={this.state.postContent}></textarea>
		  </div>
		  </div>

		  <button className="btn-two">Save Story</button>
		  </div> 
		  
        </Modal>
		</div>
        </div>

        </div>
        </div>

    )
	}
	
	handleIncrement= () =>{
		console.log("I was clicked")
	}

}

export default Form;
