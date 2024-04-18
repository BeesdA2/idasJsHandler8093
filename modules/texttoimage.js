const { handleTextToImageNow } = require("../../../../Productie/TextToImage/js/handleTextToImage.js");
const { handleResizeImage } = require("../../../../Productie/TextToImage/js/handleTextToImage.js");


async function consumeTextToImage  (req, res)  {
  
 
  let file      = req.query.file;
  let kenteken  = req.query.kenteken;
  let datumtijd = req.query.datumtijd;
  let naw1      = req.query.naw1;
  let naw2      = req.query.naw2;
  let naw3      = req.query.naw3;
 
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeTextToImage file: ' +file + ' kenteken: ' + kenteken  + ' datum tijd: ' +datumtijd  + 'naw 1: ' + naw1 +' naw 2: ' + naw2 + ' naw 3: ' +naw3 );
  
   
  var resolve =  await handleTextToImageNow(file, kenteken, datumtijd, naw1, naw2, naw3);
  
  return resolve;	
  
};

async function consumeResizeImage  (req, res)  {
// console.log('consumeResizeImage');
 
  let file      = req.query.file;
  let maxsize   = req.query.maxsize;
  
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeResizeImaage file: ' +file + ' maxSize: ' + maxsize );
  
   
  var resolve =  await handleResizeImage(file, maxsize);
  
  return resolve;	
  
};


module.exports = {
  consumeTextToImage: consumeTextToImage,
  consumeResizeImage: consumeResizeImage
  };