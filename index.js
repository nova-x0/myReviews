

    const reviews = [
        {
            id: 1,
            name: 'susan smith',
            job: 'web designer',
            img: 'person-1.jpeg',
            bio: '"Passionate web designer with a keen eye for aesthetics and a commitment to creating engaging user experiences."'
        },
        {
            id: 2,
            name: 'peter jons',
            job: 'ui/ux designer',
            img: 'png1.avif',
            bio: '"Creative UI/UX designer specializing in crafting intuitive digital interfaces that enhance user interactions and drive engagement."'
        },
        {
            id: 3,
            name: 'bill anderson',
            job: 'data scientist',
            img: 'png2.avif',
            bio: '"Data scientist leveraging data-driven insights to solve complex problems and make informed decisions for a smarter world."'
        },
        {
            id: 4,
            name: 'anna johnson',
            job: 'graphic designer',
            img: 'png3.avif',
            bio: '"Visual storyteller shaping brand identities and creative experiences through stunning design."'
        },
    ]

    const img = document.querySelector(".person-img")
    const name = document.querySelector(".name")
    const job = document.querySelector(".job")
    const bio = document.querySelector(".bio")

    const previousButton = document.querySelector(".fa-chevron-left")
    const nextButton = document.querySelector(".fa-chevron-right")
    const randomButton = document.querySelector(".random-button")

    let currentItem = 0;

    function showPerson(person) {
        let item = reviews[person];
        img.src = item.img;
        name.textContent = item.name;
        job.textContent = item.job;
        bio.textContent = item.bio;
    }

    window.addEventListener("DOMContentLoaded", function () {
        showPerson(currentItem);
    });

    nextButton.addEventListener("click", function () {
        if (currentItem === reviews.length - 1) {
            currentItem = 0;
        } else {
            currentItem++;
        }
        showPerson(currentItem);
    });

    previousButton.addEventListener("click", function () {
        if (currentItem === 0) {
            currentItem = reviews.length - 1;
        } else {
            currentItem--;
        }
        showPerson(currentItem);
    });


    randomButton.addEventListener("click", function () {
        let currentItem = Math.floor(Math.random() * reviews.length) ;
        showPerson(currentItem);

    })

