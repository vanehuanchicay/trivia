fetch('https://opentdb.com/api.php?amount=15&category=11&difficulty=medium')
.then((response)=>{
    console.log(response);
    return response.json();
  })

  .then((data)=>{
    console.log(data)
    let correctAnswers = 0;
    let counter = 0; 
    $('.multiple_option').on('click', function(){
      $('.select_title').hide();
      $('.other_option').hide(); // ocutar true/false selección
      $('.multiple_option').hide(); // ocultar multiple selección
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

      $('.info').append(`<h5> Category: ${category} </h5> 
        <h5> Difficulty: ${difficult}</h5><h5> Type: ${typeOp}</h5>
        <h3>${question}</h3><div>
        <div><button class="options">${allAnswers[0]}</button></div>
        <div><button class="options" >${allAnswers[1]}</button></div>
        <div><button class="options" >${allAnswers[2]}</button></div>
        <div><button class="options" >${allAnswers[3]}</button></div>`)

      $('.options').on('click', function(){ // evento para respuestas
        if($(this).text() === data.results[counter].correct_answer  && counter !== 15){
          $('.info').empty(); // vaciar div contenedor info
          $('.multiple_option').show(); // vuelvo a mostrar mi boton
          $('.multiple_option').text('Next Question'); // cambio contenido del boton
          $('.info').append(`<h4>Correct answer!</h4>`);

          correctAnswers ++; console.log(correctAnswers) //contador de respuestas correctas
        }
        if($(this).text() !== data.results[counter].correct_answer  && counter !== 15){
          $('.info').empty();
          $('.multiple_option').show();
          $('.multiple_option').text('Next Question');
          $('.info').append(`<h4>Aww wrong answer!</h4><h5>The Correct Answer is
          ${data.results[counter].correct_answer}</h5>`);
          
        }counter ++; // contador general

        if(counter === 15){
          $('.info').empty();
          $('.multiple_option').hide();
          $('.info').append(`<button class="go_back">BACK TO HOME</button>
          <h4>Your results</h4><h5>You got ${correctAnswers} out of 5</h5>`)
         
        } 
         $('.go_back').on('click', function() {
          console.log('estoy funcionando')
          location.reload();
        });

      }); //end answers function

  }) //end multiple_option
}); //end then data



  // TRUE/FALSE OPTION

fetch('https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean')
.then((response)=>{
    console.log(response);
    return response.json();
  })

  .then((data)=>{
    console.log(data)
    let correctAnswers = 0;
    let counter = 0; 
    $('.other_option').on('click', function(){
      $('.select_title').hide();
      $('.multiple_option').hide(); // ocutar multiple selección
      $('.other_option').hide(); // ocultar true/false selección
      $('.info').empty(); // ocultar info 
      let category = data.results[counter].category
      let difficult = data.results[counter].difficulty
      let question = data.results[counter].question
      let allAnswers = [];

      allAnswers.push(data.results[counter].correct_answer)
      allAnswers.push(data.results[counter].incorrect_answers[0])
      allAnswers.sort();

      $('.info').append(`<h5> Category: ${category} </h5> 
        <h5> Difficulty: ${difficult}</h5>
        <h3>${question}</h3><div>
        <div><button class="options">${allAnswers[0]}</button></div>
        <div><button class="options" >${allAnswers[1]}</button></div>
       `);

      $('.options').on('click', function(){ // evento para respuestas
        if($(this).text() === data.results[counter].correct_answer  && counter !== 15){
          $('.info').empty(); // vaciar div contenedor info
          $('.other_option').show(); // vuelvo a mostrar mi boton
          $('.other_option').text('Next Question'); // cambio contenido del boton
          $('.info').append(`<h4>Correct answer!</h4>`);

          correctAnswers ++; console.log(correctAnswers) //contador de respuestas correctas
        }
        if($(this).text() !== data.results[counter].correct_answer  && counter !== 15){
          $('.info').empty();
          $('.other_option').show();
          $('.other_option').text('Next Question');
          $('.info').append(`<h4>Aww wrong answer!</h4><h5>The Correct Answer is
          ${data.results[counter].correct_answer}</h5>`);
          
        }counter ++; // contador general

        if(counter === 15){
          $('.info').empty();
          $('.multiple_option').hide();
          $('.info').append(`<button class="go_back">BACK TO HOME</button>
          <h4>Your results</h4><h5>You got ${correctAnswers} out of 15</h5>`)
         
        } 
         $('.go_back').on('click', function() {
          console.log('estoy funcionando')
          location.reload();
        });

      }); //end answers function

  }) //end multiple_option
}); //end then data
