// spinner
const loadingSpinner = (value) => {
    const spinner = document.getElementById('spinner');
    if (value) {
        spinner.classList.remove('d-none');
        console.log('Hello')
    }
    else {
        spinner.classList.add('d-none');
        console.log('nai')
    }
}