
db.collection("haberler")
  .get().then((snapshot) => {
    console.log("Veri alındı:", snapshot.docs[0].data());
    
      
      
    });
  