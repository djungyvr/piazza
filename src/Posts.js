const body1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const body2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const body3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

const evaluationBody1 = `
Ronald Wilson Reagan ( February 6, 1911 – June 5, 2004) was an American politician who served as the 40th president of the United States from 1981 to 1989. Prior to his presidency, he was a Hollywood actor and union leader before serving as the 33rd governor of California from 1967 to 1975. Reagan was raised in a poor family in small towns of northern Illinois. He graduated from Eureka College in 1932 and worked as a sports announcer on several regional radio stations.

Reagan was raised in a poor family in small towns of northern blank.
In 1932 he graduated from blank College and worked as a sports announcer on several regional radio stations.
He was a Hollywood actor and union leader before serving as the blank governor of California from 1967 to 1975.`

const evaluationBody2 = `Abraham Lincoln (February 12, 1809 – April 15, 1865) was an American statesman and politician who served as the 16th president of the United States from 1861 until his assassination in April 1865. Lincoln led the nation through the American Civil War, its bloodiest war and its greatest moral, constitutional, and political crisis. He preserved the Union, abolished slavery, strengthened the federal government, and modernized the U.S. economy.

Lincoln led the nation through the American Civil War, and its greatest moral, blank, and political crisis.
He served as the 16th president of the United States from blank until his assassination in April 1865.
He preserved the Union, blank slavery, strengthened the federal government.`

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
	{postID: "30", title: "Evaluation 1", body: evaluationBody1, followups: followups, dow: "Wed"},
	{postID: "29", title: "Evaluation 2" , body: evaluationBody2, followups: followups, dow: "Tue"},
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
