const { molliePayments } = require("../../../Mollie/js/createPayment.js");
var express = require('express');

async function getMollie (req, res) {
  
  var setletter = '';
  var filiaal='';
  var ordernr  = '';
  var logging = '';
  
  if (req.query.setletter !== 'undefined')
  {
   setletter = req.query.setletter;
  }
  if (req.query.filiaal !== 'undefined')
  {
   filiaal   = req.query.filiaal;
  }
  if (req.query.ordernr !== 'undefined')
  {
   ordernr   = req.query.ordernr;
  }
  
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' getMollie setletter: ' +setletter + ' filiaal: ' + filiaal + ' ordernummer: '+ordernr  + ' logging: ' +logging );
 
  
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve = await molliePayments(setletter, filiaal, ordernr);
  //res.send('Mollie is uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  return resolve;
};

module.exports = {
  getMollie: getMollie
  };