import React, { Component } from 'react'

export default class StoryDisplay extends Component {
  render() {
    return (
        <div class="shared-content mt-5">
		<div class="container">
			<div class="row story-card p-3">
				<div class="user col-lg-4 col-md-4 col-sm-12">
					<div class="user-info text-center">
						<div id="avatar">
							<p class="text-white">HA</p>
						</div>
						<div class="user-name mt-5">
							<p><span class="post-by"> Post by:</span> <span class="user"></span>Happy All</p>
						</div>
					</div>
				</div>
				<div class="the-story col-lg-8 col-md-8 col-sm-12">
					<div class="love-story">
						<h3 class="love-title py-2">I am a title</h3>
						<p class="love-content pt-2 pb-2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae suscipit, mollitia saepe natus voluptatem, provident! Cupiditate animi quidem deserunt aspernatur sapiente sit at, cumque magnam laudantium nesciunt, pariatur. Ipsam sint ipsa neque fuga harum dignissimos, cupiditate cum voluptatibus id! Quasi, quis a quisquam necessitatibus ea at. Modi aliquam quia suscipit rem! Deserunt cupiditate deleniti, dolore quia tempore excepturi quisquam nemo architecto nam praesentium eos. Enim dolor aliquid necessitatibus corrupti ex, sit minus beatae vel animi eum repellendus suscipit pariatur odio, dignissimos laboriosam voluptatem nobis voluptate esse ipsam tempora repellat consequuntur iste modi eveniet! Ullam incidunt esse ducimus ab, eligendi officia!
							<span id="view-more"><a href="">...View More</a></span>
						</p>
					</div>

					<div class="user-interaction">
						<ul class="d-flex">
							<li> <span id="like-text">Like me: </span><i class="fa fa-heart ml-2" id="like-btn"></i><span class="ml-1">50</span></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</div>
    )
  }
}
