const body1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const body2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const body3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

const evaluationBody1 = `Ronald Wilson Reagan ( February 6, 1911 – June 5, 2004) was an American politician who served as the 40th president of the United States from 1981 to 1989. Prior to his presidency, he was a Hollywood actor and union leader before serving as the 33rd governor of California from 1967 to 1975. Reagan was raised in a poor family in small towns of northern Illinois. He graduated from Eureka College in 1932 and worked as a sports announcer on several regional radio stations.`
const evaluationBody2 = `REFERENCE TEXT 1: Abraham Lincoln (February 12, 1809 – April 15, 1865) was an American statesman and politician who served as the 16th president of the United States from 1861 until his assassination in April 1865.`

const prefillText1 = `Reagan was raised in a poor family in small towns of northern _____. In 1932 he graduated from _____ College and worked as a sports announcer on several regional radio stations. He was a Hollywood actor and union leader before serving as the _____ governor of California from 1967 to 1975.`

const prefillText2 = `Lincoln led the nation through the American Civil War, and its greatest moral, _____, and political crisis. He served as the 16th president of the United States from _____ until his assassination in April 1865. He preserved the Union, _____ slavery, strengthened the federal government.`

var followups1 = [
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
]

var followups2 = [
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: body1},
	{body: 'REFERENCE TEXT 2: Lincoln led the nation through the American Civil War, its bloodiest war and its greatest moral, constitutional, and political crisis. He preserved the Union, abolished slavery, strengthened the federal government, and modernized the U.S. economy'},
	{body: body1},
]

var posts = [
	{postID: "300", title: "ABOVE Evaluation 1", body: evaluationBody1, followups: followups1, prefillText: prefillText1, dow: "Wed"},
	{postID: "299", title: "SPLIT ABOVE Evaluation 2", body: evaluationBody2, followups: followups2, prefillText: prefillText2, dow: "Tue"},
	{postID: "288", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "287", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "286", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "285", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "284", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "283", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "282", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "281", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "280", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "279", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "278", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "277", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "276", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "275", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "274", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "273", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "272", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "271", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "270", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "269", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "268", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "267", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "266", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "265", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "264", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "263", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "262", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "261", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "260", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "259", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "258", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "257", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "256", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "255", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "254", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "253", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "252", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "251", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "250", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "249", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "248", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "247", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "246", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "245", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "244", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "243", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "242", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "241", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "240", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "239", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "238", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "237", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "236", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "235", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "234", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "233", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "232", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "231", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "230", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "229", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "228", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "227", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "226", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "225", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "224", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "223", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "222", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "221", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "220", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "219", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "218", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "217", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "216", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "215", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "214", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "213", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "212", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "211", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "210", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "209", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "208", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "207", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "206", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "205", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "204", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "203", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "202", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "201", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "200", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "199", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "198", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "197", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "196", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "195", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "194", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "193", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "192", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "191", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "190", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "189", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "188", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "187", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "186", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "185", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "184", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "183", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "182", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "181", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "180", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "179", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "178", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "177", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "176", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "175", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "174", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "173", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "172", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "171", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "170", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "169", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "168", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "167", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "166", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "165", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "164", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "163", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "162", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "161", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "160", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "159", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "158", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "157", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "156", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "155", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "154", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "153", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "152", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "151", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "150", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "149", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "148", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "147", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "146", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "145", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "144", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "143", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "142", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "141", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "140", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "139", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "138", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "137", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "136", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "135", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "134", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "133", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "132", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "131", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "130", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "129", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "128", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "127", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "126", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "125", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "124", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "123", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "122", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "121", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "120", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "119", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "118", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "117", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "116", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "115", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "114", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "113", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "112", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "111", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "110", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "109", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "108", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "107", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
	{postID: "106", title: "Where can I find the assignment?", body: body1, followups: [], dow: "Wed"},
	{postID: "105", title: "When will the grades be posted?" , body: body2, followups: [], dow: "Tue"},
	{postID: "104", title: "Regarding assignment 5"          , body: body3, followups: [], dow: "Mon"},
	{postID: "103", title: "Will we be allowed a cheatsheet?", body: body1, followups: [], dow: "Sun"},
	{postID: "102", title: "Where can I find practice exams?", body: body2, followups: [], dow: "Sat"},
	{postID: "101", title: "Issue with logging in"           , body: body3, followups: [], dow: "Sat"},
	{postID: "100", title: "Where can I find the exam info?" , body: body1, followups: [], dow: "Fri"},
];

export default posts;
