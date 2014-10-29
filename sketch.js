var girlTouched = false;
var girlTouchedX = 0;
var girlTouchedY = 0;

var hulkTouched = false;
var hulkTouchedX = 0;
var hulkTouchedY = 0;

var ironTouched = false;
var ironTouchedX = 0;
var ironTouchedY = 0;

var thorTouched = false;
var thorTouchedX = 0;
var thorTouchedY = 0;

var captainTouched = false;
var captainTouchedX = 0;
var captainTouchedY = 0;


var trailX;
var trailY;


function setup()
{
    createCanvas(1000,1024);
    bg = loadImage("https://scontent-a.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/s720x720/10665360_590381204400645_8167706673931107497_n.jpg?oh=455438cd04fe88caa3bbbbb915fbd89b&oe=54F27B56");

    trailX=[0,0,0,0];
    trailY=[0,0,0,0];

}


function draw()
{
    background(bg);
    noFill();
    noStroke();

        var duration = 3500;
        var timing = (new Date()%duration)/duration;


    stars(80,100);
    stars(290,200);
    stars2(180,300);
    stars(550,100);
    stars2(720,180);
    stars(850,230);
    stars2(920,300);
    stars(370,125);
    stars(820,70);
    stars(550,350);
    
    //빌딩
    stars3(22,890);
    stars3(82,890);

    stars3(33,925);
    stars3(78,923);
    stars3(122,921);
    stars3(173,925);
    stars3(207,940);

    stars(207,920);
    stars(270,910);
    stars(315,925);

    stars(474,864);
    stars(627,864);
    stars(663,875);
    stars2(474,924);
    stars2(627,924);
    stars2(663,936);

    stars3(699,950);
    stars(760,950);
    stars3(818,950)
    stars3(846,963)
    stars3(750,920)
    stars3(814,910)
    stars3(858,925)

    stars(874,837)
    stars(983,837)

    stars2(345,961)
    stars2(354,961)
    stars2(362,961)
    stars2(369,961)
    stars2(377,961)
    stars2(385,961)
    stars2(395,961)

    stars2(441,961)
    stars2(450,961)
    stars2(458,961)

   trailX[0]=(mouseX+trailX[0]*4)/5;
   trailY[0]=(mouseY+trailY[0]*4)/5;
for(var i = 1; i<2;i=i+1){
   trailX[i]=(trailX[i-1]+trailX[i]*4)/5;
   trailY[i]=(trailY[i-1]+trailY[i]*4)/5;
}


for(var i = 1; i>=0;i=i-1){
black(trailX[i],trailY[i]);
}



    if (!girlTouched){
        girl(timing * 1000,                         // x좌표
        240 + Math.sin(timing*2*PI)*80, // y좌표
        100,                                  // width
        100);   
    } else {
        girlDead(girlTouchedX, girlTouchedY);
    }


    if (girlTouched === false) {
        if (mouseX > timing * 1000 && mouseX < timing * 1300 && mouseY > 240 + Math.sin(timing*2*PI)*80 && mouseY < 650)   // 부딪혔을 때 
        {
            girlTouched = true; 
            girlTouchedX = mouseX;
            girlTouchedY = mouseY;
        } 
    }
      

            //hulk
                if (!hulkTouched){
            hulk((1-timing) *1100,                         // x좌표
            20 + Math.sin(timing*2*PI)*40, // y좌표
            100,                                  // width
            100);   
        } else {
            hulkDead(hulkTouchedX, hulkTouchedY);
        }


        if (hulkTouched === false) {
            if (mouseX > (1-timing) * 1100 && mouseX < (1-timing) * 1300 && mouseY > 20 + Math.sin(timing*2*PI)*40 && mouseY < 240)   // 부딪혔을 때 
            {
                hulkTouched = true; 
                hulkTouchedX = mouseX;
                hulkTouchedY = mouseY;
            } 
        }

                var duration = 3000;
                var timing = (new Date()%duration)/duration;


                //Captain
                if (!captainTouched){
                    captain(timing * 1000,                         // x좌표
                    100 + Math.sin(timing*2*PI)*400, // y좌표
                    100,                                  // width
                    100);   
                } else {
                    captainDead(captainTouchedX, captainTouchedY);
                }


                if (captainTouched === false) {
                    if (mouseX > timing * 1000 && mouseX < timing * 1300 && mouseY > 100 + Math.sin(timing*2*PI)*400 && mouseY < 700)   // 부딪혔을 때 
                    {
                        captainTouched = true; 
                        captainTouchedX = mouseX;
                        captainTouchedY = mouseY;
                    } 
                }

                var duration = 5000;
                var timing = (new Date()%duration)/duration;



                //iron
                if (!ironTouched){
                    iron(timing * 1000,                         // x좌표
                    700 + Math.sin(timing*7*PI)*1000, // y좌표
                    100,                                  // width
                    100);   
                } else {
                    ironDead(ironTouchedX, ironTouchedY);
                }


                if (ironTouched === false) {
                    if (mouseX > timing * 1000 && mouseX < timing * 1300 && mouseY > 700 + Math.sin(timing*7*PI)*1000 && mouseY < 1300)   // 부딪혔을 때 
                    {
                        ironTouched = true; 
                        ironTouchedX = mouseX;
                        ironTouchedY = mouseY;
                    } 
                }


                var duration = 4500;
                var timing = (new Date()%duration)/duration;


                //thor
                if (!thorTouched){
                    thor((1-timing) * 1000,                         // x좌표
                    250 + Math.sin(timing*2*PI)*280, // y좌표
                    100,                                  // width
                    100);   
                } else {
                    thorDead(thorTouchedX, thorTouchedY);
                }


                if (thorTouched === false) {
                    if (mouseX > (1-timing) * 1000 && mouseX < (1-timing) * 1300 && mouseY > 250 + Math.sin(timing*2*PI)*280 && mouseY < 780)   // 부딪혔을 때 
                    {
                        thorTouched = true; 
                        thorTouchedX = mouseX;
                        thorTouchedY = mouseY;
                    } 
                }
}

