class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name,emailID,inputAns1,inputAns2,inputAns3){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name,
      emailID:emailID,
      inputAns1: inputAns1,
      inputAns2:inputAns2,
      inputAns3: inputAns3,
    });
  }
 
}
