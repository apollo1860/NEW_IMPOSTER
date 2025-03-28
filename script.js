const categories = {
    // 1. Hit & Hype
    "1": [
        "Welcher Musiker ist aktuell völlig überbewertet?",
        "Welcher Musiker läuft bei dir gerade rauf und runter?",
        "Welcher Musiker ist deiner Meinung nach am attraktivsten?",
        "Welcher Musiker deines Geschlechts ist besonders attraktiv?",
        "Welcher Musiker wird aktuell am meisten unterschätzt?",
        "Bei welchem Musiker drehst du auf 3 Promille komplett durch?",
        "Wer singt deinen derzeitigen Lieblingssong?",
        "Welcher Musiker ist dein heimliches Guilty Pleasure?",
        "Welchen Musiker könntest du locker unter den Tisch trinken?",
        "Welcher Musiker würde dich ohne Probleme unter den Tisch trinken?",
        "Welchen Musiker würdest du dir niemals live ansehen wollen?"
    ],
    // 2. Zahlenzauber
    "2": [
        "Wie oft gehst du am Tag auf die Toilette?",
        "In wie vielen WhatsApp-Gruppen bist du derzeit ca. drin?",
        "Wie oft warst du in diesem Monat schon verkatert?",
        "Wie viele Liegestütze schaffst du?",
        "Wie viele Maß schaffst du maximal auf der Wiesn?",
        "Wie viele Stunden brauchst du, um komplett ausgeschlafen zu sein?",
        "Wie viele Biere sind perfekt für einen lustigen Abend?",
        "Wie viele Filme hast du dieses Jahr schon gesehen?",
        "Wie viele Stunden verbringst du täglich auf Instagram?",
        "Ab wie vielen Shots musst du dich übergeben?",
        "Wie oft bestellst du Essen über Lieferdienste im Monat?",
        "Wie oft warst du schon außerhalb Europas?",
        "Wie oft trinkst du durchschnittlich pro Woche Alkohol?",
        "Mit wie vielen Jahren hast du zuletzt ins Bett gemacht?",
        "Mit wie vielen Jahren hattest du deinen ersten Crush?",
        "Was ist ein gutes Alter, um das erste Kind zu bekommen?",
        "Mit wie vielen Jahren hattest du deinen ersten Kuss?"
    ],
    // 3. Hollywood Calling
    "3": [
        "Was ist dein absoluter Lieblingsfilm?",
        "In welchem Film hättest du gerne eine Hauptrolle?",
        "Welchen Film kannst du überhaupt nicht leiden?",
        "Welcher Film ist perfekt fürs erste Date?",
        "Welchen Film hast du zuletzt im Kino gesehen?",
        "Welchen deutschen Film kennst du spontan?",
        "Welcher Film hat dich als Kind am meisten geprägt?"
    ],
    // 4. Legenden des Sports
    "4": [
        "Welcher Sportler ist der wahre G.O.A.T.?",
        "Welcher Sportler ist am attraktivsten?",
        "Welcher Sportler ist der größte Bad Boy?",
        "Mit welchem Sportler würdest du gern einen Tag tauschen?",
        "Welchen Sportler würdest du gerne auf ein Bier einladen?"
    ],
    // 5. Weltreise
    "5": [
        "In welchem Land leben die schönsten Frauen?",
        "Welches Land hasst du?",
        "Welches Land liebst du?",
        "In welchem Land – außer Deutschland – würdest du gern leben?",
        "Wo hattest du deinen schönsten Urlaub?",
        "In welches Land möchtest du unbedingt in den nächsten Jahren reisen?",
        "Welches Land findest du komplett überflüssig?",
        "Welches Land hat das leckerste Essen?",
        "Welche Nation ist die größte Fußballmacht der Geschichte?",
        "Wo leben die nettesten Menschen?",
        "In welchem Land würdest du gerne für 1 Jahr leben?",
    ],
    // 6. Prozente, Baby!
    "6": [
        "Wie viel Prozent deines Lottogewinns würdest du deinen Eltern geben?",
        "Wie viel Prozent bekommen deine engsten Freunde?",
        "Wie viel würdest du für wohltätige Zwecke spenden?",
        "Wie viel Prozent Trinkgeld gibst du normalerweise?",
        "Bei wie viel Prozent Akku schließt du dein Handy an?",
        "Wie viel Prozent deines Freundeskreises siehst du regelmäßig?"
    ],
    // 7. Bodytalk
    "7": [
        "Auf welches Körperteil bist du besonders stolz?",
        "Wo würdest du am wenigsten gern geschlagen werden?",
        "Auf welches Körperteil könntest du am ehesten verzichten?",
        "Welches Körperteil findest du bei anderen besonders erotisch?",
        "Welches Körperteil würdest du als Erstes oder Nächstes tätowieren lassen?"
    ],
    // 8. Cheers & Beers
    "8": [
        "Welches Getränk trinkst du am häufigsten?",
        "Welches Getränk kannst du nicht ausstehen?",
        "Was ist dein perfektes Kater-Getränk?",
        "Welches Getränk erinnert dich an Urlaub?",
        "Was bestellst du am häufigsten in Restaurants?",
        "Welches Getränk eignet sich perfekt zum Mischen?"
    ],
    // 9. Spotlight On
    "9": [
        "Wer von euch ist der Lustigste?",
        "Wer von euch isst am meisten?",
        "Wer von euch lügt am häufigsten?",
        "Wer von euch ist der Geizigste?",
        "Wer von euch hat das meiste Talent?",
        "Wer von euch wird am ehesten Millionär?",
        "Wer von euch verträgt am meisten Alkohol?",
        "Wer von euch ist am fleißigsten?",
        "Wer von euch ist am intelligentesten?",
        "Wer von euch ist der Sportlichste?",
        "Wer von euch landet am ehesten im Gefängnis?",
        "Wer von euch ist am romantischsten?",
        "Wer von euch hat am meisten Rizz?"
    ],
    // 10. Snack Attack
    "10": [
        "Was ist dein absolutes Lieblingsessen?",
        "Welches Gericht erinnert dich an deine Kindheit?",
        "Was ist dein perfektes Kateressen?",
        "Was kochst du dir selbst am liebsten?",
        "Was bestellst du am häufigsten bei Lieferdiensten?",
        "Was war das teuerste Gericht, das du je bestellt hast?",
        "Welches Essen kannst du gar nicht ab?",
        "Was ist das beste Essen, um eine gute Grundlage zu haben, bevor du auf eine Party gehst?",
    ],
    // 11. Hand aufs Herz
    "11": [
        "Hast du jemals in einer Prüfung geschummelt?",
        "Bist du schon mal aus einer Bar oder einem Club geflogen?",
        "Hast du schon mal etwas gestohlen?",
        "Bist du schon mal betrunken zur Arbeit oder Schule gegangen?",
        "Hast du schon mal jemanden geghostet?",
        "Hast du schon mal jemanden betrunken angerufen, den du nicht hättest anrufen sollen?",
        "Warst du schon mal in jemanden verliebt, der nichts davon wusste?"
    ],
    // 12. Würdest du für…?
    "12": [
        "Würdest du für 100.000 € ein Jahr lang auf dein Handy verzichten?",
        "Würdest du für 1.000 € eine Woche im Sommer nicht duschen?",
        "Würdest du für 10.000 € zwei Runden mit Mike Tyson im Ring stehen?",
        "Würdest du dir für 3.000.000 € deinen rechten Arm abhacken lassen?",
        "Würdest du für 100.000 € aus Deutschland auswandern?",
        "Würdest du für 5.000.000 € nach Nordkorea ziehen?",
        "Würdest du für 5.000 € deinen Job kündigen?",
        "Würdest du für 250.000 € einen Porno drehen und veröffentlichen?",
        "Würdest du dir für 50 € von einer fremden Person eine Ohrfeige geben lassen?",
        "Würdest du dir für 2.000 € ein Tattoo stechen lassen, das dein Nachbar auswählt?"
    ],
    // 13. Money, Money, Money
    "13": [
        "Was ist die größte Summe, die du jemals an einem Geldautomaten abgehoben hast?",
        "Wie viel Taschengeld würdest du deinem Kind monatlich geben?",
        "Wie viel Geld gibst du ca. durchschnittlich am Tag aus?",
        "Wie viel Geld bist du bereit im Supermarkt für einen Wodka auszugeben?"
    ],
    // 14. Zeitgeist
    "14": [
        "Wann ist die perfekte Uhrzeit, um sonntags aufzustehen?",
        "Wann ist der beste Zeitpunkt fürs Fitnessstudio?",
        "Wann sollte man am besten zu Abend essen?",
        "Wann ist die perfekte Zeit, um ins Büro zu kommen?",
        "Wann gehst du idealerweise schlafen?",
        "Wann ist die beste Zeit zum Masturbieren?",
        "Wann solltest du samstags deine nervigen Pflichten erledigen?",
        "Wann darf am Samstag das erste Bierchen aufgemacht werden?"
    ],
    // 15. Lieder
    "15": [
        "Welches Lied ist dein absoluter Party-Hit?",
        "Welches Lied kannst du gar nicht mehr hören?",
        "Welches Lied bringt dich zum Weinen?",
        "Welches Lied ist perfekt zum Kuscheln?",
        "Welches Lied würdest du auf deiner Beerdigung spielen lassen?",
        "Welches Lied ist der beste Karaoke-Song?",
        "Welches Lied verbindest du am Meisten mit Liebeskummer?",
        "Welches Lied ist der beste Song zum Autofahren?"
    ],
    // 16. Stars & Sternchen
    "16": [
        "Welchem Promi würdest du sofort einen Heiratsantrag machen?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kiss?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Marry?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kill?",
        "Bei welchem Promi fragt man sich warum dieser überhaupt berühmt ist?",
        "Mit welchem Promi würdest du gerne mal ein Bierchen trinken?"
    ],
    // 17. Machen & Tun
    "17": [
        "Was ist deine größte Sucht?",
        "Was tust du am liebsten an einem freien Nachmittag?",
        "Was machst du morgens, bevor du ins Büro oder zur Schule gehst?",
        "Was würdest du tun, wenn du für einen Tag das andere Geschlecht wärst?",
        "Was machst du am liebsten, wenn du im Urlaub bist?",
        "Was würdest du dir gönnen, wenn du jetzt 100€ bekämst?",
        "Was hast du während des Corona-Lockdowns ständig gemacht?",
        "Was war früher dein absolutes Lieblingshobby?"
    ],
    // 18. Tiere
    "18": [
        "Welches Tier schmeckt am besten?",
        "Welches Tier findest du absolut hässlich?",
        "In welches Tier würdest du dich am liebsten für einen Tag verwandeln?",
        "Welches Tier sollte ausgerottet werden?",
        "Welches Tier käme für dich niemals als Haustier in Frage?"
    ]
};

