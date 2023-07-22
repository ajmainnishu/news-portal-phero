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
            <a class="btn" onclick=categoryItemId('${name.category_id}')>${name.category_name}</a>
        `
        navbarItems.appendChild(navbarDiv);
    })
    
}


const categoryItemId = async id => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        displayCategoryItemId(data.data)
    }
    catch (error) {
        console.log(error);
    }
}

const displayCategoryItemId = data => {
    // console.log(data)
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.textContent = '';
    data.forEach(data => {
        console.log(data);
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('row');
        categoryDiv.classList.add('mb-3');
        categoryDiv.innerHTML = `
            <div class="col-3">
                <img class="img-fluid" src="${data.thumbnail_url}" alt="">
            </div>
            <div class="col-9">
                <h3>${data.title}</h3>
                <p>${data.details}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <div>
                            <img src="./Rectangle 19.png" alt="">
                        </div>
                        <div class="ps-2">
                            <p class="mb-0">${data.author.name}</p>
                            <p class="mb-0">${data.author.published_date}</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div>h1</div>
                        <p class="mb-0">1.5M</p>
                    </div>
                    <div>
                        <p class="mb-0">star</p>
                    </div>
                    <div>
                        <p class="mb-0">arrow</p>
                    </div>
                </div>
            </div>
        `
        categoryContainer.appendChild(categoryDiv);
    })
}


loadingNavbarFetchData();