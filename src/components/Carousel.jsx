import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactIcon } from '@/assets/Icons';

export default function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="slider-container cursor-pointer">
      <Slider {...settings}>
        <div className="">
          <div className="m-8 grid grid-cols-1 rounded-lg border border-teal-800 p-4 shadow shadow-teal-900 md:grid-cols-2">
            <div className="group order-2 flex items-center justify-center md:order-1">
              <ReactIcon />
            </div>
            <div className="group order-1 md:order-2">
              <h1 className="mb-2 py-3 text-center font-bold text-teal-900">
                DESARROLLO DE APLICACIONES WEB(DAW)
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="text-justify text-teal-800">
                  • Desarrollar aplicaciones informáticas para la gestión empresarial y de negocio,
                  incluyendo sistemas de información y herramientas de automatización.
                </li>
                <li className="text-justify text-teal-800">
                  • Desarrollar aplicaciones de propósito general adaptadas a distintas necesidades
                  y buenas prácticas de programación.
                </li>
                <li className="text-justify text-teal-800">
                  • Desarrollar aplicaciones web, tanto del lado del servidor como del cliente,
                  usando frameworks modernos y APIs.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="m-8 grid grid-cols-1 rounded-lg border border-teal-800 p-4 shadow shadow-teal-900 md:grid-cols-2">
            <div className="group order-2 flex items-center justify-center md:order-1">
              <ReactIcon />
            </div>
            <div className="group order-1 md:order-2">
              <h1 className="mb-2 py-3 text-center font-bold text-teal-900">
                DESARROLLO DE APLICACIONES MULTIPLATAFORMA(DAM)
              </h1>

              <ul className="flex flex-col gap-2">
                <li className="text-justify text-teal-800">
                  • Desarrollar aplicaciones informáticas para la gestión empresarial y de negocio,
                  incluyendo sistemas de información y herramientas de soporte a procesos.
                </li>
                <li className="text-justify text-teal-800">
                  • Desarrollar aplicaciones de propósito general, adaptadas a diversas necesidades
                  y buenas prácticas de programación.
                </li>
                <li className="text-justify text-teal-800">
                  • Desarrollar aplicaciones en el ámbito del entretenimiento y la informática
                  móvil, asegurando usabilidad y rendimiento.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <div className="m-8 grid grid-cols-1 rounded-lg border border-teal-800 p-4 shadow shadow-teal-900 md:grid-cols-2">
            <div className="group order-2 flex items-center justify-center md:order-1">
              <img src="../src/assets/psmi.png" alt="" className="w-44" />
            </div>
            <div className="group order-1 md:order-2">
              <h1 className="mb-2 py-3 text-center font-bold text-teal-900">
                Professional Scrum Master (PSMI)
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="text-justify text-teal-800">
                  • Comprender a fondo el marco de Scrum, sus roles, eventos, artefactos y cómo un
                  Scrum Master lidera sirviendo y eliminando impedimentos.
                </li>
                <li className="text-justify text-teal-800">
                  • Aplicar los valores de Scrum y facilitar la colaboración en equipos
                  autogestionados y multifuncionales.
                </li>
                <li className="text-justify text-teal-800">
                  • Promover la adaptación continua, la transparencia, la inspección y la conexión
                  de Scrum con la agilidad organizacional y la entrega de valor.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="m-8 grid grid-cols-1 rounded-lg border border-teal-800 p-4 shadow shadow-teal-900 md:grid-cols-2">
            <div className="group order-2 flex items-center justify-center md:order-1">
              <img src="../src/assets/Kanban.png" alt="" className="w-44" />
            </div>
            <div className="group order-1 md:order-2">
              <h1 className="mb-2 py-3 text-center font-bold text-teal-900">
                Team Kanban Practitioner (TKP , Kanban University)
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="text-justify text-teal-800">
                  • Comprender los principios fundamentales de Kanban y el diseño de sistemas
                  visuales para gestionar el flujo de trabajo.
                </li>
                <li className="text-justify text-teal-800">
                  • Optimizar la eficiencia limitando el trabajo en curso (WIP), identificando
                  cuellos de botella y mejorando la fluidez del proceso.
                </li>
                <li className="text-justify text-teal-800">
                  • Fomentar la colaboración, la autoorganización del equipo y la mejora continua
                  mediante métricas simples (lead time, throughput, etc.).
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="m-8 grid grid-cols-1 rounded-lg border border-teal-800 p-4 shadow shadow-teal-900 md:grid-cols-2">
            <div className="group order-2 flex items-center justify-center md:order-1">
              <ReactIcon />
            </div>
            <div className="group order-1 md:order-2">
              <h1 className="mb-2 py-3 text-center font-bold text-teal-900">
                SISTEMAS MICROINFORMATICOS Y REDES (SMR)
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="text-justify text-teal-800">
                  • Reparar y configurar ordenadores, asegurando su correcto funcionamiento.
                </li>
                <li className="text-justify text-teal-800">
                  • Instalar y configurar redes básicas y avanzadas.
                </li>
                <li className="text-justify text-teal-800">
                  • Usar aplicaciones ofimáticas(ofice) y de tratamiento de imágenes de manera
                  eficiente.
                </li>
                <li className="text-justify text-teal-800">
                  • Diseñar páginas web y trabajar con gestores de contenidos.
                </li>
                <li className="text-justify text-teal-800">
                  • Crear y administrar servidores, manteniendo su rendimiento y seguridad.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
