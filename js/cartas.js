(() => {
  // Edit the dates, titles and text below to personalise each letter.
  const letters = [
    { date: '2026-11-28', title: 'Chegada a Roma', paragraphs: ['Owáaa amorzinho bom!,', 'Hoje começam as tuas férias! Espero que esta primeira carta te faça sorrir. Fiz este miminho para vivermos um romance à moda antiga ajustado aos padrões e proveitos tecnológicos atuais! ',' Achei que seria uma ideia gira.',' Aproveita cada momento, aproveita para descansar. Ter-te-ia dito para explorares Roma a imaginar que estava contigo mas acho que deves aproveitar esta semana para arejar.', 'Sei que andas cansada a tentar conjugar tudo e que eu sou uma das peças mais dificeis de encaixar e quero agradecer-te muito pelo amor, pelo carinho e esforço que tens colocado nessa missão!','Quero que saibas que gosto muito de ti, sempre! Diverte-te muito! Tenho muitas saudades tuas\n\nAmo-te\nWu'] },
    { date: '2026-11-29', title: 'Saudades da minha Italiana', paragraphs: ['Meu amor,','Não sei quais são os teus planos para hoje, mas aproveita muito. Espero que o tempo esteja bom e que os ânimos estejam leves e que se divirtam.', 'Estou muito feliz por estares em Itália, sei o quanto precisavas destas férias e deste tempo para ti e ainda por cima aí.','Eu sou o maior sortudo que há por te ter na minha vida, por poder chamar-te de minha namorada, por ser teu. Não digo isto de ânimo leve nem só por dizer. Tornas a minha vida mais leve, feliz, tão melhor em todos os sentidos! Espero conseguir fazer-te sentir mais feliz e leve! ',' Leva-me contigo num pensamento que não ocupe muito espaço.\n\nAmo-te meu amorzinho bom\nLu'] },
    { date: '2026-11-30', title: 'Uma pausa para ti', paragraphs: ['Ciao principesa,', 'Estás a adorar ou estás a adorar?','Espero que estejas...a adorar ahaha, espero que Roma te esteja a tratar bem. Não sei onde é que estás a ler esta carta, mas se for num sítio giro, levanta a cabeça, olha à tua volta, respira fundo e faz isto por mim; Absorve o que estás a ver, pensa no que tens de bom na tua vida, os pais fantásticos que tens, o irmão incrível, a família unida, um namorado que te ama muito e por tudo isso e por estares aí e deixa que a felicidade e tranquilidade te preencham.', 'Quando leres isto, imagina que te estou a dar um abraço apertadinho.\n\nAmo-te daqui à lua x(1000000000.....)\nO teu Lu'] },
    { date: '2026-12-01', title: 'Ciao dicembre!', paragraphs: ['Ciao amore!', 'Como está o meu amorzinho hoje?', 'Tenho saudades tuas e gostava muito de estar a partilhar il dolce far niente contigo.', 'Tens conseguido fugir aos cocós voadores? Espero que sim! E espero que tenhas andado a aproveitar para beber café de jeito e comer bem! Mal posso esperar para ouvir todas as aventuras e ver as fotografias. Até lá, aproveita cada segundo.\n\nCom amor\no teu Lu'] },
    { date: '2026-12-02', title: 'Owáaaaaaa', paragraphs: ['Minha querida!', 'Olá, espero que estjas feliz, mais leve!','Espero que estas férias te estejam a permitir tempo para descansar, passear, ficar aborrecida e encantada. É tão bom ficar aborrecido em férias, significa que estamos a procrastinar meeesmo bem!','Acima de tudo espero que estejas feliz! Porque apesar das saudades apertarem eu estou feliz, saber que estás bem, que estás a passear e a aproveitar, que estás numa cidade que gostas tanto e que estás a ter uma semana de repouso, deixa-me tão feliz!','Adorava estar contigo e há momentos em que imagino como seria acordar aí contigo. Passear nessas ruas, visitar os museus, as igrejas, os templos. Ver a arte, provar a comida, beber os cafés. Mas o mais importante não é o sítio e não tenho dúvida que teremos as nossas oportunidades para viajar juntos. Onde quer que vamos, quando quer seja, eu quero ir contigo e é isso que realmente importa! E vai ser lindo quando acontecer, mas eu fico feliz que tenhas a oportunidade de estar a aproveitar esta semana aí com os teus pais!','O importante é que te sintas feliz!\n\nSabes que te AMO \nO teu, sempre teu, LU'] },
    { date: '2026-12-03', title: 'Coração apertado, coração cheio', paragraphs: ['Minha querida', 'Meu amor, sabes que sou ótimista e pessoa de copo meio cheio; tenho tentado não me focar no apertozinho que dá no coração saber que estás looonge, que não dá para usar uma hora de almoço para matar saudades! E na verdade não estou triste, tenho é muitas saudades tuas! Eu não tenho motivos para estar triste!','Basta parar e pensar que te tenho na minha vida, que te posso chamar de minha amiga e namorada, eu sou tão feliz contigo! E por ti!','Fazes-me sonhar mais alto, tornas-me uma versão melhor de mim mesmo!', 'Aproveita muito o dia de hoje!\n\nAté já, meu amor,\nO teu Wu ama-te! Tanto!'] },
    { date: '2026-12-04', title: 'Em contagem decrescente!', paragraphs: ['Meu amor,', 'Estás quase a voltar! Mas ainda há tempo para aproveitar mais um dia! E espero que estejas a aproveitar cada instante e a guardar tudo o que te faz feliz! Espero que a memória desta demana te dê alento e que tenhas conseguido aproveitar para descansar!', 'Mal posso esperar para te ter de volta perto de mim.\n\nTenho tantos abraços e beijos à tua espera!\nO teu!'] },
    { date: '2026-12-05', title: 'Ciao Roma, Olá Portugal!', paragraphs: ['Oláaaa amor!', 'O último dia destas férias chegou e esta  é a última carta desta coleção. Mas isto é só o fim deste pequeno calendário. Espero que tenhas aproveitado muito e que voltes com o coração cheio! Espero por ti como nos filmes românticos, no aeroporto!', 'Mal posso esperar para te ter de volta perto de mim.\n\nAmo-te,\nLuigi!'] }
  ];
  const list = document.querySelector('#letters-list');
  const reading = document.querySelector('#letter-reading');
  const dateEl = document.querySelector('#letter-date');
  const heading = document.querySelector('#letter-heading');
  const copy = document.querySelector('#letter-copy');
  const back = document.querySelector('#letter-back');
  const download = document.querySelector('#letter-download');
  const storageKey = 'cartas-mariana-opened-v2';
  let opened = new Set();
  try { opened = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')); } catch (_) {}
  let active = 0;
  const today = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  };
  // Mostra apenas dia/mês; o ano continua na data interna para o desbloqueio.
  const formatDate = value => {
    const [year, month, day] = value.split('-');
    return `${day}/${month}`;
  };
  const formatLongDate = value => new Intl.DateTimeFormat('pt-PT', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(new Date(`${value}T12:00:00`));
  const isUnlocked = letter => letter.date <= today() || opened.has(letter.date);
  function renderList() {
    list.replaceChildren();
    letters.forEach((letter,index) => {
      const unlocked = isUnlocked(letter);
      const row = document.createElement('div');
      row.className = `letter-row${unlocked?'':' is-locked'}${opened.has(letter.date)?' is-open':''}`;
      const button = document.createElement('button');
      button.type = 'button'; button.className='letter-card'; button.disabled=!unlocked;
      button.setAttribute('aria-label', unlocked ? `Abrir carta de ${formatLongDate(letter.date)}` : `Carta fechada até ${formatLongDate(letter.date)}`);
      button.innerHTML='<span class="envelope"><span class="envelope-flap"></span><span class="seal" aria-hidden="true">♥</span></span>';
      const meta=document.createElement('div'); meta.className='letter-meta';
      const date=document.createElement('span'); date.textContent=formatDate(letter.date);
      const status=document.createElement('span'); status.className='letter-status'; status.textContent=opened.has(letter.date)?'já lida':unlocked?'aberta':'fechada';
      meta.append(date,status); row.append(button,meta);
      if (!unlocked) { const hint=document.createElement('p'); hint.className='letter-hint'; hint.textContent=`Abre a ${formatDate(letter.date)} ♡`; row.append(hint); }
      button.addEventListener('click',()=>openLetter(index)); list.append(row);
    });
  }
  function openLetter(index) {
    const letter=letters[index]; if(!isUnlocked(letter)) return;
    active=index; opened.add(letter.date);
    try { localStorage.setItem(storageKey,JSON.stringify([...opened])); } catch (_) {}
    dateEl.textContent=formatDate(letter.date); heading.textContent=letter.title;
    copy.replaceChildren(...letter.paragraphs.map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));
    list.hidden=true; reading.hidden=false; renderList(); window.scrollTo({top:0,behavior:'smooth'}); back.focus({preventScroll:true});
  }
  function showList(){reading.hidden=true;list.hidden=false;renderList();window.scrollTo({top:0,behavior:'smooth'});}
  back.addEventListener('click',showList);
  download.addEventListener('click',()=>{
    const letter=letters[active];
    const text=`${letter.title}\n${formatDate(letter.date)}\n\n${letter.paragraphs.join('\n\n')}`;
    const blob=new Blob([text],{type:'text/plain;charset=utf-8'}); const url=URL.createObjectURL(blob);
    const anchor=document.createElement('a'); anchor.href=url; anchor.download=`carta-mariana-${letter.date}.txt`; anchor.click(); URL.revokeObjectURL(url);
  });
  renderList();
})();
