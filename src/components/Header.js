import React, { Component } from 'react'


const API_KEY = "e9834a81b620a64968841e24c66a7d1b252511384d7baea319aa009614baf4da";

class Header extends Component {
constructor(){
	super();
	this.state = {
		image: []
	} 
}

	componentWillMount(){
		fetch(`https://api.unsplash.com/search/photos?page=1&?per_page=5&query=valentine-love&client_id=${API_KEY}`)
		.then(result => {return result.json()})
		.then(data => this.setState({image: data}))
	}

  render() {
    return (
        <div class="header">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-12 nav-area">
					<div class="text-center nav-elements pt-4">
						<ul class="d-flex">
							<li><a href="abc.html">Home</a></li>
							<li><a href="/about.html">About</a></li>
						</ul>
					</div>

					<div class="row guide">
					<div class="header-text text-center">
						<h2>
							Start sharing your love story
						</h2>
						<p>Share your touching stories from valentines day and read other stories from users</p>
					</div>
						
						<div class="btns mx-auto mt-2">
							<button class="btn-one">Start sharing</button>
						<button class="btn-two">Learn More</button>
						</div>
						
					</div>
{/* 
					<div class="row">
						
					</div> */}
				</div>

				<div class="col-lg-8 col-md-8 col-sm-12 slider">
					 {/* This is the slider area */}
					 <img src="" alt=""/>
					 <img src="" alt=""/>
					 <img src="" alt=""/>
					 <img src="" alt=""/>
					 <img src="" alt=""/>
				</div>
			</div>


		</div>
	</div>
    )
  }
}

export default Header;
