if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_tai_yo());
}
function Keyboard_tai_yo()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_tai_yo";
  this.KN="Tai Yo 1";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "shift": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","𞛍","","𞛳","𞛵","","","𞛊","","𞛔","𞛕","{","}","|","","","","𞛃","𞛟","𞛝","𞛞","𞛢","","𞛲","𞛄","𞛾",":","\"","","","","","","","","𞛿","𞛴","","","","","𞛄","<",">","","","","","",""],
    "default": ["`","𞛧","𞛮","𞛭","𞛫","𞛪","𞛤","𞛨","𞛩","𞛋","𞛬","-","=","","","","𞛌","𞛎","𞛋","𞛥","𞛡","𞛠","𞛉","𞛗","𞛑","𞛒","[","]","\\","","","","𞛂","𞛇","𞛀","𞛁","𞛣","𞛦","𞛚","𞛛","𞛓","𞛘",";","","","","","","","𞛜","𞛙","𞛐","𞛼","𞛽","𞛏","𞛛","𞛅","、","。","","","","","",""]
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
  this.KS=1;
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "\uD839\uDECC"
              },
              {
                "id": "K_W",
                "text": "\uD839\uDECE"
              },
              {
                "id": "K_E",
                "text": "\uD839\uDECB"
              },
              {
                "id": "K_R",
                "text": "\uD839\uDEE5"
              },
              {
                "id": "K_T",
                "text": "\uD839\uDEE1"
              },
              {
                "id": "K_Y",
                "text": "\uD839\uDEE0"
              },
              {
                "id": "K_U",
                "text": "\uD839\uDEC9"
              },
              {
                "id": "K_I",
                "text": "\uD839\uDED7"
              },
              {
                "id": "K_O",
                "text": "\uD839\uDED1"
              },
              {
                "id": "K_P",
                "text": "\uD839\uDED2"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "\uD839\uDEC2"
              },
              {
                "id": "K_S",
                "text": "\uD839\uDEC7"
              },
              {
                "id": "K_D",
                "text": "\uD839\uDEC0"
              },
              {
                "id": "K_F",
                "text": "\uD839\uDEC1"
              },
              {
                "id": "K_G",
                "text": "\uD839\uDEE3"
              },
              {
                "id": "K_H",
                "text": "\uD839\uDEE6"
              },
              {
                "id": "K_J",
                "text": "\uD839\uDEDA"
              },
              {
                "id": "K_K",
                "text": "\uD839\uDEDB"
              },
              {
                "id": "K_L",
                "text": "\uD839\uDED3"
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
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "\uD839\uDEDC"
              },
              {
                "id": "K_X",
                "text": "\uD839\uDED9"
              },
              {
                "id": "K_C",
                "text": "\uD839\uDED0"
              },
              {
                "id": "K_V",
                "text": "\uD839\uDEFC"
              },
              {
                "id": "K_B",
                "text": "\uD839\uDEFD"
              },
              {
                "id": "K_N",
                "text": "\uD839\uDECF"
              },
              {
                "id": "K_M",
                "text": "\uD839\uDEDB"
              },
              {
                "id": "K_PERIOD",
                "text": "\u3001",
                "sk": [
                  {
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
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
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "width": "150",
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
                "id": "K_Q",
                "text": "\uD839\uDECD"
              },
              {
                "id": "K_W"
              },
              {
                "id": "K_E",
                "text": "\uD839\uDEF3"
              },
              {
                "id": "K_R",
                "text": "\uD839\uDEF5"
              },
              {
                "id": "K_T"
              },
              {
                "id": "K_Y"
              },
              {
                "id": "K_U",
                "text": "\uD839\uDECA"
              },
              {
                "id": "K_I"
              },
              {
                "id": "K_O",
                "text": "\uD839\uDED4"
              },
              {
                "id": "K_P",
                "text": "\uD839\uDED5"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "\uD839\uDEC3"
              },
              {
                "id": "K_S",
                "text": "\uD839\uDEDF"
              },
              {
                "id": "K_D",
                "text": "\uD839\uDEDD"
              },
              {
                "id": "K_F",
                "text": "\uD839\uDEDE"
              },
              {
                "id": "K_G",
                "text": "\uD839\uDEE2"
              },
              {
                "id": "K_H"
              },
              {
                "id": "K_J",
                "text": "\uD839\uDEF2"
              },
              {
                "id": "K_K",
                "text": "\uD839\uDEC4"
              },
              {
                "id": "K_L",
                "text": "\uD839\uDEFE"
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
                "nextlayer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_Z"
              },
              {
                "id": "K_X",
                "text": "\uD839\uDEFF"
              },
              {
                "id": "K_C",
                "text": "\uD839\uDEF4"
              },
              {
                "id": "K_V"
              },
              {
                "id": "K_B"
              },
              {
                "id": "K_N"
              },
              {
                "id": "K_M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "text": "\u3001",
                "sk": [
                  {
                    "layer": "default",
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "layer": "default",
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "layer": "default",
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "layer": "default",
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "\uD839\uDEE7"
              },
              {
                "id": "K_2",
                "text": "\uD839\uDEEE"
              },
              {
                "id": "K_3",
                "text": "\uD839\uDEED"
              },
              {
                "id": "K_4",
                "text": "\uD839\uDEEB"
              },
              {
                "id": "K_5",
                "text": "\uD839\uDEEA"
              },
              {
                "id": "K_6",
                "text": "\uD839\uDEE4"
              },
              {
                "id": "K_7",
                "text": "\uD839\uDEE8"
              },
              {
                "id": "K_8",
                "text": "\uD839\uDEE9"
              },
              {
                "id": "K_9",
                "text": "\uD839\uDECB"
              },
              {
                "id": "K_0",
                "text": "\uD839\uDEEC"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "50",
                "text": "$"
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "|"
              },
              {
                "layer": "default",
                "id": "K_BKSLASH",
                "text": "\\"
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
                "id": "K_LBRKT",
                "pad": "110",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COMMA",
                    "text": "<"
                  },
                  {
                    "layer": "shift",
                    "id": "K_LBRKT",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_PERIOD",
                    "text": ">"
                  },
                  {
                    "layer": "shift",
                    "id": "K_RBRKT",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_SLASH",
                "text": "\u3002"
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
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "150",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "width": "150",
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
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "\uD839\uDECC"
              },
              {
                "id": "K_W",
                "text": "\uD839\uDECE"
              },
              {
                "id": "K_E",
                "text": "\uD839\uDECB"
              },
              {
                "id": "K_R",
                "text": "\uD839\uDEE5"
              },
              {
                "id": "K_T",
                "text": "\uD839\uDEE1"
              },
              {
                "id": "K_Y",
                "text": "\uD839\uDEE0"
              },
              {
                "id": "K_U",
                "text": "\uD839\uDEC9"
              },
              {
                "id": "K_I",
                "text": "\uD839\uDED7"
              },
              {
                "id": "K_O",
                "text": "\uD839\uDED1"
              },
              {
                "id": "K_P",
                "text": "\uD839\uDED2"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "\uD839\uDEC2"
              },
              {
                "id": "K_S",
                "text": "\uD839\uDEC7"
              },
              {
                "id": "K_D",
                "text": "\uD839\uDEC0"
              },
              {
                "id": "K_F",
                "text": "\uD839\uDEC1"
              },
              {
                "id": "K_G",
                "text": "\uD839\uDEE3"
              },
              {
                "id": "K_H",
                "text": "\uD839\uDEE6"
              },
              {
                "id": "K_J",
                "text": "\uD839\uDEDA"
              },
              {
                "id": "K_K",
                "text": "\uD839\uDEDB"
              },
              {
                "id": "K_L",
                "text": "\uD839\uDED3"
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
                "nextlayer": "shift",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "\uD839\uDEDC"
              },
              {
                "id": "K_X",
                "text": "\uD839\uDED9"
              },
              {
                "id": "K_C",
                "text": "\uD839\uDED0"
              },
              {
                "id": "K_V",
                "text": "\uD839\uDEFC"
              },
              {
                "id": "K_B",
                "text": "\uD839\uDEFD"
              },
              {
                "id": "K_N",
                "text": "\uD839\uDECF"
              },
              {
                "id": "K_M",
                "text": "\uD839\uDEDB"
              },
              {
                "id": "K_PERIOD",
                "text": "\u3001",
                "sk": [
                  {
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
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
                "id": "K_Q",
                "text": "\uD839\uDECD"
              },
              {
                "id": "K_W"
              },
              {
                "id": "K_E",
                "text": "\uD839\uDEF3"
              },
              {
                "id": "K_R",
                "text": "\uD839\uDEF5"
              },
              {
                "id": "K_T"
              },
              {
                "id": "K_Y"
              },
              {
                "id": "K_U",
                "text": "\uD839\uDECA"
              },
              {
                "id": "K_I"
              },
              {
                "id": "K_O",
                "text": "\uD839\uDED4"
              },
              {
                "id": "K_P",
                "text": "\uD839\uDED5"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "\uD839\uDEC3"
              },
              {
                "id": "K_S",
                "text": "\uD839\uDEDF"
              },
              {
                "id": "K_D",
                "text": "\uD839\uDEDD"
              },
              {
                "id": "K_F",
                "text": "\uD839\uDEDE"
              },
              {
                "id": "K_G",
                "text": "\uD839\uDEE2"
              },
              {
                "id": "K_H"
              },
              {
                "id": "K_J",
                "text": "\uD839\uDEF2"
              },
              {
                "id": "K_K",
                "text": "\uD839\uDEC4"
              },
              {
                "id": "K_L",
                "text": "\uD839\uDEFE"
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
                "nextlayer": "default",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_Z"
              },
              {
                "id": "K_X",
                "text": "\uD839\uDEFF"
              },
              {
                "id": "K_C",
                "text": "\uD839\uDEF4"
              },
              {
                "id": "K_V"
              },
              {
                "id": "K_B"
              },
              {
                "id": "K_N"
              },
              {
                "id": "K_M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "text": "\u3001",
                "sk": [
                  {
                    "layer": "default",
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "layer": "default",
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "layer": "default",
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "layer": "default",
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "\uD839\uDEE7"
              },
              {
                "id": "K_2",
                "text": "\uD839\uDEEE"
              },
              {
                "id": "K_3",
                "text": "\uD839\uDEED"
              },
              {
                "id": "K_4",
                "text": "\uD839\uDEEB"
              },
              {
                "id": "K_5",
                "text": "\uD839\uDEEA"
              },
              {
                "id": "K_6",
                "text": "\uD839\uDEE4"
              },
              {
                "id": "K_7",
                "text": "\uD839\uDEE8"
              },
              {
                "id": "K_8",
                "text": "\uD839\uDEE9"
              },
              {
                "id": "K_9",
                "text": "\uD839\uDECB"
              },
              {
                "id": "K_0",
                "text": "\uD839\uDEEC"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "70",
                "text": "$"
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "|"
              },
              {
                "layer": "default",
                "id": "K_BKSLASH",
                "text": "\\"
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
                "width": "110",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_LBRKT",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COMMA",
                    "text": "<"
                  },
                  {
                    "layer": "shift",
                    "id": "K_LBRKT",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_PERIOD",
                    "text": ">"
                  },
                  {
                    "layer": "shift",
                    "id": "K_RBRKT",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "layer": "default",
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "layer": "default",
                "id": "K_SLASH",
                "text": "\u3002"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
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
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"𞛅");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"、");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"。");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"𞛬");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"𞛧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"𞛮");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"𞛭");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"𞛫");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"𞛪");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"𞛤");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"𞛨");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"𞛩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"𞛋");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"𞛘");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"𞛄");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"𞛃");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"𞛴");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"𞛝");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"𞛳");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"𞛞");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"𞛢");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"𞛲");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"𞛄");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"𞛾");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"𞛔");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"𞛕");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"𞛍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"𞛵");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"𞛟");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"𞛊");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"𞛿");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"𞛂");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"𞛽");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"𞛐");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"𞛀");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"𞛋");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"𞛁");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"𞛣");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"𞛦");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"𞛗");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"𞛚");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"𞛛");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"𞛓");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"𞛛");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"𞛏");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"𞛑");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"𞛒");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"𞛌");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"𞛥");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"𞛇");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"𞛡");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"𞛉");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"𞛼");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"𞛎");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"𞛙");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"𞛠");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"𞛜");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    return r;
  };
}
