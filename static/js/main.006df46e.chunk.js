(window["webpackJsonpreact-gh-pages"]=window["webpackJsonpreact-gh-pages"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":1,"name":"bulb","image":"https://vignette.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest?cb=20140328190757","clicked":false},{"id":2,"name":"char","image":"https://vignette.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest?cb=20140724195345","clicked":false},{"id":3,"name":"Squir","image":"https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20140328191525","clicked":false},{"id":4,"name":"pika","image":"https://vignette.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest?cb=20140328192412","clicked":false},{"id":5,"name":"karp","image":"https://vignette.wikia.nocookie.net/pokemon/images/0/02/129Magikarp.png/revision/latest?cb=20140328210352","clicked":false},{"id":6,"name":"eve","image":"https://vignette.wikia.nocookie.net/pokemon/images/e/e2/133Eevee.png/revision/latest?cb=20140328210732","clicked":false},{"id":7,"name":"snor","image":"https://vignette.wikia.nocookie.net/pokemon/images/f/fb/143Snorlax.png/revision/latest?cb=20140328211202","clicked":false},{"id":8,"name":"articun","image":"https://vignette.wikia.nocookie.net/pokemon/images/4/4e/144Articuno.png/revision/latest?cb=20140328211202","clicked":false},{"id":9,"name":"zap","image":"https://vignette.wikia.nocookie.net/pokemon/images/e/e3/145Zapdos.png/revision/latest?cb=20140328211202","clicked":false},{"id":10,"name":"molt","image":"https://vignette.wikia.nocookie.net/pokemon/images/1/1b/146Moltres.png/revision/latest?cb=20140328211203","clicked":false},{"id":11,"name":"dratini","image":"https://vignette.wikia.nocookie.net/pokemon/images/c/cc/147Dratini.png/revision/latest?cb=20140328211203","clicked":false},{"id":12,"name":"mew","image":"https://vignette.wikia.nocookie.net/pokemon/images/b/b1/151Mew.png/revision/latest?cb=20140328211459","clicked":false}]')},27:function(e,t,a){e.exports=a(54)},32:function(e,t,a){},34:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),o=a.n(c),r=(a(32),a(33),a(13)),s=a(20),l=a(21),m=a(25),d=a(22),k=a(26);a(34);var g=function(e){var t=e.friends.map(function(t){return i.a.createElement("div",{className:"card",onClick:e.handleClick,key:t.id},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:t.name,src:t.image,id:t.id})))});return console.log("picture"+t.length),i.a.createElement("div",{className:"wrapper"},t)},p=a(24),u=a.n(p),v=a(23),f=a.n(v);var h=function(){return i.a.createElement("div",null,i.a.createElement(f.a,{id:"instruct"},i.a.createElement("h3",null,"Click on an image to earn points, but don't click on an image more than once, or you lose!")))},b=a(12),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={currentscore:0,clicked:[],clickedArray:[],friends:Object(r.a)(b)},a.shuffle=function(e){var t,a,n;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[a],e[a]=n;return e},a.handleClick=function(e){a.state.clickedArray.indexOf(e.target.id)<0?(console.log("hasnt been clicked before"),console.log(a.state.clickedArray.indexOf(e.target.id)),a.setState({currentscore:a.state.currentscore+1,clicked:e.target.id,clickedArray:a.state.clickedArray.concat(e.target.id)})):(console.log("already clicked"),a.setState({currentscore:0,clicked:[],clickedArray:[],friends:Object(r.a)(b)})),a.setState({friends:a.shuffle(a.state.friends)})},a}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,null,i.a.createElement("h1",null,"Clicky Game!"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarMenu"},i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link"},"Current Score: ",this.state.currentscore))))),i.a.createElement(h,null),i.a.createElement(g,{friends:this.state.friends,handleClick:this.handleClick,shuffle:this.shuffle}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.006df46e.chunk.js.map