

function search(){
   let url="https://api.dictionaryapi.dev/api/v2/entries/en/"
    let word= document.getElementById("word").value;
    url=url+word;
    fetch(url).then((result1)=>result1.json())
              .then((result2)=> {
                result(result2)})
              .catch((err)=>{
                let display=document.getElementById("result");
    display.innerHTML=`
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Enter valid word!</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
              })
}
function result(meaning){
    let display=document.getElementById("result");
    display.innerHTML=`
    <h1>${meaning[0].word}</h1>
    <p>/${meaning[0].phonetic}/</p>

<ol>
    <li><h6>Defination: ${meaning[0].meanings[0].definitions[0].definition}</h6>
    <p>"${meaning[0].meanings[0].definitions[0].example}"</p>
    <p>Synonyms:${meaning[0].meanings[0].definitions[0].synonyms}</p></li>

    <li><h6>Defination: ${meaning[0].meanings[0].definitions[1].definition}</h6>
    <p>"${meaning[0].meanings[0].definitions[1].example}"</p> 
    <p>Synonyms:${meaning[0].meanings[0].definitions[1].synonyms}</p></li>

</ol>

<audio controls>
  <source src=${meaning[0].phonetics[0].audio}
Your browser does not support the audio element.
</audio>
    `
}