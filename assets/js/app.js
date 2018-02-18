fetch('https://opentdb.com/api.php?amount=15&category=11&difficulty=medium')
.then((response)=>{
    console.log(response);
    return response.json();
  })

  .then((data)=>{
    console.log(data)
    let counter = 0; 
    $('.enter_button').on('click', function(){
      $('.enter_button').hide(); // ocultar boton
      $('.info').empty(); // ocultar info 
      
      let category = data.results[counter].category
      let typeOp = data.results[counter].type
      let difficult = data.results[counter].difficulty
      let question = data.results[counter].question
      let allAnswers = [];

      allAnswers.push(data.results[counter].correct_answer)
      allAnswers.push(data.results[counter].incorrect_answers[0])
      allAnswers.push(data.results[counter].incorrect_answers[1])
      allAnswers.push(data.results[counter].incorrect_answers[2])
      allAnswers.sort();

      console.log(allAnswers)

      $('.info').append(`<h5> Category: ${category} </h5> 
        <h5> Difficulty: ${difficult}</h5><h3>${question}</h3><div>
        <div><button class="options">${allAnswers[0]}</button></div>
        <div><button class="options" >${allAnswers[1]}</button></div>
        <div><button class="options" >${allAnswers[2]}</button></div>
        <div><button class="options" >${allAnswers[3]}</button></div>`)

      $('.options').on('click', function(){ // evento para respuestas
        if($(this).text() === data.results[counter].correct_answer  && counter !== 15){
          $('.info').empty(); // vaciar div contenedor info
          $('.enter_button').show(); // vuelvo a mostrar mi boton
          $('.enter_button').text('Next Question'); // cambio contenido del boton
          $('.info').append(`<h4>Correct answer!</h4>`);
          
        }counter ++; console.log(counter)
        if($(this).text() !== data.results[counter].correct_answer  && counter !== 15){
        $('.info').empty();
        $('.enter_button').show();
        $('.enter_button').text('Next Question');
        $('.info').append(`<h4>Aww wrong answer!</h4><h5>The Correct Answer is
          ${data.results[counter].correct_answer}</h5>`);

        }counter ++;console.log(counter)

        if(counter === 15){
          console.log('juego terminado')
        }

      }); //end answers function

  }) //end enter button
  
}); //end then data

