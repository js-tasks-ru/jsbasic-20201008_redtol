function toggleText() {
    let trigger = document.querySelector('.toggle-text-button');
    trigger.addEventListener('click', function() {
        document.getElementById('text').hidden = !document.getElementById('text').hidden;
    })
}