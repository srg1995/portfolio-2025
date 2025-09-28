import { ContactIcon } from '@/assets/Icons';
import { useState } from 'react';

export default function Projects() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  return (
    <div className="flex flex-col gap-2 py-8">
      <div className="flex items-center gap-1">
        <ContactIcon />
        <h2 className="text-2xl font-bold text-teal-900">Contacto</h2>
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="w-2/3 text-teal-800">
          ¡Gracias por llegar hasta aquí! Si mi perfil te ha despertado curiosidad, no dudes en
          escribirme. Hablemos y veamos cómo podemos crear algo increíble juntos. 🚀
        </p>
        <a
          href="mailto:sergiosacristan8@gmail.com?subject=Oportunidad%20Laboral"
          class="rounded-full border-2 border-teal-500 px-4 py-2 text-teal-500 transition-colors hover:bg-teal-500 hover:text-white"
        >
          Contáctame
        </a>
      </div>
      <span className="py-8 text-center">Copyright 2020 All rights reserved</span>
    </div>
  );
}
