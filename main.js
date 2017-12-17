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
    Image: "https://cdn.churchm.ag/wp-content/uploads/2012/08/Mario-in-Real-Life-620x688.jpeg",
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
    Name: "Bella",
    Image: "https://i.pinimg.com/736x/4a/90/fb/4a90fbf7a4b82d2d2ea7c434109d3eb0.jpg",
    Occupation: "Dog",
    Age: "2",
    Bio: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
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
    Name: "Bella",
    Image: "https://i.pinimg.com/736x/4a/90/fb/4a90fbf7a4b82d2d2ea7c434109d3eb0.jpg",
    Occupation: "Dog",
    Age: "2",
    Bio: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
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
  }
]

// Appending data to HTML --------------------------------------------------- //

const main = document.getElementById("#main")

for (i = 0; i < people.length; i++) {
  document.write("<article class='personWrapper'><img class='bioPic' src='" + people[i]["Image"] + "'/>")
  document.write("<h2 class='personName'>" + people[i]["Name"] + ", " + people[i]["Age"] + "</h2>")
  document.write("<h2 class='personTitle'>" + people[i]["Occupation"] + "</h2><hr/>")
  document.write("<p class='personBio'>" + people[i]["Bio"] + "</p>")
  document.write("<a class='personContact' href='" + people[i]["Contact"] + "'>Contact</a>")
  document.write("<a class='personContact' href='" + people[i]["PageLink"] + "'>More Info</a></article>")
}


// CRUD --------------------------------------------------------------------- //
