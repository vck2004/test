const view = {}
view.setActiveScreen = ()=>{
    document.getElementById('app').innerHTML = component.quizPage
    document.querySelector('.question_number').innerHTML = 'Question 1'
}