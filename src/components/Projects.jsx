import { ProjectsIcon } from '@/assets/Icons';
import { useState } from 'react';

export default function Projects() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <ProjectsIcon />
        <h2 className="text-2xl font-bold text-teal-900">Proyectos</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="group rounded-lg border border-teal-800 p-4 text-teal-800 shadow shadow-teal-900">
          jfdh ufskdfhsd
        </div>
        <div className="group rounded-lg border border-teal-800 p-4 text-teal-800 shadow shadow-teal-900">
          jfdh ufskdfhsdå©
        </div>
        <div className="group rounded-lg border border-teal-800 p-4 text-teal-800 shadow shadow-teal-900">
          jfdh ufskdfhsd
        </div>
      </div>
    </div>
  );
}
