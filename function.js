var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
const searchBar = document.getElementById('search-bar');
const searchIcon = document.querySelector('.search-box img');
function performSearch(){
    const query = searchBar.value.trim();
   const videoPage = `html${query}.html`;
   window.location.href = videoPage;
}
searchIcon.addEventListener('click', performSearch);
searchBar.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        performSearch();
    }
})
