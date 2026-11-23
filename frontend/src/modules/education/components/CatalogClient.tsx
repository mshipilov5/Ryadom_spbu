'use client';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { catalogApi } from '../lib/api-client';
import type { CatalogFilters as Filters, FilterOptions, MaterialPreview } from '../model/types';
import { CatalogFilters } from './CatalogFilters';
import { MaterialCard } from './MaterialCard';
import { CatalogLoading, CatalogEmpty, CatalogError } from './CatalogStates';
const initial:Filters={q:'',category:null,tags:[],type:'article'};
export function CatalogClient(){
 const params=useSearchParams();
 const [filters,setFilters]=useState<Filters>(()=>({ ...initial,q:params.get('q')||'' }));
 const [options,setOptions]=useState<FilterOptions>({types:['article'],categories:[],tags:[]});
 const [items,setItems]=useState<MaterialPreview[]>([]);
 const [status,setStatus]=useState<'loading'|'ready'|'error'>('loading');
 const [retry,setRetry]=useState(0);
 useEffect(()=>{const controller=new AbortController();catalogApi.filters(controller.signal).then(setOptions).catch(()=>{});return()=>controller.abort()},[retry]);
 const query=useMemo(()=>{const q=new URLSearchParams();if(filters.q.trim())q.set('q',filters.q.trim());if(filters.category)q.set('category',filters.category);if(filters.type)q.set('type',filters.type);for(const tag of filters.tags)q.append('tags',tag);return q.toString()},[filters]);
 useEffect(()=>{const controller=new AbortController();setStatus('loading');const timer=setTimeout(()=>{
 catalogApi.list(new URLSearchParams(query),controller.signal).then(x=>{if(!controller.signal.aborted){setItems(x.items);setStatus('ready')}}).catch(()=>{if(!controller.signal.aborted)setStatus('error')});
 },filters.q?300:0);return()=>{clearTimeout(timer);controller.abort()}},[query,retry,filters.q]);
 return <><CatalogFilters filters={filters} options={options} onChange={setFilters} onReset={()=>setFilters(initial)}/>
  <div className="catalogResultMeta" aria-live="polite">{status==='ready'?`Найдено материалов: ${items.length}`:null}</div>
  {status==='loading'?<CatalogLoading/>:status==='error'?<CatalogError onRetry={()=>setRetry(x=>x+1)}/>:items.length===0?<CatalogEmpty onReset={()=>setFilters(initial)}/>:<div className="materialsGrid">{items.map(x=><MaterialCard key={x.slug} material={x}/>)}</div>}
 </>;
}
