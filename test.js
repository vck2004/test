// A1
function findOppositeNum(n,firstNum){
    let Numbers = [];
    let result = 0;
    for (let i = 0;i<n;i++){
        Numbers.push(i);
    }
    result = firstNum + Math.floor(Numbers.length/2)
    if(result>Numbers[Numbers.length-1]){
        result-=Numbers.length;
    }
    console.log(result);
}
findOppositeNum(9,0);

// A2
const s1 = 'super';
const s2 = 'tower';
let s1Ar = s1.split('');
let s2Ar = s2.split('');
let result = [];
for(let i=0;i<s1Ar.length;i++){
    result.push(s1Ar[i]);
    result.push(s2Ar[i]);
}
console.log(result);

// B
const WorkBtn = document.getElementById('WorkBtn');
const ContactBtn = document.getElementById('ContactBtn');
const content = document.getElementById('content');
WorkBtn.addEventListener('click',()=>{
    content.innerHTML = `<div>These are some of my projects</div>`;
})
ContactBtn.addEventListener('click',()=>{
    content.innerHTML = `<div id="Contact">Let's work together...</div>`;
})