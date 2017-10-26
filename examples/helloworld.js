

var SparkBot = require("node-sparkbot");
var bot = new SparkBot();
//bot.interpreter.prefix = ""; // Remove comment to overlad default / prefix to identify bot commands

var SparkAPIWrapper = require("node-sparkclient");
if (!process.env.SPARK_TOKEN) {
    console.log("Could not start as this bot requires a Cisco Spark API access token.");
    console.log("Please add env variable SPARK_TOKEN on the command line");
    console.log("Example: ");
    console.log("> SPARK_TOKEN=XXXXXXXXXXXX DEBUG=sparkbot* node helloworld.js");
    process.exit(1);
}
var spark = new SparkAPIWrapper(process.env.SPARK_TOKEN);


//
// Help and fallback commands
//
bot.onCommand("help", function (command) {
    var email = command.message.personEmail;
    spark.createMessage(command.message.roomId, "Hello <@personEmail:" + email + "> I am the CUC bot, here's what I can do! \n\n" +
 	    "***/expenses*** *Find out how to claim your travel expenses* \n\n" +
        "***/gethelp*** *to trigger a message to the CUC team for help* \n\n" +
	    "***/internet*** *Get online here at Bedfont Lakes*\n\n" +
	    "***/jobs*** *See the latest Intern & Graduate roles at Cisco* \n\n" +
        "***/judging*** *Find out how to impress out judges*\n\n" +
	    "***/kitlist*** *See a list of equipment you can borrow* \n\n" +
        "***/links*** *to see some useful links to help you with your project* \n\n" +
	    "***/mealtimes*** *Find out which meal sitting your University is in* \n\n" +
        "***/menu*** *to see the food menu for this evening* \n\n" +
        "***/problemstatement*** *Get some inspiration and solve a real world problem!*\n\n" +
        "***/process*** *Get a step by step of whats going to happen at CUC17*\n\n" +
        "***/retail*** *Find out more about the retail problem statements*\n\n" +
        "***/roadmap*** *find out more about the roadmap sessions and what time your slot is*\n\n" +
        "***/schedule*** *to see the schedule for today* \n\n" +
	    "***/speakers*** *Find out more about our keynote speakers* \n\n" +
        "***/SWIFT1 & /SWIFT2*** *Find out about the SWIFT problem statement*\n\n" +
        "***/travel*** *Advice on getting to Bedfont Lakes* ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("fallback", function (command) {
    spark.createMessage(command.message.roomId, "Sorry, I did not understand.\n\nTry /help.", { "markdown":true }, function(err, response) {
        if (err) {
            console.log("WARNING: could not post Fallback message to room: " + command.message.roomId);
            return;
        }
    });
});


//
// Bots commands here
//
bot.onCommand("schedule", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "***Schedule***     *Note that this is subject to change*\n\n" +
        "**Thursday 26th October**\n\n" +
        "- 08:30am *Registration and Breakfast*\n\n" +
        "- 09:30am *Participants to be seated*\n\n" +
        "- 09:30am *Health, Safety and Security*\n\n" +
        "- 09:40am *Welcome and Introductions*\n\n" +
        "- 10:10am *Keynote 1: Esther Roure Vila*\n\n" +
        "- 10:40am *Speaker 2: SWIFT TOI - Richard Osbourne*\n\n" +
        "- 11:10am *Speaker 3: Meraki TOI - Cory Guynn*\n\n" +
        "- 11:35am *Speaker 4: DevNet TOI - Matt Johnson*\n\n" +
        "- 12:05am *Speaker 5 Frictionless Retail TOI - Bob Garland*\n\n" +
        "- 12:35pm *Event Rules & Expectations*\n\n" +
        "- 12:45pm **Challenge Begins**\n\n" +
        "- 1:00pm *Lunch - 1st Sitting*\n\n" +
        "- 1:30pm *Lunch - 2nd Sitting*\n\n" +
        "*To find your lunch sitting ask the bot.* ***@CUC /mealtimes***\n\n" +
        "- 6:00pm *HR Dropin Sessions*\n\n" +
        "- 7:30pm *Evening Meal - THis will be served in the VEC Foyer*\n\n" +
        "- 8:00pm *Roadmap Sessions - See the big screen or the spark bot for your time slot*\n\n" +
        "*Snacks and drinks will be available throughout the night in the VEC corridor*\n\n" +
        "**Friday 27th October**\n\n" +
        "- **DEADLINE 7:00am** *Your project document must be submitted by email to university-challenge@cisco.com.*\n\n " +
        "- 8:30am *Breakfast Sitting 1*\n\n" +
        "- 9:00am *Breakfast Sitting 2*\n\n" +
        "*Breakfast sittings are the same as yesterdays lunch sitting. @CUC /mealtimes if you are not sure.* \n\n" +
        "- 9:30am **Times Up! The challenge is over**\n\n" +
        "- 9:30am *Intern & Grad Panel*\n\n" +
        "- 10:00am **JUDGING BEGINS** " +
        "*Each University should wait to be called by the CUC team. Rough timings will be published shortly!*\n\n" +
        "- 12:00 **The Final 3!** *The three top teams will present their work on stage!*\n\n" +
        "- 12:45pm *Closing Remarks and Photos and we announce the WINNER of #CiscoUC17*\n\n" +
        "*We expect to be finished no later than 1:15.* ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("problemstatement", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "These are problem statements provided by some areas of Cisco. You can use them " +
        "as inspiration for your project today. You will get a TOI on them in the first morning.\n\n" +
        "To read more about the SWIFT problem statement type @CUC /SWIFT1 or @CUC /SWIFT2. \n\n" +
        "To read more about the retail problem statement type @CUC /retail" +
        "Remember, you dont have to use these, you are more than welcome to come up with your own p" +
        "roblem statement!", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("SWIFT1", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "**SWIFT Problem Statement 1** Onboard Marketing\n\n" +
        "Passengers present a substantial customer base for activities, services and products offered at the destinations." +
        " It is known, however, that limited or inaccurate information provided to passengers regarding their travel " +
        "destinations can hamper their experience and limit awareness of the opportunities. At the other end of the spectrum, " +
        "appropriately tailored information relevant to the context of a particular journey and passenger preferences " +
        "can lead to greater customer engagement and spend, therefore generating new revenue opportunities.\n\n" +
        "The ultimate aim should be to considerably improve passenger experience while also demonstrating " +
        "commercial benefits to the vendors and a train operator.\n\n" +
        " While we invite a broad set of applications, we particularly encourage solutions which focus on or " +
        "incorporate elements which can demonstrably facilitate passenger engagement and spend on tourism-related " +
        "activities and services. The proposed innovations should clearly align with the national " +
        "Scottish tourism strategy and its objectives:\n\n" +
        "- To grow visitor spend by £1bn from £4.5 to £5.5bn by 2020.\n\n" +
        "- To increase the advocacy score for Scotland from 25%.\n\n" +
        "- To increase average visitor spend from £358.56.\n\n" +
        "- To increase the total tourism employment figures from 185,100.\n\n" +
        "- To increase total tourism turnover from £6,221m. \n\n" +
        "The crucial requirement is demonstration of solutions which emphasise the need for low-latency & " +
        "high-bandwidth connectivity which should enable innovations beyond the ones currently " +
        "encountered in the rail industry.", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("SWIFT2", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "**SWIFT Problem Statement 2** Data services for improved management during disruptions\n\n" +
        "Efficient management and customer handling are crucial during periods of service disruptions. " +
        "Each minute of on-train time on a delayed service can count as much as four minutes of a regular journey, " +
        "and up to six if the journey is to an airport. Not only does it lead to worsening passenger experience and " +
        "therefore ridership loss, but has very immediate and direct financial consequences. In 2016 £45m was paid out " +
        "for late running trains across the UK in the form of refunds. The proportion of passenger claiming their " +
        "refund will continue to increase as policies and technologies facilitating automated refunds are introduced.\n\n" +
        "At the same time, strategies and tools enabling effective informing and alternative service delivery can " +
        "not only maintain but also increase passenger satisfaction, ensure their safety, and minimise costs to " +
        "the operators, both in terms of the compensations as well as short- and long-term revenue loss.\n\n" +
        "In this challenge we invite proposals which demonstrate innovative ways of using Project SWIFT data feeds " +
        "which can facilitate management of during disruptions of rail services, including recovery from disruptions. " +
        "We particularly encourage applications which address one or more of the following aspects of management:\n\n" +
        "- Passenger information and advisory\n\n" +
        "- Staff productivity\n\n" +
        "- Staff and resource allocation & deployment\n\n" +
        "- Safety & security for passenger & staff\n\n" +
        "The crucial requirement is demonstration of solutions which emphasise the need for low-latency & " +
        "high-bandwidth connectivity which should enable innovations beyond the ones currently " +
        "encountered in the rail industry.", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("retail", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "**Retail Problem Statement 1 - Frictionless Retail**\n\n" +
        "Imagine recreating Amazon Go, or elements of it. Re-inventing the Customer Experience of shopping with the " +
        "concept of simply walking into a store, grabbing what you want and walking out again. All payments are " +
        "automatic and no POS are required. Aside from the benefit to the customer experience, this also reduces the " +
        "retailers staffing costs as it minimises the resources required at the POS. This will require a " +
        "lot of AI/ML & the application of Data-Science to determine what has been purchased and by who.\n\n" +
        "**Retail Problem Statement 2 - Store Automation**\n\n" +
        "UK retailers are facing the double whammy of the productivity plateau (flat since 2008) and the impact of " +
        "the National Living Wage. This combination is driving up their labour costs while they whilst they are " +
        "facing more competition from online retail (which doesn’t have the same overheads or labour cost base). " +
        "Margins in some sectors like grocery, are already very low (~5%) so they will have to be more productive or " +
        "face going out of business. Digital technology in store offers the ability to automate processes – " +
        "e.g. stock taking video (or robots), application of ML to tasks like improving On-Shelf Availability, " +
        "customer self-service, optimising supply-chain and deliveries, signage, " +
        "ESL, RFID, etc.", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("judging", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "***Judging Process***\n\n" +
        "***Creativity***\n\n" +
        "- How original is your idea?\n\n" +
        "- Does your solution tackle a problem differently to other teams?\n\n" +
        "- Is your solution unique and effective?\n\n" +
        "***Business Value***\n\n" +
        "- How much value will your solution bring to the market?\n\n" +
        "- Does your solution benefit the business?\n\n" +
        "- Will it save costs over time?\n\n" +
        "***Adaptability***\n\n" +
        "- In the changing market, how adaptable is your product?\n\n" +
        "- How did you adapt as a team during the event?\n\n" +
        "- What obstacles did you have to overcome to achieve your goals?\n\n" +
        "***Presentation***\n\n" +
        "- Was your presentation clear and concise?\n\n" +
        "- Was your presentation within the time limit?\n\n" +
        "- Are your slides and solution example effective?\n\n" +
        "***Solution***\n\n" +
        "- Did you provide an extensive solution?\n\n" +
        "- Effective use of integration of APIs?\n\n" +
        "***Technical Skill***\n\n" +
        "- How technical is your solution?\n\n" +
        "- What type of methodology has been adopted?\n\n" +
        "- How did you create the solution?\n\n" +
        "***Fit for Purpose***\n\n" +
        "- Does it address a problem?\n\n" +
        "- How well does your software use DevNet APIs?", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("process", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "***The Challenge Process!***\n\n" +
        "1. Check through the DevNet website and presentations to mind map and choose an idea to work on.\n\n" +
        "2. Once an agreement has been made, please email university-challenge@cisco.com with your universities " +
        "name, and a summary of the idea and the role of each team member.\n\n" +
        "3. You will be expected to hold a short outline discussion of your project direction with Cisco staff using" +
        " our Cisco Telepresence on Thursday evening (see roadmap entries in agenda).\n\n" +
        "4. You are now expected to work on a presentation and project plan and then submit. You will then present your " +
        "working solution with the presentation to Cisco staff on Friday.\n\n" +
        "5. There will be breaks for food and presentations throughout the event. It is up to you how you choose to manage" +
        " your time between these key events.\n\n" +
        "6. At the end of the event you will have 15 minutes to present your plan and implementation to the judging " +
        "panel (10 mins presentation/demo, 5 mins Q&A). Questions will be asked, so make sure everyone on the team is up " +
        "to speed with the project (strengths & limitations).\n\n" +
        "7. The judging panel will convene and the top three will be selected to present on the main stage, where the final winner will be picked!\n\n" +
        "*This is a long and demanding event, which we want you all to enjoy. Please stay hydrated and do take sleep breaks when needed. A small nap" +
        " can really freshen the mind. The event is set to end at approximately 1PM on Friday, plan your breaks accordingly.*", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("menu", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "***Evening Meal Menu - 26th October***\n\n" +
        "*This will be served in the VEC foyer*\n\n" +
        "***Mains***\n\n" +
        "Chargrilled, Hampshire reared beef burger - *Brioche bap, mustard, ketchup, tomato relish, BBQ sauce" +
        "Bacon, blue cheese, Emmental cheese, onion rings and fries*\n\n" +
        "Cisco Southern Fried Chicken - *with corn on the cob, BBQ baked beans and sweet potato fries*\n\n" +
        "Chickpea Falafel Wrap ***(V)*** - *with tzatziki & hummus*\n\n" +
        "***Salads***\n\n" +
        "Hot and Sour Thai Salad\n\n" +
        "Capanata with peas and pistachio\n\n" +
        "***Desserts***\n\n" +
        "Dippin' Donuts\n\n" +
        "Chocolate Brownie Cheesecake \n\n" +
        "Pear and Almond Tart with Cream\n\n" +
        "*For any allergen information please see signage or ask the catering team*", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("internet", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "***Internet Access***\n\n" +
        "There is free high-speed network connectivity available for all participants. If you run into any issues or have questions regarding this" +
        " service, a member of staff will be happy to assist. Note that we will take any attempt to compromise/manipulate the network as a serious off" +
        "ensive action. We reserve the right to dismiss any candidates for misuse of the network. We will send out your internet credentials through " +
        "email so please check your email registered with us for the event.\n\n" +
        "- ***SSID*** *Internet*\n\n" +
        "- ***Username*** *Check your email*\n\n" +
        "- ***Password*** *Check your email*\n\n", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("gethelp", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "Hello <@personEmail:dalaban@cisco.com> the team needs your help!", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("links", function (command) {
    spark.createMessage(command.message.roomId, "Here are some useful links that might help you with your work. \n\n" +
        "- [Devnet](http://cisco.devnet.com)" +
        "- [Postman](https://www.getpostman.com/)" +
        "- [Meraki Postman COllection](http://developers.meraki.com/post/157014824756/dashboard-api-postman-collection)" +
        "- [Meraki Spark Room](https://eurl.io/#HJQnd7yRZ)" +
        "- [Internet of Lego](https://www.internetoflego.com)" +
        "- [Node Red](https://nodered.org/)", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("roadmap", function (command) {
    spark.createMessage(command.message.roomId, "Roadmap sessions are your oppurtunity to talk to a mentor and get feedback on your idea and work so far. The timings for these sessions are below:\n\n" +
        "*Room 1 - Hummingbird*\n\n" +
        "- 8:00pm - Bath\n\n" +
        "- 8:30pm - Imperial\n\n" +
        "- 9:00pm - Plymouth\n\n" +
        "*Room 2 - Heron*\n\n" +
        "- 8:00pm - Bournemouth\n\n" +
        "- 8:30pm - Kent\n\n" +
        "- 9:00pm - Royal Holloway 1\n\n" +
        "*Room 3 - Hawk*\n\n" +
        "- 8:00pm - Glasgow 1 \n\n" +
        "- 8:30pm - Liverpool\n\n" +
        "- 9:00pm - Royal Holloway 2\n\n" +
        "- 9:30pm - UCL 2\n\n" +
        "*Room 4 - Bullfinch*\n\n" +
        "- 8:00pm - Glasgow 2\n\n" +
        "- 8:30pm - London Met\n\n" +
        "- 9:00pm - Sheffield\n\n" +
        "*Room 5 - Blackcap*\n\n" +
        "- 8:00pm - Teesside\n\n" +
        "- 8:30pm - UCL 1\n\n" +
        "- 9:00pm - Warwick\n\n" +
        "*These times are indicative. A member of the CUC team will get you when we are ready for you.", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("mealtimes", function (command) {
    spark.createMessage(command.message.roomId, "*Note that these meal times apply for Lunch on 26th and breakfast on 27th.*\n\n" +
        "**Meal Sitting 1**\n\n" +
        "Bath, Bournemouth, Glasgow 1&2, Imperial, Kent, Liverpool London Met\n\n" +
        "**Meal Sitting 2**\n\n" +
        "Plymouth, Royal Holloway 1&2, Sheffield, Teesside, UCL 1&2, Warwick", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("travel", function (command) {
    spark.createMessage(command.message.roomId, "Getting to Bedfont Lakes couldn't be easier. \n\n" +
        "There are fast and frequent trains from London Waterloo to Feltham and London Underground Picadilly" +
        " Line services to Hatton Cross. Free shuttle buses are in operation to/from both of these stations that will" +
        "bring you right to our front door. The challenge is taking place in Building 10.\n\n" +
        "If you are travelling to Bedfont Lakes by air to Heathrow, there is shuttle buses from Terminal 4. You can " +
        "use Heathrow Express/Connect or London Underground to get to terminal 4. Please see the link below for all of the bus timetables. \n\n " +
        "http://www.bedfont.co.uk/travel.html \n\n" +
        "*As the challenge is a long one - we don't recommend you travel by car.*", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("expenses", function (command) {
    spark.createMessage(command.message.roomId, "**Expenses Information** \n\n" +
        "- [EXPENSE FORM](https://cisco.box.com/s/nfbdkn7daef8vm5rywm0g5igtn9p21jj)\n\n" +
        "**IMPORTANT** - ***Please makre sure you read the following carefully**\n'n" +
        "1. The above form is an example which you can follow.\n\n" +
        "2. Please **only replace text in red**\n\n" +
        "3. Please print your sheet off and **then scan this file in - attach this scan to the email.**\n\n" +
        "4. Each receipt, **please scan in and attach as a file onto the email**.\n\n" +
        "5. Email this to **624-uk-ap@cisco.com - Use the subject 'Cisco University Challenge 2017 Expenses YOUR NAME**\n\n" +
        "6. Please copy university-challenge@cisco.com. - This enables us to track your expense claim. \n\n" +
        "7. Expenses can take up to 5 weeks to process.  ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("jamie", function (command) {
    spark.createMessage(command.message.roomId, "***Is a very terrible person for not being here***", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("jobs", function (command) {
    spark.createMessage(command.message.roomId, "***Here are all of the roles currently advertised here at Cisco.***\n\n" +
        "-  [Engineering – Uxbridge or Bedfont, Grad Software Engineer](https://jobs.cisco.com/jobs/ProjectDetail/" +
        "Graduate-Software-Engineer-Full-Time-UK-Feltham-/1212753?source=Cisco+Jobs+Career+Site&tags=CDC+SnNG+students-and-new-graduate-programs)\n\n" +
        "- [Engineering -  Bedfont, Grad Solutions Test Engineer](https://jobs.cisco.com/jobs/ProjectDetail/Graduate-Solutions-Test-Engineer-" +
        "Full-Time-UK-Feltham-/1212758?source=Cisco+Jobs+Career+Site&tags=CDC+SnNG+students-and-new-graduate-programs)\n\n" +
        "- [Engineering – Uxbridge or Befont, Intern Software Engineer *summer*](https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineering-Summer-Inter" +
        "nships-UK-Uxbridge-Feltham-/1214905?source=Cisco+Jobs+Career+Site&tags=CDC+SnNG+students-and-new-graduate-programs)\n\n" +
        "- [Engineering – Reading, Year Placement Software Engineering](https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineer-Placement-Reading-UK/12127" +
        "64?source=Cisco+Jobs+Career+Site&tags=CDC+SnNG+students-and-new-graduate-programs)\n\n" +
        "- [Engineering -  Reading, Grad Software Engineering](https://jobs.cisco.com/jobs/ProjectDetail/Graduate-Software-Engineer-Full-Time-UK-Reading-/121276" +
        "3?source=Cisco+Jobs+Career+Site&tags=CDC+SnNG+students-and-new-graduate-programs)\n\n" +
        "- [IT -   Feltham, Grad Software Engineering](https://jobs.cisco.com/jobs/ProjectDetail/Graduate-Software-Engineer-Full-Time-UK-Reading-/1212763?source=" +
        "Cisco+Jobs+Career+Site&tags=CDC+SnNG+students-and-new-graduate-programs)\n\n" +
        "- [IT -   Feltham, Intern Software Engineering](https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineer-Bachelor-or-Master-Intern-UK/1217318?)\n\n" +
        "- [IT -   Feltham, Intern Engineering](https://jobs.cisco.com/jobs/ProjectDetail/Engineer-Bachelor-or-Master-Intern-UK/1217320?)\n\n" +
        "- [CSAP - Bedfont, Grad Associate System Engineer](https://jobs.cisco.com/jobs/ProjectDetail/Associate-Systems-Engineer-Full-Time-Sales-UK/1215999)\n\n" +
        "- [CSAP - Bedfont, Grad Associate Sales Representative](https://jobs.cisco.com/jobs/ProjectDetail/Associate-Sales-Representative-Full-Time-UK/1215998)\n\n" +
        "- [Services -  Bedfont or Reading, Grad Associate Project Manager](https://jobs.cisco.com/jobs/ProjectDetail/Associate-Project-Manager-United-Kingdom/121" +
        "6750?source=Cisco+Jobs+Career+Site&tags=project+manager)\n\n" +
        "- [Services -  Reading, Intern Networking Engineer](https://jobs.cisco.com/jobs/ProjectDetail/Networking-Engineer-Bachelor-Master-Intern-UK/1217474?)\n\n" +
        "- [Digitization – Bedfont, Intern Business Analyst Summer](https://jobs.cisco.com/jobs/ProjectDetail/Business-Analyst-Summer-Intern-UK/1216957?)", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("speakers", function (command) {
    spark.createMessage(command.message.roomId, "Our speakers will talk to you about some of our problem statements, and available technologies" +
        "before the challenge gets under way. Here is a little bit about each of them. \n\n" +
        "**Esther Roure Vila** - *Service Advisor*\n\n" +
        "Esther joined Cisco Technical Services as a graduate in 2007, working in R&S, Storage, " +
        "and Data Center, obtaining two CCIE, and is currently working as Service Advisor for Global Service " +
        "Provider and Innovation Ambassador. Freshly Executive MBA graduated. \n\n" +
        "She is driving the Cisco Transformation to New Business Models and is passionate about bridging the gap " +
        "between Business and Technology. Involved in Inclusion and Collaboration Initiative and 2014 " +
        "European Digital Woman of the Year™ Award.\n\n " +
        "**Richard Osbourne** - *Enterprise Architect*\n\n" +
        "Richard has worked for Cisco, for 19 years, in technical, consultancy and business development roles and is " +
        "now an Enterprise Architect, with a primary focus on Rail.\n\n" +
        "Cisco’s primary achievement of those 19 years has been in delivering high speed Internet access to everyone, " +
        "everywhere.  Well, almost….  so now, Richard’s passion is to get trains connected: the last bastion of an unconnected world.\n\n" +
        "In his spare time, Richard “5 sheds” Osborne has a wife and two young children and spends his spare time tinkering with power tools in the garden.\n\n" +
        "**Cory Gyunn** - *Solutions Architect, Meraki*\n\n" +
        "Cory is a pioneer in cloud computing and Internet of Things technology.\n\n" +
        "As a veteran Meraki Systems Engineer, he has experience in networks across all industries. " +
        "His current passion is leveraging APIs to extend the power of networking and architecting solutions.\n\n" +
        "**Matt Johnson** - *Developer Evangelist, DEVNET*\n\n" +
        "UK based, and now in his fifth year with Cisco. Matt has spent most of his life at the coal-face of IT operations, " +
        "pushing an agenda of automation, infrastructure as code and repeatability; which form some of the founding principles of the DevOps movement. \n\n" +
        "Working within Cisco’s DEVNET organisation as a Developer Evangelist, he takes this experience to promote " +
        "modern development and operations practices to customers, partners and staff alike. When not sat behind a " +
        "heavily stickered laptop, he enjoys motorsports, rugby, photography, shooting and his growing collection of single malt.\n\n" +
        "**Bob Garland** - *Retail Solutions Architect*\n\n" +
        "Bob is a Solutions Architect working with major UK Retail customers on addressing their business challenges " +
        "and opportunities with technology. With over 25 years IT experience working for Cisco, IBM, and CSC, " +
        "he currently works with customers to develop retail business solutions covering Cloud, Mobility, IoT, " +
        "Analytics, Collaboration and Software Defined Networks.\n\n" +
        "Bob has mentored start-ups in IDEAL London and Mi-IDEA, Cisco’s post-accelerators, to develop their " +
        "technology, leverage Cisco and evangelise the benefits of innovation with customers. ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("kitlist", function (command) {
    spark.createMessage(command.message.roomId, "We have a wide variety of IoT kit available for you to use. " +
        "This includes devices like Arduinos, Raspberry Pi's and all sorts of sensors. \n\n" +
        "You can borrow this kit from the desk at the from of the room.\n\n" +
        "*Please be aware that when borrowing kit you will need to leave your ID with us. " +
        "Any items you borrow are the responsibility of the person who signs it out.*", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});

//
// Welcome message
// sent as the bot is added to a Room
//
bot.onEvent("memberships", "created", function (trigger) {
    var newMembership = trigger.data; // see specs here: https://developer.ciscospark.com/endpoint-memberships-get.html
    if (newMembership.personId != bot.interpreter.person.id) {
        // ignoring
        console.log("new membership fired, but it is not us being added to a room. Ignoring...");
        return;
    }

    // so happy to join
    console.log("bot's just added to room: " + trigger.data.roomId);

    spark.createMessage(trigger.data.roomId, "Hello. Welcome to your teams CUC17 Spark Room. " +
        "I am the CUC Spark Bot. I will be providing you with information about the event. " +
        "In the mean time you can use this room to get to know your team mates.\n\n " +
        "During the event you can use me to find out useful information about the event. " +
        "To get my attention you will need to @ me. For example try ***@CUC Bot /help*** ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + trigger.data.roomId);
            return;
        }

    });
});

