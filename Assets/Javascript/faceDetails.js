//var faces = [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]];
var faces = new Array(6); //6 different styles of FEFCO box

for(var i = 0; i < 3; i++){
  faces[i] = new Array();
}

function faceDetails(name, sx, sy, sWidth, sHeight, rotation){
  this.name = name;
  this.sx = sx;
  this.sy = sy;
  this.sWidth = sWidth;
  this.sHeight = sHeight;
  this.rotation = rotation;
}

//0215
//Closed
faces[0][0] = new faceDetails("TopExternal", 0, 0, (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 0);
faces[0][1] = new faceDetails("LeftExternal", 0, (newModelTexture.image.height / 3), (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 90);
faces[0][2] = new faceDetails("RightExternal", (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 180);
faces[0][3] = new faceDetails("FrontExternal", 0, ((newModelTexture.image.height / 3) * 2), (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 90);
faces[0][4] = new faceDetails("BackExternal", (newModelTexture.image.width / 3), ((newModelTexture.image.height / 3) * 2), (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 90);
faces[0][5] = new faceDetails("BottomExternal", ((newModelTexture.image.width / 3) * 2), ((newModelTexture.image.height / 3) * 2), (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 90);
//Open
faces[0][6] = new faceDetails("TopExternal", 787, 767, 217, 257, 270);
faces[0][7] = new faceDetails("LeftExternal", 525, 767, 261, 256, 270);
faces[0][8] = new faceDetails("RightExternal", 525, 510, 261, 256, 90);
faces[0][9] = new faceDetails("FrontExternal", 0, 768, 261, 256, 90);
faces[0][10] = new faceDetails("BackExternal", 0, 510, 261, 256, 90);
faces[0][11] = new faceDetails("BottomExternal", 262, 510, 261, 256, 90);
//Flat
faces[0][12] = new faceDetails("TopExternal", 0, 0, (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 0);
faces[0][13] = new faceDetails("LeftExternal", 0, 0, (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 0);
faces[0][14] = new faceDetails("RightExternal", 0, 0, (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 0);
faces[0][15] = new faceDetails("FrontExternal", 0, 0, (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 0);
faces[0][16] = new faceDetails("BackExternal", 0, 0, (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 0);
faces[0][17] = new faceDetails("BottomExternal", 0, 0, (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 0);
faces[0][18] = new faceDetails("Test", (newModelTexture.image.width / 3), ((newModelTexture.image.height / 3) * 2), (newModelTexture.image.width / 3), (newModelTexture.image.height / 3), 90);

//

function side(name){
  this.name = name;
  this.canvasSave = null;
}

function imageLayer(img, x, y, width, height, rotation){
  this.img = img;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.rotation = rotation;
}

function textLayer(text, x, y, rotation, fontSize, font){
  this.text = text;
  this.x = x;
  this.y = y;
  this.rotation = rotation;
  this.fontSize = fontSize;
  this.font = font;
}

var sides = new Array(6);

sides[0] = new side("TopExternal");
sides[1] = new side("LeftExternal");
sides[2] = new side("RightExternal");
sides[3] = new side("FrontExternal");
sides[4] = new side("BackExternal");
sides[5] = new side("BottomExternal");
sides[6] = new side("Test");

function updateSideColor(side, hex){
  for(var i = 0; i < sides.length; i++){
    if(sides[i].name == side){ sides[i].color = hex; colourUpdate = true;}
  }
}

function addImageLayer(side, img, x, y, width, height, rotation){
  for(var i = 0; i < sides.length; i++){
    if(sides[i].name == side){
      sides[i].layers.push(new imageLayer(img, x, y, width, height, rotation));

      layerAdded = true;
      /*for(var j = 0; j < sides[i].layers.length; j++)
      {
        console.log("HERE " + j);//s sides[i].layers[0].img.src);
      }*/
    }
  }
}

function addTextLayer(side, text, x, y, rotatiom, fontSize, font){
  for(var i = 0; i < sides.length; i++){
    if(sides[i].name == side){
      sides[i].layers.push(new textLayer(text, x, y, rotation, fontSize, font));
      layerAdded = true;
    }
  }
}

function getSide(sideName){
  for(var i = 0; i < sides.length; i++)
  {
    if(sides[i].name == sideName){
      return i;
    }
  }
}
