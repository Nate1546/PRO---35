class Voter {
  constructor(){}

  getCount(){
    var votersCountRef = database.ref('votersCount');
    votersCountRef.on("value",function(data){
    votersCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
    votersCount: count
    });
  }

  update(name,emailID,ans1,ans2,ans3,ans4){
    var voterIndex = "voter" + votersCount;
    database.ref(voterIndex).set({
     name:name,
     emailID:emailID,
     ans1:ans1,
     ans2:ans2,
     ans3:ans3,
     ans4:ans4
  
    });
  }
}