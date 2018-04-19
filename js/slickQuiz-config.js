// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Know Me?",
        "main":    "<p>How well do you know Dagmawit?</p>",
        "results": "<h5></h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is their favortie superhero?",
            "a": [
                {"option": "Superman",      "correct": false},
                {"option": "Iron Man",     "correct": false},
                {"option": "Black Panther",      "correct": true},
                {"option": "Wonder Woman",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is your favorite color?",
            "a": [
                {"option": "Red",               "correct": false},
                {"option": "Pink",   "correct": true},
                {"option": "Black",               "correct": false},
                {"option": "Yellow", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Fave food?",
            "a": [
                {"option": "Cheddar Cheese",           "correct": false},
                {"option": "McNuggets",                  "correct": false},
                {"option": "Cheese Burger",  "correct": false},
                {"option": "Veggie Burger ",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "What is their biggest fear?",
            "a": [
                {"option": "Heights",    "correct": false},
                {"option": "Losing Someone close to me",     "correct": true},
                {"option": "Kevin Spacey",      "correct": false},
                {"option": "Drowning",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "What is their favorite artist?",
            "a": [
                {"option": "J.Cole",    "correct": true},
                {"option": "The Weeknd",     "correct": false},
                {"option": "Lana Del Ray",     "correct": false},
                {"option": "Jhene Aiko",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
