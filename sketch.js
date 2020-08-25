// Kayra BOLAT
let select;
let vis;
let max = 2048;
function setup(){
    createCanvas(1200,600,P2D);
    P = createP();
    R = createP();
    strokeWeight(1);
    arr = new Array(max);
    for(let i = 0;i < max;i++){
            arr[i] = i;
            ptr.push(0);
    }
    let sort = createButton("Sort");
    let shuffle = createButton("Shuffle");
    R.html("Shuffling");
    select = createSelect();
    select.option("insertion");
    select.option("bubble");
    select.option("quick");
    select.option("selection");
    select.option("pigeonhole");
    select.selected("quick");
    vis = createSelect();
    vis.option("line");
    vis.option("dots");
    vis.option("spiral");
    vis.option("color circle");
    vis.option("color lines");
    vis.selected("line");    
    shuffle.mousePressed(reset);
    sort.mousePressed(sorting);
}

function sorting(){
    switch(select.value()){
        case "bubble":
            comb(arr);
            break;
        case "quick":
            quicksort(arr,0,max-1);
            break;
        case "selection":
            selection(arr);
            break;
        case "pigeonhole":
            pigeon(arr);
            break;
        case "insertion":
            insertion(arr);           
    }
}
async function reset(){
    compnum = 0;
    exnum = 0;
    for(let i = 0;i < max;i++){
        arr[i] = i;
    }
    shuf(arr);
    compnum = 0;
    exnum = 0;
}
function draw(){;
    P.html(int(frameRate()));
    background(0,0,0);
         R.html("total exchange = "+(exnum)+"<br>"+"total comparison = "+compnum);
    switch(vis.value()){
        case "line":
            linegraph(arr);
            break;
        case "dots":
            dots(arr);
            break;
        case "color circle":
            colorcircle(arr);
            break;
        case "color lines":
            colored(arr);
            break;
        case "spiral":
            spiral(arr);
            break;
    }
}

function linegraph(){
    stroke(255,255,255);
    for(let i = 0;i < arr.length;i++){
        let x = map(i,0,arr.length,0,width);
        let y = map(arr[i],0,max,0,height);
        y = height-y;
        line(x,y,x,height);
    }

}
function colored(){
    colorMode(HSB);
    for(let i = 0;i < arr.length;i++){
        let x = map(i,0,arr.length,0,width);
        let y = map(arr[i],0,max,0,height);
        let c = map(y,0,height,0,360);
        stroke(c,255,255);
        y = height-y;
        line(x,y,x,height);
    }
}
function spiral(){
    angleMode(DEGREES);
    translate(width/2,height/2);
    stroke(255);
    for(let i = 0;i < arr.length;i++){
        let theta = map(i,0,max,-90,5*360-90)
        let ro = map(arr[i],0,max,0,height/2-10);
        let x = ro * cos(theta);
        let y = ro * sin(theta);
        point(x,y);
    }
}
function dots(){
    stroke(255);
    strokeWeight(2);
      for(let i = 0;i < arr.length;i++){
          let x = map(arr[i],0,max,0,width);
          let y = map(i,0,max,0,height);
          point(x,height-y);
      }
}
function colorcircle(){
    angleMode(DEGREES);
    colorMode(HSB);
    translate(width/2,height/2);
    for(let i = 0;i < arr.length;i++){
        let ro = floor(height/2) - 10;
        let theta = map(i,0,max,-90,270)
        let hu = map(arr[i],0,max,0,360);
        let x = ro * cos(theta);
        let y = ro * sin(theta);
        stroke(hu,255,255);
        
        line(0,0,x,y);
    }
}
