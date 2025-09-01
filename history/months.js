
const septemberTickets = [
  { month: 'September 2025', date: '2025-09-01', match: '⚽️ Farul Constanta vs Petrolul Ploiesti', pick: 'Handicap 1 (0) @ 1,44', result: 'Win' },
];

const augustTickets = [
  { month: 'August 2025', date: '2025-08-24', match: '⚽️ Rayo Vallecano vs Barcelona', pick: 'Team 2 Over (2,5) @ 2,26', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-24', match: '⚽️ Real Madrid vs Mallorca', pick: 'Handicap 2 (2.5) @ 1,60', result: 'Win' },
  { month: 'August 2025', date: '2025-08-29', match: '⚽️ Lecce vs Milan', pick: 'W2 @ 1,79', result: 'Win' },
  { month: 'August 2025', date: '2025-08-24', match: '⚽️ Real Oviedo vs Real Madrid', pick: 'Team 2 Over (1.5) @ 1.60', result: 'Win' },
  { month: 'August 2025', date: '2025-08-23', match: '⚽️ Arouca vs Rio Ave', pick: 'Total Over (2) @ 1.58', result: 'Win' },
  { month: 'August 2025', date: '2025-08-20', match: '⚽️ El Gouna vs El Mahalla', pick: '1st Half Draw @ 1.78', result: 'Win' },
  { month: 'August 2025', date: '2025-08-20', match: '⚽️ Celtic vs Kairat', pick: 'Total Over (3) @ 1.56', result: 'Refund' },
  { month: 'August 2025', date: '2025-08-20', match: '⚽️ Basel vs Copenhagen', pick: 'Total Over (2) @ 1.47', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-20', match: '⚽️ Fenerbahce vs Benfica', pick: 'Total Over (2) @ 1.35', result: 'Win' },
  { month: 'August 2025', date: '2025-08-20', match: '⚽️ Bodo/Glimt vs Sturm', pick: 'Team 1 Over (1.5) @ 1.45', result: 'Win' },
  { month: 'August 2025', date: '2025-08-18', match: '⚽️ Leeds vs Everton', pick: 'X2 @ 1.66', result: 'Win' },
  { month: 'August 2025', date: '2025-08-14', match: '⚽️ Hibernian vs Partizan', pick: 'GG @ 1.60', result: 'Win' },
  { month: 'August 2025', date: '2025-08-14', match: '⚽️ Besiktas vs St. Patricks', pick: 'Total Over (2.5) @ 1.32', result: 'Win' },
  { month: 'August 2025', date: '2025-08-14', match: '⚽️ Shakhtar vs Panathinaikos', pick: 'W1 @ 1.85', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-13', match: '⚽️ Basaksehir vs Viking', pick: 'Total Over (2.5) @ 1.63', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-13', match: '⚽️ PSG vs Tottenham', pick: 'W1 @ 1.55', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-13', match: '⚽️ PSG vs Tottenham', pick: 'GG @ 1.63', result: 'Win' },
  { month: 'August 2025', date: '2025-08-12', match: '⚽️ Crvena Zvezda (extra tip)', pick: 'Total Over (2.5)', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-12', match: '⚽️ Viktoria Plzen (extra tip)', pick: 'Total Over (1.5)', result: 'Win' },
  { month: 'August 2025', date: '2025-08-12', match: '⚽️ Fenerbahce (extra tip)', pick: 'Total Over (2.5)', result: 'Win' },
  { month: 'August 2025', date: '2025-08-11', match: '⚽️ IMT vs Zeleznicar', pick: 'Total Over (2.5) @ 1.63', result: 'Win' },
  { month: 'August 2025', date: '2025-08-11', match: '⚽️ Javor vs Radnicki 1923', pick: 'W2 @ 2.00', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-11', match: '⚽️ Lechia vs Motor', pick: 'GG @ 1.64', result: 'Win' },
  { month: 'August 2025', date: '2025-08-11', match: '⚽️ HJK vs Ilves', pick: 'GG @ 1.34', result: 'Win' },
  { month: 'August 2025', date: '2025-08-10', match: '⚽️ Barcelona vs Como', pick: 'Total Over (3) @ 1.35', result: 'Win' },
  { month: 'August 2025', date: '2025-08-10', match: '⚽️ Radnicki Nis vs Novi Pazar', pick: 'W1 @ 2.00', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-10', match: '⚽️ Sandefjord vs Viking', pick: 'X2 @ 1.33', result: 'Win' },
  { month: 'August 2025', date: '2025-08-09', match: '⚽️ Bodo/Glimt vs Tromso', pick: 'W1', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-09', match: '⚽️ Arsenal vs Athletic Club', pick: 'Total Over (2)', result: 'Win' },
  { month: 'August 2025', date: '2025-08-08', match: '⚽️ Galatasaray vs Gaziantep', pick: 'W2', result: 'Win' },
  { month: 'August 2025', date: '2025-08-08', match: '⚽️ Dinamo Zagreb vs Vukovar', pick: 'Team 1 Over (1.5)', result: 'Win' },
  { month: 'August 2025', date: '2025-08-08', match: '⚽️ Casa Pia vs Sporting', pick: 'Team 2 Over (1.5)', result: 'Win' },
  { month: 'August 2025', date: '2025-08-08', match: '⚽️ Inter Turku vs AC Oulu', pick: 'W1 or Team 1 Over (1.5)', result: 'Win' },
  { month: 'August 2025', date: '2025-08-06', match: '⚽️ Lech vs Crvena Zvezda', pick: 'W2 @ 2.50 or Total Over (2) @ 1.30', result: 'Win' },
  { month: 'August 2025', date: '2025-08-04', match: '🎾 A. Zverev vs A. Popyrin', pick: 'W1 @ 1.30', result: 'Win' },
  { month: 'August 2025', date: '2025-08-04', match: '🎾 M. Kostyuk vs E. Rybakina', pick: 'W2 @ 1.45', result: 'Win' },
  { month: 'August 2025', date: '2025-08-04', match: '⚽️ Zalgiris vs Kaunas Zalgiris', pick: '2X @ 1.33', result: 'Win' },
  { month: 'August 2025', date: '2025-08-04', match: '⚽️ Novi Pazar vs IMT', pick: 'Team 2 Over (0.5) @ 1.37', result: 'Win' },
  { month: 'August 2025', date: '2025-08-04', match: '⚽️ Goteborg vs Degerfors', pick: 'Total Over (2) @ 1.33', result: 'Win' },
  { month: 'August 2025', date: '2025-08-04', match: '⚽️ HJK vs Inter', pick: 'GG @ 1.49', result: 'Win' },
  { month: 'August 2025', date: '2025-08-01', match: '🎾 B. Nakashima vs B. Shelton', pick: 'Handicap 2 (-1) @ 1.48', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-01', match: '🎾 F. Cobolli vs F. Marozsan', pick: 'W1 @ 2.00', result: 'Win' },
  { month: 'August 2025', date: '2025-08-01', match: '🎾 M. Keys vs C. McNally', pick: 'W1 @ 1.30', result: 'Win' },
  { month: 'August 2025', date: '2025-08-01', match: '⚽️ LASK vs Sturm Graz', pick: 'GG @ 1.55', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-01', match: '⚽️ Schalke vs Hertha', pick: 'Total Over (2) @ 1.22', result: 'Win' },
  { month: 'August 2025', date: '2025-08-01', match: '⚽️ Velje vs Odense', pick: 'GG @ 1.54', result: 'Loss' },
  { month: 'August 2025', date: '2025-08-01', match: '⚽️ Fredericia vs Copenhagen', pick: 'W2 @ 1.44', result: 'Win' }
];


const julyTickets = [
  { month: 'July 2025', date: '2025-07-29', match: '⚽️ Crvena Zvezda vs Lincoln', pick: 'Total Over (3.5) @ 1.71', result: 'Win' },
  { month: 'July 2025', date: '2025-07-28', match: '⚽️ Dobrudzha vs Slavia', pick: '12 @ 1,37', result: 'Win' },
  { month: 'July 2025', date: '2025-07-28', match: '⚽️ Welco vs Nomme United', pick: '1st Half 2 Over (0.5) @ 1,37', result: 'Win' },
  { month: 'July 2025', date: '2025-07-28', match: '⚽️ Montana vs Lokomotiv', pick: 'Handicap 2 (0) @ 1,44', result: 'Refund' },
  { month: 'July 2025', date: '2025-07-27', match: '⚽️ Riga FC vs Metta', pick: 'NG @ 1,66', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-27', match: '⚽️ Lugano vs Thun', pick: 'GG @ 1,65', result: 'Win ' },
  { month: 'July 2025', date: '2025-07-26', match: '⚽️ Radnicki Nis vs Mladost', pick: 'Total Under (3.5) @ 1,32', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-26', match: '⚽️ Copenhagen vs Velje', pick: 'W1 @ 1,29', result: 'Win' },
  { month: 'July 2025', date: '2025-07-26', match: '⚽️ Bodo/Glimt vs Valerenga', pick: 'Total Over (2.5) @ 1,47', result: 'Win' },
  { month: 'July 2025', date: '2025-07-26', match: '⚽️ RFS vs Tukums 2000', pick: 'Total Over (2.5) @ 1,25', result: 'Win' },
  { month: 'July 2025', date: '2025-07-26', match: '⚽️ St. Gallen vs Basel', pick: 'x2 @ 1,30', result: 'Win' },
  { month: 'July 2025', date: '2025-07-26', match: '⚽️ Pogon vs Motor', pick: 'W1 @ 1,60', result: 'Win' },
  { month: 'July 2025', date: '2025-07-26', match: '⚽️ Brommapojkarna vs Malmo', pick: 'x2 @ 1,30', result: 'Win' },
  { month: 'July 2025', date: '2025-07-26', match: '🎾 A. Bublik vs A. Cazaux', pick: 'W1 @ 1,28', result: 'Win' },
  { month: 'July 2025', date: '2025-07-25', match: '🎾 T. Fritz vs A. Fokina', pick: 'W1 @ 1,25', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-25', match: '🎾 K. Quevedo vs A. Koevermans', pick: 'W1 @ 1,65', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-25', match: '⚽️ Antwerp vs USG', pick: 'W2 @ 1,80', result: 'Win' },
  { month: 'July 2025', date: '2025-07-25', match: '⚽️ Csikszereda vs Rapid Bucuresti', pick: 'W2 @ 1,54', result: 'Win' },
  { month: 'July 2025', date: '2025-07-25', match: '⚽️ Zurich vs Sion', pick: 'Total Over (2) @ 1,33', result: 'Win' },
  { month: 'July 2025', date: '2025-07-23', match: '⚽️ Zira vs Hajduk', pick: 'X2 @ 1,35', result: 'Win' },
  { month: 'July 2025', date: '2025-07-23', match: '⚽️ Brann vs Salzburg', pick: 'Total Over (2) @ 1,75', result: 'Win' },
  { month: 'July 2025', date: '2025-07-23', match: '🎾 Z. Svajda vs J. Lehecka', pick: 'W2 @ 1,35', result: 'Win' },
  { month: 'July 2025', date: '2025-07-23', match: '🎾 D. Medvedev vs R. Opelka', pick: 'W1 @ 1,30', result: 'Win' },
  { month: 'July 2025', date: '2025-07-20', match: '⚽️ Zeleznicar vs Partizan', pick: 'X2 @ 1,35', result: 'Win' },
  { month: 'July 2025', date: '2025-07-20', match: '⚽️ Mladost vs IMT', pick: 'Mladost (0.5) @ 1,28', result: 'Win' },
  { month: 'July 2025', date: '2025-07-19', match: '🎾 A. Cazaux vs A. Bublik', pick: 'Correct Score 0:2 @ 2,02', result: 'Win' },
  { month: 'July 2025', date: '2025-07-18', match: '🎾 F. Comesana vs A. Bublik', pick: 'W2 @ 1,75', result: 'Win' },
  { month: 'July 2025', date: '2025-07-17', match: '🎾 H. Gaston vs D. Dzumhur', pick: 'W2 @ 1,75', result: 'Win' },
  { month: 'July 2025', date: '2025-07-06', match: '⚽️ Elfsborg vs Hacken', pick: 'GG @ 1,48', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-06', match: '⚽️ Haka vs Inter Turku', pick: 'GG @ 1,46', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-06', match: '⚽️ Riga vs Daugavpils', pick: 'Total Under (4.5) @ 1,50', result: 'Win' },
  { month: 'July 2025', date: '2025-07-05', match: '⚽️ France (w) vs England (w)', pick: 'Total Over (1.5) @ 1,31', result: 'Win' },
  { month: 'July 2025', date: '2025-07-05', match: '⚽️ PSG vs Bayern', pick: 'GG @ 1,42', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-04', match: '⚽️ Paide vs Levadia', pick: 'GG @ 1,57', result: 'Loss' },
  { month: 'July 2025', date: '2025-07-04', match: '🎾 T. Fritz vs A. Fokina', pick: 'W1 @ 1,20', result: 'Win' },
  { month: 'July 2025', date: '2025-07-04', match: '🎾 A. Sabalenka vs E. Raducanu', pick: 'W1 @ 1,25', result: 'Win' },
  { month: 'July 2025', date: '2025-07-04', match: '🎾 N. Borges vs K. Khachanov', pick: 'W2 @ 1,50', result: 'Win' },
  { month: 'July 2025', date: '2025-07-03', match: '⚽️ Sparta Prague vs Copenhagen', pick: 'GG @ 1,51', result: 'Refund' },
  { month: 'July 2025', date: '2025-07-03', match: '⚽️ Afturelding vs Breidablik', pick: 'Total Over (2.5) @ 1,48', result: 'Win' },
  { month: 'July 2025', date: '2025-07-03', match: '🎾 L. Sonego vs N. Basilashvili', pick: 'W1 @ 1,45', result: 'Win' },
  { month: 'July 2025', date: '2025-07-03', match: '⚽ UMFG vs Njarðvíkur', pick: 'Total Over (3) @ 1,47', result: 'Win' },
  { month: 'July 2025', date: '2025-07-03', match: '🎾 C. Garin vs A. Rinderkench', pick: 'W2 @ 1,80', result: 'Win' },
  { month: 'July 2025', date: '2025-07-02', match: '⚽ Switzerland (w) vs Norway (w)', pick: 'Total Over (1.5) @ 1,30', result: 'Win' },
  { month: 'July 2025', date: '2025-07-02', match: '⚽ Iceland (w) vs Finland (w)', pick: 'Over (1.5) y-cards @ 1,65', result: 'Win' },
  { month: 'July 2025', date: '2025-07-02', match: '⚽ VPS vs Haka', pick: 'GG @ 1,53', result: 'Win' },
];


window.FAIRHITS_MONTHS = [
  {
    month: 'September 2025',
    summary: {
      wins: septemberTickets.filter(t => t.result.trim().toLowerCase() === 'win').length,
      losses: septemberTickets.filter(t => t.result.trim().toLowerCase() === 'loss').length,
      hitRate: (septemberTickets.filter(t => t.result.trim().toLowerCase() === 'win').length / augustTickets.length) * 100
    },
    tickets: septemberTickets.map(t => ({
      date: t.date,
      league: t.match,
      pick: t.pick,
      result: t.result
    }))
  },
  {
    month: 'August 2025',
    summary: {
      wins: augustTickets.filter(t => t.result.trim().toLowerCase() === 'win').length,
      losses: augustTickets.filter(t => t.result.trim().toLowerCase() === 'loss').length,
      hitRate: (augustTickets.filter(t => t.result.trim().toLowerCase() === 'win').length / augustTickets.length) * 100
    },
    tickets: augustTickets.map(t => ({
      date: t.date,
      league: t.match,
      pick: t.pick,
      result: t.result
    }))
  },
  {
    month: 'July 2025',
    summary: {
      wins: julyTickets.filter(t => t.result.trim().toLowerCase() === 'win').length,
      losses: julyTickets.filter(t => t.result.trim().toLowerCase() === 'loss').length,
      hitRate: (julyTickets.filter(t => t.result.trim().toLowerCase() === 'win').length / julyTickets.length) * 100
    },
    tickets: julyTickets.map(t => ({
      date: t.date,
      league: t.match,
      pick: t.pick,
      result: t.result
    }))
  }
];
