var agePrompt=prompt("How old are you?");
//prompts a user to enter their age//
if (agePrompt>=18)
	//checks if the user is younger or older than 18 years
alert("Have a beer, You are an adult!")
//if value is true, the user is given the appropriate response
else if(agePrompt>35)
	// checks if the user is above the age of the 35, to be defined as an elder.
alert("Have a beer too. You are an elder.")
else(agePrompt<18)
	//checks if the user is younger than 18 years of age, or if the other values are false.
alert("You are underage. Have a sweet.")
//appropriate response for an underage person.