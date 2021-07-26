//Initialize the news API parameters
let source = 'four-four-two';
let apiKey = 'e2b0764d10f34519a1fb10f5c082dcdf';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');


//Create an AJAX GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `
            <div class="mx-2 my-3 card">
            <img src="${element["urlToImage"]}" class="img-fluid mr-3 mx-3 my-3" alt="Responsive image">
    <div class="media-body">
        <div class="card-header" id="heading${index}">
            <h1 class="mb-0 cardTxt">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="true" aria-controls="#collapse${index}">
                  <p> ${element["title"]} </p>
                </button>
            </h1>
        </div>
        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body">
                ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more here</a>
            </div>
        </div>
    </div>
</div>
 `;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();



//<img src=${element["urlToImage"]} class="mr-3 mx-3 my-3" alt="..."></img> 




//----------- for Searching option---------------

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputValue = search.value;
    console.log('Input event fired!', inputValue);
    let cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputValue)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})





