(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},30:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),s=a.n(r),c=(a(29),a(30),a(3)),i=a(4),m=a(6),o=a(5),u=a(7),d=(a(31),a(16)),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={image:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.unsplash.com/search/photos?page=1&?per_page=4&query=valentine-love&client_id=".concat("e9834a81b620a64968841e24c66a7d1b252511384d7baea319aa009614baf4da")).then(function(e){return e.json()}).then(function(t){return e.setState({image:t.results})})}},{key:"render",value:function(){var e=this.state.image.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("img",{className:"w-75",src:e.urls.raw+"&w=750&dpi=2"}),l.a.createElement("p",{className:"legend"},e.user.username))});return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 nav-area"},l.a.createElement("div",{className:"text-center nav-elements pt-4"},l.a.createElement("ul",{className:"d-flex"},l.a.createElement("li",null,l.a.createElement("a",{href:"abc.html"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/about.html"},"About")))),l.a.createElement("div",{className:"row guide"},l.a.createElement("div",{className:"header-text text-center"},l.a.createElement("h2",null,"Start sharing your love story"),l.a.createElement("p",null,"Share your touching stories from valentines day and read other stories from users")),l.a.createElement("div",{className:"btns mx-auto mt-2"},l.a.createElement("button",{className:"btn-two"}," ",l.a.createElement("a",{href:"/about.html"}),"Learn More")))),l.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-12 slider"},l.a.createElement(d.Carousel,null,e)))))}}]),t}(n.Component),E=a(17),v=a(9),h=a(21),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).onChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.onOpenModal=function(){e.setState({open:!0})},e.onCloseModal=function(){e.setState({open:!1})},e.handleIncrement=function(){console.log("I was clicked")},e.state={open:!1,firstName:""},e.onChange=e.onChange.bind(Object(v.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.open;return l.a.createElement("div",{className:"share-btn mt-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{action:"",className:"col-12 pt-4 form"},l.a.createElement("input",{type:"text",placeholder:"Start sharing",disabled:!0,id:"share-my-story",className:"w-50 px-3 py-1 mr-0"}),l.a.createElement("button",{onClick:this.onOpenModal,className:"px-4 py-1 m-0"},"Start Sharing"),l.a.createElement("div",{className:"guide-text"},l.a.createElement("small",null,"Click the button to start sharing")),l.a.createElement(h.a,{open:e,onClose:this.onCloseModal,center:!0},l.a.createElement("div",{className:"modal-title"},l.a.createElement("h3",null,"Start sharing your story")),l.a.createElement("div",{className:"modal-body p-5"},l.a.createElement("div",{className:"form-group userName"},l.a.createElement("div",{className:"col-6"},l.a.createElement("label",{htmlFor:"first-name"},"First name:"),l.a.createElement("input",{class:"form-control",type:"text",name:"",id:"",value:this.state.firstName,onChange:this.onChange})),l.a.createElement("div",{className:"col-6"},l.a.createElement("label",{htmlFor:"last-name"},"Last name:"),l.a.createElement("input",{class:"form-control",type:"text",name:"",id:"",value:this.state.lastName}))),l.a.createElement("div",{className:"form-group userName col-6"},l.a.createElement("label",{htmlFor:"user-name"},"Username:"),l.a.createElement("input",{class:"form-control",type:"text",name:"",id:"",value:this.state.userName})),l.a.createElement("div",{className:"form-group gender"},l.a.createElement("label",{htmlFor:"Gender"},"Gender:"),l.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",name:"gender"},l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female"))),l.a.createElement("div",{className:"form-group post-title"},l.a.createElement("div",{className:"col-12"},l.a.createElement("label",{htmlFor:"post-title"},"Post Title:"),l.a.createElement("input",{class:"form-control",type:"text",name:"",id:"",value:this.state.postTitle}))),l.a.createElement("div",{className:"form-group post-title"},l.a.createElement("div",{className:"col-12"},l.a.createElement("label",{htmlFor:"post-content"},"Post Content:"),l.a.createElement("textarea",{class:"form-control",name:"",id:"",cols:"30",rows:"10",value:this.state.postContent}))),l.a.createElement("button",{className:"btn-two"},"Save Story")))))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={count:0},a.displayCount=function(){var e=a.state.count;return 0===e?"0":e},a.increaseLikes=function(){a.setState({count:a.state.count+1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"shared-content mt-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row story-card p-3"},l.a.createElement("div",{className:"user col-lg-4 col-md-4 col-sm-12"},l.a.createElement("div",{className:"user-info text-center"},l.a.createElement("div",{id:"avatar"},l.a.createElement("p",{className:"text-white"},"HA")),l.a.createElement("div",{className:"user-name mt-5"},l.a.createElement("p",null,l.a.createElement("span",{className:"post-by"}," Post by:")," ",l.a.createElement("span",{className:"user"}),"Happy All")))),l.a.createElement("div",{className:"the-story col-lg-8 col-md-8 col-sm-12"},l.a.createElement("div",{className:"love-story"},l.a.createElement("h3",{className:"love-title py-2"},"I am a title"),l.a.createElement("p",{className:"love-content pt-2 pb-2"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae suscipit, mollitia saepe natus voluptatem, provident! Cupiditate animi quidem deserunt aspernatur sapiente sit at, cumque magnam laudantium nesciunt, pariatur. Ipsam sint ipsa neque fuga harum dignissimos, cupiditate cum voluptatibus id! Quasi, quis a quisquam necessitatibus ea at. Modi aliquam quia suscipit rem! Deserunt cupiditate deleniti, dolore quia tempore excepturi quisquam nemo architecto nam praesentium eos. Enim dolor aliquid necessitatibus corrupti ex, sit minus beatae vel animi eum repellendus suscipit pariatur odio, dignissimos laboriosam voluptatem nobis voluptate esse ipsam tempora repellat consequuntur iste modi eveniet! Ullam incidunt esse ducimus ab, eligendi officia!",l.a.createElement("span",{id:"view-more"},l.a.createElement("a",{href:"abc"},"...View More")))),l.a.createElement("div",{className:"user-interaction"},l.a.createElement("ul",{className:"d-flex"},l.a.createElement("li",{onClick:this.increaseLikes}," ",l.a.createElement("span",{id:"like-text"},"Like me: "),l.a.createElement("i",{className:"fa fa-heart ml-2",id:"like-btn"}),l.a.createElement("span",{className:"ml-1"},this.displayCount()))))))))}}]),t}(n.Component);var N=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43);s.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.7ed12684.chunk.js.map