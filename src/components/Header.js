import React, { Component } from 'react'

export default class Header extends Component {
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

					<div class="row">
						
					</div>
				</div>

				<div class="col-lg-8 col-md-8 col-sm-12 slider">
					 This is the slider area
				</div>
			</div>


		</div>
	</div>
    )
  }
}
