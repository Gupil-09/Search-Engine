function loadSearchHistory() 
{
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach((term, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = term;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.setAttribute('data-index', index); 
        deleteBtn.addEventListener('click', function() 
        {
            deleteSearchTerm(index);
        });
        listItem.appendChild(deleteBtn); 
        historyList.appendChild(listItem); 
    });
}
function saveSearchTerm(term) 
{
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.push(term);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    loadSearchHistory();
}
function deleteSearchTerm(index) 
{
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.splice(index, 1); 
    localStorage.setItem('searchHistory', JSON.stringify(history));
    loadSearchHistory(); 
}
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm) {
        saveSearchTerm(searchTerm);
        document.getElementById('searchInput').value = '';
    }
});
document.getElementById('clearHistoryBtn').addEventListener('click', function() {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
});
window.onload = loadSearchHistory;