function stars(x, y)
{
    fill(Math.random()*255,Math.random()*255,Math.random()*255,255);
    ellipse(x, y, 10, 10);
}


function stars2(x, y)
{
    fill(Math.random()*255,Math.random()*255,Math.random()*255,255);
    ellipse(x, y, 5, 5);
}


function stars3(x, y)
{
    fill(Math.random()*255,Math.random()*255,Math.random()*255,255);
    ellipse(x, y, 7, 7);
}


function CaptainlDead(x, y)
{
    fill(128);
    ellipse(x, y, 100,  100);
}

function girlDead(x, y)
{
    fill(80,80,80);
    rect(x, y, 60, 10);
    //2번째줄
    rect(x-10, y+10,70,10);
    //3
    rect(x-10, y+20,70,10);
    //4
    rect(x-20, y+30,90,10);
    //5
    rect(x-20, y+40,100,10);
    //6
    rect(x-10, y+50,20,10);
    rect(x+10, y+50,10,10);
    rect(x+20, y+50,10,10);
    rect(x+30, y+50,10,10);
    rect(x+40, y+50,20,10);
    rect(x+90, y+50,30,10);
    //7
    rect(x-10, y+60,30,10);
    rect(x+20, y+60,10,10);
    rect(x+30, y+60,60,10);
    rect(x+90, y+60,10,10);
    rect(x+100, y+60,10,10);
    //8
    rect(x-20, y+70,90,10);
    rect(x+80, y+70,10,10);
    rect(x+90, y+70,10,10);
    //9
    rect(x-30, y+80,20,10);
    rect(x, y+80,50,10);
    //10
    rect(x-40, y+90,10,10);
    rect(x-30, y+90,20,10);
    rect(x, y+90,10,10);
    rect(x+10, y+90,30,10);
    rect(x+40, y+90,10,10);
    //11
    rect(x-40, y+100,20,10);
    rect(x, y+100,10,10);
    rect(x+10, y+100,10,10);
    rect(x+20, y+100,10,10);
    rect(x+30, y+100,10,10);
    rect(x+40, y+100,10,10);
    //12
    rect(x-40, y+110,10,10);
    rect(x, y+110,10,10);
    rect(x+10, y+110,10,10);
    rect(x+20, y+110,10,10);
    rect(x+30, y+110,10,10);
    rect(x+40, y+110,10,10);
    //13
    rect(x, y+120,20,10);
    rect(x+30, y+120,20,10);
    //14
    rect(x, y+130,20,10);
    rect(x+30, y+130,20,10);
    //15
    rect(x+10, y+140,10,10);
    rect(x+30, y+140,10,10);

    fill(255,0,0);
    rect(x, y+50, 10, 10);
    rect(x+40, y+50,10,10);
    rect(x+10, y+60,10,10);
    rect(x+30, y+60,10,10);
    rect(x+20, y+70,10,10);
    rect(x+30, y+80,10,10);
    rect(x+10, y+80,10,10);
    rect(x+40, y+90,10,10);
    rect(x, y+90,10,10);
}

function ironDead(x, y)
{
    //1
    fill(80,80,80);
    rect(x, y,30,10);
    rect(x+70, y,10,10);
    //2
    rect(x-10, y+10,50,10);
    //3
    rect(x-10, y+20,10,10);
    rect(x, y+20,10,10);
    rect(x+10, y+20,10,10);
    rect(x+20, y+20,10,10);
    rect(x+30, y+20,10,10);
    rect(x+60, y+20,10,10);
    rect(x+70, y+20,10,10);
    rect(x+80, y+20,10,10);
    //4
    rect(x-10, y+30,50,10);
    rect(x+50, y+30,40,10);
    //5
    rect(x-10, y+40,10,10);
    rect(x, y+40,30,10);
    rect(x+30, y+40,60,10);
    //6
    rect(x-40, y+50,110,10);
    //7
    rect(x-40, y+60,10,10);
    rect(x-30, y+60,20,10);
    rect(x-10, y+60,10,20);
    rect(x, y+60,30,20);
    rect(x+30, y+60,10,20);
    rect(x+40, y+60,20,10);
    //8
    rect(x-50, y+70,30,10);
    rect(x-20, y+70,10,10);
    rect(x+40, y+70,10,10);
    //9
    rect(x-50, y+80,100,10);
    //10
    rect(x-50, y+90,20,10);
    rect(x-30, y+90,10,10);
    rect(x-10, y+90,50,10);
    //11
    rect(x-20, y+100,70,10);
    //12
    rect(x-20, y+110,20,10);
    rect(x, y+110,10,10);
    rect(x+20, y+110,10,10);
    rect(x+30, y+110,20,10);
    //13
    rect(x-20, y+120,10,10);
    rect(x-10, y+120,20,10);
    rect(x+20, y+120,30,10);
    //14
    rect(x-20, y+130,30,20);
    rect(x+20, y+130,30,20);

    fill(255,0,0);
    rect(x-10, y+40, 10, 10);
    rect(x+30, y+40,10,10);
    rect(x, y+50,10,10);
    rect(x+20, y+50,10,10);
    rect(x+10, y+60,10,10);
    rect(x+20, y+70,10,10);
    rect(x, y+70,10,10);
    rect(x+30, y+80,10,10);
    rect(x-10, y+80,10,10);
}

