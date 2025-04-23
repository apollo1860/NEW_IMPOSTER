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
    // 2. Zahlenzauber (1 bis 10)
    "2": [
        "Wie oft gehst du am Tag auf die Toilette?",
        "Wie viele Unterhosen nimmst du mit wenn du für 7 Tage verreist?",
        "Wie oft duscht du in der Woche?",
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
        "Wie oft trinkst du durchschnittlich pro Woche Alkohol?"

    ],
    // 3. Hollywood Calling
    "3": [
        "Was ist dein absoluter Lieblingsfilm?",
        "Welcher Film hätte deiner Meinung nach einen Oscar verdient gehabt?",
        "In welchem Film hättest du gerne eine Hauptrolle?",
        "Welchen Film kannst du überhaupt nicht leiden?",
        "Welcher Film ist perfekt fürs erste Date?",
        "Welchen Film hast du zuletzt im Kino gesehen?",
        "Welchen Film würdest du gerne nochmal zum allersten Mal ansehen?",
        "Welcher Film hat dich als Kind am meisten geprägt?",
        "Welcher Animationsfilm ist deiner Meinung nach der beste?"
    ],
    // 4. Legenden des Sports
    "4": [
        "Welcher Sportler war zu lange über seinem Zenit noch aktiv?",
        "Welcher Sportler würde deiner Meinung nach unter der Brücke landen, wenn er kein Talent gehabt hätte?",
        "Welcher Sportler würde in einem Wettlauf gegen dich verlieren?",
        "Welcher Sportler ist am attraktivsten?",
        "Welcher Sportler ist der größte Bad Boy/Bad Girl?",
        "Mit welchem Sportler würdest du gern einen Tag tauschen?",
        "Welchen Sportler würdest du gerne auf ein Bier einladen?",
        "Welcher Sportler ist deiner Meinung nach privat ein richtiges Arschloch?",
        "Welcher Sportler könnte deiner Meinung nach in einem anderen Sport ebenfalls erfolgreich sein?"

    ],
    // 5. Weltreise
    "5": [
        "In welchem Land leben die schönsten Frauen?",
        "Welches Land hasst du?",
        "Welches Land liebst du?",
        "In welchem Land (außer Deutschland) würdest du gern leben?",
        "Wo hattest du deinen schönsten Urlaub?",
        "In welches Land möchtest du unbedingt in den nächsten Jahren reisen?",
        "Welches Land findest du komplett überflüssig?",
        "Welches Land hat das leckerste Essen?",
        "Welches Land ist die größte Fußballmacht der Geschichte?",
        "Wo leben die nettesten Menschen?",
        "In welchem Land würdest du gerne für 1 Jahr leben?", // Added comma here
    ],
    // 6. Prozente, Baby!
    "6": [
        "Wie viel Prozent deines Lottogewinns würdest du deinen Eltern geben?",
        "Wie viel Prozent deines Lottogewinnsbekommen deine engsten Freunde?",
        "Wie viel Prozent deines Lottogewinns würdest du für wohltätige Zwecke spenden?",
        "Wie viel Prozent Trinkgeld gibst du normalerweise?",
        "Wie viel Prozent deines Einkommens gibst du ca. für Alkohol und Party aus?",
        "Bei wie viel Prozent Akku schließt du dein Handy an?",
        "Wie viel Prozent deines Freundeskreises siehst du regelmäßig?",
        "An wie viel Prozent deiner Träume in der Woche erinnerst du dich ca. noch nach dem Aufwachen?"
    ],
    // 7. Bodytalk
    "7": [
        "Auf welches Körperteil bist du besonders stolz?",
        "An welchem Körperteil hast du am häufigsten Schmerzen?",
        "Welches Körperteil findest du am unterbewertesten?",
        "Welches Körperteil würdest du dir niemals tätowieren lassen?",
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
        "Welches Getränk eignet sich perfekt zum Mischen?",
        "Was ist das Lieblingsgetränk deines rechten Nachbarn?",
        "Was ist das Lieblingsgetränk deines linken Nachbarn?"
    ],
    // 9. Spotlight On
    "9": [
        "Wer von euch ist der Lustigste?",
        "Wer von euch würde am ehesten bei einem Unfall helfen?",
        "Wer von euch wird als Erstes Vater/Mutter?",
        "Wer von euch isst am meisten?",
        "Wer von euch lügt am häufigsten?",
        "Wer von euch ist der Geizigste?",
        "Wer von euch hat das meiste Talent?",
        "Wer von euch kann am besten singen?",
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
        "Hast du jemals bei Freunden in die Wohnung gekotzt?",
        "Kannst du jemanden am Tisch in Wirklichkeit gar nicht leiden?",
        "Hast du dich schon mal ernsthaft geprügelt?",
        "Warst du schon mal vor deinen Eltern rotzbesoffen?",
        "Bist du schon mal aus einer Bar oder einem Club geflogen?",
        "Hast du schon mal etwas gestohlen?",
        "Bist du schon mal betrunken zur Arbeit oder Schule gegangen?",
        "Hast du schon mal jemanden absichtlich geghostet?",
        "Hast du schon mal jemanden betrunken angerufen, den du nicht hättest anrufen sollen?",
        "Warst du schon mal in jemanden verliebt, der nichts davon wusste?",
        "Hast du zu Schulzeiten jemals einen Verweis kassiert?"
    ],
    // 12. Würdest du für…?
    "12": [
        "Würdest du für 100.000 € ein ganzes Jahr lang auf dein Handy verzichten?",
        "Würdest du für 25.000 € ein ganzes Jahr lang als Soldat dienen?",
        "Würdest du für 1.000 € eine Woche im Sommer nicht duschen?",
        "Würdest du für 10.000 € zwei Runden lang gegen Mike Tyson im Ring boxen?",
        "Würdest du dir für 3.000.000 € deinen rechten Arm abhacken lassen?",
        "Würdest du für 100.000 € aus Deutschland auswandern?",
        "Würdest du für 5.000.000 € nach Nordkorea ziehen?",
        "Würdest du für 5.000 € deinen Job kündigen?",
        "Würdest du für 50.000 € ein ganzes Jahr auf Alkohol verzichten?",
        "Würdest du für 50.000 € ein ganzes Jahr auf Zigaretten verzichten?",
        "Würdest du für 250.000 € ein ganzes Jahr dein Zuhause nicht mehr verlassen?",
        "Würdest du für 250.000 € einen Porno drehen und veröffentlichen?",
        "Würdest du dir für 50 € von einer fremden Person eine Ohrfeige geben lassen?",
        "Würdest du dir für 20.000 € ein Tattoo in der Größe einer 2€-Münze stechen lassen, das dein rechter Nachbar auswählt?"
    ],
    // 13. Money, Money, Money
    "13": [
        "Was ist die größte Summe, die du jemals an einem Geldautomaten abgehoben hast?",
        "Wie viel Taschengeld würdest du deinem Kind monatlich geben?",
        "Wie viel Geld gibst du ca. durchschnittlich am Tag aus?",
        "Wie viel Geld wärst du bereit im Monat für wohltätige Zwecke zu spenden?",
        "Wie viel Geld bist du bereit im Supermarkt für einen Wodka auszugeben?",
        "Wie viel Geld gibst du in der Woche ca. für Alkohol aus?",
        "Wie viel Geld gibst du in der Woche ca. für Zigaretten aus?",
        "Wie viel Geld gibst du ca. im Monat für Lieferdienste aus?",
        "Wie viel Geld gibst du ca. im Monat für Streaming-Anbieter aus?",
        "Welche Summe ist deine Schmerzgrenze, wenn du mit Freunden Essen gehst?",
        "Wie viel Geld würden dir deine Eltern für einen Urlaub geben, wenn du sie darum fragst?"
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
        "Wann darf am Samstag das erste Bierchen aufgemacht werden?",
        "Um wie viel Uhr gehst du in der Regel unter der Woche duschen?"
    ],
    // 15. Lieder
    "15": [
        "Welches Lied ist ein absoluter Party-Hit?",
        "Welches Lied kannst du derzeit gar nicht mehr hören?",
        "Welches Lied bringt dich zum Weinen?",
        "Welches Lied verbindest du immer mit genau einer Person?",
        "Welches Lied ist perfekt zum Kuscheln?",
        "Welches Lied würdest du auf deiner Beerdigung spielen lassen?",
        "Welches Lied wäre dein Go-To Song beim Karaoke?",
        "Welches Lied verbindest du am Meisten mit Liebeskummer?",
        "Welches Lied ist der beste Song zum Autofahren?",
        "Welches Lied verbindest du mit Sommer?",
        "Welches Lied hast du zuletzt heruntergeladen?",
        "Welches Lied erinnert dich an deine Kindheit?"
    ],
    // 16. Stars & Sternchen
    "16": [
        "Welchem Promi würdest du sofort einen Heiratsantrag machen?",
        "Welchen Promi würdest du deine Kinder babysitten lassen?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kiss?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Marry?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kill?",
        "Bei welchem Promi fragst du dich, warum dieser überhaupt berühmt ist?",
        "Mit welchem Promi würdest du gerne mal ein Bierchen trinken?",
        "Welchen Promi würdest du in einem Kampf besiegen?",
        "Welcher Promi ist deiner Meinung nach dumm wie Brot?",
        "Wer ist die bekannteste Person, die du schon persönlich gesehen hast?"
    ],
    // 17. Machen & Tun
    "17": [
        "Was ist deine größte Sucht?",
        "Was wäre dein Kernthema auf deinem TikTok-Kanal?",
        "Wenn du eine nervige Angewohnheit für immer abstellen könntest. Welche wäre es?",
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
        "Welches Tier käme für dich niemals als Haustier in Frage?",
        "Welches Tier könntest du in einem Kampf besiegen?",
        "Welches Tier würdest du auf das Wappen deines eigenen Sportvereins tun?",
        "Welches Tier ist dein Lieblingstier?",
        "Welches Tier fasziniert dich am meisten?",
        "Welches Tier sieht lustig aus?",
        "Welches Tier würdest du gerne mal essen?",
        "Welches Tier würdest du niemals essen?"
    ],
