'use client';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { isHomeFeed, type HomeFeed } from './types';
export function HomeToday(){
  const [feed,setFeed]=useState<HomeFeed|null>(null);
  const [status,setStatus]=useState<'loading'|'success'|'error'>('loading');
  const [attempt,setAttempt]=useState(0);
  const retry=useCallback(()=>setAttempt(v=>v+1),[]);
  useEffect(()=>{
    const controller=new AbortController(); setStatus('loading');setFeed(null);
    fetch('/api/home',{signal:controller.signal,cache:'no-store'}).then(async r=>{
      if(!r.ok)throw Error('unavailable');const value:unknown=await r.json();
      if(!isHomeFeed(value))throw Error('bad data');return value;
    }).then(x=>{if(!controller.signal.aborted){setFeed(x);setStatus('success')}})
      .catch(()=>{if(!controller.signal.aborted)setStatus('error')});
    return ()=>controller.abort();
  },[attempt]);
  return <section className="homeSection" aria-labelledby="todayTitle"><h2 id="todayTitle">На сегодня</h2>
    {status==='loading'&&<p role="status">Загружаем материалы...</p>}
    {status==='error'&&<div role="status" className="homeNote">Материалы временно недоступны. Вы можете продолжить просматривать открытые разделы. <button type="button" onClick={retry}>Повторить</button></div>}
    {status==='success'&&feed&&<div className="homeGrid">
      <article className="homeTile"><h3>Поддержка дня</h3><p>{feed.message}</p></article>
      {feed.event&&<Link className="homeTile" href={feed.event.href}><h3>{feed.event.title}</h3><p>{feed.event.description}</p></Link>}
      {feed.practice&&<Link className="homeTile" href={feed.practice.href}><h3>{feed.practice.title}</h3><p>{feed.practice.description}</p></Link>}
    </div>}
  </section>
}
