function adventurerPicker(){

  //variables that are used in this function
  var firstClientAnswer = "";
  var output = "";
  var secondClientAnswer = "";
  var thirdClientAnswer = "";

  //gathering user input
  firstClientAnswer = prompt("If you had a favorite passtime, would you pick (A,B or C)\n\nA. Having a drink with friends\nB. Sitting at home and reading\nC. Traveling on your own");

  //If the first answer is "A" or "a" This is the part of the program that is called
  if (firstClientAnswer === "A" || firstClientAnswer === "a"){
    secondClientAnswer = prompt("Which of these would you prefer to eat\n\nA.Grilled Chicken\n B.Oatmeal and Grits\nC. Garden Medley");

    if (secondClientAnswer === "A" || secondClientAnswer === "a"){
      thirdClientAnswer = prompt ("Which of these metals would you choose\n\nA. Steel\nB. Mithril\nC. Gold");

      if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
        output = "You are most like a WARRIOR!\nYou are a powerful ally to anyone in need!\nYou use might to solve your problems!\n\n";

      } else if (thirdClientAnswer === "B" || thirdClientAnswer === "b"){
          output = "You are most like a SORCERER!\nYou have only one very close friend and you don't really care for anyone else.\nYou like to learn on the fly rather than in books!\n\n";

      } else if (thirdClientAnswer === "C" ||thirdClientAnswer === "c"){
          output = "You are most like a ROGUE!\nYou are pretty solitary.  You feel ike emotions and relationships get in the way of your goals.\n\n";

      } else {
          output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
      }

    } else if (secondClientAnswer === "B"|| secondClientAnswer === "b"){
        thirdClientAnswer = prompt("Which of these metals would you choose? (A, B, or C)\n\nA. Steel\nB. Mithril\nC. Gold");

       if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
         output = "You are most like a BRAWLER!\nYou are always ready for a fight and nothing ever phases you. You have thick skin and an attribute that could put a rhino to shame!\nYour tenacity is your main attibute!\n\n";

       } else if (thirdClientAnswer === "B"|| thirdClientAnswer === "b"){
           output = "You are most like a MAGE!\nYou have a very strong innate learning ability.\nYou don't waste time studying and would rather field test!\n\n";

       } else if (thirdClientAnswer === "C" || thirdClientAnswer === "c"){
           output = "You are most like a TREASURE HUNTER!\nYou seek glory and laurels!\nYou can't wait to see what treasures your next adventure brings you!\n\n";

       } else {
           output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
       }

    } else if (secondClientAnswer === "C" || secondClientAnswer === "c"){
        thirdClientAnswer = prompt("Which of these metals would you choose? (A, B, or C)\n\nA. Steel\nB. Mithril\nC. Gold");

       if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
           output = "You are most like a BARD!\nYou love music and let the beat take you to new heights!\nYou like to be the center of attention and enjoy the company of others!\n\n";

       } else if (thirdClientAnswer === "B" || thirdClientAnswer === "b"){
           output = "You are most like a WARLOCK!\nYou summon strenght from the negativity that presents itself around you.\nNothing is ever to big a challenge and everything can be brought down with enough weight!\n\n";

       } else if (thirdClientAnswer === "C" || thirdClientAnswer === "c"){
           output = "You are most like a THIEF!\nYou find happiness when you discover people's secrets.\nYou like to twist people's arms using their secrets if they don't comply with your plans!\n\n";

       } else {
           output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
       }

    } else {
        output = "Do you even wanna know what adventurer you would be like? Try answering A, B, or C!\n\n";
    }

  //This is the logic called when the first answer chosen is "B" or "b"
  } else if (firstClientAnswer === "B" || firstClientAnswer === "b"){
      secondClientAnswer = prompt("Which of these would you prefer to eat\n\nA. Grilled Chicken\nB. Oatmeal and Grits\nC. Garden Medley");

    if (secondClientAnswer === "A" || secondClientAnswer === "a"){
      thirdClientAnswer = prompt ("Which of these metals would you choose\n\nA. Steel\nB. Mithril\nC. Gold");

      if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
        output = "You are most like a GLADIATOR!\nYou prefer to tackle problems on your own and are willing to take on any challenges!\n\n";

      } else if (thirdClientAnswer === "B" || thirdClientAnswer === "b"){
          output = "You are most like a CLERIC!\nYou belive that protecting your friends means keeping them on the path of light and you are willing to go out to battle right by their side!\n\n";

      } else if (thirdClientAnswer === "C" ||thirdClientAnswer === "c"){
          output = "You are most like a MERCENARY!\nYou do things only if they have a guarentee payout.\nYou refuse to waste time if it's not worth the experience!\n\n";

      } else {
          output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
      }

    } else if (secondClientAnswer === "B"|| secondClientAnswer === "b"){
        thirdClientAnswer = prompt("Which of these metals would you choose? (A, B, or C)\n\nA. Steel\nB. Mithril\nC. Gold");

       if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
         output = "You are most like a FIGHTER!\nYou never want to raise your fists unles provoked.\nYou are of a strong discipline and always wait to make the right move.\nPatience is how you win!\n\n";

       } else if (thirdClientAnswer === "B"|| thirdClientAnswer === "b"){
           output = "You are most like a WIZARD!\nYou love to study and you take careful consideration in everything you do!\nYou believe everying has purpose and do not like to leave things to chance!\n\n";

       } else if (thirdClientAnswer === "C" || thirdClientAnswer === "c"){
           output = "You are most like a TRICKSTER!\nYou prefer the merryment of confusing  people!\nYou can bring great joy or great misery!\nYou are fun but no one ever knows your true motives!\n\n";

       } else {
           output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
       }

    } else if (secondClientAnswer === "C" || secondClientAnswer === "c"){
        thirdClientAnswer = prompt("Which of these metals would you choose? (A, B, or C)\n\nA. Steel\nB. Mithril\nC. Gold");

       if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
           output = "You are most like a TEMPLAR!\nThe sheid is what guides your purpose!\nYou live to protect and never want to see those around you hurt!\n\n";

       } else if (thirdClientAnswer === "B" || thirdClientAnswer === "b"){
           output = "You are most like a GEOMANCER!\nYou draw strength from the Earth and it's minerals!\nYou are most happy digging into problems and learning what you've gathered to press forward in life!\n\n";

       } else if (thirdClientAnswer === "C" || thirdClientAnswer === "c"){
           output = "You are most like a BARTER!\nYou like to exchange information to figure solutions to problems!\nAny idea worth having is worth trading.\nYou usually find the price in your favor!\n\n";

       } else {
           output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
       }

    } else {
        output = "Do you even wanna know what adventurer you would be like? Try answering A, B, or C!\n\n";
    }

  //This logic is used when the first question asked is "C" or "c"
  } else if (firstClientAnswer === "C" || firstClientAnswer === "c"){
      secondClientAnswer = prompt("Which of these would you prefer to eat\n\nA. Grilled Chicken\nB. Oatmeal and Grits\nC. Garden Medley");

    if (secondClientAnswer === "A" || secondClientAnswer === "a"){
      thirdClientAnswer = prompt ("Which of these metals would you choose\n\nA. Steel\nB. Mithril\nC. Gold");

      if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
        output = "You are most like a WANDERER!\nYou don't care what people think of you and you love to nomadic in everything you do!\nChange is your motivator!\n\n";

      } else if (thirdClientAnswer === "B" || thirdClientAnswer === "b"){
          output = "You are most like a PYROMANCER!\nYou are hot headed and passionate!\nEverything you do pushes you do new limits!\nIn essence you are limitless!\n\n";

      } else if (thirdClientAnswer === "C" ||thirdClientAnswer === "c"){
          output = "You are most like a PICKPOCKET!\nYou take information from others and useit to make your own life easier!\nYou have a knack for going unnoticed and you prefer it that way!\n\n";

      } else {
          output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
      }

    } else if (secondClientAnswer === "B"|| secondClientAnswer === "b"){
        thirdClientAnswer = prompt("Which of these metals would you choose? (A, B, or C)\n\nA. Steel B. Mithril C. Gold");

       if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
         output = "You are most like a MONK!\nYou use your fists to protect balance and are uncomfortable when things are out of place!\nYou belive in karmic justice and prefer peaceful resolutions!\n\n";

       } else if (thirdClientAnswer === "B"|| thirdClientAnswer === "b"){
           output = "You are most like a WITCH!\nYOu learn from gathering all of the things around you and throwing them into a big pot of knowledge!\nThis concocted knowledge is your source of power!\n\n";

       } else if (thirdClientAnswer === "C" || thirdClientAnswer === "c"){
           output = "You are most like a MERCHANT!\nYou have a ton of worldy experience and but you don't like to share it unless you can gain something from it!\nYou build your relationships through transactions and are willing to cut a deal to only those closest to you!\n\n";

       } else {
           output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
       }

    } else if (secondClientAnswer === "C" || secondClientAnswer === "c"){
        thirdClientAnswer = prompt("Which of these metals would you choose? (A, B, or C)\n\nA. Steel\nB. Mithril\nC. Gold");

       if (thirdClientAnswer === "A" || thirdClientAnswer === "a"){
           output = "You are most like a PALADIN!\nThe light guides your path!\nYou always believe that justice rules over everything else!\nYou never turn your back on those in need!\n\n";

       } else if (thirdClientAnswer === "B" || thirdClientAnswer === "b"){
           output = "You are most like a SHAMAN!\nYou believe nature can cure all!\nYou use the elements to decide what you are doing on a given day and the weather can affect your mood greatly!\n\n";

       } else if (thirdClientAnswer === "C" || thirdClientAnswer === "c"){
           output = "You are most like a ASSASSIN!\nYou have the most fun exploiting weaknesses in the problems you face.\nYou do not risk uncalculated attacks and are very precise!\n\n";

       } else {
           output = "You're not playing the game correctly!  Try answering A, B, or C!\n\n";
       }

    } else {
        output = "Do you even wanna know what adventurer you would be like? Try answering A, B, or C!\n\n";
    }

  } else {
      output = "Too scared to answer correctly?  Try A, B, or C please!\n\n";
  }

  document.write(output);
}

function Main(){
  //I was concerned that my program was a bit lack luster so I added this little bit to add a bit more to it.
  var luckyNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  var output = "";
  //this pulls a random number from the lucky number array
  luckyNumber = [ Math.floor (Math.random () * luckyNumber.length)];

  //converts the pulled number from the array to a number
  luckyNumber = Number(luckyNumber);

  output = "Your lucky number is: " + luckyNumber +"!";

  adventurerPicker();//calling our adventurerPicker function inside the main so that if people just wanted to see what the main function had it would have all the ugly complexity from above!

  document.write(output);

}

Main();

//What I orginally wanted to do was ask a different question set down each path but to save myself some brain power I kept the same three.
