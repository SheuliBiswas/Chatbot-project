// These are words/phrases the user could type in

const trigger = [
    ["hii","hello"],
    ["who are you"],
    ["can you help me"],
    ["what is your company name"],
    ["tell me something about your company"],
    ["tell me visiting time of your company"]
  ];
  
  // These are bot responses, paired in order with the above 'trigger' phrases
  
  const reply = [
    ["Hello"],
    ["I am a chatbot"],
    ["Yes"],
    ["BigCo"],
    ["BigCo is a large E-Commerce Company"],
    ["Mon-Fri 1:00 p.m to 4:00 p.m"]
  ];
  
  // This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases
  
  const alternative = [
    "Try again",
    "I'm listening..."
  ];


// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ["Please stay home"];

  module.exports = {trigger, reply, alternative, coronavirus};
