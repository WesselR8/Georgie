'use strict';

// ── Location data ─────────────────────────────────────────────────────────────
// Verified facts (2024–2025 data)
const LOCATIONS = [
    {
        id: 'tbilisi',
        name: 'Tbilisi',
        category: 'stad',
        type: 'Hoofdstad · ~1.1 miljoen inwoners · 494m hoogte',
        lat: 41.6938,
        lng: 44.8015,
        emoji: '🏛️',
        color: '#e8b84b',
        sfeer: '"Tbilisi voelt als een stad die zichzelf uitvindt — streetart naast 5e-eeuwse kerken, een nachtclub in een oud fabriekscomplex, en de beste wijn ter wereld voor €1 per glas."',
        waarom: 'De hoofdstad heeft een karakter dat nergens anders bestaat. Elk kwartier is een ander verhaal: Abanotubani met dampende zwavelbaden en Perzische koepels, Sololaki vol Art Nouveau gevels, Fabrika waar de jeugd van de stad dag en nacht samenkomt. Daarboven: Georgië is de bakermat van de wijn — al 8000 jaar gemaakt in klei kvevri-kruiken. De natural wine-scene in Tbilisi is wereldklasse.',
        highlights: [
            'Abanotubani zwavelbaden – Perzische koepels, privéruimtes €3–25 p.p.',
            'Narikala vesting – 4e-eeuws fort met panorama over de hele stad',
            'Fabrika – voormalige Sovjet naaimachinefabriek, nu bar/café/hostel complex',
            'Shardeni Street – restaurants, wijnbars en sfeerterrasjes in de oude stad',
            'Dry Bridge markt – antiek, kunst en souvenirs (zaterdag en zondag best)',
            'Mtskheta dagtrip – UNESCO-stad, 30 min van Tbilisi, 2 werelderfgoedkloosters',
        ],
        photos: ['foto/tbilisi1.jpg', 'foto/tbilisi2.jpg', 'foto/tbilisi3.jpg'],
        dagen: '3–4 dagen',
        budget: '€35–65 p.p./dag',
        periode: 'April–juni & sept–okt',
        verblijf: 'Guesthouse Sololaki/Vera of Fabrika hostel (€10–50/nacht)',
        eten: [
            { icon: '🥟', naam: 'Khinkali', omschr: 'Gevulde deegpakketjes — eet met je handen, steeltje laat je liggen' },
            { icon: '🧀', naam: 'Khachapuri Imeretisch', omschr: 'Ronde gevulde kaasbrood — origineel en het beste op straat' },
            { icon: '🍷', naam: 'Natural wine', omschr: 'Vino Underground of G-Vino — oranje kvevri-wijn, anders dan alles' },
            { icon: '🫕', naam: 'Kharcho', omschr: 'Rijke rundvleessoep met walnoten, pruimen en kruiden' },
        ],
        tips: [
            'Bolt of Yandex Go voor taxis — nooit meer dan 5–10 GEL in de stad',
            'Metro: Tbilisi Card (2 GEL), rit 1 GEL — 2 lijnen, handig voor avonden',
            'SIM bij Magti op luchthaven: ~15 GEL voor 15GB — koop direct bij aankomst',
            'Geldautomaat: Bank of Georgia beste koers, geen extra kosten',
            'Nachtleven start pas na middernacht — Bassiani en Khidi zijn wereldberoemd',
            'Cash meenemen voor lokale restaurants en markten — card overal bij hotels',
        ],
    },
    {
        id: 'batumi',
        name: 'Batumi',
        category: 'stad',
        type: 'Kuststad · ~157.000 inwoners · Zwarte Zee · Adjara regio',
        lat: 41.6168,
        lng: 41.6367,
        emoji: '🌊',
        color: '#e8b84b',
        sfeer: '"Batumi is het Las Vegas van de Kaukasus — palmenklimaat, neonverlichte torenflats langs zee en casino\'s open tot zonsopgang. Met in het midden: een verrassend gezellige oude stad."',
        waarom: 'De Adjarische hoofdstad aan de Zwarte Zee combineert Rivièra-sfeer met Georgische warmte. De 7 km lange boulevard is het centrum van het leven. De stad heeft ook haar eigen keuken: Adjara is bergachtig binnenland met een rijke voedselcultuur die afwijkt van de rest van Georgië. De Adjarian khachapuri — bootvorming met ei en boter — is hier uitgevonden.',
        highlights: [
            'Boulevard (7km) – palmbomen, terrassen, strandpromenade en avondzon',
            'Adjarian khachapuri – bootvorming met ei gebroken aan tafel, must-eat',
            'Ali & Nino standbeeld – bewegend kinetisch kunstwerk, elke avond om 19:00',
            'Oude stad – mix van Europese en Ottomaanse architectuur, sfeervol',
            'Botanische tuin – 111 hectare subtropisch, boven de kliffen aan zee',
            'Gonio Vake fort – Romeins fort 15km zuidelijk, vlakbij Turkse grens',
        ],
        photos: ['foto/batumi1.jpg', 'foto/batumi2.jpg', 'foto/batumi3.jpg'],
        dagen: '2–3 dagen',
        budget: '€35–65 p.p./dag',
        periode: 'Juni–september (strandseizoen)',
        verblijf: 'Hotel of guesthouse bij de boulevard (€25–80/nacht)',
        eten: [
            { icon: '🛶', naam: 'Adjarian khachapuri', omschr: 'Bootvorming met ei — Adjara specialiteit, hier uitgevonden' },
            { icon: '🥩', naam: 'Mtsvadi', omschr: 'Spit-gegrild vlees, buiten bereid — overal op straat' },
            { icon: '🍇', naam: 'Adjarische wijn', omschr: 'Lokale productie uit het bergachtige binnenland van Adjara' },
            { icon: '🍬', naam: 'Churchkhela', omschr: 'Walnoten in gedroogde druivensap "kaars" — nationaal snack' },
        ],
        tips: [
            'Trein Tbilisi–Batumi: ~5u, 15–25 GEL — comfortabeler dan bus, boek vooraf',
            'Strand is aanwezig maar niet van hoog niveau — kom voor sfeer, niet puur strand',
            'Casinos zijn legaal in Georgië — Batumi heeft er tientallen, 24/7 open',
            'Boulevard is 7km — huur een fiets (5–8 GEL/uur) voor de volle lengte',
            'Dagtrip: Kobuleti (rustig strand, 30min), Gonio Vake (Romein fort, 20min)',
            'Bolt werkt goed in Batumi — taxikosten zijn laag, gebruik het gerust',
        ],
    },
    {
        id: 'kutaisi',
        name: 'Kutaisi',
        category: 'stad',
        type: 'Regionale stad · ~147.000 inwoners · West-Georgië · 155m hoogte',
        lat: 42.2679,
        lng: 42.7082,
        emoji: '⛪',
        color: '#e8b84b',
        sfeer: '"Kutaisi is Georgië zonder filter — lokale markten, UNESCO-kloosters op 15 minuten rijden en niemand die je iets probeert te verkopen. Authenticiteit in optima forma."',
        waarom: 'Kutaisi heeft twee gezichten: een onderschatte stadsbestemming met UNESCO-monumenten, én het beste vertrekpunt voor Svaneti en spectaculaire canyons. Bonus: het vliegveld (KUT) heeft directe verbindingen vanuit Nederland via Ryanair en Wizz Air — het goedkoopste startpunt voor je Georgische trip.',
        highlights: [
            'Gelati klooster (UNESCO) – 12e-eeuws, graf van Koning David de Bouwer',
            'Bagrati kathedraal (UNESCO) – 11e-eeuwse kathedraal in het stadscentrum',
            'Prometheus grotten – 22km van stad, spectaculaire stalactieten + bootrit, ~25 GEL',
            'Okatse canyon – 780m hangbrug walkway boven wilde kloof, ~30 GEL',
            'Martvili canyon – bootjes door smaragdgroene kloof, ~20 GEL',
            'Centrale markt – dagelijks, authentiek, lokaal leven op zijn puurste',
        ],
        photos: ['foto/kutaisi1.jpg', 'foto/kutaisi2.jpg', 'foto/kutaisi3.jpg'],
        dagen: '1–2 dagen',
        budget: '€25–45 p.p./dag',
        periode: 'Mei–oktober',
        verblijf: 'Budgethotel of centrum guesthouse (€15–40/nacht)',
        eten: [
            { icon: '🫘', naam: 'Lobiani', omschr: 'Boonvulling in brood — Imeretisch specialiteit, goedkoop en vullend' },
            { icon: '🧀', naam: 'Imereti kaas', omschr: 'Verse witte kaas, mild van smaak — in bijna elk gerecht' },
            { icon: '🍷', naam: 'Rkatsiteli wijn', omschr: 'Droge witte lokale druivensoort — vrij zuiver en fris' },
            { icon: '🥃', naam: 'Chachu', omschr: 'Georgische grappa (40–60%) — guesthouses bieden het altijd aan' },
        ],
        tips: [
            'Vliegveld KUT: Ryanair/Wizz Air vanuit NL — goedkoopste startpunt voor je reis',
            'Prometheus + Okatse op één dag: shared taxi ~60 GEL/auto, goed te doen',
            'Vanuit Kutaisi naar Mestia: marshrutka ~5u, 30–35 GEL — beste vertrekpunt',
            'Gelati en Bagrati liggen 10km uit centrum — samen in 3u te doen per taxi (~30 GEL)',
            'Martvili en Okatse canyon liggen ~50km — goed te combineren in één dagtour',
            'Marshrutka naar Svaneti vertrekken om 7–9u — wees vroeg bij het busstation',
        ],
    },
    {
        id: 'mestia',
        name: 'Mestia',
        category: 'berg',
        type: 'Bergstadje · 1500m hoogte · Groot-Svaneti · ~2500 inwoners',
        lat: 43.0534,
        lng: 42.7207,
        emoji: '🏔️',
        color: '#4be8a0',
        sfeer: '"Middeleeuwse torens tussen 4000m+ pieken. Svaneti voelt als een parallelle wereld — dezelfde lucht als de rest van Georgië, maar compleet andere wetten van tijd en zwaartekracht."',
        waarom: 'Mestia is de hoofdstad van de Svaneti-regio, een van de meest geïsoleerde en unieke plekken van Europa. De Svanetische gemeenschap heeft eeuwenlang een eigen taal gesproken en verdedigingstorens gebouwd die nu als icons van de regio gelden. Combineer dit met trekking van wereldklasse richting Ushguli, en je hebt een bestemming voor het leven.',
        highlights: [
            'Svanetische koshki torens – tientallen verdedigingstorens in en rond het dorp',
            'Koruldi meren daghike – 5–6u, 2970m hoogte, panorama op 4 toppen >4000m',
            'Trek Mestia–Ushguli – 4-daags, meest iconische lange trekroute van de Kaukasus',
            'Ushguli jeep dagtour – ~130 GEL/auto, 45km via bergweg, hoogste bewoonde dorp Europa',
            'Svaneti Museum – middeleeuwse iconen, historische wapens, opgravingen',
            'Hatsvali skigebied – 8km van Mestia, dec–mrt, daglift ~25 GEL',
        ],
        photos: ['foto/mestia1.jpg', 'foto/mestia2.jpg', 'foto/mestia3.jpg'],
        dagen: '3–5 dagen',
        budget: '€35–65 p.p./dag (incl. maaltijden)',
        periode: 'Juni–september',
        verblijf: 'Guesthouse full board ~50–70 GEL p.p./nacht (3 maaltijden inbegrepen)',
        eten: [
            { icon: '🥧', naam: 'Kubdari', omschr: 'Svanetisch vleespastei met uien — hét gerecht van de regio' },
            { icon: '🌽', naam: 'Chvishtari', omschr: 'Maisbrood gevuld met bergkaas, gebakken — ontbijt of snack' },
            { icon: '🧀', naam: 'Svan kaas', omschr: 'Stevige ingelegde kaas, intenser van smaak dan Imereti kaas' },
            { icon: '🌿', naam: 'Svanuri Marili (Svan zout)', omschr: 'Specerijenblend met knoflook en kruidnagel — het souvenir van Svaneti' },
        ],
        tips: [
            'Marshrutka vanuit Zugdidi (~4u, 20–25 GEL) of Kutaisi (~5u, 30–35 GEL)',
            'Vluchtje Tbilisi–Mestia: ~45 min, €35–70, maar bij slecht weer geannuleerd',
            'Download offline kaarten via Maps.me vóór vertrek — bereik kan nul zijn',
            'Guesthouses regelen alles: jeep, gids, paarden, uitrusting — vraag vooraf',
            'Er is één geldautomaat in Mestia — niet altijd werkend. Neem voldoende cash',
            'Svanuri Marili (Svan zout) is het beste souvenir — goedkoop bij elk winkeltje',
        ],
    },
    {
        id: 'stepantsminda',
        name: 'Stepantsminda',
        category: 'berg',
        type: 'Bergdorp · 1700m hoogte · Kazbegi regio · ~1200 inwoners',
        lat: 42.6558,
        lng: 44.6392,
        emoji: '⛺',
        color: '#4be8a0',
        sfeer: '"De Gergeti Trinity Church hangt boven de wolken. Kazbek (5054m) vult het hele raam. Je beseft hier pas hoe klein je bent — en dat voelt goed."',
        waarom: 'Stepantsminda (ook: Kazbegi) is de bekendste bergbestemming van Georgië — en terecht. De iconische combinatie van de Gergeti Trinity Church op 2170m met de eeuwige sneeuwtoppen van Kazbek erachter is een van de meest gefotografeerde beelden van het Kaukasusgebergte. Maar er is meer: ruige gorges, het Truso dal met mineraalbronnen en de spectaculaire Georgische Military Highway.',
        highlights: [
            'Gergeti Trinity Church (2170m) – 2–2.5u hike, of 4WD taxi ~55 GEL/auto',
            'Truso valley dagtour – mineraalbronnen, Gveleti waterval, versteende waterval, vervallen fort',
            'Devdoraki gletsjer – spectaculaire gletsjer, 10km vanaf dorp, te voet of jeep',
            'Mt. Kazbek base camp – 3–4 daagse techt naar meteostation op 3653m',
            'Georgische Military Highway – rijdend uitzicht op Dariali kloof en Jvari pas (2379m)',
            'Juta dagtour – 1.5u rijden via 4WD bergweg, Chaukhi massief als achtergrond',
        ],
        photos: ['foto/stepantsminda1.jpg', 'foto/stepantsminda2.jpg', 'foto/stepantsminda3.jpg'],
        dagen: '2–3 dagen',
        budget: '€30–55 p.p./dag',
        periode: 'Juni–september (hiken) · dec–mrt (sneeuw)',
        verblijf: 'Guesthouse full board ~40–60 GEL p.p./nacht',
        eten: [
            { icon: '🥩', naam: 'Mtsvadi (spit grill)', omschr: 'Gegrild vlees op houtskool — standaard bij guesthouses, altijd goed' },
            { icon: '🍞', naam: 'Tonis puri', omschr: 'Georgisch tonvormig brood uit de tandir-oven, vers en warm' },
            { icon: '🧆', naam: 'Pkhali', omschr: 'Koude groente-walnotenballetjes — licht en aromatisch als bijgerecht' },
            { icon: '🫖', naam: 'Bergkruidenthee', omschr: 'Lokale kruiden, aangeboden bij elke guesthouse na het eten' },
        ],
        tips: [
            'Marshrutka vanuit Didube station Tbilisi: ~7:00 en ~11:00, 15–20 GEL, 2.5–3u',
            'Shared taxi vanuit Tbilisi: 25–40 GEL p.p. — sneller en flexibeler',
            'Gergeti hike: vertrek voor 8:00 voor beste zicht (wolken komen later op)',
            'Truso valley: lokale 4WD met chauffeur ~100 GEL/auto voor de dag — split met z\'n tweeën',
            'Juta (Chaukhi) goed te combineren als dagtour — 4WD verplicht op de weg',
            'Stroom en wifi in guesthouses kan wisselen — laad alles op zodra je kunt',
        ],
    },
    {
        id: 'mazeri',
        name: 'Mazeri',
        category: 'berg',
        type: 'Klein bergdorp · ~1400m hoogte · Becho vallei · Svaneti',
        lat: 43.0383,
        lng: 42.9617,
        emoji: '🌿',
        color: '#4be8a0',
        sfeer: '"Misschien vijftig mensen, twee guesthouses en overal die gigantische dubbele top van Ushba die over je waakt. Mazeri is de definitie van stilte en schaal."',
        waarom: 'Mazeri ligt in de Becho-vallei, ~15km van Mestia over een bergweg. Je komt hier voor de meest dramatische bergfoto\'s van de Kaukasus: Ushba (4710m) met zijn twee spitse toppen staat er altijd bij, bijna te groot voor je lens. Nauwelijks toeristen, directe contacten met lokale Svanetische families en wandelingen die niemand anders loopt.',
        highlights: [
            'Ushba panorama – "de Matterhorn van de Kaukasus", 4710m, twee toppen',
            'Becho vallei hike – te voet naar de basis van de Ushba-gletsjer (~3u enkele reis)',
            'Becho waterval – korte wandeling vanuit het dorp, spectaculair in het voorjaar',
            'Becho–Ushguli trektocht – meerdaagse trek over de Becho-pas naar Ushguli',
            'Lokale guesthouses – intiem contact met Svanetische bergfamilies',
            'Nachtfotografie – minimale lichtverontreiniging, perfecte sterrenhemel',
        ],
        photos: ['foto/mazeri1.jpg', 'foto/mazeri2.jpg', 'foto/mazeri3.jpg'],
        dagen: '1–2 dagen',
        budget: '€25–45 p.p./dag',
        periode: 'Juni–september',
        verblijf: '1–2 guesthouses, full board ~45–60 GEL p.p./nacht',
        eten: [
            { icon: '🥧', naam: 'Kubdari', omschr: 'Svanetisch vleespastei — standaard avondmaaltijd bij guesthouses' },
            { icon: '🌿', naam: 'Svan zout', omschr: 'Alles wordt gekruid met de lokale blend knoflook en specerijen' },
            { icon: '🧈', naam: 'Verse boter & kaas', omschr: 'Eigen productie van de familie — dagvers, intens van smaak' },
            { icon: '🍵', naam: 'Bergkruidenthee', omschr: 'Geplukt van de alpenweides boven het dorp, elke avond aangeboden' },
        ],
        tips: [
            'Vanuit Mestia per taxi of jeep ~45 min, 20–30 GEL — weg is ruw maar rijdbaar',
            'Boek guesthouse vooraf — er zijn er maar 1–2, bij groepen snel vol',
            'Geen pinautomaat in Mazeri: neem voldoende cash mee vanuit Mestia',
            'Geen winkel: haal water, snacks en noodproviand op in Mestia',
            'Weg naar Mazeri geschikt voor gewone auto bij droog weer, na regen 4WD safer',
            'Combineer ideaal met 1–2 nachten Mestia voor het complete Svaneti gevoel',
        ],
    },
    {
        id: 'juta',
        name: 'Juta',
        category: 'berg',
        type: 'Mini bergdorp · 2150m hoogte · Groot-Kaukasus · Kazbegi regio',
        lat: 42.6067,
        lng: 44.5203,
        emoji: '🦅',
        color: '#4be8a0',
        sfeer: '"Twintig huizen op een alpiene vlakte omgeven door de scherpste rotspieken van de Kaukasus. Juta is waar je begrijpt waarom mensen bergen kathedralen noemen."',
        waarom: 'Juta ligt op 2150m en is alleen bereikbaar per 4WD of te voet. Het Chaukhi-massief staat vlak boven het dorp — scherpe rotsgraten die "Georgische Dolomiten" worden genoemd. De hike naar het panoramapunt is een van de mooiste van Georgië, en je loopt hem bijna altijd alleen. De combinatie Stepantsminda + Juta is twee dagen pure bergervaring.',
        highlights: [
            'Chaukhi massief hike – 5–7u ronde trip, dramatische rotspunten, 3842m',
            'Abudelauri meren – 3 gekleurde alpiene meren (blauw, wit, groen), ~6–7u hike',
            'Juta–Roshka doortrekking – meerdaagse route door het massief naar Roshka',
            'Paardrijden door de vallei – te huren bij lokale bewoners (~20–30 GEL/uur)',
            'Sterrenhemel fotografie – 2150m, nauwelijks lichtverontreiniging',
            'Vrijwel geen massatoerisme – bijna alleen serieuze hikers',
        ],
        photos: ['foto/juta1.jpg', 'foto/juta2.jpg', 'foto/juta3.jpg'],
        dagen: '1–2 dagen',
        budget: '€25–40 p.p./dag',
        periode: 'Juli–september',
        verblijf: '2–3 eenvoudige guesthouses, full board ~35–50 GEL p.p./nacht',
        eten: [
            { icon: '🥩', naam: 'Guesthouse diner', omschr: 'Vlees, kaas, brood en soep — eenvoudig maar vullend na een lange dag' },
            { icon: '🧀', naam: 'Bergkaas', omschr: 'Lokale harde kaas, pittiger dan in de laagvlakte door de rijping' },
            { icon: '🥃', naam: 'Huischachu', omschr: 'Huisgestookte Georgische grappa — de eigenaar schenkt altijd in' },
            { icon: '🍵', naam: 'Kruidensoep', omschr: 'Verwarmend na koude daghikes op 3000m+' },
        ],
        tips: [
            'Vanuit Stepantsminda per 4WD taxi: ~1–1.5u, 25–35 GEL p.p.',
            'Normale auto kan de onverharde bergweg niet aan — 4WD verplicht',
            'Geen winkel, geen geldautomaat — kom volledig uitgerust vanuit Stepantsminda',
            'Chaukhi hike: vertrek voor 8:00, neem warme laag mee (wind op 3800m is snijdend)',
            'Abudelauri meren is een volle dag (~6–7u) — combineer niet met Chaukhi',
            'Begin/midden juni: mogelijk sneeuw op paden boven 3000m — check lokaal',
        ],
    },
    {
        id: 'lentekhi',
        name: 'Lentekhi',
        category: 'berg',
        type: 'Bergvallei dorp · ~650m hoogte · Laag-Svaneti · Racha-Lechkhumi regio',
        lat: 42.7732,
        lng: 42.7390,
        emoji: '🌄',
        color: '#4be8a0',
        sfeer: '"Georgië zoals het vroeger was — groene valleien, gastvrijheid die niet gespeeld is en geen enkel toeristisch restaurant. Hier ben je echt weg."',
        waarom: 'Lentekhi is het centrum van Laag-Svaneti, een regio die zelfs voor Georgische begrippen nauwelijks bezocht wordt. Dezelfde Svanetische cultuur als Mestia, maar dan zonder de toeristeninfrastructuur. De natuur is overweldigend: diepe valleien, wilde rivieren, dichte bossen. Ideaal voor wie het gevoel wil van écht ontdekken.',
        highlights: [
            'Tsana meer trek – meerdaagse hike naar hooggelegen bergmeer (2500m), vrijwel alleen',
            'Ukhvakhevi gorge – wilde rivier door smaragdgroene beboste kloof',
            'Laag-Svaneti cultuur – Svanetische tradities nog volledig levend, geen decor',
            'Lokale guesthouses – direct contact met Georgische bergfamilies',
            'Ongerepte natuur – dichte oerbossen, wilde bloemen, nauwelijks bebouwing',
            'Authentiek dorpsleven – markten en dagelijks leven zonder toeristische laag',
        ],
        photos: ['foto/lentheki1.jpg', 'foto/lentheki2.jpg', 'foto/lentheki3.jpg'],
        dagen: '1–2 dagen',
        budget: '€20–35 p.p./dag',
        periode: 'Mei–oktober',
        verblijf: 'Eenvoudige guesthouses of lokale families (~30–50 GEL p.p./nacht)',
        eten: [
            { icon: '🫘', naam: 'Lobio', omschr: 'Gestoofde bruine bonen in kleipot met kruiden — Georgisch comfort food' },
            { icon: '🌽', naam: 'Mchadi', omschr: 'Gebakken maisbrood — simpel, vullend, bij elke maaltijd aanwezig' },
            { icon: '🥃', naam: 'Zelfgemaakt chachu', omschr: 'Huisgestookt bij elk guesthouse — aanvaarden is sociale norm hier' },
            { icon: '🍯', naam: 'Wilde berghoning', omschr: 'Lokale honing van bergbloemen — een van de beste in Georgië' },
        ],
        tips: [
            'Marshrutka vanuit Kutaisi: ~3u, vertrek vroeg 7–9u, 15–25 GEL',
            'Alternatief via Ambrolauri vanuit Tbilisi — duurt een hele dag, maar schilderachtig',
            'Geen toeristische gidsen: locals via guesthouse zijn jouw enige bron',
            'Tsana meer trek vereist gids en meerdere dagen — plan dit goed vooraf',
            'Neem ruim extra cash mee — geen betrouwbare bank of geldautomaat aanwezig',
            'Combineer met Mestia: Lentekhi als off-the-beaten-path variant van Svaneti',
        ],
    },
];

