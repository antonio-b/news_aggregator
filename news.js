
const searchForm = document.querySelector('.search');
searchForm.addEventListener('submit',retrieve);
const textForm = document.querySelector('.text');
function retrieve(e){

    if (textForm.value === ""){
        alert("Please enter in topic");
    } else {

  const images = document.querySelector(".images");
  const newsTitle = document.querySelector(".news_title");
  const descriptions = document.querySelector(".description");
  const sources = document.querySelector(".source");
  const datePublished = document.querySelector(".date_published");
  const contain = document.querySelector(".container");
  const  artic = document.querySelector(".article");

  contain.innerHTML = " ";

  e.preventDefault();
  let topic = textForm.value;
  //console.log(topic);
  fetch(`https://gnews.io/api/v4/search?q=${topic}&lang=en&country=us&sortby=publishedAt&token=851388045174533e89014c00a6275223`)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          // console.log(data);
          data.articles.forEach(article =>{
            let createArticle = document.createElement("div");
            let cc = createArticle.setAttribute("class","article");

            let createImage = document.createElement("div");
            let ci = createImage.setAttribute("class","images");
            // let cp = createImage.createElement("a");
            // let cp1 = cp.setAttribute("href",article.url)

            let createNews = document.createElement("div");
            let cn = createNews.setAttribute("class","news_title");

            let createA = document.createElement("a");
            let title = document.createTextNode(article.title);
            let createB = createA.setAttribute("href",article.url);

            let createDescription = document.createElement("div");
            let cd = createDescription.setAttribute("class","description");

            let createSource = document.createElement("div");
            let cs = createSource.setAttribute("class", "source");

            // let createDate = document.createElement("div");
            // let cda = createDate.setAttribute("class","date_published");

            let sseimage = document.createElement("img");
            let sse = sseimage.setAttribute("src", article.image);

               createArticle.style.backgroundColor = "#dfe2e8";
               createArticle.style.border = "1px solid black";
               createArticle.style.boxShadow = "2px 5px";

               createA.appendChild(title);
               createNews.appendChild(createA);

               createImage.appendChild(sseimage);
               createDescription.innerHTML = article.description;
               createSource.innerHTML = article.source.name;
               createArticle.appendChild(createImage);
               createArticle.appendChild(createNews);
               createArticle.appendChild(createDescription);
               createArticle.appendChild(createSource);
               document.querySelector(".container").appendChild(createArticle);



          });
      });



}
}
