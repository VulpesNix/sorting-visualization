// Kayra BOLAT
let arr = [];
let ptr = [];
let P;
let R;
let exnum = 0;
let compnum = 0;
async function swap(arr,x,y){
    exnum++;
    let temp;
    temp = arr[x]
    arr[x] = arr[y];
    arr[y] = temp;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function shuf(arr){
    for(let i = 0;i < 5000;i++){
        let r = floor(random(arr.length-1));
        let r1 = floor(random(arr.length-1));
        await swap(arr,r,r1);
    }
    shuff = true
}


async function bubble(arr){
    for(let i = arr.length;i >= 0;i--){
        ptr[i] = 1;
        for(let j = 0;j < i-1;j++){
            compnum++;
            if(arr[j]>arr[j+1]){
               await swap(arr,j,j+1);
            }
        }await sleep(3);
        ptr[i] = 0;
    }
}
async function partion(arr,start,end){
    let r = end;
    let pivot = arr[r];
    ptr[r] = 1;
    let index = start;
    for(let i = start;i<end;i++){
        if(arr[i] < pivot){
            compnum++;
            await swap(arr,i,index);
            await sleep(1);
            index++;
        }
    } 
    await swap(arr,r,index);
    ptr[r] = 0;
    return index;
}
async function quicksort(arr,start,end){
    if(start >= end){
        compnum++;
        return;
    }
    let index = await partion(arr,start,end);
    await Promise.all([
        quicksort(arr, start, index - 1),
        quicksort(arr, index + 1, end)
      ]);
}
async function pigeon(arr){
    let max = arr[0];
    let min = arr[0]
    for(let i = 1;i < arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
            ptr[i] = 1;
        }
        else if(arr[i] < min){
            min = arr[i];
            ptr[i] = 1;
        }
        await sleep(1);
        ptr[i] = 0;
        compnum += 2;
    }
    let holes = [];
    for(let i = 0;i < max-min+1;i++){
        holes[i] = [];
    }
    for(let i = 0;i < arr.length;i++){
        holes[arr[i]-min].push(arr[i]);
    }
    for(let i = 1;i< holes.length;i++){
        holes[0].push(holes[i]);
    }
    for(let i = 0;i < arr.length;i++){
        exnum++;
        arr[i] = holes[0][i];
        await sleep(1);
    }
}
async function selection(arr){
    let minindex;
    for(let i = 0;i<arr.length-1;i++){
        minindex = i
       for(let j = i+1;j < arr.length;j++){
            if(arr[j]<arr[minindex]){
               min = arr[j];
               minindex = j;
           }
       }
       await swap(arr,i,minindex);
       ptr[minindex] = 1;
       await sleep(1);
       ptr[minindex] = 0;
   }
}