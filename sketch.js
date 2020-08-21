// Kayra BOLAT
let select;
async function setup(){
    createCanvas(600,600);
    P = createP();
    R = createP();
    strokeWeight(1);
    arr = new Array(width);
    for(let i = 0;i < width;i++){
            arr[i] = (min(i,height));
            ptr.push(0);
    }
    R.html("Shuffling");
    select = createSelect();
    select.option("bubble");
    select.option("quick");
    select.option("selection");
    select.option("pigeonhole");
    select.selected("quick");
    let sort = createButton("Sort");
    let shuffle = createButton("Shuffle");
    shuffle.mousePressed(reset);
    sort.mousePressed(sorting);

}

function sorting(){
    switch(select.value()){
        case "bubble":
            bubble(arr);
            break;
        case "quick":
            quicksort(arr,0,arr.length-1);
            break;
        case "selection":
            selection(arr);
            break;
        case "pigeonhole":
            pigeon(arr);
            break;
    }
}
async function reset(){
    compnum = 0;
    exnum = 0;
    for(let i = 0;i < width;i++){
        arr[i] = (min(i,height));
    }
    shuf(arr);
    compnum = 0;
    exnum = 0;
}
function draw(){
    P.html(int(frameRate()));
    background(0,0,0);
    for(let i = 0;i < width;i++){
        if(ptr[i] === 1){
            stroke(255,0,0);
            strokeWeight(5);
        }
        else{
            stroke(255,255,255);
        }
        line(i,height,i,height - arr[i]);
        strokeWeight(1);


    }
         R.html("total exchange = "+(exnum)+"<br>"+"total comparison = "+compnum);
}



