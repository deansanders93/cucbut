

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
        "***/roadmap*** *find out more about the roadmap sessions and what time your slot is*\n\n" +
        "***/schedule*** *to see the schedule for today* \n\n" +
	    "***/speakers*** *Find out more about our keynote speakers* \n\n" +
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
        "***Thursday 26th October***\n\n" +
        "- 08:30am *Registration and Breakfast*\n\n" +
        "- 09:30am *Participants to be seated*\n\n" +
        "*Speakers*" +
        "- 09:30am *Health, Safety and Security*\n\n" +
        "- 09:40am *Welcome and Introductions*\n\n" +
        "- 10:10am *Keynote 1: Esther Roure Vila*\n\n" +
        "- 10:40am *Speaker 2: SWIFT TOI - Richard Osbourne*\n\n" +
        "- 11:10am *Speaker 3: Meraki TOI - Cory Guynn*\n\n" +
        "- 11:35am *Speaker 4: DevNet TOI - Matt Johnson*\n\n" +
        "- 12:05am *Speaker 5 Frictionless Retail TOI - Bob Garland*\n\n" + +
        "- 12:35pm *Event Rules & Expectations*\n\n**Challenge Begins @ 12:45**\n\n" +
        "- 1:00pm *Lunch - 1st Sitting*\n\n" +
        "- 1:30pm *Lunch - 2nd Sitting*\n\n" +
        "*To find your lunch sitting ask the bot.* ***@CUC /mealtimes***\n\n" +
        "- 7:30pm *Evening Meal - THis will be served in the VEC Foyer*\n\n" +
        "- 8:00pm *HR Dropin Sessions*\n\n" +
        "- 9:00pm *Roadmap Sessions - See the big screen or the spark bot for your time slot\n\n" +
        "*The remainder of the schedule will be released shortly including meal times and roadmap sessions. " +
        "Look out for a message from the CUC Bot for more details. For your information we do expect that " +
        "the challenge will be finished by 1pm on the 27th. *", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post Hello message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("problemstatement", function (command) {
    var email = command.message.personEmail; // Spark User that created the message orginally
    spark.createMessage(command.message.roomId, "*TO BE ADDED*", { "markdown":true }, function(err, message) {
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
        "- [Devnet](http://cisco.devnet.com)", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("roadmap", function (command) {
    spark.createMessage(command.message.roomId, "Roadmap sessions are your oppurtunity to talk to a mentor and get feedback on your idea and work so far. The timings for these sessions are below:\n\n" +
        "*Room 1 - Hummingbird*\n\n" +
        "- 9:00pm - UNI 1\n\n" +
        "- 9:20pm - UNI 2\n\n" +
        "- 9:30pm - UNI 3\n\n" +
        "*Room 2 - Heron*\n\n" +
        "- 9:00pm - UNI 1\n\n" +
        "- 9:20pm - UNI 2\n\n" +
        "- 9:40pm - UNI 3\n\n" +
        "*Room 3 - Hawk*\n\n" +
        "- 9:00pm - UNI 1\n\n" +
        "- 9:20pm - UNI 2\n\n" +
        "- 9:40pm - UNI 3\n\n" +
        "*Room 4 - Bullfinch*\n\n" +
        "- 9:00pm - UNI 1\n\n" +
        "- 9:20pm - UNI 2\n\n" +
        "- 9:40pm - UNI 3\n\n" +
        "*Room 5 - TBC*\n\n" +
        "- 9:00pm - UNI 1\n\n" +
        "- 9:20pm - UNI 2\n\n" +
        "- 9:40pm - UNI 3\n\n" +
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
    spark.createMessage(command.message.roomId, "The expenses form will be available shortly. \n\n" +
        "- [EXPENSE FORM](null)\n\n" +
        "*PLEASE NOTE: You must fill in your expense form by hand. Typed copies will not be accepted." +
        " You must include receipts/tickets for all parts of your journey that you are claiming for, " +
        "failure to provide receipts will delay your claim and you may not be reimbursed. If you would like " +
        "to submit your form today please speak to a member of the team on Thursday evening and we can take " +
        "a copy of your travel receipts* ", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("jamie", function (command) {
    spark.createMessage(command.message.roomId, "***Is a very terrible person***", { "markdown":true }, function(err, message) {
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
    spark.createMessage(command.message.roomId, "Keynote speaker profiles will be available shortly. \n\n", { "markdown":true }, function(err, message) {
        if (err) {
            console.log("WARNING: could not post message to room: " + command.message.roomId);
            return;
        }
    });
});
bot.onCommand("kitlist", function (command) {
    spark.createMessage(command.message.roomId, "A list of IoT kit to go here\n\n", { "markdown":true }, function(err, message) {
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

