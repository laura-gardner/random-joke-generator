const jokePara = document.querySelector(".joke-paragraph");
const jokeButton = document.querySelector(".joke-button");

jokeButton.addEventListener("click", function () {
    getRandomJoke();
});

const getRandomJoke = async () => {
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    const joke = res.data.joke;
    jokePara.innerText = joke;
};
