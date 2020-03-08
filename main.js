//ALL THIS BECAUSE YOU SUCK AT MAKING
//SIMPLE FEATURES PEOPLE ACTUALLY WANT?!
let timer = 500; //Number of milliseconds

function delete_one(){
	document.querySelector("ytd-playlist-video-renderer").querySelector("button").click();
	setTimeout(()=>{
		var options = document.querySelectorAll("paper-listbox")[1].querySelectorAll("ytd-menu-service-item-renderer");
		if (options.length == 1){
			options[0].click(); //If the video was removed from YT
		} else {
			options[2].click(); //If it's still there, the option
				//to remove it is the third (unless they change it
				//again to piss off their userbase further)
		}
	}, timer);
}

function main(){
	setInterval(()=>{
		delete_one();
	}, (timer * 2)); //Twice the timeout used internally
		//to avoid conflicts
		//If your machine is too slow, adjust it higher
}

main();