function hulkDead(x, y)
{
    fill(80,80,80);
    rect(x, y,90,20);
    //3
    rect(x, y+20,10,10);
    rect(x+10, y+20,70,10);
    rect(x+80, y+20,10,10);
    //4
    rect(x, y+30,20,10);
    rect(x+20, y+30,10,10);
    rect(x+30, y+30,30,10);
    rect(x+60, y+30,10,10);
    rect(x+70, y+30,20,10);
    //5
    rect(x, y+40,90,10);
    //6
    rect(x, y+50,20,10);
    rect(x+20, y+50,10,10);
    rect(x+30, y+50,10,10);
    rect(x+40, y+50,10,10);
    rect(x+50, y+50,10,10);
    rect(x+60, y+50,10,10);
    rect(x+70, y+50,20,10);
    //7
    rect(x-20, y+60,130,10);
    //8
    rect(x-30, y+70,70,10);
    rect(x+40, y+70,10,20);
    rect(x+50, y+70,70,10);
    //9
    rect(x-30, y+80,10,10);
    rect(x-20, y+80,10,10);
    rect(x-10, y+80,50,10);
    rect(x+50, y+80,50,10);
    rect(x+100, y+80,10,10);
    rect(x+110, y+80,10,10);
    //10
    rect(x-50, y+90,40,10);
    rect(x-10, y+90,50,10);
    rect(x+40, y+90,10,10);
    rect(x+50, y+90,50,10);
    rect(x+100, y+90,40,10);
    //11
    rect(x-50, y+100,30,20);
    rect(x-20, y+100,100,20);
    rect(x-10, y+100,50,10);
    rect(x+40, y+100,10,10);
    rect(x+50, y+100,50,10);
    rect(x+100, y+100,10,20);
    rect(x+110, y+100,30,20);
    //12
    rect(x-10, y+110,40,10);
    rect(x+30, y+110,10,10);
    rect(x+40, y+110,10,10);
    rect(x+50, y+110,10,10);
    rect(x+60, y+110,40,10);
    //13
    rect(x-20, y+120,130,20);
    //14
    rect(x-10, y+140,50,10);
    rect(x+50, y+140,50,10);

    fill(255,0,0);
    rect(x+20, y+50, 10, 10);
    rect(x+60, y+50,10,10);
    rect(x+30, y+60,10,10);
    rect(x+50, y+60,10,10);
    rect(x+40, y+70,10,10);
    rect(x+50, y+80,10,10);
    rect(x+30, y+80,10,10);
    rect(x+60, y+90,10,10);
    rect(x+20, y+90,10,10);
}

function captainDead(x, y)
{
    //1
    fill(80,80,80);
    rect(x, y,10,10);
    rect(x+10, y,10,10);
    rect(x+20, y,10,10);
    //2
    rect(x-50, y+10,20,10);
    rect(x-10, y+10,10,10);
    rect(x, y+10,30,10);
    rect(x+30, y+10,10,10);
    //3 방패
    rect(x-60, y+20,10,10);
    rect(x-50, y+20,20,10);
    rect(x-30, y+20,10,10);
    //3
    rect(x-10, y+20,10,10);
    rect(x, y+20,10,10);
    rect(x+10, y+20,10,10);
    rect(x+20, y+20,10,10);
    rect(x+30, y+20,10,10);
    //4
    rect(x-70, y+30,10,20);
    rect(x-60, y+30,10,20);
    rect(x-50, y+30,20,20);
    rect(x-30, y+30,10,20);
    rect(x-20, y+30,10,20);
    rect(x-10, y+30,20,10);
    rect(x+10, y+30,10,10);
    rect(x+20, y+30,20,10);
    //5
    rect(x-10, y+40,10,10);
    rect(x, y+40,30,10);
    rect(x+30, y+40,10,10);
    //6
    rect(x-60, y+50,10,10);
    rect(x-50, y+50,30,10);
    rect(x-30, y+50,10,10);
    rect(x-20, y+50,30,10);
    rect(x+10, y+50,10,10);
    rect(x+20, y+50,40,10);
    //7
    rect(x-50, y+60,20,10);
    rect(x-30, y+60,30,10);
    rect(x, y+60,30,10);
    rect(x+30, y+60,40,10);
    //8
    rect(x-20, y+70,30,10);
    rect(x+10, y+70,10,30);
    rect(x+20, y+70,60,10);
    //9
    rect(x-20, y+80,10,10);
    rect(x-10, y+80,10,20);
    rect(x, y+80,10,20);
    rect(x+20, y+80,10,20);
    rect(x+30, y+80,10,20);
    rect(x+40, y+80,10,10);
    rect(x+60, y+80,20,20);
    //10
    rect(x-10, y+100,50,10);
    //11
    rect(x-10, y+110,50,10);
    //12
    rect(x-10, y+120,20,10);
    rect(x+20, y+120,20,10);
    //13
    rect(x-10, y+130,20,10);
    rect(x+20, y+130,20,10);
    //14
    rect(x-20, y+140,30,10);
    rect(x+20, y+140,30,10);

    fill(255,0,0);
    rect(x-10, y+40, 10, 10);
    rect(x+30, y+40,10,10);
    rect(x, y+50,10,10);
    rect(x+20, y+50,10,10);
    rect(x+10, y+60,10,10);
    rect(x+20, y+70,10,10);
    rect(x, y+70,10,10);
    rect(x+30, y+80,10,10);
    rect(x-10, y+80,10,10);
}