let players = [];
let currentRound = 0;
let currentPlayerIndex = 0;
let imposterIndex = 0;
let gameCategories = [];
let playerAnswers = [];
let drinkCounts = {};
let correctQuestion = "";
let majorityQuestion = "";
let imposterQuestion = "";

function startGame() {
    let playerCount = document.getElementById("playerCount").value;
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("player-inputs").style.display = "block";

    let nameFields = document.getElementById("name-fields");
    nameFields.innerHTML = "";

    for (let i = 0; i < playerCount; i++) {
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Spieler " + (i + 1);
        nameFields.appendChild(input);
    }
}

function confirmPlayers() {
    let inputs = document.querySelectorAll("#name-fields input");
    players = Array.from(inputs).map(input => input.value || "Spieler " + (players.length + 1));
    gameCategories = Object.keys(categories).sort(() => Math.random() - 0.5);
    players.forEach(player => drinkCounts[player] = 0);
    
    // Select first imposter randomly
    imposterIndex = Math.floor(Math.random() * players.length);
    
    document.getElementById("player-inputs").style.display = "none";
    showHandoverScreen();
}

function showHandoverScreen() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("handover-screen").style.display = "block";

    document.getElementById("handover-text").innerText =
        `Bitte das Handy an ${players[currentPlayerIndex]} geben.`;
}