// ── App state ─────────────────────────────────────────────────────────────────
let map;
const markers = {};
let currentFilter = 'all';
let currentSlide = 0;

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initTabs();
    initFilters();
    document.getElementById('closeSidebar').addEventListener('click', closeSidebar);
});

// ── Map ───────────────────────────────────────────────────────────────────────
function initMap() {
    map = L.map('map', {
        center: [42.05, 43.4],
        zoom: 7,
        zoomControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
        subdomains: 'abcd',
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    LOCATIONS.forEach(addMarker);
}

function addMarker(loc) {
    const icon = L.divIcon({
        className: '',
        html: `
            <div class="map-marker ${loc.category}">
                <div class="marker-pin">
                    <span class="marker-emoji">${loc.emoji}</span>
                </div>
                <div class="marker-label">${loc.name}</div>
            </div>
        `,
        iconSize: [80, 60],
        iconAnchor: [40, 48],
    });

    const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);
    marker.on('click', () => openSidebar(loc));
    markers[loc.id] = { marker, loc };
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function openSidebar(loc) {
    currentSlide = 0;
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('sidebarContent');
    const isBerg  = loc.category === 'berg';

    content.innerHTML = buildSidebarHTML(loc, isBerg);
    sidebar.classList.add('open');

    // Init carousel after DOM is ready
    initCarousel(loc.photos.length);

    // Fallback for broken photos
    content.querySelectorAll('.car-img').forEach((img, i) => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const fb = img.nextElementSibling;
            if (fb) fb.style.display = 'flex';
        });
    });

    map.flyTo([loc.lat, loc.lng], 11, { duration: 1.1 });
}

