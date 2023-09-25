if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_quiang_rma());
}
function Keyboard_quiang_rma()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_quiang_rma";
  this.KN="Qiang Private Use Area ";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "shift": ["","","@","#","$","%","^","&","*","(",")","_","+","","","","","","","","","","","","","","","","|","","","","","","","","","","","","","","\"","","","","","","","","","","","","","","<",">","","","","","","",""],
    "default": ["","1","2","3","4","5","6","7","8","9","0","-","=","","","","","","","","","","","","","","","","|","","","","","","","","","","","","","","'","","","","","","","","","","","","","","","","/","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KVKL={
  "phone": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\uE155"
              },
              {
                "id": "K_W",
                "text": "\uE145"
              },
              {
                "id": "K_E",
                "text": "\uE16E"
              },
              {
                "id": "K_R",
                "text": "\uE173"
              },
              {
                "id": "K_T",
                "text": "\uE148"
              },
              {
                "id": "K_Y",
                "text": "\uE157"
              },
              {
                "id": "K_U",
                "text": "\uE16D"
              },
              {
                "id": "K_I",
                "text": "\uE16F"
              },
              {
                "id": "K_O",
                "text": "\uE171"
              },
              {
                "id": "K_P",
                "text": "\uE141"
              },
              {
                "id": "K_LBRKT",
                "text": "\uE17E"
              },
              {
                "id": "K_RBRKT",
                "text": "\uE17F"
              },
              {
                "width": "10",
                "id": "T_new_136",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\uE174"
              },
              {
                "id": "K_A",
                "text": "\uE16A"
              },
              {
                "id": "K_S",
                "text": "\uE162"
              },
              {
                "id": "K_D",
                "text": "\uE147"
              },
              {
                "id": "K_F",
                "text": "\uE15A"
              },
              {
                "id": "K_G",
                "text": "\uE14E"
              },
              {
                "id": "K_H",
                "text": "\uE152"
              },
              {
                "id": "K_J",
                "text": "\uE154"
              },
              {
                "id": "K_K",
                "text": "\uE14F"
              },
              {
                "id": "K_L",
                "text": "\uE14C"
              },
              {
                "id": "K_COLON",
                "text": "\uE169"
              },
              {
                "id": "K_QUOTE",
                "text": "'"
              },
              {
                "id": "K_BKSLASH",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "shift",
                "layer": "default",
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\uE15F"
              },
              {
                "id": "K_X",
                "text": "\uE158"
              },
              {
                "id": "K_C",
                "text": "\uE160"
              },
              {
                "id": "K_V",
                "text": "\uE15D"
              },
              {
                "id": "K_B",
                "text": "\uE140"
              },
              {
                "id": "K_N",
                "text": "\uE14A"
              },
              {
                "id": "K_M",
                "text": "\uE143"
              },
              {
                "id": "K_COMMA",
                "text": "\uE179"
              },
              {
                "id": "K_PERIOD",
                "text": "\uE178"
              },
              {
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "width": "10",
                "id": "T_new_162",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "\uE17A"
              },
              {
                "id": "K_2",
                "text": "@"
              },
              {
                "id": "K_3",
                "text": "#"
              },
              {
                "id": "K_4",
                "text": "$"
              },
              {
                "id": "K_5",
                "text": "%"
              },
              {
                "id": "K_6",
                "text": "^"
              },
              {
                "id": "K_7",
                "text": "&"
              },
              {
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_9",
                "text": "("
              },
              {
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\uE177"
              },
              {
                "id": "K_W",
                "text": "\uE166"
              },
              {
                "id": "K_E",
                "text": "\uE16C"
              },
              {
                "id": "K_R",
                "text": "\uE168"
              },
              {
                "id": "K_T",
                "text": "\uE164"
              },
              {
                "id": "K_Y",
                "text": "\uE14D"
              },
              {
                "id": "K_U",
                "text": "\uE167"
              },
              {
                "id": "K_I",
                "text": "\uE170"
              },
              {
                "id": "K_O",
                "text": "\uE15C"
              },
              {
                "id": "K_P",
                "text": "\uE146"
              },
              {
                "id": "K_LBRKT",
                "text": "\uE17C"
              },
              {
                "id": "K_RBRKT",
                "text": "\uE17D"
              },
              {
                "width": "10",
                "id": "T_new_356",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\uE175"
              },
              {
                "id": "K_A",
                "text": "\uE16B"
              },
              {
                "id": "K_S",
                "text": "\uE163"
              },
              {
                "id": "K_D",
                "text": "\uE149"
              },
              {
                "id": "K_F",
                "text": "\uE144"
              },
              {
                "id": "K_G",
                "text": "\uE150"
              },
              {
                "id": "K_H",
                "text": "\uE153"
              },
              {
                "id": "K_J",
                "text": "\uE156"
              },
              {
                "id": "K_K",
                "text": "\uE15B"
              },
              {
                "id": "K_L",
                "text": "\uE14B"
              },
              {
                "id": "K_COLON",
                "text": "\uE169"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "layer": "default",
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\uE161"
              },
              {
                "id": "K_X",
                "text": "\uE159"
              },
              {
                "id": "K_C",
                "text": "\uE165"
              },
              {
                "id": "K_V",
                "text": "\uE15E"
              },
              {
                "id": "K_B",
                "text": "\uE142"
              },
              {
                "id": "K_N",
                "text": "\uE172"
              },
              {
                "id": "K_M",
                "text": "\uE151"
              },
              {
                "id": "K_COMMA",
                "text": "<"
              },
              {
                "id": "K_PERIOD",
                "text": ">"
              },
              {
                "id": "K_SLASH",
                "text": "\uE17B"
              },
              {
                "width": "10",
                "id": "T_new_382",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  },
  "tablet": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\uE155"
              },
              {
                "id": "K_W",
                "text": "\uE145"
              },
              {
                "id": "K_E",
                "text": "\uE16E"
              },
              {
                "id": "K_R",
                "text": "\uE173"
              },
              {
                "id": "K_T",
                "text": "\uE148"
              },
              {
                "id": "K_Y",
                "text": "\uE157"
              },
              {
                "id": "K_U",
                "text": "\uE16D"
              },
              {
                "id": "K_I",
                "text": "\uE16F"
              },
              {
                "id": "K_O",
                "text": "\uE171"
              },
              {
                "id": "K_P",
                "text": "\uE141"
              },
              {
                "id": "K_LBRKT",
                "text": "\uE17E"
              },
              {
                "id": "K_RBRKT",
                "text": "\uE17F"
              },
              {
                "width": "10",
                "id": "T_new_136",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\uE174"
              },
              {
                "id": "K_A",
                "text": "\uE16A"
              },
              {
                "id": "K_S",
                "text": "\uE162"
              },
              {
                "id": "K_D",
                "text": "\uE147"
              },
              {
                "id": "K_F",
                "text": "\uE15A"
              },
              {
                "id": "K_G",
                "text": "\uE14E"
              },
              {
                "id": "K_H",
                "text": "\uE152"
              },
              {
                "id": "K_J",
                "text": "\uE154"
              },
              {
                "id": "K_K",
                "text": "\uE14F"
              },
              {
                "id": "K_L",
                "text": "\uE14C"
              },
              {
                "id": "K_COLON",
                "text": "\uE169"
              },
              {
                "id": "K_QUOTE",
                "text": "'"
              },
              {
                "id": "K_BKSLASH",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\uE15F"
              },
              {
                "id": "K_X",
                "text": "\uE158"
              },
              {
                "id": "K_C",
                "text": "\uE160"
              },
              {
                "id": "K_V",
                "text": "\uE15D"
              },
              {
                "id": "K_B",
                "text": "\uE140"
              },
              {
                "id": "K_N",
                "text": "\uE14A"
              },
              {
                "id": "K_M",
                "text": "\uE143"
              },
              {
                "id": "K_COMMA",
                "text": "\uE179"
              },
              {
                "id": "K_PERIOD",
                "text": "\uE178"
              },
              {
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "width": "10",
                "id": "T_new_162",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "\uE17A"
              },
              {
                "id": "K_2",
                "text": "@"
              },
              {
                "id": "K_3",
                "text": "#"
              },
              {
                "id": "K_4",
                "text": "$"
              },
              {
                "id": "K_5",
                "text": "%"
              },
              {
                "id": "K_6",
                "text": "^"
              },
              {
                "id": "K_7",
                "text": "&"
              },
              {
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_9",
                "text": "("
              },
              {
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\uE177"
              },
              {
                "id": "K_W",
                "text": "\uE166"
              },
              {
                "id": "K_E",
                "text": "\uE16C"
              },
              {
                "id": "K_R",
                "text": "\uE168"
              },
              {
                "id": "K_T",
                "text": "\uE164"
              },
              {
                "id": "K_Y",
                "text": "\uE14D"
              },
              {
                "id": "K_U",
                "text": "\uE167"
              },
              {
                "id": "K_I",
                "text": "\uE170"
              },
              {
                "id": "K_O",
                "text": "\uE15C"
              },
              {
                "id": "K_P",
                "text": "\uE146"
              },
              {
                "id": "K_LBRKT",
                "text": "\uE17C"
              },
              {
                "id": "K_RBRKT",
                "text": "\uE17D"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\uE175"
              },
              {
                "id": "K_A",
                "text": "\uE16B"
              },
              {
                "id": "K_S",
                "text": "\uE163"
              },
              {
                "id": "K_D",
                "text": "\uE149"
              },
              {
                "id": "K_F",
                "text": "\uE144"
              },
              {
                "id": "K_G",
                "text": "\uE150"
              },
              {
                "id": "K_H",
                "text": "\uE153"
              },
              {
                "id": "K_J",
                "text": "\uE156"
              },
              {
                "id": "K_K",
                "text": "\uE15B"
              },
              {
                "id": "K_L",
                "text": "\uE14B"
              },
              {
                "id": "K_COLON",
                "text": "\uE169"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\uE161"
              },
              {
                "id": "K_X",
                "text": "\uE159"
              },
              {
                "id": "K_C",
                "text": "\uE165"
              },
              {
                "id": "K_V",
                "text": "\uE15E"
              },
              {
                "id": "K_B",
                "text": "\uE142"
              },
              {
                "id": "K_N",
                "text": "\uE172"
              },
              {
                "id": "K_M",
                "text": "\uE151"
              },
              {
                "id": "K_COMMA",
                "text": "<"
              },
              {
                "id": "K_PERIOD",
                "text": ">"
              },
              {
                "id": "K_SLASH",
                "text": "\uE17B"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KVER="16.0.141.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 17
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    return r;
  };
}
