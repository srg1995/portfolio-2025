import {
  AngularIcon,
  CssIcon,
  JsIcon,
  NextIcon,
  NuxtIcon,
  OptionCloseIcon,
  OptionOpenIcon,
  ReactIcon,
  TailwindIcon,
  VueIcon,
} from '@/assets/Icons';
import { useState } from 'react';

export default function IconsToggle() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  return (
    <section className="mt-6 flex items-center justify-end gap-2">
      <div
        className={`flex transform gap-2 transition-all duration-500 ${
          isOpenOptions
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-[30px] opacity-0'
        }`}
      >
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <ReactIcon />
        </div>
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <AngularIcon />
        </div>
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <NuxtIcon />
        </div>
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <NextIcon />
        </div>
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <VueIcon />
        </div>
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <JsIcon />
        </div>
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <CssIcon />
        </div>
        <div className="rounded-full border border-teal-200 p-2 transition-all hover:scale-110 hover:border-teal-200 hover:bg-teal-100 hover:shadow-teal-200">
          <TailwindIcon />
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => setIsOpenOptions(!isOpenOptions)}>
          {isOpenOptions ? (
            <div className="rounded-full border border-teal-200 bg-teal-200 p-2 transition-all duration-150 hover:scale-110 hover:border-teal-200 hover:bg-teal-200">
              <OptionOpenIcon />
            </div>
          ) : (
            <div className="hover:bg-teal200 rounded-full border border-teal-200 p-2 transition-all duration-150 hover:scale-110 hover:border-teal-200">
              <OptionCloseIcon />
            </div>
          )}
        </button>
      </div>
    </section>
  );
}
