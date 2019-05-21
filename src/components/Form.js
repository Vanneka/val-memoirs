import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
        <div class="share-btn mt-5">
		<div class="container">
			<div class="row text-center">
				<form action="" class="col-12 pt-4">
					<input type="text" placeholder="Start sharing" disabled id="share-my-story" class="w-50 px-3 py-1 mr-0"/>
					<button class="px-4 py-1 m-0">Share</button>
					<div class="guide-text">
						<small>Click the button to start sharing</small>
					</div>
		</form>
        </div>

        </div>
        </div>

    )
  }
}
