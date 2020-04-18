# password-generator-homework

In this homework assignment, we were assigned to create a working random password generator by utilizing the skills we are learning in javascript. We were given the basic HTML and CSS with a small amount of Javascript to get us started. 

### User Experience End Goal 

Upon opening the application, the user will see the password generator with a button. Once the button is clicked the user will be prompted to answer 5 questions. 

1. How long would you like your password to be?
2. Would you like to use uppercase letters?
3. Would you like to use lowercase letters?
4. Would you like to use numbers?
5. Would you like to include special characters?

After answering all questions, a randomized password will appear in the text box. 

### Initial Questions 

I started with walking through the logical step s of what needs to happen for a password to be generated. 
1. Define required password criteria
2. Layout questions to obtain user input
3. Ensure password meets set required criteria
4. Combine user input to create a randomized password

### Prompts and Booleans

User question 1 was created via a prompt to collect the user input for this question. This is immediately followed by a while loop to ensure that the input value falls within the necessary numeric range of 8-128 charcters, if this is not the case the user will be prompted to fix the error. 

User questions 2-5 are treated as booleans and are followed up with another while loop to ensure that at least one speical character type is included within the password. 

### Allowed Varaibles 

I then created the allowed varriable for each  boolean question [uppercase, lowercase, numbers and symbols]. This is followed by a for loop that takes the allowed vairables that meet the user input that met the requirements and applies the Math.floor and Math.random functions to create a random password. 

#### Collaboration

While working on this homework, I collaborated with Chris Enright and Micheal Spikes to brainstorm work arounds and walk through hangups that we had through this assignment. 