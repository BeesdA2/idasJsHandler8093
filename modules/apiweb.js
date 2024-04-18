const { handleConsumeWebservice } = require("../../../ApiWeb/js/consumeWebservice.js");
const { handleConsumeWebserviceApiWeb } = require("../../../ApiWeb/js/consumeWebserviceApiWeb.js");

async function consumeApiWeb  (req, res)  {
  
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
   
  var d = new Date();
  var datetime = d.toLocaleString(); 
   
  console.log(datetime + ' consumeApiWeb setletter: ' +setletter + ' guid: ' + guid +' applicatie: ' + applicatie ); 
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleConsumeWebservice(setletter, guid, applicatie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeWebserviceApiWeb  (req, res)  {
  
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
   
  var d = new Date();
  var datetime = d.toLocaleString(); 	
  console.log(datetime + ' consumeWebserviceApiWeb setletter: ' +setletter + ' guid: ' + guid +' applicatie: ' + applicatie );
    
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleConsumeWebserviceApiWeb(setletter, guid, applicatie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

module.exports = {
  consumeApiWeb: consumeApiWeb,
  consumeWebserviceApiWeb: consumeWebserviceApiWeb
  };