function thorDead(x, y)
{
    //1
    fill(80,80,80);
    rect(x-20, y-50,10,10);
    //2
    rect(x-30, y-40,10,10);
    //3
    rect(x-40, y-30,10,10);
    //4
    rect(x-60, y-20,10,10);
    rect(x-50, y-20,10,10);
    rect(x-40, y-20,10,10);
    rect(x-30, y-20,10,10);
    rect(x-20, y-20,10,10);
    //5
    rect(x-60, y-10,20,10);
    rect(x-40, y-10,10,10);
    rect(x-30, y-10,20,10);
    //6
    rect(x-60, y,10,10);
    rect(x-50, y,10,10);
    rect(x-40, y,10,10);
    rect(x-30, y,10,10);
    rect(x-20, y,10,10);
    rect(x, y,50,10);
    //7
    rect(x-40, y+10,10,20);
    rect(x-10, y+10,20,10);
    rect(x+10, y+10,10,10);
    rect(x+20, y+10,10,10);
    rect(x+30, y+10,10,10);
    rect(x+40, y+10,20,10);
    //8
    rect(x-10, y+20,10,10);
    rect(x, y+20,10,10);
    rect(x+10, y+20,10,10);
    rect(x+20, y+20,10,10);
    rect(x+30, y+20,10,10);
    rect(x+40, y+20,10,10);
    rect(x+50, y+20,10,10);
    //9
    rect(x-50, y+30,30,20);
    rect(x-10, y+30,10,10);
    rect(x, y+30,50,10);
    rect(x+50, y+30,10,10);
    //10
    rect(x-50, y+30,20,20);
    //11
    rect(x-30, y+40,10,20);
    rect(x-20, y+40,10,10);
    rect(x-10, y+40,10,10);
    rect(x, y+40,10,10);
    rect(x+10, y+40,30,10);
    rect(x+40, y+40,10,10);
    rect(x+50, y+40,10,10);
    rect(x+60, y+40,10,10);
    //12
    rect(x-50, y+50,10,10);
    rect(x-40, y+50,10,10);
    rect(x-20, y+50,20,10);
    rect(x, y+50,10,10);
    rect(x+10, y+50,30,10);
    rect(x+40, y+50,10,10);
    rect(x+50, y+50,20,10);
    rect(x+70, y+50,10,10);
    //13
    rect(x-40, y+60,30,10);
    rect(x-10, y+60,20,10);
    rect(x+10, y+60,10,10);
    rect(x+20, y+60,10,10);
    rect(x+30, y+60,10,10);
    rect(x+40, y+60,20,10);
    rect(x+60, y+60,20,30);
    //14
    rect(x-30, y+70,20,10);
    rect(x, y+70,10,10);
    rect(x+40, y+70,10,10);
    rect(x-10, y+70,10,10);
    rect(x+20, y+70,10,10);
    rect(x+50, y+70,10,10);
    rect(x+10, y+70,10,10);
    rect(x+30, y+70,10,10);
    //14
    rect(x-30, y+80,20,60);
    rect(x-10, y+80,20,10);
    rect(x+40, y+80,20,10);
    rect(x+10, y+80,30,10);
    //15
    rect(x-10, y+90,10,10);
    rect(x+10, y+90,10,10);
    rect(x+30, y+90,10,10);
    rect(x+50, y+90,10,10);
    rect(x+20, y+90,10,10);
    rect(x, y+90,10,10);
    rect(x+40, y+90,10,10);
    rect(x+60, y+90,20,20);
    //16
    rect(x-10, y+100,20,10);
    rect(x+40, y+100,20,10);
    rect(x+10, y+100,30,10);
    //17
    rect(x-10, y+110,70,10);
    rect(x+60, y+110,20,30);
    //18
    rect(x+20, y+120,10,30);
    rect(x-10, y+120,30,10);
    rect(x+30, y+120,30,10);
    //19
    rect(x-10, y+130,30,20);
    rect(x+30, y+130,30,20);
    rect(x-40, y+140,30,10);
    rect(x+60, y+140,30,10);

    fill(255,0,0);
    rect(x, y+50,10,10);
    rect(x+40, y+50,10,10);
    rect(x+10, y+60,10,10);
    rect(x+30, y+60,10,10);
    rect(x+20, y+70,10,10);
    rect(x+30, y+80,10,10);
    rect(x+10, y+80,10,10);
    rect(x+40, y+90,10,10);
    rect(x, y+90,10,10);
}

