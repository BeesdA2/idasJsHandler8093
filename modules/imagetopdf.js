const { handleImageToPdf } = require("../../../../Productie/ImageToPdf/js/convertImageToPdf.js");


async function consumeImageToPdf  (req, res)  {
  
 
  let inputPath      = req.query.inputpath;
  let outputPath      = req.query.outputpath;
   
 
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeImageToPdf inputPath: ' + inputPath + ' outputPath: ' + outputPath);
  
   
  var resolve =  await handleImageToPdf(inputPath, outputPath);
  
  return resolve;	
  
};

module.exports = {
  consumeImageToPdf: consumeImageToPdf
  };