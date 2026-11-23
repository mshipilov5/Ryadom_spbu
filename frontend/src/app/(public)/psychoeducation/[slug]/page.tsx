import { notFound } from 'next/navigation';
import { ArticleView } from '@/modules/education/components/ArticleView';
import { PsychoeducationSidebar } from '@/modules/education/components/PsychoeducationSidebar';
import { getMaterial } from '@/modules/education/lib/server-api';
import { PublicApiError } from '@/modules/education/lib/api-client';
import Link from 'next/link';
import '../psychoeducation.css';
export const dynamic='force-dynamic';
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 let material;
 try{material=await getMaterial(slug)}catch(e){if(e instanceof PublicApiError&&e.status===404)notFound();
 return <div className="psychoShell"><PsychoeducationSidebar/><main className="psychoMain"><h1>Материал временно недоступен</h1><p>Попробуйте открыть его позже.</p><Link href="/psychoeducation">Назад в каталог</Link></main></div>}
 return <div className="psychoShell"><PsychoeducationSidebar/><main className="psychoMain articleMain"><ArticleView material={material}/></main></div>;
}
