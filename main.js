const people = [
  {
    Name: "Bob",
    Image: "https://pbs.twimg.com/profile_images/630942591333310464/4gyqQe_h.jpg",
    Occupation: "Builder",
    Age: "42",
    Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Contact: "www.google.com",
    PageLink: "",
  },
  {
    Name: "Mario",
    Image: "https://lh3.googleusercontent.com/6geoqgXLoeCK4-A1xxkR9KcGcI_KF23SGeHX1sAM2gauaIhNp515feFNS3ML1zmCugI=w300",
    Occupation: "Plumber",
    Age: "22",
    Bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    Contact: "www.google.com",
    PageLink: "",
  },
  {
    Name: "Bella",
    Image: "https://i.pinimg.com/736x/4a/90/fb/4a90fbf7a4b82d2d2ea7c434109d3eb0.jpg",
    Occupation: "Dog",
    Age: "2",
    Bio: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    Contact: "www.google.com",
    PageLink: "",
  },
  {
    Name: "Taffy",
    Image: "https://www.wherepetsarefound.com/wp-content/uploads/2014/12/856834-500x500.jpg",
    Occupation: "Dog",
    Age: "2",
    Bio: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    Contact: "http://www.google.com",
    PageLink: "",
  }
]

// Another JSON for later use: https://jsonplaceholder.typicode.com/posts //

// Appending data to HTML --------------------------------------------------- //

for (i = 0; i < people.length; i++) {
  document.getElementById("append").innerHTML +=
      "<article class='personWrapper'><img class='bioPic' src='" + people[i]["Image"] + "'/>"
    + "<h2 class='personName'>" + people[i]["Name"] + ", " + people[i]["Age"] + "</h2>"
    + "<h2 class='personTitle'>" + people[i]["Occupation"] + "</h2><hr/>"
    + "<p class='personBio'>" + people[i]["Bio"] + "</p>"
    + "<a class='personContact' href='" + people[i]["Contact"] + "'>Contact</a>"
    + "<a class='personContact' href='" + people[i]["PageLink"] + "'>More Info</a></article>"
}

// AJAX CRUD --------------------------------------------------------------------- //
// Fetch

let pageCounter = 1

const fetchBtn = document.getElementById("fetchBtn")

// Fetch data from object(s)
fetchBtn.addEventListener("click", function(){
  const request = new XMLHttpRequest()
  // Change object to fetch from each time button is clicked
  request.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json")
  if (pageCounter <= 3) {
    pageCounter += 1
  }
  if (pageCounter > 3) {
    fetchBtn.classList.add("hide")
  }
  request.onload = function() {
    const data = JSON.parse(request.responseText)
    console.log(data)
    renderHTML(data)
  }
  request.send()
})

// Display data
function renderHTML(data) {
  let string = ""
  for (i = 0; i < data.length; i++) {
    // Name
    string += "<article class='personWrapper'><h2 class='personName'>" + data[i].name + "</h2><hr/>"
    // Species
    string += "<h2 class='personTitle'>" + data[i].species + "</h2><br/>"
    // Foods
    // Likes
    string += "<h2 class='personTitle'> Food: <br/> Likes: " + data[i].foods.likes + "</h2><br/>"
    string += "<h2 class='personTitle'> Dislikes: " + data[i].foods.dislikes + "</h2></article>"
  }
  append.insertAdjacentHTML("beforeend", string)
}


// Scroll to Top ------------------------------------------------------------ //

$(document).ready(function(){

	// Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#backToTop').fadeIn();
		} else {
			$('#backToTop').fadeOut();
		}
	});

	// Click event to scroll to top
	$('#backToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
