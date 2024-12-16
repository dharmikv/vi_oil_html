/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ['./pages/*.html',
  './assets/**/*.js'],
  theme: {
    fontFamily: {
      Worksans:["Work Sans","sans-serif"],
      Babes: ["Bebas Neue","sans-serif"],
      Nunito: ["Nunito Sans","sans-serif"],
      Glittery: ["Glittery"],
    },
    colors:{
      transparent:"transparent",
      green:{
        100:"#278D45",
        200:"#0D401C",
        300:"#072010"
      },
      black:"#000000",
      yellow:"#F8C32C",
      brown:"#52320A",
      semiwhite:"#F3F0EB",
      gray:"#6E7673",
      lightgray:"#EEEEEE",
      White:"#FFFFFF",
      innputcolor:"#E8E7E0"
    },
    padding: {
      0: '0px',
      5: '5px',
      6.5:'6.5px',
      8:'8px',
      10: '10px',
      15: '15px',
      16:'16px',
      17:'17px',
      17.5:'17.5px',
      18:'18px',
      19: '19px',
      20: '20px',
      25: '25px',
      27:'27px',
      28:'28px',
      30: '30px',
      35: '35px',
      38:'38px',
      40: '40px',
      45: '45px',
      50: '50px',
      50: '50px',
      55: '55px',
      60: '60px',
      65: '65px',
      70: '70px',
      75: '75px',
      80: '80px',
      85: '85px',
      90: '90px',
      95: '95px',
      100: '100px',
      105: '105px',
      110: '110px',
      115: '115px',
      120: '120px',
    },
    margin: {
      auto: 'auto',
      0: '0px',
      3:'3px',
      5: '5px',
      7:'7px',
      8:'8px',
      10: '10px',
      12:'12px',
      14:'14px',
      15: '15px',
      16: '16px',
      20: '20px',
      24:'24px',
      25: '25px',
      28:'28px',
      30: '30px',
      32: '32px',
      35:'35px',
      40: '40px',
      45: '45px',
      50: '50px',
      50: '50px',
      55: '55px',
      60: '60px',
      64:'64px',
      65: '65px',
      70: '70px',
      75: '75px',
      80: '80px',
      85: '85px',
      90: '90px',
      95: '95px',
      100: '100px',
      120: '120px',
    },
    borderRadius: {
      none: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      5: '5px',
      10:'10px',
      15: '15px',
      30: '30px',
      50: '50px',
      55: '55px',
      100:'100px',
      500: '500px',
      999: '999px',
      "50per":'50%',
      "100per": '100%',
    },
    fontWeight: {
      hairline: 100,
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800:'800',
      900:'900'
    },
    lineHeight:{
      20:'20px',
      content:"22px",
      24:'24px',
      28:'28px',
      32:'32px',
      36:'36px',
      38:'38px',
      40:'40px',
      43:'43px',
      48:'48px',
      52:'52px',
      60:'60px',
      64:'64px',
      72:'72px',
      93:'93px'
    },
    fontSize:{
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      22: '22px',
      24:'24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      42: '42px',
      44: '44px',
      45:'45px',
      46: '46px',
      48: '48px',
      50: '50px',
      52:'52px',
      55 :'55px',
      64:'64px',
      72:'72px',
      80:'80px',
      84:'84px',
    },
    inset: {
      0: '0px',
      5: '5px',
      10: '10px',
      13: '13px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      60: '60px',
      70: '70px',
      75: '75px',
      80: '80px',
      90: '90px',
      100: '100px',
      '50per': '50%',
      full:'100%'
    },
    extend: {
      transform: {
        inherit: 'inherit',
      },
      backgroundImage: {
        "green-gradient":"linear-gradient(180deg, #1C6932 0%, #0D401C 100%)",
        "process-gradient":"linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(243, 240, 235, 0.5) 100%)",
        "video-gradient":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"
      },
      dropShadow:{
        headershadow:"0px 7px 4px rgba(0, 0, 0, 0.25)"
      },
      zIndex:{
        99:'99',
      },
      screens:{
        xxs: { min : "320px" },
        xs: { min : "425px" },
        576 : {min : "576px"},
        sm: { min: "640px" },
        md: { min : "768px" },
        lg: { min : "1024px" },
        xl: { min : "1280px" },
        xxl: { min : "1440px" },
        "3xl" : { min : "1512px"},

        "3xlscreen": { max: "1512px" },
        "2xlscreen": { max: "1440px" },
        xlscreen: { max: "1280px" },
        lgscreen: { max: "1024px" },
        mdscreen: { max: "768px" },
        smscreen: { max: "640px" },
        "576screen" : {max : "576px"},
        xsscreen: { max: "425px" },
        "2xsscreen":{max:"320px"},
      },

      borderWidth: {
        1: '1px',
        2: '2px',
        0: '0px',            
      },

      translate: {
        0: '0px',
        'minus_50': '-50%',
        'plus_50' : '50%',
      },

      opacity:{
        1:"100%",
        14.9:"14.9%"
      }
    },
  },
  plugins: [],
}

