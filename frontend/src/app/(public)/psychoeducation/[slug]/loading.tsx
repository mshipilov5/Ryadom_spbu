import { PsychoeducationSidebar } from '@/modules/education/components/PsychoeducationSidebar';
import { CatalogLoading } from '@/modules/education/components/CatalogStates';
import '../psychoeducation.css';
export default function Loading(){return <div className="psychoShell"><PsychoeducationSidebar/><main className="psychoMain"><h1>Загружаем материал</h1><CatalogLoading/></main></div>}