function girl(x, y)
{
    fill(128,0,0);
    rect(x, y, 60, 10);
    //2번째줄
    rect(x-10, y+10, 40, 10);
    fill(255,183,183);
    rect(x+30, y+10,10,10);
    fill(128,0,0);
    rect(x+40, y+10,20,10);
    //3
    rect(x-10, y+20,30,10);
    fill(255,183,183);
    rect(x+20, y+20,30,10);
    fill(128,0,0);
    rect(x+50, y+20,10,10);
    //4
    rect(x-20, y+30,30,10);
    fill(0);
    rect(x+10, y+30,10,10);
    fill(255,183,183);
    rect(x+20, y+30,10,10);
    fill(0,0,0);
    rect(x+30, y+30,10,10);
    fill(255,183,183);
    rect(x+40, y+30,10,10);
    fill(128,0,0);
    rect(x+50, y+30,20,10);
    //5
    rect(x-20, y+40,40,10);
    fill(255,183,183);
    rect(x+10, y+40,40,10);
    fill(128,0,0);
    rect(x+50, y+40,20,10);
    //6
    rect(x-10, y+50,20,10);
    fill(0);
    rect(x+10, y+50,10,10);
    fill(255,183,183);
    rect(x+20, y+50,10,10);
    fill(0);
    rect(x+30, y+50,10,10);
    fill(128,0,0);
    rect(x+40, y+50,20,10);
    fill(0);
    rect(x+90, y+50,30,10);
    //7
    rect(x-10, y+60,30,10);
    fill(255,183,183);
    rect(x+20, y+60,10,10);
    fill(0);
    rect(x+30, y+60,60,10);
    fill(255,183,183);
    rect(x+90, y+60,10,10);
    fill(0);
    rect(x+100, y+60,10,10);
    //8
    rect(x-20, y+70,90,10);
    rect(x+80, y+70,10,10);
    fill(255,183,183);
    rect(x+90, y+70,10,10);
    //9
    fill(0);
    rect(x-30, y+80,20,10);
    rect(x, y+80,50,10);
    //10
    rect(x-40, y+90,10,10);
    fill(255,183,183);
    rect(x-30, y+90,20,10);
    fill(255,255,255);
    rect(x, y+90,10,10);
    fill(0);
    rect(x+10, y+90,30,10);
    fill(255,255,255);
    rect(x+40, y+90,10,10);
    //11
    fill(0);
    rect(x-40, y+100,20,10);
    fill(40,40,40);
    rect(x, y+100,10,10);
    fill(0);
    rect(x+10, y+100,10,10);
    fill(255,0,0);
    rect(x+20, y+100,10,10);
    fill(0);
    rect(x+30, y+100,10,10);
    fill(40,40,40);
    rect(x+40, y+100,10,10);
    //12
    fill(0);
    rect(x-40, y+110,10,10);
    rect(x, y+110,10,10);
    fill(128,128,128);
    rect(x+10, y+110,10,10);
    fill(40,40,40);
    rect(x+20, y+110,10,10);
    fill(128,128,128);
    rect(x+30, y+110,10,10);
    fill(0);
    rect(x+40, y+110,10,10);
    //13
    fill(0);
    rect(x, y+120,20,10);
    rect(x+30, y+120,20,10);
    //14
    rect(x, y+130,20,10);
    rect(x+30, y+130,20,10);
    //15
    rect(x+10, y+140,10,10);
    rect(x+30, y+140,10,10);


}


function black(x, y)
{
    //1
    fill(0);
    rect(x-30, y-120,10,10);
    //2
    rect(x-30, y-100,10,10);
    //3
    rect(x-30, y-80,10,10);
    //4
    rect(x-30, y-70,10,10);
    //5
    rect(x-40, y-60,20,10);
    rect(x-10, y-60,10,10);
    fill(128,64,0);
    rect(x, y-60,20,10);
    //6
    fill(128,64,0);
    rect(x-50, y-50,20,10);
    fill(0);
    rect(x-30, y-50,10,10);
    fill(128,64,0);
    rect(x-20, y-50,20,10);
    fill(0);
    rect(x, y-50,10,10);
    fill(128,64,0);
    rect(x+10, y-50,20,10);
    //7
    fill(128,64,0);
    rect(x-50, y-40,20,10);
    rect(x-20, y-40,10,10);
    fill(0);
    rect(x-10, y-40,10,10);
    fill(128,64,0);
    rect(x, y-40,10,10);
    fill(0);
    rect(x+10, y-40,20,10);
    //8
    fill(0);
    rect(x-50, y-30,20,10);
    fill(128,64,0);
    rect(x-20, y-30,50,10);
    //9
    fill(0);    
    rect(x-50, y-20,20, 10); 
    fill(128,64,0);
    rect(x-20, y-20,10, 10);
    fill(0);
    rect(x-10, y-20,10, 10);    
    fill(128,64,0);
    rect(x, y-20,10, 10);
    fill(0);
    rect(x+10, y-20,10, 10);
    fill(128,64,0);
    rect(x+20, y-20,10, 10);   
    //10
    fill(0);
    rect(x-50, y-10,90, 10);    
    //11 중심
    fill(0);
    rect(x-40, y,30, 10);    
    fill(40,40,40);
    rect(x-10, y,10, 10);    
    rect(x, y,10, 10);
    rect(x+10, y,10, 10);
    fill(0);
    rect(x+20, y,30, 10);
    //12
    rect(x-30, y+10,30,10);
    fill(40,40,40);
    rect(x, y+10,10,10);
    fill(0);
    rect(x+10, y+10,50,10);
    //13
    rect(x-30, y+20,30,10);
    fill(40,40,40);
    rect(x, y+20,10,10);
    fill(0);
    rect(x+10, y+20,50,10);
    fill(128,64,0);
    rect(x+60, y+20,10,10);
    //14
    fill(0);
    rect(x-30, y+30,30,10);
    fill(40,40,40);
    rect(x, y+30,10,10);
    fill(0);
    rect(x+10, y+30,30,10);
    fill(128,64,0);
    rect(x+50, y+30,20,10);
    //15
    fill(0);
    rect(x-30, y+40,70,10);
    //16
    rect(x-30, y+50,20,10);
    fill(40,40,40);
    rect(x-10, y+50,10,10);
    fill(0);
    rect(x, y+50,10,10);
    fill(40,40,40);
    rect(x+10, y+50,10,10);
    fill(0);
    rect(x+20, y+50,20,10);
    //17
    rect(x-30, y+60,20,10);
    fill(40,40,40);
    rect(x-10, y+60,10,10);
    fill(0);
    rect(x, y+60,10,10);
    fill(40,40,40);
    rect(x+10, y+60,10,10);
    fill(0);
    rect(x+20, y+60,20,10);   
    //18
    rect(x-30, y+70,70,10);
    //19
    rect(x-20, y+80,20,10);
    rect(x+10, y+80,20,10);
}

