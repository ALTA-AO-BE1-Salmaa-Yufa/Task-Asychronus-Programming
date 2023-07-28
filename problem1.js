function jajanBoba(uang, callback) {
    const bobaPrice = 5000;
    const bobaTime = 5000;
  
    setTimeout(() => {
      if (uang >= bobaPrice) {
        console.log(`kamu jajan boba dengan harga Rp. ${bobaPrice}`);
        uang -= bobaPrice;
        console.log(`sisa uang kamu Rp. ${uang}`);
        callback(uang);
      } else {
        console.log(`Maaf uang kamu belum cukup untuk membeli boba`);
        console.log(`Sisa uang kamu sebesar Rp. ${uang}`);
      }  
    }, bobaTime);
  }
  
  function jajanSeblak(uang) {
    const seblakPrice = 8000;
    const seblakTime = 9000;
  
    setTimeout(() => {
      if (uang >= seblakPrice) {
        console.log(`kamu jajan seblak dengan harga Rp. ${seblakPrice}`);
        uang -= seblakPrice;
        console.log(`sisa uang kamu sebesar Rp. ${uang}`);
      } else {
        console.log(`Maaf uang kamu belum cukup untuk membeli seblak`);
        console.log(`Sisa uang kamu sebesar Rp. ${uang}`);
      }
    }, seblakTime);
  }
  
  jajanBoba(20000, jajanSeblak);
  jajanBoba(10000, jajanSeblak);