fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium')
.then((response)=>{
    console.log(response);
    return response.json();
  })

  .then((data)=>{
    console.log(data)
    $('.enter_button').on('click', function(){
      $('.enter_button').hide(); // ocultar boton
      let counter = 0; 
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
        <h5> Difficulty: ${difficult} </h5> 
        <h3>${question}</h3><div>
        <div>
        <button class="options">${allAnswers[counter,0]}</button>
        </div>
        <div>
        <button class="options" >${allAnswers[counter,1]}</button><br>
        </div>
        <div>
        <button class="options" >${allAnswers[counter, 2]}</button><br>
        </div>
        <div>
        <button class="options" >${allAnswers[counter, 3]}</button><br>
        </div>`)

      $('.options').on('click', function(){ // evento para respuestas
        if($(this).text() === data.results[counter].correct_answer){
          console.log('funciona')
          $('.info').empty(); // vaciar div contenedor info
          $('.enter_button').text('Next Question'); // cambio contenido del boton
          $('.enter_button').show(); // vuelvo a mostrar mi boton
          $('.info').append(`<h4>Correct answer!</h4>`);
          
         
          counter ++ 
        }

      });



      /*

      $('.info').append(`<h5> Category: ${category} </h5> 
       <h5> Difficulty: ${difficult} </h5> 
       <h3>${question}</h3>

       <button class="options">${allAnswers[counter]}</button><br>
       <button class="options">${allAnswers[counter]}</button><br> 
       <button class="options">${allAnswers[counter]}</button><br>
       <button class="options">${allAnswers[counter]}</button>`)


      $('.options').on('click',function(){ // evento para respuestas
        if($(this).text() === data.results[counter].correct_answer){
          console.log('funciona')
          $('.enter_button').show(); // vuelvo a mostrar mi boton
          $('.enter_button').text('Next Question'); // cambio contenido del boton
          $('.info').empty(); // vaciar div contenedor info
          $('.info').append(`<h4>Correct answer!</h4>`);

        } counter ++ 

        if($(this).text() !== data.results[counter].correct_answer){
          $('.info').empty();
          $('.enter_button').show();
          $('.enter_button').text('Next Question');
          $('.info').append(`<h4>Aww wrong answer!</h4><h5>The Correct Answer is
            ${data.results[counter].correct_answer}</h5>`);

        }counter ++;

      })  // end evento onclick answers
    */  
  }) //end enter button
  
}); //end then data