// 19. 1/10
    "19": [
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du dich?",
    "Auf einer Skala von 1 bis 10: Wie gut kannst du Kopfrechnen?",
    "Auf einer Skala von 1 bis 10: Wie fandest du die Filmreihe Harry Potter?",
    "Auf einer Skala von 1 bis 10: Wie findest du die Musik von One Direction?",
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du Kim Kardashian?",
    "Auf einer Skala von 1 bis 10: Wie gut kannst du singen?",
    "Auf einer Skala von 1 bis 10: Wie karrierefixiert bist du?",
    "Auf einer Skala von 1 bis 10: Wie sehr könntest du dir vorstellen in die Selbstständigkeit zu gehen?",
    "Auf einer Skala von 1 bis 10: Als wie Fußballverrückt würdest du dich bezeichnen?",
    "Auf einer Skala von 1 bis 10: Wie ordentlich findest du dich?",
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du die Person rechts von dir?",
    "Auf einer Skala von 1 bis 10: Wie schnell bist du beim Vorglühen betrunken?",
    "Auf einer Skala von 1 bis 10: Wie peinlich war dein letzter Alkoholrausch?"
    ],
    // 20. [Aktivitäten]
    "20": [
        "Was ist die beste Aktivität, die man mit seinen männlichen Freunden machen kann?",
        "Was ist die beste Aktivität, die man mit seinen weiblichen Freundinnen machen kann?",
        "Was machst du am liebsten mit deinen Freunden im Sommer?",
        "Was machst du am liebsten mit deinen Freunden im Winter?",
        "Was ist die beste Aktivität, die man mit seinem Partner an einem Freitagabend machen kann?",
        "Zu welcher Aktivität würdest du niemals ja sagen?",
        "Welche Aktivität haben deine Eltern früher häufig mit dir gemacht als du ein Kind warst?",
        "Welches Hobby würdest du gerne in Perfektion können?",
        "Was wäre eine Aktivität, die dein linker Nachbar sofort vorschlagen würde?",
        "Was wäre eine Aktivität, die dein rechter Nachbar sofort vorschlagen würde?",
        "Welche Aktivität würdest du niemals mit deinen Eltern machen?"
    ],
    // 21. [Sportevents]
    "21": [
        "Welches Sportevent liebst du zu gucken?",
        "Welches Sportevent findest du am unterbewertesten?",
        "Welches Sportevent findest du am überbewertesten?",
        "Was war das erste Sportevent, bei dem du live vor Ort warst?",
        "Welches Sportevent willst du noch unbedingt live vor Ort ansehen?",
        "Bei welchem Sportevent könntest du dich deiner Meinung nach am ehesten noch für qualifizieren?",
        "Welche olympische Disziplin würdest du dir niemals live anschauen?",
        "Welche olympische Disziplin schaust du dir gerne an?"
    ],
    // 22. [Körpergrößen]
    "22": [
        "Wie groß wärst du gerne?",
        "Wie groß sollte dein Partner sein?",
        "Wie hoch kannst du ca. springen?",
        "Wie groß soll im Idealfall dein Sohn werden?",
        "Wie groß soll im Idealfall deine Tochter werden?",
        "Wie weit kannst du aus dem Stand springen?",
        "Wie breit sollte deiner Meinung nach ein Bett sein?",
        "Wie hoch sollte eine Tür deiner Meinung nach sein?"
    ],
    // 23. [Kleine Zeiträume]
    "23": [
        "Wie viel Zeit sollte zwischen dem Ende einer alten und dem Beginn einer neuen Beziehung liegen?",
        "Wie viel Urlaub bräuchtest du am Stück, um endlich mal komplett zu entspannen?",
        "Wie lange sollte man jemanden daten, bevor man offiziell zusammen kommt?",
        "Was war der längste Zeitraum, an dem du am Stück keinen Alkohol getrunken hast, seitdem du aktiv Alkohol trinkst?",
        "Was war der längste Zeitraum, an den du dich erinnern kannst, in dem du kein Fleisch gegessen hast?",
        "Wie viel Zeit vergeht bei dir zwischen zwei Friseurbesuchen?",
        "Wie lange würdest du eine Saftkur (Fasten, nur Säfte) durchhalten?",
        "Wie lange könntest du dich von deinem Lieblingsessen ernähren bis du es nicht mehr sehen/essen kannst?"
    ],
    // 24. [Sehr kleine Zeiträume]
    "24": [
        "Wie lange brauchst du um 3 Big Macs zu essen?",
        "Wie lange bist du durchschnittlich auf der Toilette?",
        "Wie lange brauchst du ca. um 1km zu laufen?",
        "Wie lange kannst du Liegestützen am Stück machen?",
        "Wie lange brauchst du durchschnittlich beim Kochen?",
        "Wie lange brauchst du durchschnittlich beim Duschen?",
        "Ab wann ist ein Spaziergang deiner Meinung nach zu lang?",
        "Wie lange dauerte ca. deine längste erhaltene oder verschickte Sprachnachricht?",
        "Wie lange könntest du deiner Meinung nach in einem Gehege voller hungriger Löwen überleben?",
        "Wie lange war ca. das längste Lied, dass du je gehört hast?"
    ],
    // 25. Erste Male (10 - 18 Jahre)
    "25": [
        "Mit wie vielen Jahren hattest du deinen ersten Crush?",
        "Mit wie vielen Jahren hattest du deine erste 6 in der Schule?",
        "Mit wie vielen Jahren hattest du deinen ersten Kuss?",
        "Mit wie vielen Jahren hast du das erste mal gekurbelt?",
        "Mit wie vielen Jahren hast du das erste Mal die Schule geschwänzt?",
        "Mit wie vielen Jahren hast du das erste Mal Geld verdient?",
        "Mit wie vielen Jahren hast du das erste Mal eine Hausparty veranstaltet?",
        "Mit wie vielen Jahren warst du das erste Mal mit dem Tod eines Familienmitglieds/engen Freundes konfrontiert?",
        "Mit wie vielen Jahren warst du das erste Mal alleine im Urlaub?",
        "Mit wie vielen Jahren warst du das erste Mal betrunken?" 
     ],
    // 26. Zahlenzauber (18 - aufwärts)
    "26": [
        "Was ist ein gutes Alter, um zu heiraten?",
        "Was ist ein gutes Alter, um einen ersten Vollzeit-Job zu haben?",
        "Was ist ein gutes Alter, um eine große Weltreise zu machen?",
        "In welchem Alter sollte man spätestens mit der Planung der eigenen Altersversorgung anfangen?",
        "In welchem Alter sollte man spätestestens anfangen gesünder zu leben und sich mehr zu schonen?",
        "Was ist ein gutes Alter, um ca. die Hälfte der eigenen Life Goals erreicht zu haben?",
        "Was ist das jüngste Alter, dass du daten würdest?",
        "Was ist das älteste Alter, dass du daten würdest?",
        "Was ist ein gutes Alter, um das erste Kind zu bekommen?"    
};

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('DOM loaded');
        const startButton = document.getElementById('startButton');
        console.log('Start button element:', startButton);
        if (!startButton) {
            console.error('Start button not found');
            return;
        }
        startButton.addEventListener('click', function(e) {
            console.log('Button clicked');
            startGame();
        });
        console.log('Event listener added successfully');
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});

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
    try {
        console.log('startGame called');
        let playerCount = document.getElementById("playerCount");
        console.log('playerCount element:', playerCount);
        if (!playerCount) {
            console.error('playerCount element not found');
            return;
        }
        playerCount = playerCount.value;
        console.log('Selected player count:', playerCount);

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
    } catch (error) {
        console.error('Error in startGame:', error);
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
