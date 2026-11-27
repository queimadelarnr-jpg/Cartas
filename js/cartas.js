(() => {
  // Edit the dates, titles and text below to personalise each letter.
  const letters = [
    { date: '2026-11-28', title: 'Chegada a Roma', paragraphs: ['Owáaa amorzinho bom!,', 'Hoje começam as tuas férias! Espero que esta primeira carta te faça sorrir. Fiz este miminho para vivermos um romance à moda antiga ajustado aos padrões e proveitos tecnológicos atuais! ',' Achei que seria uma ideia gira.',' Aproveita cada momento, aproveita para descansar e olhar para Roma como se eu estivesse aí contigo.', 'Tenho tantas saudades tuas. Diverte-te muito! És tão windaa!\n\nAmo-te\nWu'] },
    { date: '2026-11-29', title: 'Um dia de cada vez', paragraphs: ['Meu amor,', 'Hoje só te quero lembrar de abrandar um bocadinho. Repara na luz, no sítio onde estás e em todas as pequenas coisas que tornam este dia especial.', 'Estou muito feliz por estares a viver esta aventura. Leva-me contigo num pensamento e aproveita por nós os dois.\n\nUm beijinho enorme,\nLuis'] },
    { date: '2026-11-30', title: 'Uma pausa para ti', paragraphs: ['Mariana,', 'Espero que hoje encontres um lugar bonito para parar, respirar fundo e simplesmente aproveitar. Mereces dias leves, sem pressa e cheios de coisas boas.', 'Quando leres isto, imagina que te estou a dar um abraço apertado.\n\nGosto muito de ti,\nLuis'] },
    { date: '2026-12-01', title: 'A meio da viagem', paragraphs: ['Meu amor,', 'Já estás na tua quarta carta! Espero que estejas a colecionar momentos daqueles que ficam na memória e que te fazem rir só de recordar.', 'Mal posso esperar para ouvir todas as histórias e ver as fotografias. Até lá, aproveita cada segundo.\n\nCom saudades,\nLuis'] },
    { date: '2026-12-02', title: 'Um lembrete importante', paragraphs: ['Minha querida,', 'Este é o teu lembrete oficial para fazeres uma coisa de que gostas hoje. Pode ser provar algo novo, ficar mais um bocadinho na cama ou escolher o caminho mais bonito.', 'Não há maneira errada de aproveitar as férias. O importante é que te sintas feliz.\n\nUm beijo,\nLuis'] },
    { date: '2026-12-03', title: 'Estou a pensar em ti', paragraphs: ['Mariana,', 'Espero que estes dias te estejam a dar descanso, energia e memórias boas para guardar. Estou cheio de saudades e a contar os dias para estarmos juntos outra vez.', 'Aproveita muito o dia de hoje. O regresso traz uma coisa boa: um abraço meu à tua espera.\n\nAté já, meu amor,\nLuis'] },
    { date: '2026-12-04', title: 'Quase de volta', paragraphs: ['Meu amor,', 'As férias estão quase a chegar ao fim, mas ainda há tempo para mais um dia bonito. Espero que estejas a aproveitar cada instante e a guardar tudo o que te faz feliz.', 'Mal posso esperar para te ter de volta perto de mim.\n\nCom todo o meu amor,\nLuis'] },
    { date: '2026-12-05', title: 'A última carta', paragraphs: ['Meu amor,', 'Chegaste ao último dia destas férias, mas esta carta não é um adeus à aventura — é só o fim deste pequeno calendário. Espero que tenhas aproveitado muito e que voltes com o coração cheio.', 'Obrigada por seres tu. Mal posso esperar para te ter de volta perto de mim.\n\nAmo-te,\nLuis'] }
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
