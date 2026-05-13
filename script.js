const grid = document.getElementById('image-grid');
const generateBtn = document.getElementById('generate-btn');
const countInput = document.getElementById('img-count');
const categorySelect = document.getElementById('category');

function generateImages() {
    grid.innerHTML = '';
    const count = countInput.value || 4;
    const category = categorySelect.value;

    for (let i = 0; i < count; i++) {
        const card = document.createElement('div');
        card.classList.add('img-card');
        
        // Using Picsum with a random seed to force different images
        const randomId = Math.floor(Math.random() * 1000);
        const img = document.createElement('img');
        img.src = `https://picsum.photos/seed/${randomId}/400/300`;
        img.alt = category;
        
        card.appendChild(img);
        grid.appendChild(card);
    }
}

generateBtn.addEventListener('click', generateImages);

// Initial Load
generateImages();
