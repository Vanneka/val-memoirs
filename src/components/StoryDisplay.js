import React, { Component } from 'react'

class StoryDisplay extends Component {
state = {
	count: 0
}
  render() {
    return (
        <div className="shared-content mt-5">
		<div className="container">
			<div className="row story-card p-3">
				<div className="user col-lg-4 col-md-4 col-sm-12">
					<div className="user-info text-center">
						<div id="avatar">
							<p className="text-white">HA</p>
						</div>
						<div className="user-name mt-5">
							<p><span className="post-by"> Post by:</span> <span className="user"></span>Happy All</p>
						</div>
					</div>
				</div>
				<div className="the-story col-lg-8 col-md-8 col-sm-12">
					<div className="love-story">
						<h3 className="love-title py-2">I am a title</h3>
						<p className="love-content pt-2 pb-2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae suscipit, mollitia saepe natus voluptatem, provident! Cupiditate animi quidem deserunt aspernatur sapiente sit at, cumque magnam laudantium nesciunt, pariatur. Ipsam sint ipsa neque fuga harum dignissimos, cupiditate cum voluptatibus id! Quasi, quis a quisquam necessitatibus ea at. Modi aliquam quia suscipit rem! Deserunt cupiditate deleniti, dolore quia tempore excepturi quisquam nemo architecto nam praesentium eos. Enim dolor aliquid necessitatibus corrupti ex, sit minus beatae vel animi eum repellendus suscipit pariatur odio, dignissimos laboriosam voluptatem nobis voluptate esse ipsam tempora repellat consequuntur iste modi eveniet! Ullam incidunt esse ducimus ab, eligendi officia!
							<span id="view-more"><a href="abc">...View More</a></span>
						</p>
					</div>

					<div className="user-interaction">
						<ul className="d-flex">
							<li onClick={this.increaseLikes}> <span id="like-text">Like me: </span><i className="fa fa-heart ml-2" id="like-btn"></i><span className="ml-1">{this.displayCount()}</span></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</div>
    )
	}
	displayCount= ()=>  {
		const{ count } = this.state;
		return count === 0? '0': count;
	}

	increaseLikes = () => {
		this.setState({ count: this.state.count + 1 })
	}
}



export default StoryDisplay;