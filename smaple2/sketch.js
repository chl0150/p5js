function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background('#D6DCDF');
    rectMode(CENTER);
    
    noStroke();
    
    //배경
    fill('#E4EEF2');
    //ellipse(300,500,700,600);
    
    //머리카락
    fill('#524a43');
    rect(300,280,240,300);
    ellipse(220,200,110,250);
    ellipse(380,200,110,250);
    
    
    //옆머리
    fill('#524a43');
    arc(205,220,100,250,radians(100),radians(260));
    arc(395,220,100,250,radians(260),radians(100));
    
    //귀
    fill('#fff0e6');
    arc(416,220,40,50,radians(270),radians(90));
    arc(184,220,40,50,radians(90),radians(270));
    fill('#f2dfd3');
    arc(416,220,30,25,radians(270),radians(90));
    arc(184,220,30,25,radians(90),radians(270));
    
    
    //뒷머리 음영
    noStroke();
    fill('#47423E');
    rect(300,350,200,150);
    
    
    //목
    noStroke();
    strokeWeight(2);
    fill('#f2dfd3');
    rect(300,350,80,100);
    fill('#e6cebe');
    arc(340,330,160,60,radians(90),radians(180));
    
    //얼굴
    fill('#fff0e6');
    arc(300,225,225,250,radians(10),radians(170));
    rect(300,195,234,100);
    arc(300,150,235,230,radians(170),radians(10));
    
  
    //머리카락
    fill('#524a43');
    arc(300,145,240,220,radians(170),radians(10));
    fill('#fff0e6');
    arc(300,230,300,220,radians(210),radians(330));
    
    //얼굴 음영
    noStroke();
    fill('#f2dfd3');
    arc(270,185,140,120,radians(200),radians(310));
    fill('#fff0e6');
    ellipse(275,160,140,50);
    
    fill('#f2dfd3');
    arc(340,150,60,50,radians(210),radians(360));
    fill('#fff0e6');
    ellipse(335,165,100,50);
    
    //앞머리
    strokeWeight(5);
    noFill();
    stroke('#524a43');
    arc(230,150,200,60,radians(220),radians(350));
    arc(280,225,200,210,radians(170),radians(280));
    fill('#524a43');
    triangle(180,190,220,135,175,160);
    
    noFill();
    stroke('#524a43');
    arc(335,135,40,10,radians(180),radians(340));
    arc(340,280,150,300,radians(270),radians(350));
    
    arc(425,223,20,60,radians(100),radians(260));
    fill('#524a43');
    triangle(410,225,420,160,390,145);
    triangle(315,130,240,115,350,120);
    triangle(385,135,390,165,360,130);
    ellipse(350,125,30,10);
    
    //눈썹
    noFill();
    stroke('#5e5750');
    arc(245,213,100,50,radians(210),radians(310));
    arc(355,213,100,50,radians(230),radians(330));
    
  
    //눈
    noStroke();
    
    fill('#4E4945');
    ellipse(235,220,40,35);
    ellipse(365,220,40,35);
    
    fill('#fff0e6');
    ellipse(235,226,40,35);
    ellipse(365,226,40,35);
    
    fill('#4E4945');
    ellipse(240,221,30,33);
    ellipse(360,221,30,33);
    
    fill(255);
    ellipse(244,215,10,10);
    ellipse(356,215,10,10);
   
    //볼터치
    fill('#FCE2D8');
    ellipse(380,260,40,30);
    ellipse(220,260,40,30);
  
    
    //코
    stroke('#f2dfd3');
    noFill();
    line(310,205,312,250);
    arc(302,250,20,20,radians(340),radians(130));
    
    //입
    noStroke();
    fill('#F4C7B6');
    arc(300,290,50,30,radians(0),radians(180));
    
    
    //뒷머리
    stroke('#524a43');
    noFill();
    arc(140,295,50,80,radians(335),radians(60));
    fill('#524a43');
    triangle(180,290,180,335,165,315);
    arc(178,343,50,80,radians(70),radians(240));
    triangle(155,415,165,375,195,400);
    ellipse(175,325,30,40);
    noFill();
    arc(135,380,50,100,radians(335),radians(80));
    
    arc(446,335,50,80,radians(100),radians(240));
    fill('#524a43');
    arc(424,405,50,80,radians(300),radians(60));
    triangle(418,345,440,375,419,422);
   
    //머리카락 음영
    stroke('#6E635A');
    line(190,110,215,90);
    line(215,90,190,125);
    line(190,125,232,99);
    line(232,99,200,135);
    line(200,135,240,115);
    
    line(378,138,399,168);
    line(399,168,388,125);
    line(388,125,410,156);
    line(410,156,394,110);
    line(394,110,419,143);
    
    noFill();
    arc(160,295,50,80,radians(335),radians(60));
    arc(199,343,50,80,radians(120),radians(240));
    //arc(185,430,50,100,radians(280),radians(80));
    
    arc(433,335,50,80,radians(110),radians(240));
    //arc(410,403,50,80,radians(300),radians(60));
    
    
   //윗머리 음영
    strokeWeight(10);
    stroke('#47423E');
    noFill();
    arc(345,105,70,110,radians(154),radians(260));
    
  
  //몸
    strokeWeight(2);
    noStroke();
    fill('#50577C');
    ellipse(300,480,370,200);
    rect(300,580,370,200);
    
    fill('#f2dfd3');
    triangle(300,430,260,380,340,380);
    fill('#e6cebe');
    triangle(340,380,300,430,284,410);
    //triangle(260,380,300,430,316,410);
    
    fill('#484E6B');
    ellipse(160,480,70,70);
    rect(160,540,70,120);
    ellipse(440,480,70,70);
    rect(440,540,70,120);  
    
    fill('#50577C');
    ellipse(150,480,70,70);
    rect(150,540,70,120);
    ellipse(450,480,70,70);
    rect(450,540,70,120);
    
    if(mouseIsPressed) {
      //왼쪽 머리카락
      noFill();
      strokeWeight(5);
      stroke('#524a43');
      arc(215,210,130,200,radians(120),radians(240));
      arc(125,280,60,200,radians(300),radians(80));
      arc(154,408,50,100,radians(125),radians(250));
      fill('#524a43');
      ellipse(158,203,7,73);
      ellipse(160,290,8,70);
      quad(135,434,131,389,149,342,160,395);
      
      //오른쪽 머리카락
      
    }
    
    if(keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        //
        
      }
    }
  
    
  }