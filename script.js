const verses = [
    { start: 8.77, text: "Dicen que las flores no dejaban de cantar tu nombre 🌸", color: "#FFD700", gif: "https://media.giphy.com/media/BKqOqscntEIrm/giphy.gif" },
    { start: 14.08, text: "Tu nombre, cariño 💖", color: "#FFA07A", gif: "https://media.giphy.com/media/JXLHs90j6WktQ1Ydl6/giphy.gif" },
    { start: 16.26, text: "Que las olas de los mares te hicieron un chal de espuma 🌊", color: "#87CEFA", gif: "https://media.giphy.com/media/sFbCkhl2sMv9x62OwY/giphy.gif" },
    { start: 21.66, text: "De nubes y lirios ☁️", color: "#F0F8FF", gif: "https://media.giphy.com/media/QXJa2uAa44fYRSats0/giphy.gif" },
    { start: 23.97, text: "Y la luna no se convenció 🌙", color: "#F5F5DC", gif: "https://media.giphy.com/media/wEM71wbHnFPTHa7FSt/giphy.gif" },
    { start: 27.36, text: "Y bajo a mirarte el corazón ❤️", color: "#FF6347", gif: "https://media.giphy.com/media/WG4uYteu6J0teNVxpT/giphy.gif" },
    { start: 31.46, text: "Y al mirarte dijo que no había visto un sol radiante 🌞", color: "#FFD700", gif: "https://media.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif" },
    { start: 37.07, text: "Más bello que mi bendición 😇", color: "#FFB6C1", gif: "https://media.giphy.com/media/Yle9Yz9izeVRyiwavn/giphy.gif" },
    { start: 41.06, text: "Tenerte 🤗", color: "#FF6347", gif: "https://media.giphy.com/media/ZOStzpF9H5syI/giphy.gif" },
    { start: 43.00, text: "Besarte 💋", color: "#FFA07A", gif: "https://media.giphy.com/media/PFh8fnskEEka4/giphy.gif" },
    { start: 44.94, text: "Andar de la mano contigo 🤝", color: "#FF6347", gif: "https://media.giphy.com/media/1427cjQy7kiBS8/giphy.gif" },
    { start: 48.57, text: "Mi cielo ☁️", color: "#87CEEB", gif: "https://media.giphy.com/media/M90mJvfWfd5mbUuULX/giphy.gif" },
    { start: 50.64, text: "Mirarte 👀", color: "#87CEEB", gif: "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif" },
    { start: 52.61, text: "Decirte un te quiero al oído, yo te lo digo 💕", color: "#FFB6C1", gif: "https://media.giphy.com/media/10tTOmhZzHMoW4/giphy.gif" },
    { start: 57.20, text: "Qué bendición 🙏", color: "#FF6347", gif: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif" },
    { start: 66.58, text: "Dicen que las palmas aplaudían al oír tus pasos 👣", color: "#32CD32", gif: "https://media.giphy.com/media/26gYBQdYIR4nnP2wA/giphy.gif" },
    { start: 71.66, text: "Tus pasos, cariño 💕", color: "#FFA07A", gif: "https://media.giphy.com/media/3oKIPj8bWmcHU8JtgY/giphy.gif" },
    { start: 74.10, text: "Que los ríos salen de su cauce al contemplar tus ojos 👀", color: "#87CEFA", gif: "https://media.giphy.com/media/3o7abGQa0ZQ2VOS0pK/giphy.gif" },
    { start: 79.42, text: "Tus ojos divinos 👁️👁️", color: "#1E90FF", gif: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" },
    { start: 81.64, text: "Y un lucero no se convenció ⭐", color: "#F5F5DC", gif: "https://media.giphy.com/media/xT9IgBlcOenEhe5hzi/giphy.gif" },
    { start: 85.06, text: "Y bajo a mirarte el corazón ❤️", color: "#FF6347", gif: "https://media.giphy.com/media/xT9IgEStLzJjgyTWD6/giphy.gif" },
    { start: 89.22, text: "Y al mirarte dijo que no había visto luna llena 🌕", color: "#F0F8FF", gif: "https://media.giphy.com/media/3oz8xyKNGCG7O8Hov6/giphy.gif" },
    { start: 95.37, text: "Más bella que mi bendición 😇", color: "#FFB6C1", gif: "https://media.giphy.com/media/3oEjI80DSa1grNPTDq/giphy.gif" },
    { start: 98.69, text: "Tenerte (tenerte) 🤗", color: "#FF6347", gif: "https://media.giphy.com/media/3oEjI9EdPXdwNCHvDi/giphy.gif" },
    { start: 100.60, text: "Besarte (besarte) 💋", color: "#FFA07A", gif: "https://media.giphy.com/media/3oEjHXF5S3z4Uj9rc8/giphy.gif" },
    { start: 102.65, text: "Andar de la mano contigo 🤝", color: "#FF6347", gif: "https://media.giphy.com/media/3oz8xzVJfhVpaZSC4o/giphy.gif" },
    { start: 106.36, text: "Mi cielo (mi cielo) ☁️", color: "#87CEEB", gif: "https://media.giphy.com/media/3oz8y4rSzX1peAE07q/giphy.gif" },
    { start: 108.31, text: "Mirarte (mirarte) 👀", color: "#87CEEB", gif: "https://media.giphy.com/media/3oz8xILbP0ZL5Z4u24/giphy.gif" },
    { start: 110.30, text: "Decirte un te quiero al oído, yo te lo digo 💕", color: "#FFB6C1", gif: "https://media.giphy.com/media/3oz8xKDOWKAIUtHGNa/giphy.gif" },
    { start: 115.00, text: "Qué bendición 🙏", color: "#FF6347", gif: "https://media.giphy.com/media/3oz8xz0z1WTnKGH7T6/giphy.gif" },
    { start: 122.32, text: "Cuando me hablas oigo un coro de amor para dos 💕", color: "#FFD700", gif: "https://media.giphy.com/media/3oz8y6GGWn7K0TRTA4/giphy.gif" },
    { start: 129.47, text: "El falsete de un te quiero pegado a tu voz 🎤", color: "#FFA07A", gif: "https://media.giphy.com/media/3oz8y35rPlbpqAvvHG/giphy.gif" },
    { start: 134.50, text: "Qué bendición 🙏", color: "#FF6347", gif: "https://media.giphy.com/media/3oz8xvB9uRlN88fuRq/giphy.gif" },
    { start: 137.41, text: "Tenerte (tenerte) 🤗", color: "#FF6347", gif: "https://media.giphy.com/media/3oz8xHyDAOG6H8UgGk/giphy.gif" },
    { start: 139.27, text: "Besarte (besarte) 💋", color: "#FFA07A", gif: "https://media.giphy.com/media/3ohzdUbhEFMThsIEM8/giphy.gif" },
    { start: 141.18, text: "Andar de la mano contigo 🤝", color: "#FF6347", gif: "https://media.giphy.com/media/3oz8y3Sz5SgXZVv44A/giphy.gif" },
    { start: 144.50, text: "Mi cielo (mi cielo) ☁️", color: "#87CEEB", gif: "https://media.giphy.com/media/3oz8xvZBqHsQNYA9t6/giphy.gif" },
    { start: 146.69, text: "Mirarte (mirarte) 👀", color: "#87CEEB", gif: "https://media.giphy.com/media/3oz8y33LT1XN9JNZtm/giphy.gif" },
    { start: 149.07, text: "Decirte un te quiero al oído, yo te lo digo 💕", color: "#FFB6C1", gif: "https://media.giphy.com/media/3oz8xSc0Dw8lm7dFTu/giphy.gif" },
    { start: 153.27, text: "Qué bendición 🙏", color: "#FF6347", gif: "https://media.giphy.com/media/3oz8y4VfKPnljExNeE/giphy.gif" },
    { start: 157.00, text: "Me alegra mucho conocerte y compartir estos momentos contigo. Eres una persona especial y estoy emocionado por todo lo que viene. 💖", color: "#FF6347", gif: "https://media.giphy.com/media/3oz8y4VfKPnljExNeE/giphy.gif" },
];

function startAnimation() {
    const button = document.querySelector('button');
    const song = document.getElementById('song');
    button.classList.add('hidden'); // Ocultar el botón después de presionarlo
    song.play(); // Iniciar la canción
    setTimeout(showNextVerse, 8770); // Esperar 8.77 segundos antes de empezar

    let currentVerse = 0;

    function showNextVerse() {
        if (currentVerse > 0) {
            const previousVerse = document.getElementById(`verse${currentVerse}`);
            previousVerse.style.animation = 'fadeOut 1s ease forwards';
        }
        if (currentVerse < verses.length) {
            const verse = verses[currentVerse];
            document.body.style.backgroundColor = verse.color;
            const verseElement = document.getElementById(`verse${currentVerse + 1}`);
            verseElement.querySelector('p').textContent = '';
            verseElement.querySelector('img').src = verse.gif;
            verseElement.style.display = 'block';
            verseElement.style.animation = 'fadeIn 1s ease forwards';
            typeWriter(verse.text, verseElement.querySelector('p'));
            currentVerse++;
            if (currentVerse < verses.length) {
                const nextVerseStart = (verses[currentVerse].start - verses[currentVerse - 1].start) * 1000;
                setTimeout(showNextVerse, nextVerseStart);
            }
        } else {
            const finalMessage = document.getElementById('final-message');
            finalMessage.style.display = 'block';
            finalMessage.style.animation = 'fadeIn 1s ease forwards';
        }
    }

    function typeWriter(text, element) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 60); // Ajusta la velocidad de tipeo
            }
        }
        typing();
    }
}
