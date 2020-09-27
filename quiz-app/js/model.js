const model = {}
model.getData = async ()=>{
    let response = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => model.data = data.results)
}