const loadingNavbarFetchData = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`;
        const res = await fetch(url);
        const data = await res.json();
        displayNavbarFetchData(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }
}

const displayNavbarFetchData = names => {
    const navbarItems = document.getElementById('navbar-items');
    names.forEach(name => {
        // console.log(name.category_id)
        const navbarDiv = document.createElement('div');
        navbarDiv.innerHTML = `
            <a class="btn">${name.category_name}</a>
        `
        navbarItems.appendChild(navbarDiv);
    })
    
}






loadingNavbarFetchData();