if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_mende_kikakui());
}
function Keyboard_mende_kikakui()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_mende_kikakui";
  this.KN="Mende Kikakui Phonetic 3";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "shift": ["‮~","‮!","‮@","‮#","‮$","‮%","‮^","‮&","‮*","‮(","‮)","‮_","‮+","","","","Ɛ","‮W","E","‮R","‮T","‮Y","‮U","‮I","‮O","‮P","‮{","‮}","‮|","","","","‮A","‮S","‮D","‮F","‮G","‮H","‮J","‮K","‮L","‮:","‮\"","","","","","","","Ɔ","Ŋ","‮C","‮V","‮B","‮N","‮M","‮<","‮>","‮?","","","","","","‮ "],
    "default": ["‮`","‮1","‮2","‮3","‮4","‮5","‮6","‮7","‮8","‮9","‮0","‮-","‮=","","","","ɔ","‮w","‮e","‮r","‮t","‮y","‮u","‮i","‮o","‮p","‮[","‮]","‮\\","","","","‮a","‮s","‮d","‮f","‮g","‮h","‮j","‮k","‮l","‮;","‮'","","","","","","","ɛ","ŋ","‮c","‮v","‮b","‮n","‮m","‮,","‮.","‮/","","","","","",""]
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
  this.KRTL=1;
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
                "text": "\u025B"
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e"
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u"
              },
              {
                "id": "K_I",
                "text": "i"
              },
              {
                "id": "K_O",
                "text": "o"
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "a"
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_D",
                "text": "d"
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "width": "10",
                "id": "T_new_122",
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
                "text": "\u0254"
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
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
                "text": "\u0190"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E"
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I"
              },
              {
                "id": "K_O",
                "text": "O"
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "A"
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "width": "10",
                "id": "T_new_156",
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
                "id": "K_Z",
                "text": "\u0186"
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "text": ".",
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
                "text": "/"
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
                "text": "q"
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e"
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u"
              },
              {
                "id": "K_I",
                "text": "i"
              },
              {
                "id": "K_O",
                "text": "o"
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "a"
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_D",
                "text": "d"
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "width": "10",
                "id": "T_new_88",
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
                "text": "\u0254"
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
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
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E"
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I"
              },
              {
                "id": "K_O",
                "text": "O"
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "A"
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
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
                "id": "K_Z",
                "text": "Z"
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "text": ".",
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
                "text": "/"
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
  this.s_ascii_12=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  this.s_vowel_13="aeiou";
  this.s_vowel_ff_14="";
  this.s_take_slash_15="";
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
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SPACE /* 0x20 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮ ");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮ ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮!");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮\"");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮#");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮$");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮%");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮&");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮'");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮'");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮(");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮)");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮)");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮*");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮+");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮,");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮,");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮-");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮.");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_take_slash_15}])){
        r=m=1;   // Line 48
        k.KDC(1,t);
        k.KIO(-1,this.s_take_slash_15,1,t);
        k.KO(-1,t,"﻿");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮.");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮/");
      }
      else if(k.KFCM(1,t,[{t:'a',a:this.s_take_slash_15}])){
        r=m=1;   // Line 47
        k.KDC(1,t);
        k.KIO(-1,this.s_take_slash_15,1,t);
        k.KO(-1,t,"﻿");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮0");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮0");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮1");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮1");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮2");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮2");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮3");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮3");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮4");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮4");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮5");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮5");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮6");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮6");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮7");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮8");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮8");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮9");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮:");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮:");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮;");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮;");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮<");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮<");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮=");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮>");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮>");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮?");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮?");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮@");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮A");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮A");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 87
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 88
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 208
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 434
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 435
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮B");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮B");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮C");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮D");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮D");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 116
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 307
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮E");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮E");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 94
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 411
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮F");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮F");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮G");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮G");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮H");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮H");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮I");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮I");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 83
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 409
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 410
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 408
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮J");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮J");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮K");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮L");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮L");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮M");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮M");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮N");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 128
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 234
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮O");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮O");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮P");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮P");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 119
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 230
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮Q");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮Q");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 97
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 98
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 120
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 413
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 436
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 437
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"Ɛ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮R");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮R");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮S");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮S");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮T");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮T");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 109
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮U");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮U");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 110
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮V");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮W");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮W");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮X");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮X");
      }
      else if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"Ŋ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮Y");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮Y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 123
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['M','b'])){
        r=m=1;   // Line 125
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮Z");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮Z");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 124
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['H'])){
        r=m=1;   // Line 376
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 377
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮[");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮\\");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮\\");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮]");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮^");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮^");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮_");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮`");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮`");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(k.KFCM(4,t,['n','n','g','u'])){
        r=m=1;   // Line 423
        k.KDC(4,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(3,t,['ŋ','g','u'])){
        r=m=1;   // Line 421
        k.KDC(3,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 105
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['k','p'])){
        r=m=1;   // Line 144
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['g','b'])){
        r=m=1;   // Line 157
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 222
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','j'])){
        r=m=1;   // Line 273
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 300
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['N','y'])){
        r=m=1;   // Line 397
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['ŋ','u'])){
        r=m=1;   // Line 432
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['Ŋ','u'])){
        r=m=1;   // Line 433
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮a");
      }
      else if(k.KFCM(1,t,['﻿'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮a");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 61
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 62
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 63
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 84
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 85
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 106
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['b'])){
        r=m=1;   // Line 131
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 132
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 145
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 146
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 158
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 168
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['v'])){
        r=m=1;   // Line 177
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 178
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 191
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 192
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 205
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 206
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 207
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 223
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['d'])){
        r=m=1;   // Line 237
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 238
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 248
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 249
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 262
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 263
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 274
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['y'])){
        r=m=1;   // Line 287
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 301
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 316
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 317
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['g'])){
        r=m=1;   // Line 318
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 332
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 333
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 344
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 356
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['H'])){
        r=m=1;   // Line 367
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 368
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['M'])){
        r=m=1;   // Line 379
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['m'])){
        r=m=1;   // Line 380
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['N'])){
        r=m=1;   // Line 391
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['Ŋ'])){
        r=m=1;   // Line 404
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 405
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 422
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 425
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 426
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 427
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 428
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 429
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 430
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 431
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮b");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮b");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮c");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮c");
      }
      else if(k.KFCM(1,t,['M'])){
        r=m=1;   // Line 442
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 443
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮d");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮d");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 113
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['M','b'])){
        r=m=1;   // Line 115
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['k','p'])){
        r=m=1;   // Line 149
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['g','b'])){
        r=m=1;   // Line 160
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 226
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','j'])){
        r=m=1;   // Line 277
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['N','j'])){
        r=m=1;   // Line 280
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 304
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮e");
      }
      else if(k.KFCM(1,t,['﻿'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮e");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 68
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 69
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 93
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 114
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['b'])){
        r=m=1;   // Line 135
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 136
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 170
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 171
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['v'])){
        r=m=1;   // Line 181
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 182
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 195
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 196
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 211
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 212
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 227
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['d'])){
        r=m=1;   // Line 241
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 242
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 252
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 253
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 266
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 267
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 278
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 279
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['y'])){
        r=m=1;   // Line 289
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 290
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 291
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 305
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 306
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['g'])){
        r=m=1;   // Line 322
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 323
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 336
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 337
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 348
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 359
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮f");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮f");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮g");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮g");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮h");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮h");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 103
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['k','p'])){
        r=m=1;   // Line 143
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['g','b'])){
        r=m=1;   // Line 156
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 220
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 298
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['N','y'])){
        r=m=1;   // Line 396
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮i");
      }
      else if(k.KFCM(1,t,['﻿'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮i");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 58
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 59
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 80
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 81
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 104
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['b'])){
        r=m=1;   // Line 129
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 130
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 167
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['v'])){
        r=m=1;   // Line 176
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 189
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 190
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 202
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 203
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 204
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 221
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['d'])){
        r=m=1;   // Line 235
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 236
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 246
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 247
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 260
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 261
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['y'])){
        r=m=1;   // Line 286
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 299
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['g'])){
        r=m=1;   // Line 313
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 314
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 330
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 331
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 343
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['H'])){
        r=m=1;   // Line 365
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 366
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['M'])){
        r=m=1;   // Line 378
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['N'])){
        r=m=1;   // Line 390
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 416
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 417
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 418
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 419
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 420
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 438
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 439
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮j");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮j");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮k");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮k");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮l");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮l");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮m");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮m");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮n");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮n");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 126
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['k','p'])){
        r=m=1;   // Line 155
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['g','b'])){
        r=m=1;   // Line 165
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 233
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','j'])){
        r=m=1;   // Line 283
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['N','j'])){
        r=m=1;   // Line 284
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 311
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮o");
      }
      else if(k.KFCM(1,t,['﻿'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮o");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 77
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 78
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 101
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 102
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 127
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['b'])){
        r=m=1;   // Line 140
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 141
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 142
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 166
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 175
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['v'])){
        r=m=1;   // Line 187
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 188
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 200
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 201
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 218
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 219
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['d'])){
        r=m=1;   // Line 245
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 258
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 259
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 272
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 285
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['y'])){
        r=m=1;   // Line 296
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 297
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 312
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['g'])){
        r=m=1;   // Line 328
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 329
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 341
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 342
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 354
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮p");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮p");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 117
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['k','p'])){
        r=m=1;   // Line 150
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['g','b'])){
        r=m=1;   // Line 161
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 228
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 308
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['N','y'])){
        r=m=1;   // Line 400
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','n'])){
        r=m=1;   // Line 415
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮q");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮q");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 71
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 72
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 95
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 96
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 118
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['b'])){
        r=m=1;   // Line 137
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 151
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 152
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 162
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 172
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 173
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['v'])){
        r=m=1;   // Line 183
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 184
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 197
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 198
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 213
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 214
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 215
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 229
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 254
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 255
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 268
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 269
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['y'])){
        r=m=1;   // Line 292
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 293
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['g'])){
        r=m=1;   // Line 324
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 325
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 338
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 349
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 350
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 361
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['H'])){
        r=m=1;   // Line 371
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 372
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['M'])){
        r=m=1;   // Line 383
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['m'])){
        r=m=1;   // Line 384
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 385
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['N'])){
        r=m=1;   // Line 393
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 394
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 401
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['Ŋ'])){
        r=m=1;   // Line 406
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 407
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"ɛ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮r");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮r");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮s");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮s");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮t");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮t");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 107
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['M','b'])){
        r=m=1;   // Line 111
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['k','p'])){
        r=m=1;   // Line 147
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['g','b'])){
        r=m=1;   // Line 159
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 224
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','j'])){
        r=m=1;   // Line 275
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 302
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['N','y'])){
        r=m=1;   // Line 398
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮u");
      }
      else if(k.KFCM(1,t,['﻿'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮u");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 65
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 66
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 90
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 91
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 108
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 112
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['b'])){
        r=m=1;   // Line 133
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 134
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 148
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 169
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['v'])){
        r=m=1;   // Line 179
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 180
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 193
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 194
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 209
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 210
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 225
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['d'])){
        r=m=1;   // Line 239
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 240
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 250
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 251
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 264
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 265
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 276
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['y'])){
        r=m=1;   // Line 288
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 303
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 320
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['g'])){
        r=m=1;   // Line 321
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 334
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 335
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 345
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 346
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 347
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 357
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['H'])){
        r=m=1;   // Line 369
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 370
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['M'])){
        r=m=1;   // Line 381
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['m'])){
        r=m=1;   // Line 382
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['N'])){
        r=m=1;   // Line 392
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 399
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 440
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 441
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮v");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮v");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮w");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮w");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮x");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮x");
      }
      else if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮y");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮y");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(k.KFCM(2,t,['m','b'])){
        r=m=1;   // Line 121
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['k','p'])){
        r=m=1;   // Line 153
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['g','b'])){
        r=m=1;   // Line 163
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','d'])){
        r=m=1;   // Line 231
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','j'])){
        r=m=1;   // Line 281
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','g'])){
        r=m=1;   // Line 309
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','H'])){
        r=m=1;   // Line 374
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['N','y'])){
        r=m=1;   // Line 402
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(2,t,['n','h'])){
        r=m=1;   // Line 414
        k.KDC(2,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮z");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮z");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 74
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 75
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 99
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 100
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 122
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['b'])){
        r=m=1;   // Line 138
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 139
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 154
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 164
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['f'])){
        r=m=1;   // Line 174
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['v'])){
        r=m=1;   // Line 185
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 186
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 199
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 216
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 217
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 232
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['d'])){
        r=m=1;   // Line 243
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 244
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 256
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 257
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 270
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 271
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 282
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['y'])){
        r=m=1;   // Line 294
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 295
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 310
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['g'])){
        r=m=1;   // Line 326
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 327
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 339
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 340
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 351
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 352
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 353
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 363
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['H'])){
        r=m=1;   // Line 373
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 375
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['M'])){
        r=m=1;   // Line 386
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['m'])){
        r=m=1;   // Line 387
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 389
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,['N'])){
        r=m=1;   // Line 395
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(k.KFCM(1,t,[''])){
        r=m=1;   // Line 403
        k.KDC(1,t);
        k.KO(-1,t,"");
      }
      else if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"ɔ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮{");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮|");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮}");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮~");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮~");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x00)) {
      if(k.KFCM(1,t,[{t:'n'}])){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"‮");
      }
      else if(k.KFCM(1,t,['\n'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"\n‮");
      }
    }
    return r;
  };
}