function captain(x, y)
{
    //1
    fill(0,0,255);
    rect(x, y,10,10);
    fill(255);
    rect(x+10, y,10,10);
    fill(0,0,255);
    rect(x+20, y,10,10);
    //2
    fill(255,0,0);
    rect(x-50, y+10,20,10);
    fill(0,0,255);
    rect(x-10, y+10,10,10);
    fill(255);
    rect(x, y+10,30,10);
    fill(0,0,255);
    rect(x+30, y+10,10,10);
    //3 방패
    fill(255,0,0);
    rect(x-60, y+20,10,10);
    fill(255);
    rect(x-50, y+20,20,10);
    fill(255,0,0);
    rect(x-30, y+20,10,10);
    //3
    fill(0,0,255)
    rect(x-10, y+20,10,10);
    fill(0);
    rect(x, y+20,10,10);
    fill(0,0,255);
    rect(x+10, y+20,10,10);
    fill(0);
    rect(x+20, y+20,10,10);
    fill(0,0,255);
    rect(x+30, y+20,10,10);
    //4
    fill(255,0,0);
    rect(x-70, y+30,10,20);
    fill(255);
    rect(x-60, y+30,10,20);
    fill(0,0,255);
    rect(x-50, y+30,20,20);
    fill(255);
    rect(x-30, y+30,10,20);
    fill(255,0,0);
    rect(x-20, y+30,10,20);
    fill(0,0,255);
    rect(x-10, y+30,20,10);
    fill(255,183,183);
    rect(x+10, y+30,10,10);
    fill(0,0,255);
    rect(x+20, y+30,20,10);
    //5
    rect(x-10, y+40,10,10);
    fill(255,183,183);
    rect(x, y+40,30,10);
    fill(0,0,255);
    rect(x+30, y+40,10,10);
    //6
    fill(255,0,0);
    rect(x-60, y+50,10,10);
    fill(255);
    rect(x-50, y+50,30,10);
    fill(255,0,0);
    rect(x-30, y+50,10,10);
    fill(0,0,255);
    rect(x-20, y+50,30,10);
    fill(255);
    rect(x+10, y+50,10,10);
    fill(0,0,255);
    rect(x+20, y+50,40,10);
    //7
    fill(255,0,0);
    rect(x-50, y+60,20,10);
    fill(0,0,255);
    rect(x-30, y+60,30,10);
    fill(255);
    rect(x, y+60,30,10);
    fill(0,0,255);
    rect(x+30, y+60,40,10);
    //8
    rect(x-20, y+70,30,10);
    fill(255);
    rect(x+10, y+70,10,30);
    fill(0,0,255);
    rect(x+20, y+70,60,10);
    //9
    rect(x-20, y+80,10,10);
    fill(255);
    rect(x-10, y+80,10,20);
    fill(255,0,0);
    rect(x, y+80,10,20);
    rect(x+20, y+80,10,20);
    fill(255);
    rect(x+30, y+80,10,20);
    fill(0,0,255);
    rect(x+40, y+80,10,10);
    fill(128,64,0);
    rect(x+60, y+80,20,20);
    //10
    rect(x-10, y+100,50,10);
    //11
    fill(0,0,255);
    rect(x-10, y+110,50,10);
    //12
    rect(x-10, y+120,20,10);
    rect(x+20, y+120,20,10);
    //13
    fill(255,0,0);
    rect(x-10, y+130,20,10);
    rect(x+20, y+130,20,10);
    //14
    rect(x-20, y+140,30,10);
    rect(x+20, y+140,30,10);
}

