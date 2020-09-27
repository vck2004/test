// 1
function mergeArray(A1,A2){
    let result_arr = []
    for(let i=0;i<A1.length;i++){
        if(result_arr.indexOf(A1[i]) == -1){
            result_arr.push(A1[i])
        }
    }
    for(let i=0;i<A2.length;i++){
        if(result_arr.indexOf(A2[i]) == -1){
            result_arr.push(A2[i])
        } else {
            result_arr.splice(result_arr.indexOf(A2[i]),1)
        }
    }
    return result_arr
}
const A1 = [1,2,'a']
const A2 = [1,3,'b']
console.log(mergeArray(A1,A2))
// 2

const teams = [{
    name: "Arsernal",
    points: 99,
    GD: 45
},{
    name: "Chelsea",
    points: 75,
    GD: 39
},{
    name: "Manchester United",
    points: 60,
    GD: 29
},{
    name: "Liverpool",
    points: 88,
    GD: 39
}]
function compare( a, b ) {
    if ( a.points < b.points ){
      return 1;
    }
    if ( a.points > b.points ){
      return -1;
    }
    return 0;
}

console.log(teams.sort(compare));