function showQuestionScreen() {
    document.getElementById("handover-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    // Only set up questions at the start of each round
    if (currentPlayerIndex === (currentRound % players.length)) {
        const category = gameCategories[currentRound];
        const questions = categories[category];

        // Select random question for majority
        const majorityQuestionIndex = Math.floor(Math.random() * questions.length);
        majorityQuestion = questions[majorityQuestionIndex];
        correctQuestion = majorityQuestion;

        // Select different question for imposter
        let imposterQuestionIndex;
        do {
            imposterQuestionIndex = Math.floor(Math.random() * questions.length);
        } while (imposterQuestionIndex === majorityQuestionIndex);
        imposterQuestion = questions[imposterQuestionIndex];
    }

    const category = gameCategories[currentRound];
    document.getElementById("current-player-name").innerText = players[currentPlayerIndex];
    document.getElementById("player-answer").value = "";

    // Hide category and show appropriate question based on whether current player is imposter
    document.getElementById("category-text").style.display = "none";
    document.getElementById("question-text").innerText = 
        currentPlayerIndex === imposterIndex ? imposterQuestion : majorityQuestion;
}

function nextPlayer() {
    const answer = document.getElementById("player-answer").value;
    playerAnswers.push({ player: players[currentPlayerIndex], answer });

    // Clear the answer field after recording the answer
    document.getElementById("player-answer").value = "";

    // Calculate next player index based on rotation
    let nextIndex = (currentPlayerIndex + 1) % players.length;
    let roundStartPlayer = currentRound % players.length;
    let playersAnswered = playerAnswers.length;

    if (playersAnswered >= players.length) {
        // All players have answered in this round
        document.getElementById("game-screen").style.display = "none";
        document.getElementById("round-end-screen").style.display = "block";
    } else {
        currentPlayerIndex = nextIndex;
        showHandoverScreen(); // Next player's turn
    }
}

function showAnswersScreen() {
    document.getElementById("round-end-screen").style.display = "none";
    document.getElementById("answers-screen").style.display = "block";
    let list = document.getElementById("answers-list");
    list.innerHTML = "";
    playerAnswers.forEach(({ player, answer }) => {
        let li = document.createElement("li");
        li.innerText = `${player}: ${answer}`;
        list.appendChild(li);
    });
}

function showCorrectQuestion() {
    document.getElementById("answers-screen").style.display = "none";
    document.getElementById("correct-question-screen").style.display = "block";
    document.getElementById("correct-question-text").innerText = correctQuestion;
    
    // Display all answers on the correct question screen
    let list = document.getElementById("correct-screen-answers");
    list.innerHTML = "";
    playerAnswers.forEach(({ player, answer }) => {
        let li = document.createElement("li");
        li.innerText = `${player}: ${answer}`;
        list.appendChild(li);
    });
}

function showImposterReveal() {
    document.getElementById("correct-question-screen").style.display = "none";
    document.getElementById("imposter-reveal-screen").style.display = "block";
    document.getElementById("imposter-text").innerText = `Imposter war:\n${players[imposterIndex]}`;
}

function showDrinksScreen() {
    document.getElementById("imposter-reveal-screen").style.display = "none";
    document.getElementById("drinks-screen").style.display = "block";

    let drinksList = document.getElementById("drinks-list");
    drinksList.innerHTML = "";

    players.forEach(player => {
        let playerDiv = document.createElement("div");
        playerDiv.classList.add("drink-counter");

        let nameSpan = document.createElement("span");
        nameSpan.innerText = player;
        nameSpan.classList.add("player-name");

        let counterDiv = document.createElement("div");
        counterDiv.classList.add("counter-controls");

        let minusButton = document.createElement("button");
        minusButton.innerText = "-";
        minusButton.classList.add("counter-button");
        minusButton.onclick = () => {
            if (drinkCounts[player] > 0) {
                drinkCounts[player]--;
                drinkBox.innerText = drinkCounts[player];
            }
        };

        let drinkBox = document.createElement("div");
        drinkBox.classList.add("drink-box");
        drinkBox.innerText = drinkCounts[player];

        let plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.classList.add("counter-button");
        plusButton.onclick = () => {
            drinkCounts[player]++;
            drinkBox.innerText = drinkCounts[player];
        };

        counterDiv.appendChild(minusButton);
        counterDiv.appendChild(drinkBox);
        counterDiv.appendChild(plusButton);

        playerDiv.appendChild(nameSpan);
        playerDiv.appendChild(counterDiv);
        drinksList.appendChild(playerDiv);
    });
}

function nextRound() {
    document.getElementById("drinks-screen").style.display = "none";

    currentRound++;

    if (currentRound >= 18) {
        showFinalRanking();
        return;
    }

    // Reset for new round
    playerAnswers = [];
    // Set starting player for this round (rotates through players)
    currentPlayerIndex = currentRound % players.length;
    
    // Select new random imposter for this round
    // Make sure to select a truly random player, not influenced by currentPlayerIndex
    imposterIndex = Math.floor(Math.random() * players.length);
    
    showHandoverScreen();
}

function showFinalRanking() {
    // Andere Screens ausblenden
    ["start-screen", "player-inputs", "handover-screen", "game-screen",
     "round-end-screen", "answers-screen", "correct-question-screen", "imposter-reveal-screen", "drinks-screen"]
    .forEach(id => document.getElementById(id).style.display = "none");

    // Finalen Screen anzeigen
    document.getElementById("final-ranking-screen").style.display = "block";

    // Ranking nach wenigsten Schlücken
    let ranking = Object.entries(drinkCounts)
        .sort((a, b) => a[1] - b[1]);

    let rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = "";

    ranking.forEach(([player, count]) => {
        let li = document.createElement("li");
        li.innerText = `${player} – ${count} Schlücke`;
        rankingList.appendChild(li);
    });
}
