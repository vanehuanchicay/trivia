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
    let question = data.results[0].question
    let allAnswers = [];

    allAnswers.push(data.results[0].correct_answer)
    allAnswers.push(data.results[0].incorrect_answers[0])
    allAnswers.push(data.results[0].incorrect_answers[1])
    allAnswers.push(data.results[0].incorrect_answers[2])
    allAnswers.sort();

    console.log(allAnswers)
    
    $('.info').append(`<h5> Category: ${category} </h5> 
     <h5> Difficulty: ${difficult} </h5> 
     <h3>${question}</h3>
     <button class="options">${allAnswers[0]}</button><br>
     <button class="options">${allAnswers[1]}</button><br> 
     <button class="options">${allAnswers[2]}</button><br>
     <button class="options">${allAnswers[3]}</button>`)

    /* problemas con el true y false
     allAnswers.forEach(element =>{
        if(this === undefined){
            element.hide();     
        }
    })  
     */ 

    // validar si la respuesta es correcta 
    $('.options').on('click',function(){ 
        if($(this).text() === data.results[0].correct_answer){
          $('.info').empty(); // vaciar div contenedor info
          $('.info').append(`<h4>Correct answer!</h4><button class="next_button">Next Question</button`);
        }else{ 
          if($(this).text() !== data.results[0].correct_answer){
            $('.info').empty();
            $('.info').append(`<h4>Aww wrong answer!</h4><h5>The Correct Answer is${data.results[0].correct_answer}</h5>
              <button class="next_button">Next Question</button`);
          } 
        }  
        $('.next_button').on('click', function(){
      console.log('funciona')

        })    
    }) // end function




  }); 

