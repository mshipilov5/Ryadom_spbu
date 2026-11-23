import { detail, PublicApiError } from './api-client';
export function upstreamPath(parts:string[],search='') {
 const base=process.env.PSYCHO_API_BASE_URL;
 if(!base || !/^https?:\/\//.test(base)) throw new PublicApiError(503);
 const prefix='/api/v1/psychoeducation/';
 return `${base.replace(/\/$/,'')}${prefix}${parts.map(encodeURIComponent).join('/')}${search}`;
}
export async function getMaterial(slug:string) {
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new PublicApiError(404);
 let response:Response;
 try{response=await fetch(upstreamPath(['materials',slug]),{cache:'no-store',signal:AbortSignal.timeout(8000)});}catch{throw new PublicApiError(503)}
 if(!response.ok)throw new PublicApiError(response.status);
 try{return detail(await response.json())}catch{throw new PublicApiError(502)}
}
