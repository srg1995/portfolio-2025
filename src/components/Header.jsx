import { GithubIcon, LinkedinIcon, PdfIcon } from '@/assets/Icons';
import { basics } from '@cv';

export default function Header() {
  return (
    <section class="flex flex-col items-center justify-center gap-5">
      <img
        class="w-52 rounded-full border border-teal-200 shadow-2xl shadow-teal-200"
        src="../src/assets/profile.jpg"
        alt=""
      />

      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-extrabold text-teal-900">{basics.name}</h1>
        <p class="text-center text-xl font-bold text-teal-800">Desarrollador frontend</p>
        <div className="flex items-center justify-center gap-2">
          <a href="https://www.linkedin.com/in/sergio-sacrist%C3%A1n-santero-31b750a5/">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/srg1995">
            <GithubIcon />
          </a>
          <a
            href="../src/assets/CV_SERGIO_SACRISTAN_SANTERO_2025.pdf"
            className="flex rounded-full border-2 border-teal-800 px-2 py-1"
            target="_blank"
          >
            <PdfIcon />
            <span className="text-teal-900">cv</span>
          </a>
        </div>
      </div>
    </section>
  );
}