function buildSidebarHTML(loc, isBerg) {
    const badgeClass = isBerg ? 'badge-berg' : 'badge-stad';
    const badgeLabel = isBerg ? 'Bergdorp' : 'Stad';
    const accentClass = isBerg ? 'berg-accent' : 'stad-accent';

    const slides = loc.photos.map((p, i) => `
        <div class="car-slide">
            <img class="car-img" src="${p}" alt="${loc.name} foto ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" />
            <div class="car-fallback" style="background:linear-gradient(135deg,${loc.color}22,${loc.color}08);">
                <span>${loc.emoji}</span>
            </div>
        </div>
    `).join('');

    const dots = loc.photos.map((_, i) => `
        <button class="car-dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Foto ${i + 1}"></button>
    `).join('');

    const highlightItems = loc.highlights.map(h => `
        <li class="hl-item">
            <span class="hl-arr ${accentClass}">→</span>
            <span>${h}</span>
        </li>
    `).join('');

    const etenItems = loc.eten.map(e => `
        <div class="eten-item">
            <span class="eten-icon">${e.icon}</span>
            <div>
                <div class="eten-naam">${e.naam}</div>
                <div class="eten-omschr">${e.omschr}</div>
            </div>
        </div>
    `).join('');

    const tipItems = loc.tips.map(t => `
        <li>
            <span class="tip-bull ${accentClass}">◆</span>
            <span>${t}</span>
        </li>
    `).join('');

    return `
        <!-- Carousel -->
        <div class="carousel">
            <div class="car-track" id="carTrack">${slides}</div>
            <button class="car-btn car-prev" id="carPrev" aria-label="Vorige">‹</button>
            <button class="car-btn car-next" id="carNext" aria-label="Volgende">›</button>
            <div class="car-dots" id="carDots">${dots}</div>
            <div class="car-counter" id="carCounter">1 / ${loc.photos.length}</div>
        </div>

        <!-- Body -->
        <div class="loc-body ${isBerg ? 'berg-type' : ''}">
            <div class="loc-badges">
                <span class="badge ${badgeClass}">${badgeLabel}</span>
            </div>
            <h2 class="loc-name">${loc.name}</h2>
            <p class="loc-type">${loc.type}</p>

            <!-- Sfeer -->
            <div class="info-block">
                <div class="info-label">Sfeer</div>
                <p class="info-sfeer ${accentClass}">${loc.sfeer}</p>
            </div>

            <!-- Waarom -->
            <div class="info-block">
                <div class="info-label">Waarom bezoeken</div>
                <p class="info-waarom">${loc.waarom}</p>
            </div>

            <!-- Highlights -->
            <div class="info-block">
                <div class="info-label">Highlights</div>
                <ul class="hl-list">${highlightItems}</ul>
            </div>

            <!-- Info strip -->
            <div class="info-block">
                <div class="info-label">Reisinformatie</div>
                <div class="info-strip">
                    <div class="isc">
                        <div class="isc-label">Aanbevolen</div>
                        <div class="isc-val">${loc.dagen}</div>
                    </div>
                    <div class="isc">
                        <div class="isc-label">Budget p.p./dag</div>
                        <div class="isc-val">${loc.budget}</div>
                    </div>
                    <div class="isc">
                        <div class="isc-label">Beste periode</div>
                        <div class="isc-val">${loc.periode}</div>
                    </div>
                    <div class="isc isc-wide">
                        <div class="isc-label">Verblijf</div>
                        <div class="isc-val isc-val-sm">${loc.verblijf}</div>
                    </div>
                </div>
            </div>

            <!-- Eten & Drinken -->
            <div class="info-block">
                <div class="info-label">Eten & Drinken</div>
                <div class="eten-list">${etenItems}</div>
            </div>

            <!-- Tips -->
            <div class="info-block">
                <div class="info-label">Tips voor onderweg</div>
                <ul class="tips-list">${tipItems}</ul>
            </div>
        </div>
    `;
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
}

