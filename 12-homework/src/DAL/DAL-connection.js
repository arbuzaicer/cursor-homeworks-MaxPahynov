const baseUrl = 'https://swapi.co/api/';

export const DAL = {

   async getMoovieInfo(filmNumber) {
        const fullURL = `${baseUrl}films/${filmNumber}/`;
        const request = await fetch(fullURL, {
                setHeaders: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        const response = await request.json();
        return await response;
    },

    async getPlanetsInfo() {
        const fullURL = `${baseUrl}planets/?page=2`;
        const request = await fetch(fullURL, {
            setHeaders: {
                'Access-Control-Allow-Origin': 'http://localhost:63342'
            }
        });
        const res = await request.json();
        const btnPrev = document.createElement('button');
        btnPrev.textContent = 'Prev';
        btnPrev.addEventListener('click', async ()=> {
            const request = await fetch(res.previous);
            const response = await request.json();
            console.log(response)
        });

        const btnNext = document.createElement('button');
        btnNext.addEventListener('click', async ()=> {
            const request = await fetch(res.next);
            const response = await request.json();
            console.log(response)
        });
        btnNext.textContent = 'Next';
        document.body.appendChild(btnPrev);
        document.body.appendChild(btnNext);
    }
};