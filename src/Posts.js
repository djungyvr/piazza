const body1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const body2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const body3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

const evaluationBody1 = `
Thanks for participating in our little study.

Your task is rather simple:

You just have to fill the 3 blanks with information given in the text below

If you have any questions please ask them before starting.

Please read out loud "I am starting now", then you are all set to retrieve the needed information in the following text sample:

REFERENCE TEXT

Ronald Wilson Reagan ( February 6, 1911 – June 5, 2004) was an American politician who served as the 40th president of the United States from 1981 to 1989. Prior to his presidency, he was a Hollywood actor and union leader before serving as the 33rd governor of California from 1967 to 1975. Reagan was raised in a poor family in small towns of northern Illinois. He graduated from Eureka College in 1932 and worked as a sports announcer on several regional radio stations.`

const evaluationBody2 = `
Thanks for participating in our little study.

Your task is rather simple:

You just have to fill the 3 blanks with information given in the text below and in one of the followup discussions

If you have any questions please ask them before starting.

Please read out loud "I am starting now", then you are all set to retrieve the needed information in the following text sample:

REFERENCE TEXT 1

Abraham Lincoln (February 12, 1809 – April 15, 1865) was an American statesman and politician who served as the 16th president of the United States from 1861 until his assassination in April 1865.`

const prefillText1 = `Reagan was raised in a poor family in small towns of northern _____. In 1932 he graduated from _____ College and worked as a sports announcer on several regional radio stations. He was a Hollywood actor and union leader before serving as the _____ governor of California from 1967 to 1975.`

const prefillText2 = `Lincoln led the nation through the American Civil War, and its greatest moral, _____, and political crisis. He served as the 16th president of the United States from _____ until his assassination in April 1865. He preserved the Union, _____ slavery, strengthened the federal government.`

var evalFollowups1 = [
	{
		body: `Reagan was raised in a poor family in small towns of northern Illinois. He graduated from Eureka College in 1932 and worked as a sports announcer
on several regional radio stations. After moving to California in 1937, he found work as an actor and starred in a few major productions. Reagan was twice elected President of the Screen Actors Guild—the labor union for actors—where he worked to root out Communist influence. In the 1950s, he moved into television and was a motivational speaker at General Electric factories. Reagan had been a Democrat until 1962, when he became a conservative and switched to the Republican Party. In 1964, Reagan's speech, "A Time for Choosing", supported Barry Goldwater's foundering presidential campaign and earned him national attention as a new conservative spokesman. Building a network of supporters, he was elected governor of California in 1966. As governor, Reagan raised taxes, turned a state budget deficit to a surplus, challenged the protesters at the University of California, ordered in National Guard troops during a period of protest movements in 1969, and was re-elected in 1970. He twice ran unsuccessfully for the Republican presidential nomination, in 1968 and 1976. Four years later in 1980, he won the nomination and then defeated incumbent president Jimmy Carter. At 69 years, 349 days of age at the time of his first inauguration, Reagan was the oldest person to have assumed office until Donald Trump (aged 70 years, 220 days) in 2017. Reagan faced former vice president Walter Mondale when he ran for re-election in 1984, and defeated him, winning the most electoral votes of any U.S. president, 525, or 97.6 percent of the 538 votes in the Electoral College. This was the second-most lopsided presidential election in modern U.S. history after Franklin D. Roosevelt's 1936 victory over Alfred M. Landon, in which he won 98.5 percent or 523 of the (then-total) 531 electoral votes.[1]
`
	},
	{
		body: `Soon after taking office, Reagan began implementing sweeping new political and economic initiatives. His supply-side economic policies, dubbed "Reaganomics", advocated tax rate reduction to spur economic growth, economic deregulation, and reduction in government spending. In his first term he survived an assassination attempt, spurred the War on Drugs, and fought public sector labor. Over his two terms, the economy saw a reduction of inflation from 12.5% to 4.4%, and an average annual growth of real GDP of 3.4%. Reagan enacted cuts in domestic discretionary spending, cut taxes, and increased military spending which contributed to increased federal outlays overall, even after adjustment for inflation. Foreign affairs dominated his second term, including ending the Cold War, the bombing of Libya, the Iran–Iraq War, and the Iran–Contra affair. In June 1987, four years after he publicly described the Soviet Union as an "evil empire", Reagan challenged Soviet General Secretary Mikhail Gorbachev to "tear down this wall!", during a speech at the Brandenburg Gate. He transitioned Cold War policy from détente to rollback by escalating an arms race with the USSR while engaging in talks with Gorbachev. The talks culminated in the INF Treaty, which shrank both countries' nuclear arsenals. Reagan began his presidency during the decline of the Soviet Union, and the Berlin Wall fell just ten months after the end of his term. Germany reunified the following year, and on December 26, 1991 (nearly three years after he left office), the Soviet Union collapsed. `
	}
]

