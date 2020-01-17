class Form {
  constructor() {
    
  }

  display(){
    
    var title = createElement('h2');
    title.html(" C35A: A SURVEY TO BRING ABOUT CHANGE");
    title.position(50,20);
    
    var inputName= createInput("Name");
    var inputEmail = createInput("Email ID");
    var button = createButton("Enter");

    inputName.position(50,125);
    inputEmail.position(50,150);
    button.position(50,490);
    
    text = createElement('h3','Do you segregate garbage at home?');
    text.position(50, 175);
    var inputAns1 = createInput("");
    inputAns1.size(150);
    inputAns1.position(50, 225);
  
    text = createElement('h3', 'Do you feel local admin should be supported by Govt in handling garbage?');
    text.position(50, 230);
    var inputAns2 = createInput("");
    inputAns2.size(100);
    inputAns2.position(50, 300);
  
    text = createElement('h3', 'Do you feel plastic recycling should be a Nationl Mission?');
    text.position(50, 305);
    var inputAns3 = createInput("");
    inputAns3.size(100);
    inputAns3.position(50, 375);
  
    text = createElement('h3', 'Do you feel Govt must bring latest technology to solve this issue?');
    text.position(50, 380);
    var inputAns4 = createInput("");
    inputAns4.size(100);
    inputAns4.position(50, 450);
   
  //  var  ans1=inputAns1.value();
  //  var  ans2=inputAns2.value();
  //  var  ans3=inputAns3.value();
  //  var  ans4=inputAns4.value();
  
    button.mousePressed(function(){
      greet();
      votersCount+=1;
      inputName.hide();
      inputEmail.hide();
      button.hide();
  
      var name = inputName.value();
      var emailID = inputEmail.value();
      var ans1=inputAns1.value();
      var ans2=inputAns2.value();
      var ans3=inputAns3.value();
      var ans4=inputAns4.value();
  
      voter.update(name,emailID,ans1,ans2,ans3,ans4);
      voter.updateCount(votersCount);
    }) ; 
      function greet(){
      var greeting = createElement('h3'); 
      greeting.html("THANK YOU .." + name + '!');
      greeting.position(50,480);
      }
  }    
}