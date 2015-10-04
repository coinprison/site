'use strict';

var tempData = [
{"date":"1-Oct-15","alias1":"Gemcoin","alias2":"Alliance Finance Group (AFG)","alias3":"United States Fine Investment Arts (USFIA)","alias4":"Steve Chen","alias5":"","alias6":"","profession":"","status":"Ongoing","fine":"","agency1":"SEC","agency2":"United States Marshals Service","agency3":"Arcadia Police Department","location":"","charge1":"Fraud","charge2":"","charge3":"","charge4":"","link1":"https://www.sec.gov/news/pressrelease/2015-227.html","link2":"http://arstechnica.com/tech-policy/2015/10/feds-raid-cryptocurrency-startup-accused-of-scamming-32m-from-investors/","link3":""},
{"date":"27-Sep-15","alias1":"Variety Jones","alias2":"Thomas Clark","alias3":"Plural of Mongoose","alias4":"","alias5":"","alias6":"","profession":"","status":"Ongoing","fine":"","agency1":"FBI","agency2":"","agency3":"","location":"","charge1":"No charges","charge2":"","charge3":"","charge4":"","link1":"http://motherboard.vice.com/read/variety-jones-a-corrupt-fbi-agent-is-hunting-me-so-im-turning-myself-in","link2":"http://myplanetganja.com/viewtopic.php?f=13&t=11022&p=144158&sid=418d3c2fc2f6121742d553960ceb003a#p144158","link3":""},
{"date":"24-Sep-15","alias1":"Tera Exchange","alias2":"TeraExchange LLC","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"","agency1":"CFTC","agency2":"","agency3":"","location":"","charge1":"Failing to Enforce Prohibitions on Wash Trading and Prearranged Trading in Bitcoin Swap","charge2":"","charge3":"","charge4":"","link1":"http://www.cftc.gov/PressRoom/PressReleases/pr7240-15","link2":"","link3":""},
{"date":"17-Sep-15","alias1":"Coinflip, Inc","alias2":"Derivabit","alias3":"Francisco Riordan","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"","agency1":"CFTC","agency2":"","agency3":"","location":"","charge1":"Illegally Offering Bitcoin Options, Operating a Facility for Trading or Processing of Swaps without Registering","charge2":"","charge3":"","charge4":"","link1":"http://www.cftc.gov/PressRoom/PressReleases/pr7231-15","link2":"","link3":""},
{"date":"16-Sep-15","alias1":"Bifinex","alias2":"","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Unconfirmed","fine":"","agency1":"CFTC","agency2":"","agency3":"","location":"","charge1":"Illegally Offering Bitcoin Derivatices","charge2":"","charge3":"","charge4":"","link1":"https://www.reddit.com/r/BitcoinMarkets/comments/3l82c5/email_from_cftc_regarding_bitfinex_trading/","link2":"","link3":""},
{"date":"28-Aug-15","alias1":"MyCoin","alias2":"Lu Kuan-wei","alias3":"Chen Yun-fei","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"Criminal Investigation Bureau in Taipei","agency2":"","agency3":"","location":"","charge1":"Ponzi Scheme","charge2":"","charge3":"","charge4":"","link1":"http://insidebitcoins.com/news/alleged-scammers-behind-bitcoin-exchange-ponzi-mycoin-arrested-in-taiwan/34571","link2":"","link3":""},
{"date":"18-Aug-15","alias1":"Josh Garza","alias2":"Carlos R. Garza","alias3":"GAW Miners","alias4":"","alias5":"","alias6":"","profession":"","status":"Ongoing","fine":"","agency1":"SEC","agency2":"","agency3":"","location":"","charge1":"Subpeona","charge2":"","charge3":"","charge4":"","link1":"https://www.sec.gov/litigation/litreleases/2015/lr23322.htm","link2":"","link3":""},
{"date":"1-Aug-15","alias1":"Mark Karpeles","alias2":"","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"Tokyo Metropolitan Police","agency2":"","agency3":"","location":"","charge1":"Embezzlement","charge2":"","charge3":"","charge4":"","link1":"http://www.wsj.com/articles/japanese-police-arrest-mark-karpeles-of-collapsed-bitcoin-exchange-mt-gox-1438393669","link2":"","link3":""},
{"date":"23-Jul-15","alias1":"Trendon T. Shavers","alias2":"BTCS","alias3":"Bitcoin Savings and Trust","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"","agency1":"SEC","agency2":"United States Attorney's Office for the Southern District of New York","agency3":"","location":"","charge1":"Securities Fraud","charge2":"Wire Fraud","charge3":"Ponzi scheme","charge4":"","link1":"http://www.sec.gov/News/PressRelease/Detail/PressRelease/1370539730583","link2":"","link3":""},
{"date":"21-Jul-15","alias1":"Yuri Lebedev","alias2":"Coin.mx","alias3":"Anthony R. Murgio","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"FBI","agency2":"","agency3":"","location":"","charge1":"Money Laundering","charge2":"","charge3":"","charge4":"","link1":"https://www.fbi.gov/newyork/press-releases/2015/manhattan-u.s.-attorney-announces-charges-against-two-florida-men-for-operating-an-underground-bitcoin-exchange","link2":"","link3":""},
{"date":"17-Jun-15","alias1":"Sandhill Exchange","alias2":"","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"","agency1":"SEC","agency2":"","agency3":"","location":"","charge1":"Illegal Offering of Security-Based Swaps","charge2":"","charge3":"","charge4":"","link1":"http://www.sec.gov/news/pressrelease/2015-123.html","link2":"","link3":""},
{"date":"3-Jun-15","alias1":"Erik T. Voorhees","alias2":"SatoshiDICE","alias3":"FeedZeBirds","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"50,000.00","agency1":"SEC","agency2":"","agency3":"","location":"","charge1":"Offering Unregistered Securities","charge2":"","charge3":"","charge4":"","link1":"http://www.sec.gov/News/PressRelease/Detail/PressRelease/1370541972520","link2":"https://www.sec.gov/litigation/admin/2014/33-9592.pdf","link3":""},
{"date":"5-May-15","alias1":"Ripple Labs","alias2":"","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"700,000","agency1":"U.S. Attorney's Office","agency2":"IRS Criminal Investigation","agency3":"","location":"FinCEN","charge1":"Fail to register with FinCEN","charge2":"Lack of AML Program","charge3":"Failed to file SARs","charge4":"","link1":"http://www.justice.gov/opa/pr/ripple-labs-inc-resolves-criminal-investigation","link2":"","link3":""},
{"date":"27-Apr-15","alias1":"Seals with Clubs","alias2":"Bryan Micon","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"","agency1":"FBI","agency2":"Nevada AG","agency3":"","location":"","charge1":"Operating an Unlicensed Interactive Gaming System","charge2":"","charge3":"","charge4":"","link1":"http://www.coindesk.com/nevada-regulators-bitcoin-poker-operator-arrest/","link2":"","link3":""},
{"date":"20-Apr-15","alias1":"Randall Charles Tucker","alias2":"Bitcoin Baron","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"FBI","agency2":"","agency3":"","location":"","charge1":"","charge2":"","charge3":"","charge4":"","link1":"http://www.theopenledger.com/bitcoin-baron-busted-in-arizona/","link2":"","link3":""},
{"date":"30-Mar-15","alias1":"Carl M. Force","alias2":"","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"","agency1":"FBI","agency2":"","agency3":"","location":"","charge1":"Money Laundering","charge2":"Wire Fraud","charge3":"","charge4":"","link1":"http://www.justice.gov/opa/pr/former-federal-agents-charged-bitcoin-money-laundering-and-wire-fraud","link2":"","link3":""},
{"date":"30-Mar-15","alias1":"Shaun W. Bridges","alias2":"","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Settled","fine":"","agency1":"FBI","agency2":"","agency3":"","location":"","charge1":"Money Laundering","charge2":"Wire Fraud","charge3":"","charge4":"","link1":"http://www.justice.gov/opa/pr/former-federal-agents-charged-bitcoin-money-laundering-and-wire-fraud","link2":"","link3":""},
{"date":"23-Feb-15","alias1":"Alex Green","alias2":"Ryan Kennedy","alias3":"Chelsea Hopkins","alias4":"Moolah","alias5":"MintPal.com","alias6":"","profession":"","status":"Prison","fine":"","agency1":"UK Police","agency2":"","agency3":"","location":"","charge1":"?","charge2":"","charge3":"","charge4":"","link1":"http://syscoin.org/syscoin-update-focusing-on-blockmarket-and-platform/","link2":"","link3":""},
{"date":"19-Dec-14","alias1":"Charie Shrem","alias2":"Robert Faiella","alias3":"BTCKing","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"FinCEN","agency2":"","agency3":"","location":"","charge1":"Unlicensed money transmission","charge2":"","charge3":"","charge4":"","link1":"http://www.justice.gov/usao-sdny/pr/former-ceo-bitcoin-exchange-company-sentenced-manhattan-federal-court-two-years-prison","link2":"","link3":""},
{"date":"8-Dec-14","alias1":"Ethan Burnside","alias2":"BTCT Co","alias3":"LTC Global","alias4":"Litecoin Global Exchange","alias5":"","alias6":"","profession":"","status":"Settled","fine":"68,000","agency1":"SEC","agency2":"","agency3":"","location":"","charge1":"Registration violations","charge2":"","charge3":"","charge4":"","link1":"http://www.sec.gov/News/PressRelease/Detail/PressRelease/1370543655716","link2":"","link3":""},
{"date":"6-Nov-14","alias1":"Blake Benthall","alias2":"","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"FBI","agency2":"","agency3":"","location":"","charge1":"","charge2":"","charge3":"","charge4":"","link1":"http://www.justice.gov/usao-sdny/pr/operator-silk-road-20-website-charged-manhattan-federal-court","link2":"","link3":""},
{"date":"13-May-14","alias1":"Michel Espinoza","alias2":"Pascal Reid","alias3":"","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"FBI","agency2":"Secret Service","agency3":"","location":"","charge1":"Money Laundering","charge2":"","charge3":"","charge4":"","link1":"https://www.fbi.gov/miami/press-releases/2014/fifty-south-florida-residents-charged-as-part-of-nationwide-coordinated-takedown-by-medicare-fraud-strike-force-operations","link2":"https://localbitcoins.com/accounts/profile/michelhack/","link3":""},
{"date":"25-Oct-13","alias1":"Ross William Ulbricht","alias2":"Silk Road","alias3":"Dread Pirate Roberts","alias4":"","alias5":"","alias6":"","profession":"","status":"Prison","fine":"","agency1":"FBI","agency2":"DEA","agency3":"","location":"Homeland Security Investigations","charge1":"","charge2":"","charge3":"","charge4":"","link1":"https://www.fbi.gov/newyork/press-releases/2013/manhattan-u.s.-attorney-announces-seizure-of-additional-28-million-worth-of-bitcoins-belonging-to-ross-william-ulbricht-alleged-owner-and-operator-of-silk-road-website","link2":"","link3":""}
];

angular.module('prisonApp')
  .service('api', function($q) {
    this.getEvents = function() {
        return $q(function(resolve) {
            resolve(tempData);
        });
    };
  });
