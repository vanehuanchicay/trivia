fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium')
.then((response)=>{
    console.log(response);
    return response.json();
  })

  .then((data)=>{
    console.log(data)
    let category = data.results[0].category
    let typeOp = data.results[0].type
    let difficult = data.results[0].difficulty
    let questionRe = data.results[0].question
    let answerCorrect = data.results[0].correct_answer
    let incorrectAnswers = data.results[0].incorrect_answers
    

    $('.info').append('<h5> Category: '+ category+ '</h5>' + 
     '<h5> Difficulty: '+ difficult + '</h5>' + '<h3>' + questionRe +'</h3>' +
     '<ul class="answers_wrong"><li>'+ answerCorrect + '</li></ul>');

   for(let i = 0 ; i < incorrectAnswers.length; i ++){
     $('.answers_wrong').append('<li>'+ incorrectAnswers[i]+ '</li>')
    }
   
});