function iron(x, y)
{
    //1
    fill(255,0,0);
    rect(x, y,30,10);
    fill(0,255,255);
    rect(x+70, y,10,10);
    //2
    fill(255,255,0);
    rect(x-10, y+10,50,10);
    //3
    rect(x-10, y+20,10,10);
    fill(0,255,255);
    rect(x, y+20,10,10);
    fill(255,255,0); //노랑
    rect(x+10, y+20,10,10);
    fill(0,255,255); //파랑
    rect(x+20, y+20,10,10);
    fill(255,255,0);
    rect(x+30, y+20,10,10);
    fill(255,0,0); //빨강
    rect(x+60, y+20,10,10);
    fill(0,255,255);
    rect(x+70, y+20,10,10);
    fill(255,0,0);
    rect(x+80, y+20,10,10);
    //4
    fill(255,255,0);
    rect(x-10, y+30,50,10);
    fill(255,0,0);
    rect(x+50, y+30,40,10);
    //5
    rect(x-10, y+40,10,10);
    fill(255,255,0);
    rect(x, y+40,30,10);
    fill(255,0,0);
    rect(x+30, y+40,60,10);
    //6
    rect(x-40, y+50,110,10);
    //7
    rect(x-40, y+60,10,10);
    fill(255,255,0);
    rect(x-30, y+60,20,10);
    fill(255,0,0);
    rect(x-10, y+60,10,20);
    fill(0,255,255);
    rect(x, y+60,30,20);
    fill(255,0,0);
    rect(x+30, y+60,10,20);
    fill(255,255,0);
    rect(x+40, y+60,20,10);
    //8
    fill(255,0,0);
    rect(x-50, y+70,30,10);
    fill(255,255,0);
    rect(x-20, y+70,10,10);
    rect(x+40, y+70,10,10);
    //9
    fill(255,0,0);
    rect(x-50, y+80,100,10);
    //10
    rect(x-50, y+90,20,10);
    fill(0,255,255);
    rect(x-30, y+90,10,10);
    fill(255,0,0);
    rect(x-10, y+90,50,10);
    //11
    rect(x-20, y+100,70,10);
    //12
    fill(255,255,0); //노랑
    rect(x-20, y+110,20,10);
    fill(255,0,0);
    rect(x, y+110,10,10);
    rect(x+20, y+110,10,10);
    fill(255,255,0);
    rect(x+30, y+110,20,10);
    //13
    fill(255,0,0);
    rect(x-20, y+120,10,10);
    fill(255,255,0);
    rect(x-10, y+120,20,10);
    rect(x+20, y+120,30,10);
    //14
    fill(255,0,0);
    rect(x-20, y+130,30,20);
    rect(x+20, y+130,30,20);
}

function hulk(x, y)
{
    //1
    fill(0);
    rect(x, y,90,20);
    //3
    rect(x, y+20,10,10);
    fill(0,128,0);
    rect(x+10, y+20,70,10);
    fill(0);
    rect(x+80, y+20,10,10);
    //4
    fill(0,128,0);
    rect(x, y+30,20,10);
    fill(0);
    rect(x+20, y+30,10,10);
    fill(0,128,0);
    rect(x+30, y+30,30,10);
    fill(0);
    rect(x+60, y+30,10,10);
    fill(0,128,0);
    rect(x+70, y+30,20,10);
    //5
    rect(x, y+40,90,10);
    //6
    rect(x, y+50,20,10);
    fill(0);
    rect(x+20, y+50,10,10);
    fill(255);
    rect(x+30, y+50,10,10);
    fill(0);
    rect(x+40, y+50,10,10);
    fill(255);
    rect(x+50, y+50,10,10);
    fill(0);
    rect(x+60, y+50,10,10);
    fill(0,128,0);
    rect(x+70, y+50,20,10);
    //7
    rect(x-20, y+60,130,10);
    //8
    rect(x-30, y+70,70,10);
    fill(0);
    rect(x+40, y+70,10,20);
    fill(0,128,0);
    rect(x+50, y+70,70,10);
    //9
    rect(x-30, y+80,10,10);
    fill(0);
    rect(x-20, y+80,10,10);
    fill(0,128,0);
    rect(x-10, y+80,50,10);
    rect(x+50, y+80,50,10);
    fill(0);
    rect(x+100, y+80,10,10);
    fill(0,128,0);
    rect(x+110, y+80,10,10);
    //10
    rect(x-50, y+90,40,10);
    fill(0);
    rect(x-10, y+90,50,10);
    fill(0,128,0);
    rect(x+40, y+90,10,10);
    fill(0);
    rect(x+50, y+90,50,10);
    fill(0,128,0);
    rect(x+100, y+90,40,10);
    //11
    rect(x-50, y+100,30,20);
    fill(0);
    rect(x-20, y+100,100,20);
    fill(0,128,0);
    rect(x-10, y+100,50,10);
    fill(0);
    rect(x+40, y+100,10,10);
    fill(0,128,0);
    rect(x+50, y+100,50,10);
    fill(0);
    rect(x+100, y+100,10,20);
    fill(0,128,0);
    rect(x+110, y+100,30,20);
    //12
    rect(x-10, y+110,40,10);
    fill(0);
    rect(x+30, y+110,10,10);
    fill(0,128,0);
    rect(x+40, y+110,10,10);
    fill(0);
    rect(x+50, y+110,10,10);
    fill(0,128,0);
    rect(x+60, y+110,40,10);
    //13
    fill(129,3,129);
    rect(x-20, y+120,130,20);
    //14
    fill(0,128,0);
    rect(x-10, y+140,50,10);
    rect(x+50, y+140,50,10);
}

