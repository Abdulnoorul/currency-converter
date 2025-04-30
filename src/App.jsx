import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currency, setCurrency] = useState({});
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [fromFlag, setFromFlag] = useState('');
  const [toFlag, setToFlag] = useState('');

  // Map currency codes to country codes for flags
  const currencyToCountry = {
  aed:'AE',
  afn:'AF',
  all:'AL',
  amd:'AM',
  ang:'AW',
  ang:'CW',
  ang:'SX',
  aoa:'AO',
  ars:'AR',
  aud:'AU',
  aud:'KI',
  aud:'NR',
  aud:'NF',
  aud:'TV',
  awg:'AR',
  azn:'AZ',
  bam:'BA',
  bbd:'BB',
  bdt:'BD',
  bgn:'BG',
  bhd:'BH',
  bif:'BI',
  bmd:'BM',
  bnd:'BN',
  bob:'BO',
  brl:'BR',
  bsd:'BS',
  btn:'BT',
  bwp:'BW',
  byn:'BY',
  bzd:'BZ',
  cad:'CA',
  cdf:'CD',
  chf:'CH',
  chf:'LI',
  clp:'CL',
  cny:'CN',
  cop:'CO',
  crc:'CR',
  cup:'CU',
  cve:'CV',
  czk:'CZ',
  djf:'DJ',
  dkk:'DK',
  dkk:'FO',
  dkk:'GL',
  dop:'DO',
  dzd:'DZ',
  egp:'EG',
  ern:'ER',
  etb:'ET',
  eur:'AD',
  eur:'AT',
  eur:'BE',
  eur:'BL',
  eur:'HR',
  eur:'CY',
  eur:'EE',
  eur:'FI',
  eur:'FR',
  eur:'GF',
  eur:'GP',
  eur:'DE',
  eur:'GR',
  eur:'IE',
  eur:'IT',
  eur:'LV',
  eur:'LT',
  eur:'LU',
  eur:'MC',
  eur:'MT',
  eur:'MQ',
  eur:'ME',
  eur:'NL',
  eur:'PM',
  eur:'PT',
  eur:'RE',
  eur:'MF',
  eur:'SM',
  eur:'SK',
  eur:'SI',
  eur:'ES',
  eur:'YT',
  fjd:'FJ',
  fkp:'FK',
  gbp:'GB',
  gbp:'GG',
  gbp:'IM',
  gbp:'JE',
  gel:'GE',
  ghs:'GH',
  gip:'GI',
  gmd:'GM',
  gnf:'GN',
  gtq:'GT',
  gyd:'GY',
  hkd:'HK',
  hnl:'HN',
  htg:'HT',
  huf:'HU',
  idr:'ID',
  ils:'IL',
  inr:'IN',
  iqd:'IQ',
  irr:'IR',
  isk:'IS',
  jmd:'JM',
  jod:'JO',
  jpy:'JP',
  kes:'KE',
  kgs:'KG',
  khr:'KH',
  kmf:'KM',
  kpw:'KP',
  krw:'KR',
  kwd:'KW',
  kyd:'KY',
  kzt:'KZ',
  lak:'LA',
  lbp:'LB',
  lkr:'LK',
  lrd:'LR',
  lsl:'LS',
  lyd:'LY',
  mad:'MA',
  mdl:'MD',
  mga:'MG',
  mwk:'MW',
  mmk:'MM',
  mnt:'MN',
  mop:'MO',
  mru:'MR',
  mur:'MU',
  mvr:'MV',
  mxn:'MX',
  myr:'MY',
  mzn:'MZ',
  nad:'NA',
  ngn:'NG',
  nio:'NI',
  nok:'NO',
  npr:'NP',
  nzd:'CK',
  nzd:'NU',
  nzd:'NZ',
  nzd:'PN',
  nzd:'TK',
  omr:'OM',
  pab:'PA',
  pen:'PE',
  pgk:'PG',
  php:'PH',
  pkr:'PK',
  pln:'PL',
  pyg:'PY',
  qar:'QA',
  ron:'RO',
  rsd:'RS',
  rub:'RU',
  rwf:'RW',
  sar:'SA',
  sbd:'SB',
  scr:'SC',
  sdg:'SD',
  sek:'SE',
  sgd:'SG',
  shp:'SH',
  sll:'SL',
  sos:'SO',
  srd:'SR',
  ssp:'SS',
  stn:'ST',
  svr:'SV',
  syp:'SY',
  szl:'SZ',
  thb:'TH',
  tjs:'TJ',
  tmt:'TM',
  tnd:'TN',
  top:'TO',
  try:'TR',
  ttd:'TT',
  twd:'TW',
  tzs:'TZ',
  uah:'UA',
  ugx:'UG',
  usd:'AS',
  usd:'VG',
  usd:'IO',
  usd:'EC',
  usd:'SV',
  usd:'GU',
  usd:'MH',
  usd:'FM',
  usd:'MP',
  usd:'PW',
  usd:'PR',
  usd:'TL',
  usd:'TC',
  usd:'US',
  usd:'VI',
  uyu:'UY',
  uzs:'UZ',
  ves:'VE',
  vnd:'VN',
  vuv:'VU',
  wst:'WS',
  xaf:'CM',
  xaf:'CF',
  xaf:'TD',
  xaf:'CG',
  xaf:'GQ',
  xaf:'GA',
  xcd:'AI',
  xcd:'AG',
  xcd:'DM',
  xcd:'GD',
  xcd:'MS',
  xcd:'KN',
  xcd:'LC',
  xcd:'VC',
  xof:'BJ',
  xof:'BF',
  xof:'CI',
  xof:'GW',
  xof:'ML',
  xof:'NE',
  xof:'SN',
  xof:'TG',
  xpf:'NC',
  xpf:'PF',
  xpf:'WF',
  yer:'YE',
  zar:'ZA',
  zmw:'ZM',
  zwl:'ZW',

  
  };

  // Fetch currency list
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .then((response) => response.json())
      .then((data) => {
        setCurrency(data);
      })
  }, []);

  // Update flag when fromCurrency changes
  useEffect(() => {
    if (fromCurrency && currencyToCountry[fromCurrency]) {
      setFromFlag(`https://flagsapi.com/${currencyToCountry[fromCurrency]}/flat/64.png`);
    } else {
      setFromFlag(''); // Clear flag if no currency is selected
    }
  }, [fromCurrency]);

  // Update flag when toCurrency changes
  useEffect(() => {
    if (toCurrency && currencyToCountry[toCurrency]) {
      setToFlag(`https://flagsapi.com/${currencyToCountry[toCurrency]}/flat/64.png`);
    } else {
      setToFlag(''); // Clear flag if no currency is selected
    }
  }, [toCurrency]);

  // Convert currency
  const convertCurrency = () => {
    if (!fromCurrency || !toCurrency || !fromValue) return;
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data[fromCurrency][toCurrency];
        setToValue((fromValue * rate).toFixed(2));
      })
  };

  // Handle input change with validation
  const handleFromValueChange = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setFromValue(value);
    }
  };

  return (
    <div className="main">
      <h1 id="heading">Xact Rate</h1>
      <div className="card">
        <div className="from">
          <h1 className="head">From</h1>
          <div className="calculate">
            <select
              className="select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value.toLowerCase())}
            >
              <option value="">Choose here</option>
              {Object.entries(currency).map(([key, value]) => (
                <option key={key} value={key}>
                  {value} ({key.toUpperCase()})
                </option>
              ))}
            </select>
            
            <input
              className="inp"
              type="text"
              value={fromValue}
              onChange={handleFromValueChange}
            />
            {fromFlag && <img className="fla" src={fromFlag} alt="flag" style={{ width: '50px', height:'50px'}} />}
          </div>
        </div>

        <img src="./money.png" alt="" id='btn' onClick={convertCurrency}/>

        <div className="from">
          <h1 className="headT">To</h1>
          <div className="calculate">
            <select
              className="select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value.toLowerCase())}
            >
              <option value="">Choose here</option>
              {Object.entries(currency).map(([key, value]) => (
                <option key={key} value={key}>
                  {value} ({key.toUpperCase()})
                </option>
              ))}
            </select>
            
            <input className="inp" type="text" value={toValue} disabled />
            {toFlag && <img className="fla" src={toFlag} alt="flag" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;