import type { FilterOptions, MaterialDetail, MaterialPreview } from '../model/types';
export class PublicApiError extends Error { constructor(public status: number) {super('Материалы временно недоступны');} }
function record(value:unknown): Record<string,unknown> {
  if(!value || typeof value!=='object' || Array.isArray(value)) throw new PublicApiError(502);
  return value as Record<string,unknown>;
}
const text=(v:unknown)=>typeof v==='string'?v:'';
const objectArr=(x:unknown)=>Array.isArray(x)?x:[];
export function preview(value:unknown):MaterialPreview {
 const o=record(value), cat=record(o.category);
 if(!text(o.slug)||!text(o.title)||o.type!=='article') throw new PublicApiError(502);
 const tags=objectArr(o.tags).map(x=>{const t=record(x);return {slug:text(t.slug),name:text(t.name)};}).filter(x=>x.slug);
 return {slug:text(o.slug),title:text(o.title),summary:text(o.summary),imageUrl:typeof o.imageUrl==='string'?o.imageUrl:null,
   type:'article',durationMinutes:Number(o.durationMinutes)||1,category:{slug:text(cat.slug),name:text(cat.name)},
   tags,contentWarning:typeof o.contentWarning==='string'?o.contentWarning:null,
   author:typeof o.author==='string'?o.author:undefined,reviewer:typeof o.reviewer==='string'?o.reviewer:undefined,
   reviewedAt:typeof o.reviewedAt==='string'?o.reviewedAt:undefined};
}
export function list(value:unknown):{items:MaterialPreview[];total:number}{const v=record(value);return {items:objectArr(v.items).map(preview),total:typeof v.total==='number'?v.total:0};}
export function detail(value:unknown):MaterialDetail{const o=record(value);const p=preview(o);if(typeof o.body!=='string')throw new PublicApiError(502);
 return {...p,body:o.body,reviewedAt:typeof o.reviewedAt==='string'?o.reviewedAt:undefined,
 sources:objectArr(o.sources).map(x=>{const s=record(x);return {title:text(s.title),url:text(s.url)};}).filter(x=>x.title&&/^https?:\/\//.test(x.url))};}
export function filters(value:unknown):FilterOptions {const v=record(value);return {types:['article'],categories:objectArr(v.categories).map(x=>{const o=record(x);return {slug:text(o.slug),name:text(o.name)}}).filter(x=>x.slug),
 tags:objectArr(v.tags).map(x=>{const o=record(x);return {slug:text(o.slug),name:text(o.name)}}).filter(x=>x.slug)};}
async function read<T>(url:string,fn:(v:unknown)=>T,signal?:AbortSignal):Promise<T>{let response:Response;try{response=await fetch(url,{cache:'no-store',signal});}catch{throw new PublicApiError(503)}
 if(!response.ok)throw new PublicApiError(response.status);try{return fn(await response.json())}catch(e){if(e instanceof PublicApiError)throw e;throw new PublicApiError(502)}}
export const catalogApi = {
 list:(query:URLSearchParams,signal?:AbortSignal)=>read('/api/public-psychoeducation/materials?'+query.toString(),list,signal),
 filters:(signal?:AbortSignal)=>read('/api/public-psychoeducation/filters',filters,signal)
};
