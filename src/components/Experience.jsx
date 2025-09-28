import { ExperienceIcon } from '@/assets/Icons';

export default function Experience() {
  return (
    <>
      <div className="mt-8 flex flex-col">
        <div className="flex items-center gap-1">
          <ExperienceIcon />
          <h2 className="text-2xl font-bold text-teal-900">Experiencia</h2>
        </div>
        <div className="flex justify-center">
          <div class="relative flex flex-col items-start p-4 md:items-center">
            <div class="absolute top-0 h-full w-1 -translate-x-1/2 transform bg-teal-700 md:left-1/2"></div>

            <div class="relative mb-6 flex w-full justify-start pl-4 md:justify-center">
              <div class="flex items-center space-x-4">
                <div class="absolute z-10 h-4 w-4 translate-x-[-24px] transform rounded-full bg-teal-500 md:left-1/2 md:-translate-x-1/2 md:-translate-y-2"></div>
                <div class="w-60 max-w-xs rounded bg-white p-4 shadow-md md:ml-68">
                  <h3 class="font-bold text-teal-800">CaixaBank Tech Leader</h3>
                  <p class="text-sm text-teal-700">2022 - Actualidad</p>
                  <p class="font-semibold text-teal-600">Ntt Data</p>
                </div>
              </div>
            </div>

            <div class="relative mb-6 flex w-full justify-start pl-4 md:justify-center">
              <div class="flex items-center space-x-4">
                <div class="w-60 max-w-xs rounded bg-white p-4 shadow-md md:mr-68 md:text-right">
                  <h3 class="font-bold text-teal-800">Angular Developer</h3>
                  <p class="text-sm text-teal-700">2021 - 2023</p>
                  <p class="font-semibold text-teal-600">Aidiapp</p>
                </div>
                <div class="absolute z-10 h-4 w-4 translate-x-[-24px] transform rounded-full bg-teal-500 md:left-1/2 md:-translate-x-1/2 md:-translate-y-2"></div>
              </div>
            </div>

            <div class="relative mb-6 flex w-full justify-start pl-4 md:justify-center">
              <div class="flex items-center space-x-4">
                <div class="absolute z-10 h-4 w-4 translate-x-[-24px] transform rounded-full bg-teal-500 md:left-1/2 md:-translate-x-1/2 md:-translate-y-2"></div>
                <div class="w-60 max-w-xs rounded bg-white p-4 shadow-md md:ml-68">
                  <h3 class="font-bold text-teal-800">Iberdrola Developer Frontend</h3>
                  <p class="text-sm text-teal-700">2018 - 2022</p>
                  <p class="font-semibold text-teal-600">Ntt Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
