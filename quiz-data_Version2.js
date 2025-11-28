const quizQuestions = [
    // MODULO 1: LA EVOLUZIONE DEL CANE
    {
        id: 1,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Qual è l'antenato selvatico diretto del cane domestico?",
        answers: [
            { text: "Il lupo grigio (Canis lupus)", correct: true, explanation: "Il cane domestico è stato addomesticato dal lupo grigio durante il Pleistocene.  Evidenze genetiche confermano questa relazione evolutiva." },
            { text: "La iena striata", correct: false, explanation: "La iena striata è un carnivoro diverso.  L'antenato del cane è il lupo grigio, con cui condivide il DNA." },
            { text: "Il coyote nordamericano", correct: false, explanation: "Il coyote è una specie correlata ma non è l'antenato del cane domestico." },
            { text: "Il dingo australiano", correct: false, explanation: "Il dingo è un cane selvatico discendente da cani domestici, non l'antenato." }
        ]
    },
    {
        id: 2,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "open",
        question: "Descrivi brevemente la relazione uomo-cane dal punto di vista della zooantropologia e quali vantaggi ha portato questa domesticazione.",
        correctAnswer: null,
        explanation: "La zooantropologia studia l'interazione tra uomini e animali.  La domesticazione del cane ha offerto vantaggi come: protezione, caccia collaborativa, compagnia, controllo del territorio e nel tempo legame emotivo e sociale profondo.",
        keywords: ["domesticazione", "protezione", "caccia", "legame", "interazione", "collaborazione"]
    },
    {
        id: 3,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Secondo l'approccio comportamentista, come si spiega l'acquisizione di nuovi comportamenti nel cane?",
        answers: [
            { text: "Attraverso processi di apprendimento per associazione e rinforzo", correct: true, explanation: "Il comportamentismo spiega l'apprendimento attraverso stimoli, risposte, condizionamento classico e operante, e rinforzi." },
            { text: "Solo attraverso l'istinto innato", correct: false, explanation: "Il comportamentismo enfatizza l'importanza dell'esperienza e dell'ambiente, non solo l'istinto innato." },
            { text: "Tramite la consapevolezza conscia del cane", correct: false, explanation: "Il comportamentismo osservabile non considera la consapevolezza conscia come fattore principale." },
            { text: "Unicamente attraverso l'imitazione sociale", correct: false, explanation: "L'imitazione è uno dei molti meccanismi, ma il comportamentismo enfatizza il rinforzo e le associazioni." }
        ]
    },
    {
        id: 4,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Quando si stima sia iniziato il processo di domesticazione del cane dal lupo? ",
        answers: [
            { text: "Tra 15.000 e 40.000 anni fa", correct: true, explanation: "Gli studi genetici e archeologici suggeriscono che la domesticazione del cane sia iniziata tra il Pleistocene tardivo e l'Olocene." },
            { text: "Circa 5.000 anni fa", correct: false, explanation: "5.000 anni fa il cane era già completamente addomesticato e differenziato geneticamente dal lupo." },
            { text: "Meno di 2.000 anni fa", correct: false, explanation: "La domesticazione è un processo molto più antico, precedente alla civiltà storica." },
            { text: "Negli ultimi 500 anni", correct: false, explanation: "Questo è un periodo troppo recente; le razze attuali si sono sviluppate nel tempo." }
        ]
    },
    {
        id: 5,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "multiple",
        question: "Qual è il ruolo principale della zooantropologia nello studio del rapporto uomo-cane? ",
        answers: [
            { text: "Analizzare l'interazione culturale, sociale e biologica tra uomini e cani", correct: true, explanation: "La zooantropologia studia come diverse culture e società interagiscono con gli animali, compreso il cane, e gli effetti reciproci." },
            { text: "Studiare solo la biologia genetica del cane", correct: false, explanation: "La zooantropologia è disciplina più ampia che include anche sociologia, antropologia culturale e storia." },
            { text: "Addestrare i cani in modo scientifico", correct: false, explanation: "Questo è compito della cinofilia e dell'etologia applicata, non della zooantropologia." },
            { text: "Prevenire le malattie nel cane", correct: false, explanation: "Questo è compito della medicina veterinaria, non della zooantropologia." }
        ]
    },
    {
        id: 6,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Qual è la principale differenza tra l'approccio cognitivista e quello comportamentista nello studio del comportamento canino?",
        answers: [
            { text: "Il cognitivismo considera i processi mentali interni, mentre il comportamentismo si concentra solo su stimoli e risposte osservabili", correct: true, explanation: "Il cognitivismo studia memoria, pensiero e consapevolezza; il comportamentismo considera solo ciò che è misurabile e osservabile." },
            { text: "Il cognitivismo è più antico del comportamentismo", correct: false, explanation: "Il comportamentismo è stato il primo approccio scientifico al comportamento, il cognitivismo è più recente." },
            { text: "Solo il comportamentismo è scientifico", correct: false, explanation: "Entrambi gli approcci sono scientifici, utilizzano diversi metodi e prospettive." },
            { text: "Il cognitivismo non utilizza metodi sperimentali", correct: false, explanation: "Il cognitivismo utilizza metodi sperimentali sofisticati per studiare processi cognitivi." }
        ]
    },
    {
        id: 7,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Quali cambiamenti fisici ha subito il cane durante la domesticazione rispetto al lupo?",
        answers: [
            { text: "Riduzione della dimensione del cranio, cambiamenti nei colori del mantello, variazione nella forma delle orecchie", correct: true, explanation: "La domesticazione ha portato a significativi cambiamenti morfologici: cervelli più piccoli, colori variegati, orecchie pendenti, coda ricurva." },
            { text: "Solo aumento della forza muscolare", correct: false, explanation: "La domesticazione ha portato a cambiamenti più complessi e spesso ha ridotto la forza rispetto ai lupi selvatici." },
            { text: "Nessun cambiamento fisico, solo comportamentale", correct: false, explanation: "La domesticazione ha causato importanti cambiamenti sia fisici che comportamentali." },
            { text: "Aumento della dimensione complessiva del corpo", correct: false, explanation: "In generale, i cani domestici hanno dimensioni simili o minori rispetto ai loro antenati lupo." }
        ]
    },
    {
        id: 8,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "open",
        question: "Spiega come il contesto culturale e storico influenza il ruolo e lo stato del cane in diverse società umane.",
        correctAnswer: null,
        explanation: "Il contesto culturale determina il valore del cane: in alcune culture è considerato sacro o fonte di compagnia, in altre principalmente utilitario. Fattori storici, religiosi e economici influenzano atteggiamenti e trattamenti verso i cani.",
        keywords: ["cultura", "contesto storico", "società", "atteggiamenti", "valore", "religione"]
    },
    {
        id: 9,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Che cosa studia l'etologia applicata al cane? ",
        answers: [
            { text: "L'applicazione pratica della conoscenza comportamentale per migliorare la convivenza uomo-cane", correct: true, explanation: "L'etologia applicata utilizza le conoscenze sul comportamento naturale e acquisito del cane per risolvere problemi comportamentali e migliorare il benessere." },
            { text: "Solo il comportamento dei cani selvatici in natura", correct: false, explanation: "L'etologia applicata si concentra sui cani domestici e sulla relazione con l'uomo." },
            { text: "La genetica del comportamento", correct: false, explanation: "Sebbene la genetica sia considerata, l'etologia applicata è più pratica e operativa." },
            { text: "La storia evolutiva del cane", correct: false, explanation: "Questo è compito dell'etologia evolutiva; l'etologia applicata è orientata ai problemi pratici." }
        ]
    },
    {
        id: 10,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Quale tra questi elementi è stato cruciale per il successo evolutivo della domesticazione canina?",
        answers: [
            { text: "La tolleranza del lupo verso gli umani e la capacità di adattamento a vivere in comunità umane", correct: true, explanation: "I lupi più tolleranti verso gli umani hanno avuto maggiori opportunità di sopravvivenza vicino ai villaggi umani, portando alla selezione naturale e successivamente artificiale." },
            { text: "La forza fisica superiore del cane", correct: false, explanation: "La domesticazione non ha favorito la forza, ma piuttosto la docilità e l'adattabilità." },
            { text: "La capacità di volare", correct: false, explanation: "I cani non possono volare; questa non è una caratteristica rilevante." },
            { text: "L'isolamento geografico dalle altre specie", correct: false, explanation: "L'isolamento non è stato un fattore cruciale; la domesticazione è avvenuta dove uomini e lupi condividevano l'habitat." }
        ]
    },
    {
        id: 11,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "multiple",
        question: "In che modo la zooantropologia aiuta a comprendere i problemi comportamentali del cane domestico?",
        answers: [
            { text: "Analizzando il divario tra i comportamenti naturali del cane e le aspettative umane nella società moderna", correct: true, explanation: "I problemi comportamentali spesso nascono dal conflitto tra istinti naturali canini e la vita domestica umana.  La zooantropologia aiuta a comprenderli." },
            { text: "Attraverso farmaci e medicinali", correct: false, explanation: "Questo è compito della medicina veterinaria comportamentale, non della zooantropologia." },
            { text: "Solo osservando il cane in isolamento", correct: false, explanation: "La zooantropologia considera l'interazione uomo-cane, non l'isolamento." },
            { text: "Stabilendo regole punitive rigide", correct: false, explanation: "La zooantropologia non promuove punizioni; comprende le cause sottostanti dei comportamenti." }
        ]
    },
    {
        id: 12,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Secondo l'approccio etologico, quale è il significato del comportamento di 'play bow' (postura di gioco) nel cane?",
        answers: [
            { text: "Un segnale di cortesia che comunica intenzione di giocare e non di minaccia", correct: true, explanation: "Il 'play bow' è un segnale comunemente utilizzato dai cani per indicare un'intenzione ludica e per 'azzerare' segnali aggressivi precedenti." },
            { text: "Un segno di sottomissione e paura", correct: false, explanation: "Sebbene implichi una certa vulnerabilità, non indica paura; è un gesto positivo e intenzionale." },
            { text: "Un comportamento territoriale", correct: false, explanation: "Il 'play bow' non è correlato al territorio, ma all'interazione sociale amichevole." },
            { text: "Uno stretching per preparare i muscoli", correct: false, explanation: "Sebbene coinvolga lo stretching fisico, il significato comunicativo è primario, non quello muscolare." }
        ]
    },
    {
        id: 13,
        module: "Modulo 1 - La evoluzione del cane",
        type: "open",
        question: "Descrivi il processo di neotenia nella domesticazione del cane e i suoi effetti comportamentali.",
        correctAnswer: null,
        explanation: "La neotenia è il mantenimento di caratteristiche giovanili nell'età adulta.  Nel cane domestico, la selezione per la docilità ha portato al mantenimento di comportamenti giovanili come dipendenza dall'umano, gioco prolungato e ridotta aggressività.",
        keywords: ["neotenia", "caratteristiche giovanili", "docilità", "dipendenza", "gioco", "selezione"]
    },
    {
        id: 14,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "multiple",
        question: "Quale aspetto della relazione umano-cane è specifico della ricerca zooantropologica e non della ricerca etologica?",
        answers: [
            { text: "L'influenza dei sistemi culturali, sociali e storici umani sulla percezione e il trattamento del cane", correct: true, explanation: "La zooantropologia integra prospettive antropologiche sulla società umana, mentre l'etologia si focalizza sui comportamenti animali." },
            { text: "Lo studio dei comportamenti istintivi del cane", correct: false, explanation: "Questo è compito dell'etologia, non della zooantropologia." },
            { text: "L'analisi genetica del cane", correct: false, explanation: "Questo è compito della genetica, non della zooantropologia." },
            { text: "La classificazione tassonomica del cane", correct: false, explanation: "Questo è compito della zoologia sistematica, non della zooantropologia." }
        ]
    },
    {
        id: 15,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Come il cognitivismo spiega la capacità del cane di risolvere problemi complessi (ad es., aprire una porta)? ",
        answers: [
            { text: "Attraverso processi cognitivi interni come memoria di lavoro, pianificazione mentale e rappresentazione dell'obiettivo", correct: true, explanation: "Il cognitivismo propone che il cane utilizza processi mentali come memoria, pianificazione e problem-solving, non solo comportamenti riflessi." },
            { text: "Solo attraverso prove ed errori casuali", correct: false, explanation: "Questo è più vicino al comportamentismo; il cognitivismo propone processi mentali più sofisticati." },
            { text: "Attraverso l'istinto puro", correct: false, explanation: "Gli istinti non spiegano la soluzione di problemi nuovi e complessi." },
            { text: "Il cognitivismo ritiene che i cani non possono risolvere problemi complessi", correct: false, explanation: "Il cognitivismo riconosce le capacità cognitive del cane, sebbene differenti da quelle umane." }
        ]
    },
    {
        id: 16,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Quali prove scientifiche supportano la teoria che il cane discende dal lupo grigio?",
        answers: [
            { text: "Evidenze genetiche, fossili transizionali, e compatibilità cromosomica tra cani e lupi", correct: true, explanation: "Il DNA mitocondriale e nucleare, i reperti fossili e la compatibilità riproduttiva confermano la discendenza dal lupo grigio." },
            { text: "Solo osservazioni comportamentali simili", correct: false, explanation: "Le somiglianze comportamentali supportano ma non provano l'origine; la genetica è più conclusiva." },
            { text: "La simile alimentazione carnivora", correct: false, explanation: "Molti carnivori hanno diete simili ma origini diverse." },
            { text: "Non esistono prove scientifiche conclusive", correct: false, explanation: "Al contrario, le prove genetiche e paleontologiche sono piuttosto conclusive." }
        ]
    },
    {
        id: 17,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "open",
        question: "Analizza il ruolo del cane come elemento di mediazione sociale e legame emotivo nelle comunità umane secondo una prospettiva zooantropologica.",
        correctAnswer: null,
        explanation: "Da prospettiva zooantropologica, il cane funziona come ponte comunicativo tra individui, facilitando interazioni sociali, fornendo supporto emotivo e rafforzando legami comunitari. Il cane rappresenta anche uno status sociale e un elemento di identità culturale.",
        keywords: ["mediazione", "legame", "emotivo", "comunità", "comunicazione", "status", "identità"]
    },
    {
        id: 18,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Qual è la critica principale al comportamentismo nel contesto dello studio del comportamento canino?",
        answers: [
            { text: "Ignora i processi mentali interni e trascura la complessità cognitiva del cane", correct: true, explanation: "Il comportamentismo si concentra su stimoli e risposte osservabili, ma ignora pensiero, memoria e consapevolezza che il cane chiaramente possiede." },
            { text: "È troppo complesso da applicare", correct: false, explanation: "Il comportamentismo è relativamente semplice da applicare; questo non è il problema." },
            { text: "Non ha mai prodotto risultati utili", correct: false, explanation: "Il comportamentismo ha contribuito significativamente all'addestramento dei cani." },
            { text: "Si basa unicamente su osservazioni soggettive", correct: false, explanation: "Il comportamentismo enfatizza l'osservazione oggettiva e misurabile." }
        ]
    },
    {
        id: 19,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Che cosa rappresenta il 'effetto fondatore' nella storia della domesticazione canina?",
        answers: [
            { text: "La piccola popolazione iniziale di lupi domesticati ha determinato la base genetica per tutta la diversità moderna", correct: true, explanation: "Un numero limitato di individui fondatori ha portato a una variabilità genetica iniziale ridotta, ma con successiva selezione artificiale ha generato la grande diversità di razze." },
            { text: "Il primo cane mai addomesticato", correct: false, explanation: "L'effetto fondatore è un concetto genetico-demografico più ampio." },
            { text: "La capacità dei cani di adattarsi ai climi freddi", correct: false, explanation: "Questo non è correlato all'effetto fondatore." },
            { text: "L'aumento progressivo della dimensione del cranio del cane", correct: false, explanation: "Il trend evolutivo è opposto: il cranio si è ridotto." }
        ]
    },
    {
        id: 20,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "multiple",
        question: "Come si manifesta l'antropomorfismo nella nostra percezione del cane e quali conseguenze ha secondo la zooantropologia?",
        answers: [
            { text: "Attribuire caratteristiche umane al cane; questo può portare a incomprensione dei bisogni reali dell'animale", correct: true, explanation: "L'antropomorfismo ci fa interpretare il comportamento canino attraverso lenti umane, rischiando di ignorare i veri bisogni etologici del cane." },
            { text: "È sempre benefico per la relazione umano-cane", correct: false, explanation: "L'antropomorfismo eccessivo può essere controproducente se ignora i veri bisogni del cane." },
            { text: "Non ha alcun effetto sul comportamento del cane", correct: false, explanation: "L'antropomorfismo influenza come trattiamo il cane, con effetti concreti su benessere e comportamento." },
            { text: "È l'approccio scientifico corretto", correct: false, explanation: "La zooantropologia promuove una comprensione equilibrata tra empatia e analisi scientifica." }
        ]
    },
    {
        id: 21,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "open",
        question: "Spiega come un etologista moderno integra i contributi del comportamentismo, del cognitivismo per comprendere il comportamento di un cane che ha paura dell'aspirapolvere.",
        correctAnswer: null,
        explanation: "Un etologista moderno userebbe: il comportamentismo per analizzare lo stimolo (suono) e la risposta (paura); il cognitivismo per comprendere memoria e anticipazione della paura; e l'etologia per contesto evolutivo della sensibilità al rumore.  La soluzione potrebbe integrare desensibilizzazione (comportamentismo) con comprensione cognitiva delle aspettative del cane.",
        keywords: ["paura", "aspirapolvere", "comportamentismo", "cognitivismo", "etologia", "desensibilizzazione", "memoria"]
    },
    {
        id: 22,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Quale processo selettivo ha avuto il ruolo più importante nella trasformazione del lupo in cane domestico?",
        answers: [
            { text: "La selezione artificiale per docilità e compatibilità con la vita umana", correct: true, explanation: "Gli umani hanno selezionato i lupi meno aggressivi e più tolleranti, che nel corso di migliaia di anni hanno generato il cane moderno." },
            { text: "Solo la selezione naturale in risposta a cambiamenti climatici", correct: false, explanation: "La selezione artificiale umana è stata il fattore dominante nella domesticazione." },
            { text: "La mutazione genetica casuale", correct: false, explanation: "Sebbene mutazioni si verifichino, la selezione artificiale ha guidato il processo." },
            { text: "L'ibridazione con altre specie di canidi", correct: false, explanation: "La domesticazione è principalmente derivazione dal lupo grigio, non ibridazione." }
        ]
    },
    {
        id: 23,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "multiple",
        question: "Quale fattore zooantropologico spiega le differenze nel modo in cui diverse culture rispetto al concetto di 'proprietà' del cane? ",
        answers: [
            { text: "Diversi sistemi di valori culturali, economici e giuridici delle società", correct: true, explanation: "In alcune culture il cane è proprietà privata, in altre è risorsa comunitaria, in altre ancora ha status quasi umano.  Ciò riflette differenti sistemi culturali e valoriali." },
            { text: "Differenze genetiche nella specie canina per regione", correct: false, explanation: "Non ci sono differenze genetiche significative che spieghino diverse percezioni culturali di proprietà." },
            { text: "Determinati comportamenti innati del cane", correct: false, explanation: "Il comportamento del cane non determina come le culture lo concettualizzano come proprietà." },
            { text: "Fattori climaticonaturali", correct: false, explanation: "Sebbene il clima influenzi funzioni pratiche, le differenze culturali di 'proprietà' sono più profondamente radicate." }
        ]
    },
    {
        id: 24,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Secondo l'etologia moderna, che ruolo ha l'imprinting nel comportamento del cane?",
        answers: [
            { text: "Determina il riconoscimento e l'attaccamento iniziale a specifici individui e ambienti durante il periodo critico di sviluppo", correct: true, explanation: "L'imprinting è il processo per cui il cane giovane sviluppa preferenze e attachments duraturi nei confronti di specie, individui e ambienti durante finestre temporali critiche." },
            { text: "Non ha alcun effetto sul comportamento adulto del cane", correct: false, explanation: "L'imprinting ha effetti duraturi, talvolta permanenti, sul comportamento adulto." },
            { text: "È il medesimo del condizionamento classico", correct: false, explanation: "L'imprinting è un processo distinto, più legato a periodi critici di sviluppo." },
            { text: "Avviene solo negli umani, non nei cani", correct: false, explanation: "L'imprinting è stato descritto originariamente negli uccelli e si applica anche ai cani." }
        ]
    },
    {
        id: 25,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Quali sono i tre periodi critici principalmente riconosciuti nello sviluppo del cucciolo di cane?",
        answers: [
            { text: "Periodo neonatale (0-3 settimane), di socializzazione (3-14 settimane), e giuvenile (14 settimane-18 mesi)", correct: true, explanation: "Questi periodi caratterizzano lo sviluppo neurologico, comportamentale e sociale cruciali per il benessere e il comportamento adulto del cane." },
            { text: "Solo il periodo di svezzamento", correct: false, explanation: "Lo svezzamento è parte del primo periodo, ma ci sono altri periodi critici cruciali." },
            { text: "Dal primo al terzo anno di vita", correct: false, explanation: "I periodi critici più importanti sono nei primi 18 mesi, non fino al terzo anno." },
            { text: "Non esistono periodi critici nel cane", correct: false, explanation: "Gli studi etologici hanno chiaramente identificato periodi critici di sviluppo." }
        ]
    },
    {
        id: 26,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "open",
        question: "Discuti come il fenomeno della 'sindrome dello scimpanzé' potrebbe essere parallelo al concetto di cane 'problematico' nel contesto urbano moderno dal punto di vista zooantropologico.",
        correctAnswer: null,
        explanation: "La sindrome dello scimpanzé (comportamento aggressivo di scimpanzé allevati come umani) parallela il cane urbano che sviluppa comportamenti anomali.  Entrambi riflettono conflitti tra esigenze biologiche etologiche e aspettative sociali umane.  Una prospettiva zooantropologica riconosce questa dissonanza e propone soluzioni integrate.",
        keywords: ["sindrome", "scimpanzé", "conflitto", "etologico", "urbano", "aspettative", "dissonanza"]
    },
    {
        id: 27,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "multiple",
        question: "Quale integrazione tra comportamentismo e cognitivismo è più utile nella risoluzione di comportamenti problematici nel cane moderno?",
        answers: [
            { text: "Utilizzare tecniche comportamentiste di rinforzo mentre si considerano processi cognitivi di memoria e anticipazione", correct: true, explanation: "L'integrazione consente di applicare rinforzi efficaci (comportamentismo) comprendendo al contempo le aspettative e i timori del cane (cognitivismo)." },
            { text: "Ignorare completamente il comportamentismo a favore del cognitivismo", correct: false, explanation: "Il comportamentismo rimane valido; l'integrazione è più efficace." },
            { text: "Usare solo tecniche cognitiviste senza considerare rinforzi", correct: false, explanation: "I rinforzi comportamentisti sono essenziali per modificare comportamenti problematici." },
            { text: "Nessuna integrazione è necessaria; gli approcci sono incompatibili", correct: false, explanation: "Gli approcci moderni li integrano con successo nella pratica." }
        ]
    },
    {
        id: 28,
        module: "Modulo 1 - La evoluzione del cane",
        type: "multiple",
        question: "Come spieghi la diversità di taglie e forme nei cani moderni considerando il loro antenato lupo, che ha variabilità relativamente limitata?",
        answers: [
            { text: "Attraverso la selezione artificiale umana intensa su tratti specifici nel corso di migliaia di anni", correct: true, explanation: "Nonostante il lupo base abbia variabilità limitata, la selezione artificiale ha amplificato piccole varianti genetiche verso direzioni diverse, creando razze molto diverse." },
            { text: "È impossibile spiegare questa diversità", correct: false, explanation: "La genetica e la selezione spiegano chiaramente questo fenomeno." },
            { text: "Attraverso ibridazione con altre specie animali", correct: false, explanation: "Non ci sono prove significative di ibridazione con specie diverse dal lupo." },
            { text: "A causa di fattori geografici isolati che hanno favorito mutazioni", correct: false, explanation: "Sebbene fattori geografici giochino un ruolo, la selezione artificiale è il fattore principale." }
        ]
    },
    {
        id: 29,
        module: "Modulo 2 - Guida alla zooantropologia",
        type: "multiple",
        question: "In quale modo la zooantropologia contribuisce al dibattito etico contemporaneo riguardante il benessere del cane?",
        answers: [
            { text: "Fornendo una comprensione olistica dell'interazione uomo-cane che integra prospettive biologiche, culturali ed etiche", correct: true, explanation: "La zooantropologia aiuta a comprendere che il benessere canino non dipende solo da bisogni fisici, ma anche da fattori culturali e dalla qualità della relazione umana." },
            { text: "Semplicemente prescrivendo regole di allevamento", correct: false, explanation: "La zooantropologia va oltre le semplici prescrizioni; offre una comprensione più profonda." },
            { text: "Non contribuisce al dibattito etico", correct: false, explanation: "La zooantropologia è centrale nei dibattiti etici contemporanei sul benessere animale." },
            { text: "Posizionandosi contro qualsiasi utilizzo del cane", correct: false, explanation: "La zooantropologia non è categoricamente contraria, ma comprende relazioni complesse." }
        ]
    },
    {
        id: 30,
        module: "Modulo 3 - Comportamentismo, Cognitivismo e Etologia",
        type: "open",
        question: "Integra comportamentismo, cognitivismo e etologia per spiegare come un cane impara a richiedere attenzione all'umano e come questo processo riflette sia meccanismi di rinforzo che processi cognitivi sofisticati.",
        correctAnswer: null,
        explanation: "Il comportamentismo spiega che il cane ripete comportamenti seguiti da rinforzo (attenzione umana); il cognitivismo aggiunge che il cane ha memoria dell'evento e anticipa conseguenze; l'etologia riconosce che ciò riflette meccanismi di comunicazione evolutivi.  L'integrazione rivela come apprendimento associativo, previsione mentale e adattamento evolutivo si combinano nel comportamento moderno del cane.",
        keywords: ["apprendimento", "rinforzo", "memoria", "anticipazione", "comunicazione", "comportamento", "integrazione"]
    }
];

// Funzione per randomizzare le domande
function shuffleQuestions() {
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
    return quizQuestions;
}