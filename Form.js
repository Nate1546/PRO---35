class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2');
    title.html("SURVEY OF OPINION");
    title.position(130, 20);
    
    var inputName = createInput("Name");
    var inputMailID = createInput("E Mail ID");    
    var button = createButton('Survey');
    var Quest1 = createElement ('h5');
    Quest1.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor? - YES OR NO" );
    var inputAns1 = createInput("Answer1"); 
    var Quest2 = createElement ('h5');
    Quest2.html("Would you be willing to contribute a small amount every month for such a program? - YES OR NO");
    var inputAns2 = createInput("Answer2"); 
    var Quest3 = createElement ('h5');
    Quest3.html("How much per month would you be willing to pay in Rs? 500 OR 1000  or MORE");
    var inputAns3 = createInput("Answer3"); 

    inputName.position(100, 100);
    inputMailID.position(100, 160);    
    Quest1.position(100, 180);
    inputAns1.position(100, 220);
    Quest2.position(100, 240);
    inputAns2.position(100, 280);
    Quest3.position(100, 300);
    inputAns3.position(100, 340);
    button.position(250, 480);

    button.mousePressed(function(){
   
      inputName.hide();
      inputMailID.hide();
      Quest1.hide();    
      Quest2.hide();      
      Quest3.hide();     
      button.hide();
      inputAns1.hide(); 
      inputAns2.hide();
      inputAns3.hide();
      
      var name = inputName.value();
      var emailID = inputMailID.value();
      var inputAns1 = inputAns1.value();
      var inputAns2 = inputAns2.value();
      var inputAns3 = inputAns3.value();     

      playerCount+=1;
      player.update(name,emailID);
      player.update(inputAns1,inputAns2,inputAns3);
      player.updateCount(playerCount);      
      var greeting = createElement('h1');
      greeting.html("Thank You for the feed back " + name ) ;     
      greeting.position(250, 450);
     
     
    });
  }
}