function thor(x, y)
{
    //1
    fill(0,255,255);
    rect(x-20, y-50,10,10);
    //2
    rect(x-30, y-40,10,10);
    //3
    rect(x-40, y-30,10,10);
    //4
    fill(192,192,192); //회색
    rect(x-60, y-20,10,10);
    fill(0,255,255); //파랑
    rect(x-50, y-20,10,10);
    fill(192,192,192); //회색
    rect(x-40, y-20,10,10);
    fill(0,255,255); //파랑
    rect(x-30, y-20,10,10);
    fill(192,192,192); //회색
    rect(x-20, y-20,10,10);
    //5
    fill(192,192,192);
    rect(x-60, y-10,20,10);
    fill(0,255,255);
    rect(x-40, y-10,10,10);
    fill(192,192,192);
    rect(x-30, y-10,20,10);
    //6
    fill(192,192,192); //회색
    rect(x-60, y,10,10);
    fill(0,255,255); //파랑
    rect(x-50, y,10,10);
    fill(192,192,192); //회색
    rect(x-40, y,10,10);
    fill(0,255,255); //파랑
    rect(x-30, y,10,10);
    fill(192,192,192); //회색
    rect(x-20, y,10,10);
    fill(255,255,0); //노랑
    rect(x, y,50,10);
    //7
    fill(128,64,0);
    rect(x-40, y+10,10,20);
    fill(255,255,0);
    rect(x-10, y+10,20,10);
    fill(255,183,183);
    rect(x+10, y+10,10,10);
    fill(255,255,0);
    rect(x+20, y+10,10,10);
    fill(255,183,183);
    rect(x+30, y+10,10,10);
    fill(255,255,0);
    rect(x+40, y+10,20,10);
    //8
    rect(x-10, y+20,10,10);
    fill(255,183,183);
    rect(x, y+20,10,10);
    fill(0);
    rect(x+10, y+20,10,10);
    fill(255,183,183);
    rect(x+20, y+20,10,10);
    fill(0);
    rect(x+30, y+20,10,10);
    fill(255,183,183);
    rect(x+40, y+20,10,10);
    fill(255,255,0);
    rect(x+50, y+20,10,10);
    //9
    fill(255,183,183);
    rect(x-50, y+30,30,20);
    fill(255,255,0);
    rect(x-10, y+30,10,10);
    fill(255,183,183);
    rect(x, y+30,50,10);
    fill(255,255,0);
    rect(x+50, y+30,10,10);
    //10
    fill(255,183,183);
    rect(x-50, y+30,20,20);
    //11
    fill(192,192,192);
    rect(x-30, y+40,10,20);
    fill(255,0,0);
    rect(x-20, y+40,10,10);
    fill(255,255,0);
    rect(x-10, y+40,10,10);
    fill(128,64,0);
    rect(x, y+40,10,10);
    fill(255,183,183);
    rect(x+10, y+40,30,10);
    fill(128,64,0);
    rect(x+40, y+40,10,10);
    fill(255,255,0);
    rect(x+50, y+40,10,10);
    fill(255,0,0);
    rect(x+60, y+40,10,10);
    //12
    fill(192,192,192);
    rect(x-50, y+50,10,10);
    fill(128,64,0);
    rect(x-40, y+50,10,10);
    fill(40,40,40);
    rect(x-20, y+50,20,10);
    fill(192,192,192);
    rect(x, y+50,10,10);
    fill(128,64,0);
    rect(x+10, y+50,30,10);
    fill(192,192,192);
    rect(x+40, y+50,10,10);
    fill(40,40,40);
    rect(x+50, y+50,20,10);
    fill(255,0,0);
    rect(x+70, y+50,10,10);
    //13
    fill(192,192,192);
    rect(x-40, y+60,30,10);
    fill(40,40,40);
    rect(x-10, y+60,20,10);
    fill(128,128,128);
    rect(x+10, y+60,10,10);
    fill(40,40,40);
    rect(x+20, y+60,10,10);
    fill(128,128,128);
    rect(x+30, y+60,10,10);
    fill(40,40,40);
    rect(x+40, y+60,20,10);
    fill(192,192,192);
    rect(x+60, y+60,20,30);
    //14
    fill(192,192,192);
    rect(x-30, y+70,20,10);
    rect(x, y+70,10,10);
    rect(x+40, y+70,10,10);
    fill(40,40,40);
    rect(x-10, y+70,10,10);
    rect(x+20, y+70,10,10);
    rect(x+50, y+70,10,10);
    fill(128,128,128);
    rect(x+10, y+70,10,10);
    rect(x+30, y+70,10,10);
    //14
    fill(255,0,0);
    rect(x-30, y+80,20,60);
    fill(40,40,40);
    rect(x-10, y+80,20,10);
    rect(x+40, y+80,20,10);
    fill(128,128,128);
    rect(x+10, y+80,30,10);
    //15
    fill(40,40,40);
    rect(x-10, y+90,10,10);
    rect(x+10, y+90,10,10);
    rect(x+30, y+90,10,10);
    rect(x+50, y+90,10,10);
    fill(128,128,128);
    rect(x+20, y+90,10,10);
    fill(192,192,192);
    rect(x, y+90,10,10);
    rect(x+40, y+90,10,10);
    fill(255,183,183);
    rect(x+60, y+90,20,20);
    //16
    fill(128,128,128);
    rect(x-10, y+100,20,10);
    rect(x+40, y+100,20,10);
    fill(40,40,40);
    rect(x+10, y+100,30,10);
    //17
    fill(128,128,128);
    rect(x-10, y+110,70,10);
    fill(255,0,0);
    rect(x+60, y+110,20,30);
    //18
    rect(x+20, y+120,10,30);
    fill(128,128,128);
    rect(x-10, y+120,30,10);
    rect(x+30, y+120,30,10);
    //19
    fill(40,40,40)
    rect(x-10, y+130,30,20);
    rect(x+30, y+130,30,20);
    fill(255,0,0);
    rect(x-40, y+140,30,10);
    rect(x+60, y+140,30,10);
}