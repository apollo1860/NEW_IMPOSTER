const categories = {
    // 1. Musiker
    "1": [
        "Welcher Musiker ist deiner Meinung nach völlig überbewertet?",
        "Welchen Musiker hast du am liebsten als Teenager gehört?",
        "Wer ist der Lieblingsmusiker eurer Eltern?",
        "Welchen Musiker könntest du in einem 1v1 besiegen?",
        "Welcher Musiker läuft bei dir gerade rauf und runter?",
        "Welcher Musiker sollte seine eigene Reality-TV-Show kriegen?",
        "Welcher Musiker ist deiner Meinung nach sehr attraktiv?",
        "Welcher Musiker ist ein absoluter Geheimtipp?",
        "Welcher Musiker sollte deiner Meinung nach mit OnlyFans beginnen?",
        "Bei welchem Musiker gehst du auf 3 Promille gerne total ab?",
        "Wer singt deinen derzeitigen Lieblingssong?",
        "Mit welchem Musiker würdest du gerne mal das Nachtleben unsicher machen?",
        "Welcher Musiker ist dein heimlicher Guilty Pleasure?",
        "Welchen Musiker könntest du locker unter den Tisch trinken?",
        "Welcher Musiker hat deiner Meinung nach die beste Stimme?",
        "Welchen Musiker würdest du gerne mal im Dschungelcamp sehen?",
        "Welcher Musiker würde dich ohne Probleme unter den Tisch trinken?",
        "Welchen Musiker willst du noch unbedingt live sehen?"
    ],
    // 2. Zahlenzauber (1 bis 10)
    "2": [
        "Wie oft gehst du am Tag auf die Toilette?",
        "Mit wie vielen Kleinwüchsigen könntest du es in einem Kampf auf einmal aufnehmen?",
        "Wie viele enge Freunde hast du derzeit?",
        "Wie viele Weihnachtsgeschenke hast du letztes Jahr erhalten?",
        "Wie viele Geschenke hast du zu deinem letzten Geburtstag von Freunden und Familie erhalten?",
        "Wie viele Big Macs schaffst du in einer Stunde?",
        "Wie viele Leute lädst du ca. zu deinem nächsten Geburtstag ein?",
        "1 von 100 Trauben ist vergiftet. Für jede Traube, die du isst, erhälst du 200.000€. Wie viele isst du?",
        "Wie häufig am Tag wäscht du dir deine Hände?",
        "Wie häufig isst du etwas am Tag?",
        "Wie häufig in der Woche gehst du zum Supermarkt?",
        "Wie viele Unterhosen nimmst du mit wenn du für 7 Tage verreist?",
        "Wie oft duscht du in der Woche?",
        "In wie vielen aktiv genutzten WhatsApp-Gruppen bist du derzeit ca. drin?",
        "Wie oft warst du in diesem Monat schon verkatert?",
        "Wie viele Urlaube hast du dieses Jahr schon gemacht?",
        "Wie häufig warst du letztes Jahr auf der Wiesn?",
        "Wie häufig in der Woche isst du ca. Nudeln?",
        "Wie häufig bist du im Jahr ca. beim Zahnarzt?",
        "Wie viele Maß schaffst du maximal auf der Wiesn?",
        "Wie viele Stunden brauchst du, um komplett ausgeschlafen zu sein?",
        "Wie viele Biere sind perfekt für einen lustigen Abend?",
        "Wie viele Filme hast du dieses Jahr schon gesehen?",
        "Wie viele Stunden verbringst du täglich auf Instagram?",
        "Ab wie vielen Shots musst du dich meist übergeben?",
        "Wie oft bestellst du Essen über Lieferdienste im Monat?",
        "Wie oft warst du schon außerhalb Europas?",
        "Wie oft trinkst du durchschnittlich pro Woche Alkohol?"

    ],
    // 3. Filme und Serien
    "3": [
        "Was ist dein absoluter Lieblingsfilm?",
        "Welchen Film oder Serie würdest du als DEN Klassiker schlechthin bezeichnen?",
        "Welchen Film oder Serie, glaubst du, kennt sonst keiner aus der Runde?",
        "Welcher Film oder Serie hat den besten Hauptcharakter?",
        "Welcher Film oder Serie hat den besten Bösewicht?",
        "Welcher Film oder Serie hatte für dich das überraschendste Ende?",
        "Welcher Film oder Serie ist deiner Meinung nach total schlecht geschrieben?",
        "Welcher Film oder Serie hätte deiner Meinung nach einen Oscar verdient gehabt?",
        "In welchem Film oder Serie hättest du gerne eine Hauptrolle?",
        "Welchen Film oder Serie kannst du überhaupt nicht leiden?",
        "Welcher Film oder Serie ist perfekt fürs erste Date?",
        "Welchen Film oder Serie hast du zuletzt angesehen?",
        "Welchen Film oder Serie würdest du gerne nochmal zum allersten Mal ansehen?",
        "Welcher Film oder Serie hat dich als Kind am meisten geprägt?",
        "Aus welchem Film oder Serie zitierst du in deinem Alltag am häufigsten?"
    ],
    // 4. Sportler
    "4": [
        "Welcher Sportler war/ist zu lange über seinem Zenit noch aktiv?",
        "Mit welchem Sportler wärst du gerne für einen Abend am Ballermann?",
        "Welcher Sportler ist extrem hässlich?",
        "Welcher Sportler hat am meisten Rizz?",
        "Welchen Sportler würdest du zum Bundeskanzler wählen?",
        "Welcher Sportler glaubst du ist privat total anders im Gegensatz zu seinem öffentlichen Auftreten?",
        "Welcher Sportler sollte seine eigene Reality-TV Show kriegen?",
        "Welchen Sportler würdest du gerne mal im Dschungelcamp sehen?",
        "Welcher Sportler würde deiner Meinung nach unter der Brücke landen, wenn er kein Talent gehabt hätte?",
        "Welcher Sportler würde in einem Wettlauf gegen dich verlieren?",
        "Welcher Sportler ist sehr attraktiv?",
        "Welchen bekannteren Sportler könntest du deiner Meinung nach am ehesten in seiner Sportart besiegen?",
        "Welcher Sportler ist der größte Bad Boy/Bad Girl?",
        "Mit welchem Sportler würdest du gerne einen Tag tauschen?",
        "Welchen Sportler würdest du gerne auf ein Bier einladen?",
        "Welcher Sportler glaubst du ist privat ein richtiges Arschloch?",
        "Welcher Sportler könnte deiner Meinung nach in einem anderen Sport ebenfalls erfolgreich sein?"

    ],
    // 5. Länder
    "5": [
        "In welchem Land leben die schönsten Frauen?",
        "In welchem Land hast du bisher am häufigsten Urlaub gemacht?",
        "Welches Land hat die nervigsten Touristen?",
        "Bei welchem Land musst du schmunzeln, wenn du die Leute Englisch sprechen hörst?",
        "Welches Land hasst du?",
        "Welches Land hat deiner Meinung nach die größte Landschafts- & Naturvielfalt?",
        "Welches Land magst du?",
        "Welches Land wäre dir aktuell für eine Reise zu unsicher?",
        "In welchem Land würdest du gern leben?",
        "Welches Land ist deiner Meinung nach ziemlich dreckig?",
        "In welchem Land hattest du deinen schönsten Urlaub?",
        "In welches Land möchtest du unbedingt mal in den nächsten Jahren reisen?",
        "Welches Land findest du komplett überflüssig?",
        "Welches Land hat sehr leckeres Essen?",
        "Welches Land trinkt deiner Meinung nach zu viel Alkohol?",
        "Welches Land beheimatet viele bekannte Fußballer?",
        "Wo leben die liebsten Menschen?",
        "Welches Land würdest du morgen besuchen, wenn du könntest?",
        "In welchem Land würdest du gerne für 1 Jahr leben?"
    ],
    // 6. Prozente
    "6": [
        "Wie viel Prozent deines Lottogewinns würdest du deinen Eltern geben?",
        "Zu wie viel Prozent besteht deine Bildergalerie aus Screenshots von Weg- und Fahrtrouten?",
        "Wie viel Prozent deines monatlichen Einkommens legst du für schlechte Zeiten zur Seite?",
        "Wie viel Prozent deiner Onlinekäufe schickst du wieder zurück?",
        "Nach wie viel Prozent deiner Toilettenbesuche wäscht du dir die Hände?",
        "Wie viel Prozent der Menschen, denen du auf Social Media folgst, kennst du auch wirklich privat?",
        "Wie viel Prozent der Filme, die du anfängst schaust du auch wirklich zu Ende?",
        "Wie viel Prozent deines Kleiderschranks trägst du regelmäßig?",
        "Wie viel Prozent deines Urlaubs verbringst du ca. im Ausland?",
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
        "Von welchem Körperteil würdest du niemals Fotos online stellen/für Geld verkaufen?",
        "Von welchem Körperteil hättest du gerne 1 mehr?",
        "Welches deiner Körperteile dürften alle am Tisch jetzt anfassen?",
        "An welchem Körperteil hast du am häufigsten Schmerzen?",
        "Welches Körperteil muss in deinem Alltag am meisten aushalten?",
        "Welches Körperteil verabschiedet sich wohl als Erstes in den Ruhestand?",
        "Welches Körperteil ist deutlich wichtiger als viele finden?",
        "Welches Körperteil würdest du dir niemals tätowieren lassen?",
        "Wo würdest du am wenigsten gern geschlagen werden?",
        "Auf welches Körperteil könntest du am ehesten verzichten?",
        "Welches Körperteil findest du bei anderen besonders erotisch?",
        "Welches Körperteil würde sich dein linker Nachbar als Erstes oder Nächstes tätowieren lassen?",
        "Welches Körperteil würde sich dein rechter Nachbar als Erstes oder Nächstes tätowieren lassen?",
        "Welches Körperteil würdest du als Erstes oder Nächstes tätowieren lassen?"
    ],
    // 8. Cheers & Beers
    "8": [
        "Welches Getränk trinkst du am häufigsten?",
        "Welches Getränk trinkst du am liebsten nach dem Sport?",
        "Welches Getränk trinkst du gerne im Sommer?",
        "Welches Getränk ist total overhyped?",
        "Welches Getränk würdest du selber herstellen, wenn du könntest?",
        "Welches Getränk würdest du jetzt gerne bestellen?",
        "Welches Getränk kannst du nicht ausstehen?",
        "Was ist dein perfektes Kater-Getränk?",
        "Welches Getränk erinnert dich an Urlaub?",
        "Welches Getränk bestellst du am häufigsten in Restaurants?",
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
        "Wer von euch kommt mit seiner Stimme am höchsten?",
        "Wer von euch kann am besten küssen?",
        "Wer von euch wird am ehesten der nächste Bundeskanzler?",
        "Wer von euch lügt am häufigsten?",
        "Wer von euch ist der Geizigste?",
        "Wer von euch hat das meiste Talent?",
        "Wer von euch kann am besten singen?",
        "Wer von euch wird am ehesten Millionär?",
        "Wer von euch findet am schnellsten irgendwo neue Freunde?",
        "Wer von euch verträgt am meisten Alkohol?",
        "Wer von euch hat am meisten Geld auf der Bank?",
        "Wer von euch kann am besten lügen?",
        "Wer von euch kurbelt am häufigsten?",
        "Wer von euch ist am fleißigsten?",
        "Wer von euch ist am intelligentesten?",
        "Wer von euch ist der Sportlichste?",
        "Wer von euch landet am ehesten im Gefängnis?",
        "Wer von euch ist am romantischsten?",
        "Wer von euch hat am meisten Rizz?"
    ],
    // 10. Snack Attack
    "10": [
        "Was ist dein absolutes Lieblingsgericht?",
        "Du kannst dein Leben lang nur noch 1 Gericht essen. Welches wäre es?",
        "Was ist ein gutes Gericht für das erste Date?",
        "Welches Gericht erinnert dich an deine Kindheit?",
        "Was ist deine perfekte Kater-Mahlzeit?",
        "Welches Gericht kochst du dir selbst am liebsten?",
        "Welches Gericht bestellst du am häufigsten bei Lieferdiensten?",
        "Was war das teuerste Gericht, das du je bestellt hast?",
        "Welches Gericht kannst du gar nicht ab?",
        "Welches Gericht haben deine Großeltern häufig für dich gekocht?",
        "Welches Gericht haben deine Eltern häufig für dich gekocht?",
        "Welches Gericht ist deiner Meinung nach viel zu überteuert?",
        "Welches Gericht hat den besten Geruch?",
        "Was ist das beste Gericht, um eine gute Grundlage zu haben, bevor du auf eine Party gehst?"
    ],
    // 11. Hand aufs Herz
    "11": [
        "Hast du jemals in einer Prüfung geschummelt?",
        "Denkst du, dass du bereits zu jeder Uhrzeit des 24-Stunden-Tages irgendwann mal gepinkelt hast?",
        "Wärst du bereit allen am Tisch jetzt deinen Suchverlauf zu zeigen?",
        "Hast du jemals bei Freunden in die Wohnung gekotzt?",
        "Hast du dir schon mal selber eine reingehauen?",
        "Können 100 Menschen einen Gorilla besiegen?",
        "Kannst du jemanden am Tisch in Wirklichkeit gar nicht leiden?",
        "Wärst du bereit allen am Tisch jetzt deine letzte versendete und empfangene WhatsApp-Nachricht laut vorzulesen?",
        "Hast du dich schon mal ernsthaft geprügelt?",
        "Warst du schon mal vor deinen Eltern rotzbesoffen?",
        "Bist du schon mal voll gegen ein Straßenschild oder -laterne gelaufen, weil du nur auf dein Handy geguckt hast?",
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
        "Würdest du für 1.000 € ein 4cl Shot Urin trinken?",
        "Würdest du für 25.000 € ein ganzes Jahr lang als Soldat dienen?",
        "Würdest du für 1.000 € eine Woche im Sommer nicht duschen?",
        "Würdest du für 10.000 € zwei Runden lang gegen Mike Tyson im Ring boxen?",
        "Würdest du dir für 3.000.000 € deinen rechten Arm abhacken lassen?",
        "Würdest du für 100.000 € aus Deutschland auswandern?",
        "Würdest du für 5.000.000 € nach Nordkorea ziehen?",
        "Würdest du für 100 € von einem 10 Meter Brett im Schwimmbad springen?",
        "Würdest du für 5.000 € deinen Job kündigen?",
        "Würdest du für 100.000 € ein halbes Jahr auf Internetnutzung verzichten?",
        "Würdest du für 50.000 € ein ganzes Jahr auf Alkohol verzichten?",
        "Würdest du für 50.000 € ein ganzes Jahr auf Zigaretten verzichten?",
        "Würdest du für 250.000 € ein ganzes Jahr dein Zuhause nicht mehr verlassen?",
        "Würdest du für 250.000 € einen Porno drehen und veröffentlichen?",
        "Würdest du dir für 50 € von einer fremden Person eine Ohrfeige geben lassen?",
        "Würdest du dir für 20.000 € ein Tattoo in der Größe einer 2€-Münze stechen lassen, das dein rechter Nachbar auswählt?"
    ],
    // 13. Money, Money, Money (bis 500€)
    "13": [
        "Was ist die größte Summe, die du jemals an einem Geldautomaten abgehoben hast?",
        "Was war die höchste Geldsumme, die du jemals an einem Abend auf den Kopf gehauen hast?",
        "Wie viel Geld würdest du jetzt für einen neuen Fernseher ausgeben können/wollen?",
        "Wie viel Geld gibst du ca. im Monat für Klamotten aus?",
        "Wie viel Geld gibst du ca. im Monat für dein Mittagessen aus?",
        "Wie viel Geld gibst du ca. im Monat bei Fast-Food-Ketten aus?",
        "Wie viel Geld gibst du ca. im Monat in Supermärkten aus?",
        "Wie viel Geld gibst du ca. in einem Urlaub aus? (Ohne Flug & Unterkunft)",
        "Wie viel Taschengeld würdest du deinem Kind monatlich geben?",
        "Wie viel Geld gibst du ca. durchschnittlich am Tag aus?",
        "Wie viel Geld wärst du bereit im Monat für wohltätige Zwecke zu spenden?",
        "Wie viel Geld bist du bereit im Supermarkt für einen Wodka auszugeben?",
        "Wie viel Geld gibst du im Monat ca. für Alkohol aus?",
        "Was war die höchste Geldsumme, die du jemals verloren hast?",
        "Wie viel Geld gibst du im Monat ca. für Zigaretten aus?",
        "Wie viel Geld gibst du ca. im Monat für Lieferdienste aus?",
        "Wie viel Geld gibst du ca. im Monat für Streaming-Anbieter aus?",
        "Welche Summe pro Person ist deine Schmerzgrenze, wenn du mit Freunden Essen gehst?",
        "Wie viel Geld würden dir deine Eltern für einen einwöchigen Urlaub geben, wenn du sie darum fragst?"
    ],
    // 14. Uhrzeiten
    "14": [
        "Wann ist die perfekte Uhrzeit, um sonntags aufzustehen?",
        "Was ist die beste Uhrzeit, um zu fliegen?",
        "Was ist die beste Uhrzeit für den ersten Kaffee?",
        "Was ist die beste Uhrzeit um einen Döner zu essen?",
        "Um wie viel Uhr bist du normalerweise am Wochenende das erste Mal auf einem Sozialen Netzwerk?",
        "Wann ist die beste Uhrzeit fürs Fitnessstudio?",
        "Wann ist die beste Uhrzeit, um etwas zu essen?",
        "Wann ist die beste Uhrzeit, um sich am Wochenende mit Freunden zu treffen?",
        "Wann ist die beste Uhrzeit um den Wocheneinkauf zu erledigen?",
        "Wann sollte man am besten zu Abend essen?",
        "Wann ist die perfekte Zeit, um ins Büro zu kommen?",
        "Um wie viel Uhr gehst du idealerweise schlafen?",
        "Wann ist die beste Uhrzeit zum Masturbieren?",
        "Um wie viel Uhr solltest du am Wochenende deine nervigen Pflichten erledigen?",
        "Wann darf am Samstag das erste Bierchen aufgemacht werden?",
        "Um wie viel Uhr gehst du in der Regel duschen?"
    ],
    // 15. Lieder
    "15": [
        "Welches Lied ist ein absoluter Party-Hit?",
        "Welches Lied, glaubst du, magst nur du aus der Runde?",
        "Welches Lied ist mittlerweile total überspielt?",
        "Welches Lied solltet ihr jetzt alle als nächstes hören?",
        "Welches Lied kannst du derzeit gar nicht mehr hören?",
        "Welches Lied bringt dich zum Weinen?",
        "Welches Lied verbindest du immer mit genau einer Person?",
        "Welches Lied ist perfekt zum Kuscheln?",
        "Welches Lied würdest du auf deiner Beerdigung spielen lassen?",
        "Welches Lied wäre dein Go-To Song beim Karaoke?",
        "Welches Lied verbindest du am Meisten mit Liebeskummer?",
        "Welches Lied eignet sich perfekt zum Autofahren?",
        "Welches Lied verbindest du mit Sommer?",
        "Welches Lied verbindest du mit Winter?",
        "Welches Lied hast du zuletzt heruntergeladen?",
        "Welches Lied erinnert dich an deine Kindheit?"
    ],
    // 16. Stars & Sternchen
    "16": [
        "Welchem Promi würdest du sofort einen Heiratsantrag machen?",
        "Welchen Promi würdest du gerne mal im Dschungelcamp sehen?",
        "Welcher Promi sollte seine eigene Reality-TV Show kriegen?",
        "Welchen Promi würdest du deine Kinder babysitten lassen?",
        "Mit welchem Promi wärst du am ehesten bereit in eine WG zu ziehen?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kiss?",
        "Welcher Promi ist deiner Meinung nach am verrücktesten?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Marry?",
        "Welcher Promi wäre bei Kiss, Marry, Kill auf jeden Fall dein Kill?",
        "Bei welchem Promi fragst du dich, warum dieser überhaupt berühmt ist?",
        "Mit welchem Promi würdest du gerne mal ein Bierchen trinken?",
        "Welchen Promi würdest du in einem 1v1 besiegen?",
        "Welcher Promi wäre ein schlechter Nachbar?",
        "Welcher Promi ist deiner Meinung nach dumm wie Brot?",
        "Wer ist die bekannteste Person, die du schon persönlich gesehen hast?"
    ],
    // 17. Machen & Tun
    "17": [
        "Was machst abends immer, bevor du schlafen gehst?",
        "Was machst du gerne während einem längeren Flug?",
        "Was machst du gerne als unwichtiger Beifahrer während einer langen Autofahrt?",
        "Was ist das erste was du machst, wenn du von der Arbeit/Schule nachhause kommst?",
        "Was ist etwas, dass du jedes Wochenende machst?",
        "Was würdest du in deiner eigenen TV-Show machen?",
        "Was machst du so oft, dass es schon eine Sucht ist?",
        "Was wäre dein Kernthema auf deinem TikTok-Kanal?",
        "Wenn du eine nervige Angewohnheit für immer abstellen könntest. Welche wäre es?",
        "Was tust du am liebsten an einem freien Nachmittag?",
        "Was machst du morgens immer, bevor du ins Büro oder zur Schule gehst?",
        "Was würdest du tun, wenn du für einen Tag das andere Geschlecht wärst?",
        "Was machst du am liebsten, wenn du im Urlaub bist?",
        "Was würdest du dir gönnen, wenn du jetzt 100€ bekämst?",
        "Was hast du während des Corona-Lockdowns ständig gemacht?",
        "Was war früher dein absolutes Lieblingshobby?"
    ],
    // 18. Tiere
    "18": [
        "Welches Tier schmeckt am besten?",
        "Welches Tier würdest du als besten Freund wählen?",
        "Auf welchem Tier würdest du gerne mal (wieder) reiten?",
        "Welches Tier findest du absolut hässlich?",
        "In welches Tier würdest du dich am liebsten für einen Tag verwandeln?",
        "Welches Tier sollte ausgerottet werden?",
        "Welches Tier käme für dich niemals als Haustier in Frage?",
        "Welches Tier könntest du in einem Kampf besiegen?",
        "Welches Tier würdest du auf das Wappen deines eigenen Sportvereins tun?",
        "Welches Tier ist dein Lieblingstier?",
        "Welches Tier fasziniert dich am meisten?",
        "Was ist das dümmste Tier?",
        "Welches Tier sieht lustig aus?",
        "Welches Tier würdest du gerne mal essen?",
        "Welches Tier würdest du niemals essen?"
    ],
// 19. 1/10
    "19": [
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du dich?",
    "Auf einer Skala von 1 bis 10: Wie gut kannst du dir Namen merken?",
    "Auf einer Skala von 1 bis 10: Wie wichtig ist es dir, was andere von dir denken?",
    "Auf einer Skala von 1 bis 10: Wie attraktiv findest du Ryan Gosling?",
    "Auf einer Skala von 1 bis 10: Wie handysüchtig bist du?",
    "Auf einer Skala von 1 bis 10: Wie witzig findest du dich?",
    "Auf einer Skala von 1 bis 10: Wie gut verträgst du Alkohol?",
    "Auf einer Skala von 1 bis 10: Wie anfällig bist du für Süchte?",
    "Auf einer Skala von 1 bis 10: Wie locker waren deine Eltern bei deiner Erziehung?",
    "Auf einer Skala von 1 bis 10: Wie religiös bist du?",
    "Auf einer Skala von 1 bis 10: Wie schön ist deine Handschrift?",
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
    "Was ist die beste Aktivität, die man mit seinen Eltern machen kann?",
    "Was ist die beste Aktivität, die man mit seinen Großeltern machen kann?",
    "Was ist die beste Aktivität, die man beim 1. Date machen kann?",
    "Was ist die beste Aktivität, die man mit seinen weiblichen Freundinnen machen kann?",
    "Was machst du am liebsten mit deinen Freunden im Sommer?",
    "Was machst du am liebsten mit deinen Freunden im Winter?",
    "Was ist die beste Aktivität, die man mit seinem Partner an einem Freitagabend machen kann?",
    "Zu welcher Aktivität würdest du niemals ja sagen?",
    "Auf welche Aktivität hättest du jetzt gerade gar keine Lust?",
    "Welche Aktivität haben deine Eltern früher häufig mit dir gemacht als du ein Kind warst?",
    "Welches Hobby würdest du gerne in Perfektion können?",
    "Was wäre eine Aktivität, die dein linker Nachbar sofort vorschlagen würde?",
    "Was wäre eine Aktivität, die dein rechter Nachbar sofort vorschlagen würde?",
    "Welche Aktivität würdest du niemals mit deinen Eltern machen?"
    ],
    // 21. [Sportevents]
    "21": [
    "Welches Sportevent liebst du zu gucken?",
    "Welches Sportevent ist deiner Meinung nach viel zu kommerzialisiert?",
    "Welches Sportevent war das letzte, dass du aktiv verfolgt hast oder aktuell verfolgst?",
    "Welches Sportevent hättest du gerne bald in deiner Stadt?",
    "Auf welches Sportevent würdest du allein schon wegen den Fans gehen?",
    "Welches Sportevent findest du sehr unterbewertet?",
    "Welches Sportevent findest du sehr überbewertet?",
    "Was war das erste Sportevent, bei dem du live vor Ort warst?",
    "Welches Sportevent willst du noch unbedingt live vor Ort ansehen?",
    "Bei welchem Sportevent könntest du dich deiner Meinung nach am ehesten noch für qualifizieren?",
    "Welches Sportevent würdest du dir niemals live anschauen?",
    "Welches Sportevent gibt es deiner Meinung nach noch in 1.000 Jahren?",
    "Für welches Sportevent würdest du in ein anderes Land reisen, um es live zu sehen?"
    ],
    // 22. [Emojis]
    "22": [
    "Welchen Emoji versendest du am liebsten?",
    "Welcher Emoji beschreibt dich noch im Laufe des heutigen Abends?",
    "Welchen Emoji benutzt du zwar, aber sehr selten?",
    "Du kannst nur noch genau einen Emoji für den Rest deines Lebens verwenden. Welcher wäre es?",
    "Welcher Emoji beschreibt dich am besten?",
    "Welcher Emoji beschreibt deinen linken Nachbarn am besten?",
    "Welchen Emoji kann man im Zweifel immer benutzen?",
    "Welchen Emoji bekommst du am häufigsten zu gesendet?",
    "Welcher Emoji beschreibt deinen rechten Nachbarn am besten?",
    "Mit welchem Emoji kann man am besten in Instagram DMs sliden?",
    "Was war der letzte Emoji, den du versendet hast?",
    "Welchen Emoji würdest du als Profilbild verwenden?",
    "Welcher Emoji kommt bei dir nie zum Einsatz, obwohl du ihn eigentlich magst?",
    ],
    // 23. [Kleine Zeiträume]
    "23": [
        "Wie viel Zeit sollte zwischen dem Ende einer alten und dem Beginn einer neuen Beziehung liegen?",
        "Wie lange würdest du brauchen, um eine lange nicht mehr gesprochene Sprache, wieder einigermaßen fließend zu können?",
        "Wie viel Urlaub bräuchtest du am Stück, um endlich mal komplett zu entspannen?",
        "Wie lange sollte man jemanden daten, bevor man offiziell zusammen kommt?",
        "Was war der längste Zeitraum, an dem du am Stück keinen Alkohol getrunken hast, seitdem du aktiv Alkohol trinkst?",
        "Was war der längste Zeitraum, an den du dich erinnern kannst, in dem du kein Fleisch gegessen hast?",
        "Wie viel Zeit vergeht bei dir zwischen zwei Friseurbesuchen?",
        "Wie lange dauert es, bis du deine Bettwäsche wechselst?",
        "Wie lange müsstest du ab heute trainieren, um einen Halbmarathon laufen zu können?",
        "Wie lange dauert es bei dir ca. bis du dein (Haupt-)Shampoo aufgebraucht hast?",
        "Wie lange würdest du eine Saftkur (Fasten, nur Säfte) durchhalten?",
        "Wie lange könntest du dich von deinem Lieblingsessen ernähren bis du es nicht mehr sehen/essen kannst?"
    ],
    // 24. [Sehr kleine Zeiträume]
    "24": [
        "Wie lange brauchst du, um 3 Big Macs zu essen?",
        "Wie lange brauchst du ca., um ein klassisches Gedicht auswendig zu lernen?",
        "Wie lange brauchst du, um das Alphabet rückwärts aufzusagen?",
        "Wie lange dauert durchschnittlich ein Supermarkt-Besuch bei dir?",
        "Wie lange brauchst du normalerweise beim Abendessen?",
        "Wie lange kannst du die Luft anhalten?",
        "Wie lange kannst du deine Hand über eine brennende Kerze halten?",
        "Wie lange brauchst du, wenn du zügig eine Maß trinkst?",
        "Wie lange bist du durchschnittlich auf der Toilette?",
        "Wie lange brauchst du ca. um 1km zu laufen?",
        "Wie lange brauchst du ca. um einen Bottle Flip zu schaffen?",
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
        "Mit wie vielen Jahren hast du deinen ersten Porno geguckt?",
        "Mit wie vielen Jahren hast du das erste Mal Taschengeld bekommen?",
        "Mit wie vielen Jahren hast du dir dein erstes Computer-/Videospiel gekauft/besessen?",
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
        // 26. Berufe
    "26": [
        "Was war dein erster Berufswunsch als Kind?",
        "Was wäre dein Traumberuf?",
        "Welchen Beruf könnte deiner Meinung nach fast jeder machen?",
        "Welchen Beruf könntest du niemals machen?",
        "In welchem Beruf sollte man mehr Geld verdienen?",
        "Bei welchem Beruf fragst du dich, warum es überhaupt Menschen gibt, die den machen?",
        "Welcher Beruf hat deiner Meinung nach mehr Anerkennung verdient?",
        "Welchen Beruf sollte deiner Meinung nach dein linker Nachbar ausüben?",
        "Welchen Beruf sollte deiner Meinung nach dein rechter Nachbar ausüben?",
        "In welchem Beruf hätten dich gerne deine Eltern gesehen?",
        "Welchen Beruf sollte mindestens eine Person in deinem Freundeskreis im Idealfall haben?",
        "In welchem Beruf erlebt man deiner Meinung nach die lustigsten Sachen?" 
     ],
    
        // 27. Schulfächer
    "27": [
        "Welches Schulfach hast du früher gehasst?",
        "Welches Schulfach verbindest du mit einem roten Heftumschlag?",
        "Welches Schulfach verbindest du mit einem blauen Heftumschlag?",
        "Welches Schulfach hättest du gerne viel länger gehabt?",
        "Bei welchem Schulfach konnte man immer am meisten chillen?",
        "Für welches Schulfach hast du am meisten gelernt?",
        "Welches Schulfach war deiner Meinung nach am wichtigsten?",
        "In welchem Schulfach hattest du den besten Lehrer?",
        "In welchem Schulfach könntest du jetzt spontan am ehesten noch Nachhilfe geben?",
        "In welchem Schulfach hattest du den schlechtesten Lehrer?",
        "Welches Schulfach könntest du am ehesten ohne Studium deiner Meinung nach unterrichten?",
        "Welches Schulfach hättest du als Lehrer auf jeden Fall unterrichtet?",
        "Welches Schulfach fandest du am einfachsten?",
        "Welches Schulfach könnte deiner Meinung nach getrost abgeschafft werden?",
        "Vor welchem Schulfach hattest du am Abend davor immer am meisten Schiss?",
        "Aus welchem Schulfach hast du bereits das Meiste vergessen?",
        "Aus welchem Schulfach hast du am meisten Nützliches mitgenommen?" 
   ],
        // 28. Fiktive Charaktere
    "28": [
        "Welcher fiktive Charakter beschreibt dich am besten?",
        "Welcher fiktive Charakter hätte ein besseres Ende verdient?",
        "Welchen fiktiven Charakter hättest du gerne als Elternteil?",
        "Welchen fiktiven Charakter hättest du gerne als Geschwister?",
        "Mit welchem fiktiven Charakter wärst du gerne befreundet?",
        "Mit welchem fiktiven Charakter würdest du dich gerne selbstständig machen?",
        "In der Welt welches fiktiven Charakters würdest du gerne leben?",
        "In der Welt welches fiktiven Charakters würdest du gerne Urlaub machen?",
        "Welchen fiktiven Charakter würdest du für deinen einzigen Anruf aus dem Knast wählen?",
        "Welchen fiktiven Charakter würdest du sofort heiraten?",
        "Welcher fiktive Charakter sollte wirklich existieren?",
        "Nenne einen fiktiven Charakter, den vermutlich nur du aus der Runde kennst!",
        "Welchen fiktiven Charakter findest du attraktiv?",
        "Welchen fiktiven Charakter würdest du im Armdrücken besiegen?",
        "Mit welchem fiktiven Charakter wärst du am liebsten auf einer einsamen Insel?",
        "Welchen fiktiven Charakter kannst du nicht ausstehen?" 
 ],
        // 29. Gegenstände
    "29": [
        "Welcher Gegenstand darf bei einem Festival nicht fehlen?",
        "Welcher Gegenstand darf in deinem Urlaub nicht fehlen?",
        "Welchen Gegenstand verbindest du mit deinem Elternhaus?",
        "Den Kauf welches Gegenstands bereust du keine einzige Sekunde?",
        "Welchen Gegenstand würdest du dir nie holen, egal wie sehr er im Trend ist?",
        "Was ist der teuerster Gegenstand, den du in diesem Monat gekauft hast?",
        "Welchen Gegenstand willst du dir demnächst unbedingt kaufen?",
        "Welcher Gegenstand, der dir gehört, ist für dich unbezahlbar?",
        "Welchen Gegenstand nimmst du nach dem Aufwachen als Erstes in die Hand?",
        "Ohne welchen Gegenstand könntest du nicht mehr leben?",
        "Nenne einen Gegenstand, den du niemals Gebraucht kaufen würdest!",
        "Du musst einen deiner Gegenstände sofort verkaufen! Welcher wäre es?",
        "Welchen Gegenstand würdest du auf eine einsame Insel mitnehmen?",
        "Nenne einen Gegenstand, den vermutlich sonst niemand aus der Runde hier besitzt!",
        "Nenne einen Gegenstand, von dem man deiner Meinung nach nie genug haben kann!" 
 ], 
    // 30. Alter (18 - aufwärts)
    "30": [
        "Was ist ein gutes Alter, um zu heiraten?",
        "In welchem Alter sollte man deiner Meinung nach spätestens heiraten?",
        "Was ist ein gutes Alter, um das erste eigene Auto zu besitzen?",
        "In welchem Alter sollte man spätestens seinen Führerschein haben?",
        "Was ist ein gutes Alter, um einen ersten Vollzeit-Job zu haben?",
        "Was ist ein gutes Alter, um eine große Weltreise zu machen?",
        "In welchem Alter sollte man spätestens mit der Planung der eigenen Altersversorgung anfangen?",
        "In welchem Alter sollte man spätestens anfangen gesünder zu leben und sich mehr zu schonen?",
        "Was ist ein gutes Alter, um ca. die Hälfte der eigenen Life Goals erreicht zu haben?",
        "Was ist das jüngste Alter, dass du daten würdest?",
        "Was ist ein gutes Alter, um bei den Eltern auszuziehen?",
        "Ab welchem Alter lebt man deiner Meinung nach zu 100% selbstständig?",
        "Was ist das älteste Alter, dass du daten würdest?",
        "In welchem Alter sollte man deiner Meinung nach spätestens das erste Kind bekommen?",
        "Was ist ein gutes Alter, um das erste Kind zu bekommen?"    
    ],
    // 31. Orte
"31": [
    "Wo hattest du deinen ersten Kuss?",
    "Was ist der beste Ort für einen Heiratsantrag?",
    "An welchem Ort sollte man seinen künftigen Partner nicht kennenlernen?",
    "Was ist der beste Ort, um mit Freunden den Abend zu verbringen?",
    "An welchem Ort vergisst man schnell die Zeit?",
    "Wo könntest du dir vorstellen, deinen nächsten Geburtstag zu feiern?",
    "Wo kann man gut seinen Sonntagabend verbringen?",
    "Wo kann man gut seinen Samstagabend verbringen?",
    "Was war der unangenehmste Ort, an dem du mal uriniert hast?",
    "Welchen Ort verbindest du immer mit schlechten Erfahrungen?",
    "Was war der unangenehmste Ort, an dem du mal kotzen musstest?",
    "Welchen speziellen Ort verbindest du mit Familie oder Freunden?",
    "Wo fühlst du dich wie zuhause?",
    "Wo kann man sich deiner Meinung nach am besten betrinken?",
    "An welchem Ort bist du mindestens einmal die Woche?",
    "An welchem Ort will man nicht seinen Eltern begegnen?",
    "An welchem Ort wärst du gerne deutlich häufiger?",
    "An welchem Ort bist du gerne am Wochenende?",
    "An welchem Ort warst du am letzten Wochenende unter anderem?",
    "Was ist der perfekte Ort für ein erstes Date?"
],

// 32. Social Media
"32": [
    "Welche Social Media Plattform benutzt du am häufigsten?",
    "Welche Social Media Plattform hast du als Teenager am häufigsten benutzt?",
    "Welche Social Media Plattform findest du überbewertet?",
    "Welche Social Media Plattform hat das coolste Logo?",
    "Welche Social Media Plattform findest du unterbewertet?",
    "Welche Social Media Plattform nutzt du sehr selten oder gar nicht?",
    "Auf welcher Social Media Plattform tummeln sich deiner Meinung nach die meisten Weirdos?",
    "Ohne welche Social Media Plattform könntest du nicht mehr leben?",
    "Welche Social Media Plattform nutzt du, obwohl sie dich eigentlich nervt?",
    "Welche Social Media Plattform wird deiner Meinung nach bald aussterben?",
    "Welche Social Media Plattform wirst du noch nutzen, wenn du 70 bist?",
    "Welche Social Media Plattform dürfen deine Kinder später nicht nutzen?",
    "Auf welcher Plattform traust du dir am ehesten eine Influencer-Karriere zu?",
    "Auf welcher Social Media Plattform hast du am meisten Kontakte aus dem echten Leben?",
    "Auf welcher Plattform hast du dich erst spät oder noch nie angemeldet?"
],

// 33. Sportarten
"33": [
    "In welcher Sportart hast du einfach kein Talent?",
    "Welche Sportart würdest du niemals ausprobieren oder nie wieder machen?",
    "Welche Sportart würdest du gerne mal (wieder) ausprobieren?",
    "In welcher Sportart traust du dir eine Profi-Karriere zu?",
    "Welche Sportart ist anstrengender als man denkt?",
    "Welche Sportart hat mal einer deiner Eltern gemacht?",
    "Welche Sportart macht dir keinen Spaß?",
    "Welche Sportart findest du unterbewertet?",
    "Welche Sportart findest du überbewertet?",
    "Welche Sportart ist für dich kein 'richtiger' Sport?",
    "Welche Sportart bietet sich am Strand an?",
    "Welche Sportart bietet sich im Winter an?",
    "Welche Sportart kann ziemlich schmerzhaft sein?",
    "Welche Sportart würdest du gerne können?",
    "Welche Sportart sollen deine Kinder später mal ausüben?"
],

// 34. Fast-Food-Ketten
"34": [
    "Welche Fast-Food-Kette ist dein persönlicher Favorit?",
    "Welche Fast-Food-Kette sollte häufiger in Deutschland vertreten sein?",
    "Wenn du in deinem Leben nur noch zu einer Fast-Food-Kette gehen dürftest. Welche wäre es?",
    "Welche Fast-Food-Kette hast du früher deutlich häufiger besucht, als heutzutage?",
    "Welche Fast-Food-Kette findest du mittlerweile unverschämt teuer?",
    "Welche Fast-Food-Kette findest du total überbewertet?",
    "Welche Fast-Food-Kette findest du total unterbewertet?",
    "Welche Fast-Food-Kette hat das beste Maskottchen?",
    "Welche Fast-Food-Kette hat deine momentane Lieblingsbestellung?",
    "Zu welcher Fast-Food-Kette gehst du momentan am häufigsten?",
    "Welche Fast-Food-Kette hat deiner Meinung nach das beste Fleisch?",
    "In welcher Fast-Food-Kette würdest du am liebsten deinen nächsten Geburtstag feiern?",
    "Nenne eine Fast-Food-Kette, deren App du heruntergeladen hast",
    "Bei welcher Fast-Food-Kette bestellst du (fast) nie ein Menü?",
    "Bei welcher Fast-Food-Kette bestellst du am häufigsten/am ehesten über einen Lieferdienst?"
],
    
    // 35. Stichwörter
"35": [
    "Nenne ein Stichwort, dass die Geschichte zu deiner letzten traumatische Alkoholerfahrung anteasert",
    "Nenne ein Stichwort, dass deinen letzten Grund, warum du weinen musstest, anteasert",
    "Nenne ein Stichwort, dass die Geschichte zu deiner letzten physischen Verletzung anteasert",
    "Nenne ein Stichwort, dass den Grund für deinen letzten Streit mit Freunden oder Familie anteasert",
    "Nenne ein Stichwort, dass deine letzte sportliche Aktivität anteasert",
    "Nenne ein Stichwort, dass die Geschichte zu einer richtig peinlichen Aktion von dir anteasert",
    "Nenne ein Stichwort, dass deinen letzten Albtraum anteasert",
    "Nenne ein Stichwort, dass deinen letzten Sextraum anteasert",
    "Nenne ein Stichwort, dass deinen zuletzt angesehenen Porno anteasert",
    "Nenne ein Stichwort, dass deinen zuletzt angesehenen Film oder Serie anteasert",
    "Nenne ein Stichwort, dass deinen letzten Urlaub anteasert",
    "Nenne ein Stichwort, dass deinen letzten Urlaub mit deinen Eltern anteasert",
    "Nenne ein Stichwort, dass dein letztes Bewerbungsgespräch anteasert",
    "Nenne ein Stichwort, dass die Geschichte zu deinem letzten Sportunfall anteasert",
    "Nenne ein Stichwort, dass deinen letzten Krankheitszeitraum anteasert",
    "Nenne ein Stichwort, dass deinen letzten Lachanfall anteasert"
],

    // 36. Trinkspiele
"36": [
    "Welches Trinkspiel liebst du, obwohl es relativ unbekannt ist?",
    "Welches Trinkspiel garantiert die größte Absturzwahrscheinlichkeit?",
    "Welches Trinkspiel findest du besonders langweilig?",
    "Was war das letzte Trinkspiel, dass du gespielt hast?",
    "Wenn du nur noch ein Trinkspiel für den Rest deines Leben spielen dürfest, welches wäre es?",
    "An welchem Trinkspiel würdest du noch etwas verbessern?",
    "Bei welchem Trinkspiel hast du 3 Anläufe gebraucht, um es zu verstehen?",
    "Welches Trinkspiel würdest du sogar mit deinen Eltern spielen?",
    "Welches Trinkspiel würdest du niemals mit deinen Eltern spielen?",
    "Welches Trinkspiel ist für dich DER Klassiker schlechthin?"
],  

    // 37. Städte
"37": [
    "In welcher Stadt willst du gerne mal (wieder) Party machen?",
    "Welche Stadt reizt dich für einen Kurzurlaub am meisten?",
    "Für den hypothetischen Besuch welcher Stadt hast du in den letzten Monaten bereits mal nach Flügen oder Hotels gesucht?",
    "Welche Stadt reizt dich für einen Kurzurlaub gar nicht?",
    "In welcher Stadt findest du am meisten passende Aktivitäten für dich?",
    "In welcher Stadt kann man deiner Meinung nach am besten Essen gehen?",
    "Welche Stadt hat deiner Meinung nach den besten Alkohol?",
    "In welcher Stadt würde sich deiner Meinung nach dein linker Nachbar am wohlsten fühlen?",
    "In welcher Stadt würde sich deiner Meinung nach dein rechter Nachbar am wohlsten fühlen?",
    "Welche Stadt siehst du häufig auf Social-Media-Plattformen?",
    "In welche Stadt würdest du gerne bald reisen?"
],  
    
    // 38. Zahlenzauber (20 - 100)
"38": [
    "Wie viele Döner isst du ca. im Jahr?",
    "Mit wie vielen Grundschülern könntest du es in einem Kampf auf einmal aufnehmen?",
    "Mit wie vielen Altenheimbewohnern könntest du es in einem Kampf auf einmal aufnehmen?",
    "Mit wie vielen faustgroßen Vögeln könntest du es in einem Kampf auf einmal aufnehmen?",
    "Wie viele Minuten könntest du aktuell am Stück joggen?",
    "Wie viele Sekunden kannst du ca. die Luft anhalten?",
    "Wie häufig isst du ca. im Jahr etwas bei McDonalds?",
    "Wie häufig fährst du ca. im Jahr mit einem Zug?",
    "1 von 1.000 Trauben ist vergiftet. Für jede Traube, die du isst, erhälst du 250.000€. Wie viele isst du?",
    "Wie viele Liegestütze würdest du jetzt schaffen?",
    "Wie viele Verwandte hast du?",
    "Wie häufig fährst du Uber oder Taxi ca. im Jahr?",
    "Wie häufig wäscht du Wäsche ca. im Jahr?",
    "Wie häufig räumst du die Spülmaschine ca. im Jahr aus?",
    "Wie häufig bringst du den Müll ca. im Jahr raus?",
    "Wie häufig bist du ca. im Jahr feiern?",
    "Wie häufig suchst du ca. im Jahr nach Flügen oder Hotels ohne am Ende etwas zu buchen?"
],  
    
    // 39. Geil oder Scheiße
"39": [
    "Geil oder Scheiße: Pizza Hawaii",
    "Geil oder Scheiße: Nutella mit Butter",
    "Geil oder Scheiße: Sadomasochismus",
    "Geil oder Scheiße: Lakritze",
    "Geil oder Scheiße: Cola Zero/Light",
    "Geil oder Scheiße: Spaghetti mit Ketchup",
    "Geil oder Scheiße: Nackt schlafen",
    "Geil oder Scheiße: TiKTok",
    "Geil oder Scheiße: Lange Nägel bei Frauen",
    "Geil oder Scheiße: Podcasts",
    "Geil oder Scheiße: Dating-Apps",
    "Geil oder Scheiße: Urlaub auf einem Kreuzfahrtschiff",
    "Geil oder Scheiße: Urlaub in China",
    "Geil oder Scheiße: Gender Reveal Partys",
    "Geil oder Scheiße: Bier Mixgetränke (Radler, mit Grapefruit-Geschmack, etc.)",
    "Geil oder Scheiße: Mettbrötchen",
    "Geil oder Scheiße: Komplett rasierter Körper",
    "Geil oder Scheiße: Rosa Hemden bei Männern",
    "Geil oder Scheiße: Morgens duschen",
    "Geil oder Scheiße: Abends duschen",
    "Geil oder Scheiße: Im Bett essen",
    "Geil oder Scheiße: Geschmack von Trüffel",
    "Geil oder Scheiße: Die Stadt Berlin",
    "Geil oder Scheiße: Kohlensäure",
    "Geil oder Scheiße: Rotwein",
    "Geil oder Scheiße: Campingurlaub",
    "Geil oder Scheiße: Airbnb statt Hotel",
    "Geil oder Scheiße: Hamster als Haustier",
    "Geil oder Scheiße: Megan Fox",
    "Geil oder Scheiße: Kim Kardashian",
    "Geil oder Scheiße: After-Work Events mit Kollegen",
    "Geil oder Scheiße: Day Drinking",
    "Geil oder Scheiße: Trinkspiele",
    "Geil oder Scheiße: Dieses Trinkspiel (Find the Imposter)",
    "Geil oder Scheiße: In Geschäften vor Ort einkaufen",
    "Geil oder Scheiße: Ins Kino gehen beim ersten Date",
    "Geil oder Scheiße: Handy-PIN mit dem Partner teilen"
],  
       
// 39. A oder B
"39": [
    "A oder B: Würdest du eher in einer Badewanne voller (A) Spinnen oder (B) Schlangen baden?",
    "A oder B: Lieber (A) nie wieder duschen oder (B) nie wieder sprechen können?",
    "A oder B: Lieber (A) nie wieder verliebt sein oder (B) keine Kinder bekommen können?",
    "A oder B: Würdest du lieber wollen, dass (A) du oder (B) deine Familie nach Nordkorea ziehen muss?",
    "A oder B: Lieber (A) nie wieder Alkohol trinken oder (B) nie wieder in Bars oder Clubs gehen?",
    "A oder B: Lieber (A) nie wieder fliegen oder (B) nie wieder Zug fahren?",
    "A oder B: Lieber (A) für immer ehrlich sein oder (B) für immer lügen müssen?",
    "A oder B: Würdest du lieber nach (A) Kenia oder (B) China reisen?",
    "A oder B: Würdest du lieber überall (A) kostenlos reisen oder (B) umsonst essen können?",
    "A oder B: Würdest du lieber nie wieder (A) essen oder (B) schlafen müssen?",
    "A oder B: Würdest du lieber (A) der Star in einem kleinen Film oder (B) ein Statist in einem großen Film sein?",
    "A oder B: Würdest du lieber (A) dein eigenes Todesdatum oder (B) das der Person, die du am meisten liebst, kennen?",
    "A oder B: Würdest du lieber für immer nur (A) die erste Hälfte oder (B) die zweite Hälfte von Filmen sehen können?",
    "A oder B: Wärst du lieber (A) ein antisoziales Genie oder (B) beliebt, aber dumm?",
    "A oder B: Würdest du eher Honig von (A) einem Bären oder (B) aus einem Bienenstock stehlen?",
    "A oder B: Würdest du lieber (A) 10 zustzliche Jahre Jugend haben oder (B) 20 zusätzliche Jahre deines Lohns erhalten?",
    "A oder B: Würdest du lieber (A9 eine Handvoll Haare essen oder (B) drei öffentliche Telefone ablecken?",
    "A oder B: Lieber (A) Glück in der Liebe, Pech im Spiel oder (B) Pech in der Liebe, Glück im Spiel?",
    "A oder B: Lieber für immer (A) Strandurlaub oder (B) Urlaub in den Bergen?",
    "A oder B: Lieber für immer (A) zu klein oder (B) zu groß für alles sein?",
    "A oder B: Lieber nur noch (A) flüstern oder (B) schreien können?",
    "A oder B: Lieber nur noch (A) alkoholische oder (B) alkoholfreie Getränke trinken?",
    "A oder B: Wärst du lieber ein erfolgreicher (A) Gangsterrapper oder (B) Schlagersänger?",
    "A oder B: Lieber (A) immer eine Schuhgröße oder (B) eine T-Shirt-Größe zu eng?",
    "A oder B: Lieber (A) Apple oder (B) Android besitzen?",
    "A oder B: Lieber Urlaub in (A) Asien oder (B) Südamerika?",
    "A oder B: Lieber nur noch (A) klassische Musik oder (B) Hardrock hören?",
    "A oder B: Lieber (A) nur noch um 7:00 Uhr oder (B) um 12:00 Uhr aufwachen?"
]
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM geladen');

    const startButton = document.getElementById('startButton');
    if (!startButton) {
        console.error('Start-Button nicht gefunden');
        return;
    }

    startButton.addEventListener('click', function () {
        startGame();
    });

    document.getElementById('playerCount').addEventListener('change', updateRewardInfo);
    updateRewardInfo(); // Initial setzen
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
let currentCategory = "";
let imposterQuestion = "";

function updateRewardInfo() {
    const count = parseInt(document.getElementById('playerCount').value);
    const rewardSpan = document.getElementById('reward-info');
    if (rewardSpan) {
        rewardSpan.innerText = count * 2;
    }
}
function selectRandomCategory() {
    const randomIndex = Math.floor(Math.random() * gameCategories.length);
    const selectedCategory = gameCategories.splice(randomIndex, 1)[0]; // zieht UND entfernt eine zufällige Kategorie
    return selectedCategory;
}

function startGame() {
    const playerCount = parseInt(document.getElementById("playerCount").value);
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
    players = Array.from(inputs).map((input, index) => input.value || "Spieler " + (index + 1));
    gameCategories = Object.keys(categories).sort(() => Math.random() - 0.5);
    players.forEach(player => drinkCounts[player] = 0);
    imposterIndex = Math.floor(Math.random() * players.length);

    document.getElementById("player-inputs").style.display = "none";
    showHandoverScreen();
}

function showHandoverScreen() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("handover-screen").style.display = "block";
    document.getElementById("handover-text").innerText = `Bitte das Handy an ${players[currentPlayerIndex]} geben.`;
}

function showQuestionScreen() {
    document.getElementById("handover-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    if (currentPlayerIndex === (currentRound % players.length)) {
        currentCategory = selectRandomCategory(); // WICHTIG: neue zufällige Kategorie ziehen
        const questions = categories[currentCategory];

        const majorityQuestionIndex = Math.floor(Math.random() * questions.length);
        majorityQuestion = questions[majorityQuestionIndex];
        correctQuestion = majorityQuestion;

        let imposterQuestionIndex;
        do {
            imposterQuestionIndex = Math.floor(Math.random() * questions.length);
        } while (imposterQuestionIndex === majorityQuestionIndex);
        imposterQuestion = questions[imposterQuestionIndex];
    }

    document.getElementById("current-player-name").innerText = players[currentPlayerIndex];
    document.getElementById("player-answer").value = "";
    document.getElementById("category-text").style.display = "none";
    document.getElementById("question-text").innerText =
        currentPlayerIndex === imposterIndex ? imposterQuestion : majorityQuestion;
}

function reshuffleQuestion() {
    const questions = categories[currentCategory];

    const majorityQuestionIndex = Math.floor(Math.random() * questions.length);
    majorityQuestion = questions[majorityQuestionIndex];
    correctQuestion = majorityQuestion;

    let imposterQuestionIndex;
    do {
        imposterQuestionIndex = Math.floor(Math.random() * questions.length);
    } while (imposterQuestionIndex === majorityQuestionIndex);
    imposterQuestion = questions[imposterQuestionIndex];

    document.getElementById("question-text").innerText =
        currentPlayerIndex === imposterIndex ? imposterQuestion : majorityQuestion;
}

function nextPlayer() {
    const answer = document.getElementById("player-answer").value;
    playerAnswers.push({ player: players[currentPlayerIndex], answer });
    document.getElementById("player-answer").value = "";

    let nextIndex = (currentPlayerIndex + 1) % players.length;

    if (playerAnswers.length >= players.length) {
        document.getElementById("game-screen").style.display = "none";
        document.getElementById("round-end-screen").style.display = "block";
    } else {
        currentPlayerIndex = nextIndex;
        showHandoverScreen();
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

        let drinkBox = document.createElement("div");
        drinkBox.classList.add("drink-box");
        drinkBox.innerText = drinkCounts[player];

        let plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.classList.add("counter-button");

        minusButton.onclick = () => {
            if (drinkCounts[player] > 0) {
                drinkCounts[player]--;
                drinkBox.innerText = drinkCounts[player];
            }
        };

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

    if (currentRound >= 15) {
        showFinalRanking();
        return;
    }

    playerAnswers = [];
    currentPlayerIndex = currentRound % players.length;
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

    // Ranking berechnen
    let ranking = Object.entries(drinkCounts)
        .sort((a, b) => a[1] - b[1]);

    // Ranking anzeigen
    let rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = "";
    ranking.forEach(([player, count]) => {
        let li = document.createElement("li");
        li.innerText = `${player} – ${count} Schlücke`;
        rankingList.appendChild(li);
    });

    // Gewinner-Schluckanzahl anzeigen
    const winnerName = ranking[0][0];
    const rewardText = `${winnerName} darf ${players.length * 2} Schlücke verteilen.`;
    document.getElementById("reward-summary").innerText = rewardText;
}

// ❗ Diese beiden Funktionen stehen jetzt RICHTIG außerhalb:

function openInfoPopup() {
    const count = parseInt(document.getElementById("playerCount").value);
    const schlucke = count * 2;
    document.getElementById("reward-info").innerText = schlucke;
    document.getElementById("info-popup").style.display = "block";
}

function closeInfoPopup() {
    document.getElementById("info-popup").style.display = "none";
}
