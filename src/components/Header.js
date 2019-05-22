import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const API_KEY = "e9834a81b620a64968841e24c66a7d1b252511384d7baea319aa009614baf4da";

class Header extends Component {
constructor(props){
	super(props)
	this.state= {
		image: []
	}
}

componentDidMount(){
	fetch(`https://api.unsplash.com/search/photos?page=1&?per_page=4&query=valentine-love&client_id=${API_KEY}`)
	.then(res => res.json())
	.then(data => this.setState({image: data.results}))
}
  render() {
const fetchedItems = this.state.image.map(img => (
				<div key={ img.id }>
                    <img className="w-75" src={ img.urls.raw + "&w=750&dpi=2"} />
                    <p className="legend">{ img.user.username }</p>
                </div>
));
    return (
        <div className="header">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-12 nav-area">
					<div className="text-center nav-elements pt-4">
						<ul className="d-flex">
							<li><a href="abc.html">Home</a></li>
							<li><a href="/about.html">About</a></li>
						</ul>
					</div>

					<div className="row guide">
					<div className="header-text text-center">
						<h2>
							Start sharing your love story
						</h2>
						<p>Share your touching stories from valentines day and read other stories from users</p>
					</div>
						
						<div className="btns mx-auto mt-2">
						<button className="btn-two"> <a href="/about.html"></a>Learn More</button>
						</div>
						
					</div>
				</div>

				<div className="col-lg-8 col-md-8 col-sm-12 slider">
			<Carousel>
				{fetchedItems}
            </Carousel>
				</div>
			</div>


		</div>
	</div>
    )
  }
}

export default Header;
