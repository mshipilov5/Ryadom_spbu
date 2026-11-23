"use client";
import Link from 'next/link';
import { useState } from 'react';
import './home.css';
const navigation=[['Главная','/'],['Разобраться','/focus'],['Накопилось','/wall'],['Практики','/practices'],['Помощь','/appointments'],['Психопросвет','/psychoeducation'],['События','/events']];
const moods=['Спокойно','Немного тревожно','Устал(а)','Нужна поддержка'];
export default function HomePage(){
 const [mood,setMood]=useState<string|null>(null);
 return <div className="homeShell">
  <aside className="homeSidebar"><div className="homeBrand"><strong>РЯДОМ</strong><small>Платформа СПбГУ</small></div>
   <nav aria-label="Основные разделы">{navigation.map(([name,url])=><Link key={url} className={url==='/'?'active':''} aria-current={url==='/'?'page':undefined} href={url}>{name}</Link>)}</nav>
   <div className="homeSidebarBottom"><Link className="emergency" href="/crisis">Нужна срочная помощь</Link><p>Платформа не ставит диагнозы и не заменяет экстренные службы</p></div>
  </aside>
  <main className="homeMain"><header className="homeTopbar"><label><span className="srOnly">Поиск</span><input type="search" placeholder="Поиск по платформе (демо)" disabled aria-describedby="searchNotice"/></label><span className="srOnly" id="searchNotice">Поиск будет подключён позднее</span><Link className="homeLogin" href="/login">Войти</Link></header>
   <section className="homeHero"><p className="homeEyebrow">Психологическая поддержка СПбГУ</p><h1>Вы не одни. Мы рядом.</h1><p>Здесь можно разобраться в своём состоянии, найти полезные материалы или узнать, как обратиться за поддержкой.</p><div className="homeActions"><Link href="/focus">Разобраться за 2 минуты</Link><Link href="/appointments">Записаться к психологу</Link></div></section>
   <section className="homeSection" aria-labelledby="moodTitle"><h2 id="moodTitle">Как вы сейчас?</h2><p>Выбор нужен только для навигации. Мы не сохраняем его в дневник.</p><div className="moodChips">{moods.map(m=><button type="button" key={m} aria-pressed={mood===m} onClick={()=>setMood(mood===m?null:m)}>{m}</button>)}</div>{mood&&<p className="homeNote" role="status">Вы выбрали «{mood}». Это не диагноз и никуда не отправляется.</p>}</section>
   <section className="homeSection" aria-labelledby="pathTitle"><h2 id="pathTitle">Выберите путь</h2><div className="homeGrid">{[['Эмоциональное состояние','Узнать больше о своих чувствах','/focus'],['Жизненные сферы','Учёба, отношения и повседневная жизнь','/psychoeducation'],['Профессиональная помощь','Как связаться со специалистом','/appointments']].map(([title,desc,href])=><Link href={href} className="homeTile" key={title}><h3>{title}</h3><p>{desc}</p><span>Перейти →</span></Link>)}</div></section>
   <section className="homeSection" aria-labelledby="todayTitle"><h2 id="todayTitle">На сегодня</h2><div className="homeGrid">{[['Небольшая поддержка','Не нужно решать все задачи сразу.'],['События','Посмотрите встречи и мероприятия.'],['Практика','Сделайте короткую паузу и обратите внимание на дыхание.']].map(([title,desc])=><article className="homeTile" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
  </main></div>
}
