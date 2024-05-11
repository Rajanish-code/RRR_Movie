const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
  fetch(url).then(res => res.json())
  .then(function(data){
  console.log(data.results);
  data.results.forEach(element => {
      const div_card = document.createElement('div');
      div_card.setAttribute('class', 'card');
      
      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');
      
      const div_column = document.createElement('div');
      div_column.setAttribute('class', 'column');
      
      
      const image = document.createElement('img');
      image.setAttribute('class', 'thumbnail');
      image.setAttribute('id', 'image');
      
      const title = document.createElement('h3');
      title.setAttribute('id', 'title');
      
      const center = document.createElement('center');

      
    
      const overview_card=document.createElement('div');
        overview_card.setAttribute('class','overview-card');
        
        const overview=document.createElement('div');
          overview.setAttribute('class','overview');

          const para=document.createElement('p');
          
          const popularity=document.createElement('div');
             popularity.setAttribute('class','popularity');

             const pop=document.createElement('h4');
             pop.setAttribute('id','pop');
             const pop1=document.createElement('h4');
             pop1.setAttribute('id','pop1');
             const pop2=document.createElement('h4');
             pop2.setAttribute('id','pop2')
             const pop3=document.createElement('h4');
             pop3.setAttribute('id','pop3');



             title.innerHTML = `${element.title}`;
      image.src = IMG_PATH + element.poster_path;
       para.innerHTML=`${element.overview}`;
       pop.innerHTML=`Popularity: ${element.popularity}`;
       pop1.innerHTML=`Release Date: ${element.release_date}`;
       pop2.innerHTML=`Vote Average: ${element.vote_average}`;
       pop3.innerHTML=`Vote Count: ${element.vote_count}`;



       

      center.appendChild(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);

      main.appendChild(div_row);
      pop2.appendChild(pop3);
      pop1.appendChild(pop2);
      pop.appendChild(pop1);
      popularity.appendChild(pop);
      overview.appendChild(para);
      overview.appendChild(popularity);
      
      overview_card.appendChild(overview);
      div_column.appendChild(overview_card);

     
  });
});
}

form.addEventListener("submit", (e) => {
e.preventDefault();
main.innerHTML = '';

const searchItem = search.value;

if (searchItem) {
  returnMovies(SEARCHAPI + searchItem);
    search.value = "";
}
});



