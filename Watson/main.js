var watson = require('watson-developer-cloud');
 
var concept_insights = watson.concept_insights({
  username: 'e0e62543-0918-407e-bebb-514c2445e343',
  password: 'atUTkpDRbHI0',
  version: 'v2'
});
 
var params = {
  graph: '/graphs/wikipedia/en-20120601',
  text: 'Oh my god Based God!\r\nYou could fuck my bitch, Based God!\r\nYou swag to the maxiumum\r\nSwag 100K, 100 trillion! Oh god damn Based God!\r\n\r\n[Hook]\r\nHopped up in my car (swag!) then I drop my roof\r\nWet like wonton soup. That\'s just how I do (swag!)\r\nThen I park my car, then I fuck your bitch\r\nEat that wonton soup, wet like wonton soup\r\n\r\n[Verse 1]\r\nEat the cake like Annie Mae\r\nYoung Based God and I been doin my thing\r\nTake my shirt off and the girls go insane\r\n4 diamond rings, 2 big-ass chains\r\nEat that wonton soup I got the cash like chang chang chang\r\nBitches suck my dick because I cum like 36 ways\r\nAK-47 leave that bitch with no fucking aim\r\nCall my main bitch and she stay giving me brain\r\nPut that bitch to shame, violate that brain\r\nYoung Based God dope my bitch like I\'m cocaine\r\nBitches snort my ring, that crackpipe like my chain\r\nFound a dope man, I ride that bitch like Ace of Spades\r\nHo don\'t play that game!\r\nI\'m rapping not for the fame\r\nI almost went to jail for like 500 days!\r\nBitch don\'t give no fuck, that\'s why I fuck her in the face\r\nFuck you suckers\' heads then I ask her what\'s her name\r\nBased God\r\n\r\n[Hook]\r\n\r\n[Verse 2]\r\nSuckers stay talking on them Internet comments\r\nMad cause I\'m most wanted like Osama\r\nPlease bitch, you haters don\'t got no felonies\r\nYoung BasedGod flex 10 armed robberies\r\nYoung BasedGod been breaking & entering\r\nYoung BasedGod ride hot when you bought it\r\n30 on my dick on that court like Spalding\r\nBitches suck my dick because I look like JK Rowling\r\nHarry Pot my bitch, I fuck my ho, her brain is awesome\r\nFuck my damn ring, bitch I\'m paying what it\'s costing\r\nJewelry is awesome, BasedGod is gorgeous\r\nGoing down to Georgia to fuck my big bitch\r\nMane fuck her cause she gorgeous\r\nYoung Based God stay posted in the fortress\r\nFuck my main bitch then I dump her in the forest\r\nYou niggas know I got money, bitch\r\n100 thousand\r\nBased God, nigga\r\n\r\n[Hook]\r\n\r\n[Verse 3]\r\nDamn I look good, so I\'m running for the mayor\r\nYoung Based God got hoes in different flavors\r\nYou know I\'m fucking two and I ran like Jason Taylor\r\nHoes on my dick cause I look like Frasier\r\nAnd Andy Milonakis. Bitch, I\'m Johnny Cochran\r\nSmooth with that chopper but I\'m gone like my father\r\nHo suck my dick cause I took her to the Opera\r\nBitch suck my nuts cause I wear nice watches\r\nI\'m looking like an Ostrich, black like I\'m gothic\r\nHoes suck my dick cause I laugh when they shopping\r\nYoung Based God gives a fuck about your problems\r\nLabel left me dead and they gave me no options\r\nFuck you rap niggers cause you scared of your damn self\r\nBitch suck my dick cause it\'s good for her damn health\r\nYoung Based God kill a bitch with my ring\r\nYoung Based God got the world insane, Based World'
};
 
// Retrieve the concepts for input text 
concept_insights.graphs.annotateText(params, function(err, res) {
  if (err)
    console.log(err);
  else {
    console.log(JSON.stringify(res, null, 2));
  }
});
