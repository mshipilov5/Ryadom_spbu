module.exports=[84977,a=>{"use strict";var b=a.i(7997);a.i(70396);var c=a.i(73727),d=a.i(95936);let e={article:"Статья"};function f(a){return a.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g).filter(Boolean).map((a,c)=>{let d=a.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(d){let[,a,e]=d;if(!(e.startsWith("/")||e.startsWith("#")||/^https?:\/\//i.test(e)||/^mailto:/i.test(e)))return(0,b.jsx)("span",{children:a},c);let f=/^https?:\/\//i.test(e);return(0,b.jsx)("a",{href:e,target:f?"_blank":void 0,rel:f?"noreferrer":void 0,children:a},c)}return a.startsWith("**")&&a.endsWith("**")?(0,b.jsx)("strong",{children:a.slice(2,-2)},c):a.startsWith("`")&&a.endsWith("`")?(0,b.jsx)("code",{children:a.slice(1,-1)},c):a.startsWith("*")&&a.endsWith("*")?(0,b.jsx)("em",{children:a.slice(1,-1)},c):a})}function g({body:a}){let c=function(a){let b=a.replace(/\r\n/g,"\n").split("\n"),c=[],d=0;for(;d<b.length;){let a=b[d];if(!a.trim()){d+=1;continue}if(a.trim().startsWith("```")){let a=[];for(d+=1;d<b.length&&!b[d].trim().startsWith("```");)a.push(b[d]),d+=1;d<b.length&&(d+=1),c.push({type:"code",text:a.join("\n")});continue}let e=a.match(/^(#{1,6})\s+(.+)$/);if(e){c.push({type:"heading",level:e[1].length,text:e[2]}),d+=1;continue}if(/^>\s?/.test(a)){let a=[];for(;d<b.length&&/^>\s?/.test(b[d]);)a.push(b[d].replace(/^>\s?/,"")),d+=1;c.push({type:"blockquote",text:a.join(" ")});continue}if(/^[-*+]\s+/.test(a)){let a=[];for(;d<b.length&&/^[-*+]\s+/.test(b[d]);)a.push(b[d].replace(/^[-*+]\s+/,"")),d+=1;c.push({type:"unordered-list",items:a});continue}if(/^\d+\.\s+/.test(a)){let a=[];for(;d<b.length&&/^\d+\.\s+/.test(b[d]);)a.push(b[d].replace(/^\d+\.\s+/,"")),d+=1;c.push({type:"ordered-list",items:a});continue}let f=[a.trim()];for(d+=1;d<b.length&&b[d].trim()&&!/^(#{1,6})\s+/.test(b[d])&&!/^>\s?/.test(b[d])&&!/^[-*+]\s+/.test(b[d])&&!/^\d+\.\s+/.test(b[d])&&!b[d].trim().startsWith("```");)f.push(b[d].trim()),d+=1;c.push({type:"paragraph",text:f.join(" ")})}return c}(a);return(0,b.jsx)("div",{className:"articleBody",children:c.map((a,c)=>"heading"===a.type?a.level<=2?(0,b.jsx)("h2",{children:f(a.text)},c):(0,b.jsx)("h3",{children:f(a.text)},c):"unordered-list"===a.type?(0,b.jsx)("ul",{children:a.items.map((a,c)=>(0,b.jsx)("li",{children:f(a)},c))},c):"ordered-list"===a.type?(0,b.jsx)("ol",{children:a.items.map((a,c)=>(0,b.jsx)("li",{children:f(a)},c))},c):"blockquote"===a.type?(0,b.jsx)("blockquote",{children:(0,b.jsx)("p",{children:f(a.text)})},c):"code"===a.type?(0,b.jsx)("pre",{children:(0,b.jsx)("code",{children:a.text})},c):(0,b.jsx)("p",{children:f(a.text)},c))})}function h({material:a}){var c;return(0,b.jsxs)("article",{className:"article",children:[(0,b.jsx)(d.default,{className:"backLink",href:"/psychoeducation",children:"← Назад в психопросвет"}),(0,b.jsxs)("header",{className:"articleHeader",children:[(0,b.jsxs)("div",{className:"materialMeta",children:[(0,b.jsx)("span",{children:e[a.type]}),(0,b.jsx)("span",{"aria-hidden":"true",children:"•"}),(0,b.jsxs)("span",{children:[a.durationMinutes," мин чтения"]})]}),(0,b.jsx)("h1",{children:a.title}),(0,b.jsx)("p",{className:"articleLead",children:a.summary}),(0,b.jsx)("div",{className:"tagList","aria-label":"Теги материала",children:a.tags.map(a=>(0,b.jsx)("span",{className:"tag",children:a.name},a.slug))})]}),(0,b.jsxs)("dl",{className:"articleReviewMeta","aria-label":"Редакционная информация",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("dt",{children:"Автор"}),(0,b.jsx)("dd",{children:a.author})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("dt",{children:"Рецензент"}),(0,b.jsx)("dd",{children:a.reviewer})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("dt",{children:"Дата пересмотра"}),(0,b.jsx)("dd",{children:(c=a.reviewedAt,new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(c)))})]})]}),(0,b.jsx)("div",{className:`articleCover ${a.imageUrl?"":"isPlaceholder"}`,children:a.imageUrl?(0,b.jsx)("img",{src:a.imageUrl,alt:`Обложка материала \xab${a.title}\xbb`}):(0,b.jsx)("div",{className:"coverPlaceholder",role:"img","aria-label":"У материала нет обложки",children:"Психопросвет"})}),a.contentWarning&&(0,b.jsxs)("aside",{className:"contentWarning",children:[(0,b.jsx)("strong",{children:"Обратите внимание"}),(0,b.jsx)("p",{children:a.contentWarning})]}),(0,b.jsx)(g,{body:a.body}),a.sources.length>0&&(0,b.jsxs)("section",{className:"sources",children:[(0,b.jsx)("h2",{children:"Источники"}),(0,b.jsx)("ul",{children:a.sources.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:a.url,target:"_blank",rel:"noreferrer",children:a.title})},a.url))})]})]})}var i=a.i(19378);let j={author:"Редакция «Рядом»",reviewer:"Клинический рецензент СПбГУ"},k=[{slug:"exam-stress",title:"Как пережить экзаменационный стресс и не выгореть в конце семестра",summary:"Что происходит с вниманием во время сильного напряжения и какие небольшие действия помогают вернуть ощущение контроля.",imageUrl:"/psychoeducation/exam-stress.svg",category:{slug:"study",name:"Учёба"},tags:[{slug:"stress",name:"Стресс"},{slug:"exams",name:"Экзамены"}],type:"article",durationMinutes:6,contentWarning:null,...j,reviewedAt:"2026-10-23T00:00:00Z",safeNextStep:"Выберите одну небольшую учебную задачу на ближайшие 15 минут.",body:`Экзаменационный стресс — нормальная реакция на высокую нагрузку. Он может влиять на внимание, память и ощущение контроля.

## Что можно сделать прямо сейчас

- остановиться на минуту и проверить, насколько вы устали;
- выбрать **одну** небольшую задачу вместо попытки охватить всё;
- запланировать короткий перерыв после неё;
- сохранить базовый режим сна, еды и движения.

## Когда стоит обратиться за поддержкой

Если тревога долго мешает спать, учиться или выполнять обычные дела, не обязательно справляться в одиночку. Можно перейти в [раздел помощи](/crisis) и посмотреть доступные варианты.

> Этот материал не заменяет консультацию специалиста и не является диагностикой.`,sources:[{title:"Всемирная организация здравоохранения — управление стрессом",url:"https://www.who.int/"}]},{slug:"sleep-reset",title:"Если сбился сон: мягко возвращаем режим",summary:"Несколько шагов, которые помогают постепенно восстановить более стабильный режим сна.",imageUrl:"/psychoeducation/sleep.svg",category:{slug:"wellbeing",name:"Самочувствие"},tags:[{slug:"sleep",name:"Сон"},{slug:"fatigue",name:"Усталость"}],type:"article",durationMinutes:5,contentWarning:null,...j,reviewedAt:"2026-10-21T00:00:00Z",safeNextStep:"Выберите реалистичное время подъёма на завтра и постарайтесь сохранить его несколько дней.",body:`Сон редко удаётся \xabпочинить\xbb одной идеальной ночью.

## Мягкий возврат к режиму

1. Стабилизируйте время подъёма.
2. Днём добавьте немного естественного света и движения.
3. За час до сна уменьшите количество сложных задач.

Если нарушения сна сохраняются долго или сильно влияют на самочувствие, лучше обсудить это со специалистом.`,sources:[]},{slug:"anxiety-grounding",title:"Когда тревога накрывает: возвращаем внимание в настоящее",summary:"Короткая текстовая практика, которая помогает переключить внимание с тревожных мыслей на происходящее вокруг.",imageUrl:null,category:{slug:"emotional-state",name:"Эмоциональное состояние"},tags:[{slug:"anxiety",name:"Тревога"},{slug:"self-help",name:"Самопомощь"}],type:"article",durationMinutes:4,contentWarning:"Материал описывает сильную тревогу. Вы можете в любой момент закрыть страницу и перейти в раздел помощи.",...j,reviewedAt:"2026-10-20T00:00:00Z",safeNextStep:"Назовите пять предметов вокруг и почувствуйте опору под ногами или спиной.",body:`## Практика \xab5–4–3–2–1\xbb

Оглянитесь и назовите:

- **5** вещей, которые видите;
- **4** телесных ощущения;
- **3** звука;
- **2** запаха;
- **1** вкус или ощущение во рту.

Задача практики — не \xabубрать\xbb тревогу любой ценой, а ненадолго вернуть внимание к настоящему моменту.`,sources:[]},{slug:"burnout-signs",title:"Усталость или выгорание: на какие сигналы стоит обратить внимание",summary:"Чем обычная усталость может отличаться от устойчивого истощения и почему восстановление — это не только отдых на выходных.",imageUrl:"/psychoeducation/burnout.svg",category:{slug:"wellbeing",name:"Самочувствие"},tags:[{slug:"fatigue",name:"Усталость"},{slug:"burnout",name:"Выгорание"},{slug:"long-tag",name:"Очень длинный тег для проверки устойчивости интерфейса на мобильных экранах"}],type:"article",durationMinutes:8,contentWarning:null,...j,reviewedAt:"2026-10-18T00:00:00Z",safeNextStep:"Отметьте одну нагрузку, которую можно уменьшить или перенести на этой неделе.",body:`Обычная усталость чаще уменьшается после отдыха. При устойчивом истощении привычные задачи могут требовать заметно больше усилий.

## На что смотреть

- как меняется энергия в течение нескольких недель;
- помогает ли отдых;
- насколько трудно начинать обычные задачи;
- изменились ли сон и концентрация.

Один симптом сам по себе не является диагнозом.`,sources:[]},{slug:"self-esteem",title:"Самооценка без постоянного сравнения с другими",summary:"Как замечать автоматические сравнения и возвращаться к более реалистичной оценке собственных результатов.",imageUrl:null,category:{slug:"emotional-state",name:"Эмоциональное состояние"},tags:[{slug:"self-esteem",name:"Самооценка"},{slug:"adaptation",name:"Адаптация"}],type:"article",durationMinutes:7,contentWarning:null,...j,reviewedAt:"2026-10-16T00:00:00Z",safeNextStep:"Запишите один собственный результат, который стал лучше по сравнению с вашей прошлой точкой.",body:`Сравнение с другими происходит автоматически, особенно когда виден чужой результат, но не виден путь к нему.

## Более полезная точка сравнения

Попробуйте сравнивать текущий результат не с чужим, а с собственной точкой старта.

Отдельно отметьте:

- что уже получилось;
- чему вы научились;
- какой следующий шаг реалистичен.`,sources:[]},{slug:"new-city-adaptation",title:"Первые недели в новом городе и университете: как дать себе время на адаптацию, когда всё вокруг непривычно и требует слишком много решений",summary:"Что может помочь, когда вокруг слишком много нового: люди, расписание, пространство и необходимость быстро принимать решения.",imageUrl:"/psychoeducation/adaptation.svg",category:{slug:"study",name:"Учёба"},tags:[{slug:"adaptation",name:"Адаптация"},{slug:"study",name:"Учёба"},{slug:"anxiety",name:"Тревога"}],type:"article",durationMinutes:6,contentWarning:null,...j,reviewedAt:"2026-10-14T00:00:00Z",safeNextStep:"Выберите одну повторяющуюся опору: знакомый маршрут, место для учёбы или регулярный контакт.",body:`Адаптация требует времени. В первые недели полезно создавать несколько повторяющихся опор.

## Что может стать опорой

- привычный маршрут;
- понятное место для учёбы;
- регулярное время еды;
- один или два повторяющихся контакта.

Необязательно сразу чувствовать себя \xabна своём месте\xbb. Знакомство с новой средой происходит постепенно.`,sources:[]}],l=a=>Array.from(new Map(a.map(a=>[a.slug,a])).values());async function m({params:a}){let{slug:d}=await a,e=k.find(a=>a.slug===d);return e||(0,c.notFound)(),(0,b.jsxs)("div",{className:"psychoShell",children:[(0,b.jsx)(i.f,{}),(0,b.jsxs)("main",{className:"psychoMain articleMain",children:[(0,b.jsxs)("header",{className:"publicTopbar",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"topbarSection",children:"Психопросвет"}),(0,b.jsx)("span",{className:"topbarHint",children:"Проверенный открытый материал"})]}),(0,b.jsxs)("div",{className:"guestBadge","aria-label":"Текущий режим: гость",children:[(0,b.jsx)("span",{className:"guestAvatar","aria-hidden":"true",children:"Г"}),(0,b.jsx)("span",{children:"Гость"})]})]}),(0,b.jsx)(h,{material:e})]})]})}l(k.map(a=>a.category)),l(k.flatMap(a=>a.tags)),a.s(["default",0,m],84977)},80216,function(a){a.n(a.i(84977))}];

//# sourceMappingURL=src_app_%28public%29_psychoeducation_%5Bslug%5D_page_tsx_0w36ro-9gvhrr._.js.map