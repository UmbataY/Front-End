(() => {
	const db = firebase.database();
	const tweetsDB = db.ref('/tweets');
	const postContainer = document.getElementById('post-container');
	const newPost = document.getElementById('new-post');
	const userPostsCountElem = document.getElementById('profile-posts-count');
	const userLikesElem = document.getElementById('profile-likes-count');
	let postNum = 0;
	let postAll = 0;
	// let likeNum = 0;
	userPostsCountElem.innerHTML = postNum;
	// userLikesElem.innerHTML = likeNum;
	const post = data => {
		postAll++;
		const state = data.val();
		if (state.username == firebase.auth().currentUser.displayName) {
			postNum++;
			// likeNum += state.likes;

			userPostsCountElem.innerHTML = postNum;
			// userLikesElem.innerHTML = likeNum;
		}
		// console.log(data.key);
		return `<figure class="profile-avatar post-section-avatar">
              <img src="images/avatar.png" alt="BP" class="profile-image">
          </figure>
          <div class="post-content">
              <div class="post-author">
                  <h3 class="post-author-name">${state.username}</h3>
                  <span class="post-delimiter fa fa-circle"></span>
                  <span class="post-date">${time_ago(new Date(state.date))}</span>
              </div>
              <p class="post-text">${state.message}</p>
              <div class="post-footer">
                  <div class="post-reaction">
                      <button class="far fa-thumbs-up like-btn" data-id="${data.key}"></button>
                      <span class="post-likes">${state.likes}</span>
                  </div>

                  <div class="post-reaction dislike-container">
                      <button class="far fa-thumbs-down dislike-btn" data-id="${data.key}"></button>
                      <span class="post-dislikes">${state.dislikes}</span>
                  </div>
              </div>
          </div>
          <div class="post-close">
              <button class="post-close fa fa-times" data-id="${data.key}"></button>
          </div>`;
	};


	setTimeout(function(){ 

		document.getElementById("loader").remove();
		// let elems = document.getElementsByClassName("far fa-thumbs-up like-btn");
		// console.log(elems);
		// if (elems.array != null) {
		// 	elems.array.forEach(element => {
		// 		element.addEventListener('click',event => {
		// 			// window.tweet.incrementLikes(event.target.getAttribute("data-id"));
		// 			console.log(event.target.getAttribute("data-id"));
		// 		});
		// 	}); 
		// }
		console.log(document.querySelectorAll('[data-id="-MOQZcnj0t9pZ3EBHa8J"]'));
	}, 1000);




	newPost.addEventListener('submit', event => {
		event.preventDefault();
		// console.log(newPost.children[0].value);
		window.tweet.post(newPost.children[0].value);
        // Logic when posting new tweet
	});

	firebase.auth().onAuthStateChanged(user => {
		validateUser();
		// console.log(firebase.auth().currentUser);
		console.log(user);
		const profileNameElem = document.getElementById('profile-name');
		profileNameElem.innerHTML = user.displayName;


		firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then(userSnapshot => {
			const likes = parseInt(userSnapshot.val()['likes']);
			// console.log(likes);
			userLikesElem.innerHTML = likes;
			// db.ref('users/' + snapshot.val()["userId"]).update({
			// 	'likes': likes
			// });
		});
		// console.log(firebase.auth().currentUser.uid);
		// Update profile posts information
	});


	tweetsDB.on('child_added', data => {
		let newElem = document.createElement("div");
		newElem.classList.add("post");
		newElem.innerHTML = post(data);
		
		//like
		newElem.children[1].children[2].children[0].children[0].addEventListener('click',event => {
						window.tweet.incrementLikes(event.target.getAttribute("data-id"));
						// console.log(event.target.getAttribute("data-id"));/



						// firebase.database().ref('posts/' + event.target.getAttribute("data-id")).once('value').then(userSnapshot => {
							// console.log(userSnapshot);
							// const likes = parseInt(userSnapshot.val()['likes']);
							// console.log(likes); 
						// });
		
						// event.target.parentNode.children[1].innerHTML =
						// 	parseInt(event.target.parentNode.children[1].innerHTML) + 1;
					});

		//dislike
		newElem.children[1].children[2].children[1].children[0].addEventListener('click',event => {
			window.tweet.incrementDislikes(event.target.getAttribute("data-id"));
			// console.log(event.target.getAttribute("data-id"));
			// event.target.parentNode.children[1].innerHTML =
			// 	parseInt(event.target.parentNode.children[1].innerHTML) + 1;
		});

		//delete
		newElem.children[2].children[0].addEventListener('click',event => {

			// console.log(event.target.parentNode.parentNode.children[1].children[2].children[0].children[1].innerHTML);
			
			// event.target.parentNode.children[1].innerHTML =
			// parseInt(event.target.parentNode.children[1].innerHTML) + 1;
			// console.log(event.target.parentNode.parentNode.children[1].children[0].children[0].innerHTML);
			if (firebase.auth().currentUser.displayName == event.target.parentNode.parentNode.children[1].children[0].children[0].innerHTML) {
				window.tweet.delete(event.target.getAttribute("data-id"));
				firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then(userSnapshot => {
					const likes = parseInt(userSnapshot.val()['likes']);
					console.log(likes);
					// userLikesElem.innerHTML = likes;
					db.ref('users/' + firebase.auth().currentUser.uid).update({
						'likes': likes - parseInt(event.target.parentNode.parentNode.children[1].children[2].children[0].children[1].innerHTML)
					});
				});

				event.target.parentNode.parentNode.remove();
				userPostsCountElem.innerHTML = parseInt(userPostsCountElem.innerHTML) - 1;
			}


			// console.log("Delete: " + event.target.getAttribute("data-id"));
		});
		postContainer.appendChild(newElem);
		// Logic when new tweet is added
	});

	tweetsDB.on('child_changed', data => {
		// console.log(data);
		let elems = document.querySelectorAll(`[data-id="${data.key}"]`);
		elems[0].parentNode.children[1].innerHTML =
			parseInt(data.val().likes);
		elems[1].parentNode.children[1].innerHTML =
			parseInt(data.val().dislikes);

			firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then(userSnapshot => {
				const likes = parseInt(userSnapshot.val()['likes']);
				// console.log(likes);
				userLikesElem.innerHTML = likes;
			});


		// console.log(data.val());
		// Like / Dislike logic here
	});

	function validateUser() {
		if (!firebase.auth().currentUser) {
			// user is not logged in
			window.location = 'index.html?error=accessDenied';
			return false;
		}

		return true;
	}

	// Helper function for converting time from milliseconds to human readable format
	function time_ago(time) {
		const time_formats = [
			[60, 'seconds', 1], // 60
			[120, '1 minute ago', '1 minute from now'], // 60*2
			[3600, 'minutes', 60], // 60*60, 60
			[7200, '1 hour ago', '1 hour from now'], // 60*60*2
			[86400, 'hours', 3600], // 60*60*24, 60*60
			[172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
			[604800, 'days', 86400], // 60*60*24*7, 60*60*24
			[1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
			[2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
			[4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
			[29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
			[58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
			[2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
			[5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
			[58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
		];
		let seconds = (+new Date() - time) / 1000,
			token = 'ago',
			list_choice = 1;

		if (seconds === 0) {
			return 'Just now'
		}
		if (seconds < 0) {
			seconds = Math.abs(seconds);
			token = 'from now';
			list_choice = 2;
		}
		let i = 0,
			format;
		while (format = time_formats[i++])
			if (seconds < format[0]) {
				if (typeof format[2] === 'string')
					return format[list_choice];
				else
					return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
			}
		return time;
	}
})();