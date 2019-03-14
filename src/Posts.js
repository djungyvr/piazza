const body1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const body2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const body3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

var followups = [
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
]

var posts = [
	{postID: "30", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "29", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "28", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "27", title: "Will we be allowed a cheatsheet?", body: body1, followups: followups, dow: "Sun"},
	{postID: "26", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "25", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "24", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "23", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "22", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "21", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "20", title: "Will we be allowed a cheatsheet?", body: body1, followups: followups, dow: "Sun"},
	{postID: "19", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "18", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "17", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "16", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "15", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "14", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "13", title: "Will we be allowed a cheatsheet?", body: body1, followups: followups, dow: "Sun"},
	{postID: "12", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "11", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "10", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
];

export default posts;
