
const { handleHandtekeningPlaatsen } = require("../../../HandtekeningInPDF/js/consumeWebserviceHandtekening.js");



async function consumeHandtekeningInPDF  (req, res)  {
  
 
  let origineelDocument = req.query.origineelDocument;
  let handTekening      = req.query.handTekeningPNG;
  let xxText            = req.query.xxText;
  let yyText            = req.query.yyText;
  let proefrit          = req.query.proefrit;
   
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeHandtekeningInPDF origineelDocument: ' +origineelDocument + ' handTekening: ' + handTekening + ' xxText: ' +xxText + ' yyText: ' + yyText + ' proefrit: ' + proefrit );
 
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleHandtekeningPlaatsen (origineelDocument,handTekening, xxText, yyText, proefrit);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

module.exports = {
  consumeHandtekeningInPDF: consumeHandtekeningInPDF,
  };