var evalFollowups2 = [
	{body: `Born in Kentucky, Lincoln grew up on the frontier in a poor family. Self-educated, he became a lawyer, Whig Party leader, state legislator and Congressman. He left government to resume his law practice, but angered by the success of Democrats in opening the prairie lands to slavery, reentered politics in 1854.`},
	{body: `He became a leader in the new Republican Party and gained national attention in 1858 for debating and losing to national Democratic leader Stephen A. Douglas in a Senate campaign. He then ran for President in 1860, sweeping the North and winning.`},
	{body: `Southern pro-slavery elements took his win as proof that the North was rejecting the Constitutional rights of Southern states to practice slavery. They began the process of seceding from the union. To secure its independence, the new Confederate States of America fired on Fort Sumter, one of the few U.S. forts in the South. Lincoln called up volunteers and militia to suppress the rebellion and restore the Union.`},
	{body: 'REFERENCE TEXT 2: Lincoln led the nation through the American Civil War, its bloodiest war and its greatest moral, constitutional, and political crisis. He preserved the Union, abolished slavery, strengthened the federal government, and modernized the U.S. economy'},
	{body: `As the leader of the moderate faction of the Republican Party, Lincoln confronted Radical Republicans, who demanded harsher treatment of the South; War Democrats, who rallied a large faction of former opponents into his camp; anti-war Democrats (called Copperheads), who despised him; and irreconcilable secessionists, who plotted his assassination. Lincoln fought the factions by pitting them against each other, by carefully distributing political patronage, and by appealing to the American people.[4]:65–87 His Gettysburg Address became an iconic call for nationalism, republicanism, equal rights, liberty, and democracy. He suspended habeas corpus, and he averted British intervention by defusing the Trent Affair. Lincoln closely supervised the war effort, including the selection of generals and the naval blockade that shut down the South's trade. As the war progressed, he maneuvered to end slavery, issuing the Emancipation Proclamation of 1863; ordering the Army to protect escaped slaves, encouraging border states to outlaw slavery, and pushing through Congress the Thirteenth Amendment to the United States Constitution, which outlawed slavery across the country. `},
	{body: `Lincoln managed his own re-election campaign. He sought to reconcile his damaged nation by avoiding retribution against the secessionists. A few days after the Battle of Appomattox Court House, he was shot by John Wilkes Booth, an actor and Confederate sympathizer, on April 14, 1865, and died the following day. Abraham Lincoln is remembered as the United States' martyr hero. He is consistently ranked both by scholars[5] and the public[6] as among the greatest U.S. presidents.`},
]

var posts = [
	{postID: "300", title: "ABOVE Evaluation 1", body: evaluationBody1, followups: evalFollowups1, prefillText: prefillText1, dow: "Wed"},
	{postID: "299", title: "SPLIT ABOVE Evaluation 2", body: evaluationBody2, followups: evalFollowups2, prefillText: prefillText2, dow: "Tue"},
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
