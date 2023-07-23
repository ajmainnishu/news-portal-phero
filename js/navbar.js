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
            <a class="bt p-2 color-text-gray text-decoration-none navbar-hover" onclick=categoryItemId('${name.category_id}')>${name.category_name}</a>
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
        categoryDiv.classList.add('align-items-center');
        categoryDiv.classList.add('mb-4');
        categoryDiv.classList.add('py-4');
        categoryDiv.classList.add('px-2');
        categoryDiv.classList.add('bg-white');
        categoryDiv.classList.add('rounded-3');
        categoryDiv.innerHTML = `
        <div class="col-12 col-md-3 text-center text-md-start">
            <img class="img-fluid rounded-3" src="${data.thumbnail_url}" alt="">
        </div>
        <div class="col-12 col-md-9 mt-3 mt-md-0">
            <h3 class="fw-bold color-title">${data.title}</h3>
            <p class="color-para">${data.details.slice(0, 250)}</p>
            <p class="color-para">${data.details.slice(250, 400)}...</p>
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div class="d-flex align-items-center my-3 my-md-0">
                    <div>
                        <img class="author-img" src="${data.author.img}" alt="">
                    </div>
                    <div class="ps-2">
                        <p class="mb-0 color-text-author">${data.author.name ? data.author.name : 'No Data Available'}</p>
                        <p class="mb-0 color-text-publish">${data.author.published_date ? data.author.published_date.slice(0, 10) : 'No Data Available'}</p>
                    </div>
                </div>
                <div class="d-flex my-3 my-md-0">
                    <div><i class="fa-regular fa-eye"></i></div>
                    <p class="mb-0 ms-2 fw-bold color-text-eye">${data.total_view ? data.total_view : 'No Data Available'}</p>
                </div>
                <div class="d-flex my-3 my-md-0">
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star-half-stroke"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                    <p class="mb-0 mx-1"><i class="fa-regular fa-star"></i></p>
                </div>
                <div class="my-3 my-md-0">
                    <p class="mb-0"><i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>
        </div>
        `
        categoryContainer.appendChild(categoryDiv);
    })
}


loadingNavbarFetchData();