// ── Carousel ──────────────────────────────────────────────────────────────────
function initCarousel(total) {
    const track  = document.getElementById('carTrack');
    const dots   = document.querySelectorAll('.car-dot');
    const counter = document.getElementById('carCounter');
    if (!track) return;

    function goTo(n) {
        currentSlide = ((n % total) + total) % total;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        if (counter) counter.textContent = `${currentSlide + 1} / ${total}`;
    }

    document.getElementById('carPrev')?.addEventListener('click', e => {
        e.stopPropagation();
        goTo(currentSlide - 1);
    });

    document.getElementById('carNext')?.addEventListener('click', e => {
        e.stopPropagation();
        goTo(currentSlide + 1);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', e => {
            e.stopPropagation();
            goTo(i);
        });
    });

    // Touch swipe
    let touchX = 0;
    const carousel = track.closest('.carousel');
    carousel.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
        const dx = touchX - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) goTo(dx > 0 ? currentSlide + 1 : currentSlide - 1);
    }, { passive: true });
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;

            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById(`${tab}-view`).classList.add('active');

            document.getElementById('mapFilters').style.display = tab === 'map' ? 'flex' : 'none';

            if (tab !== 'map') closeSidebar();
            if (tab === 'map' && map) setTimeout(() => map.invalidateSize(), 80);
        });
    });
}

// ── Filters ───────────────────────────────────────────────────────────────────
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter();
        });
    });
}

function applyFilter() {
    Object.values(markers).forEach(({ marker, loc }) => {
        const show = currentFilter === 'all' || loc.category === currentFilter;
        show ? marker.addTo(map) : marker.remove();
    });
}
