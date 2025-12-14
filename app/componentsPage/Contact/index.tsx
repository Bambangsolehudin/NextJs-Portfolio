"use client";


import { useState } from 'react';
// Asumsi import ini masih valid, tetapi pastikan /src/data/mailData.ts dan /src/data/socialLinks.ts sudah ada
import mailData from './mailData'; 
import { socialLinks } from './socialLinks';
import { iconMap } from './socialLinks';
// Import gambar statis
import Monterey from '/public/assets/Contact/monterey.jpg';
import PlainMail from "/public/assets/Airmails/plainMail.png";
import BlurText from '@/app/components/BlurText/BlurText';
import { FaDochub } from 'react-icons/fa';

// Asumsi BlurText adalah komponen React yang memiliki properti yang didefinisikan

// --- TYPE DEFINITIONS (Interfaces) ---

/**
 * Interface untuk struktur data di mailData.
 */
interface MailItem {
  id: number | string;
  title: string;
  date: string;
  preview: string; // URL/Path ke gambar pratinjau email
  // Tambahkan properti lain yang ada di mailData jika diperlukan
}

/**
 * Interface untuk struktur data di socialLinks.
 */
interface SocialLink {
  url: string;
  coloredIcon: string;
  name: string;
  // Tambahkan properti lain yang ada di socialLinks jika diperlukan
}

// Asumsi tipe untuk `iconMap` adalah Record<string, string> (map dari string ke string/path)
const iconMapTyped: Record<string, string> = iconMap as Record<string, string>;
// Asumsi tipe untuk `mailData` adalah array dari MailItem
const mailDataTyped: MailItem[] = mailData as any[];
// Asumsi tipe untuk `socialLinks` adalah array dari SocialLink
const socialLinksTyped: SocialLink[] = socialLinks as SocialLink[];

// --- REACT COMPONENT ---

const Contact = () => {
  // Tipe untuk state activeTab adalah string, dan hanya boleh 'social' atau 'mail'
  const [activeTab, setActiveTab] = useState<'social' | 'mail'>('social'); 
  // Tipe untuk state hoveredMailId adalah number/string (berdasarkan id MailItem) atau null
  const [hoveredMailId, setHoveredMailId] = useState<MailItem['id'] | null>(null);
  // Tipe untuk state openedMail adalah MailItem atau null
  const [openedMail, setOpenedMail] = useState<MailItem | null>(null);

  // Fungsi penanganan event tanpa tipe kembalian
  const handleAnimationComplete = (): void => {
    // console.log("BlurText animation complete");
  }

  // Fungsi untuk membuka mail, menerima argumen bertipe MailItem
  const openMail = (mail: MailItem): void => setOpenedMail(mail);
  
  // Fungsi untuk menutup mail
  const closeMail = (): void => setOpenedMail(null);

  const handleDownloadCv = () => {
    // Asumsi file berada di public/my_cv.pdf
    const filePath = '/assets/CV/CV.pdf'; 
    
    // Membuat elemen anchor sementara
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'CV_Bambang_Solehudin.pdf'); // Nama file yang akan di-download
    
    // Melakukan klik pada elemen anchor
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Tambahkan kode untuk melacak klik atau notifikasi di sini
    console.log('CV Downloaded'); 
  };

  return (
    <div className=" md:max-w-full max-w-4xl px-4 py-8 mx-auto">
    
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-zinc-700">
        {['social'].map((tab: any) => (
          <button
            key={tab}
            className={`pb-2 px-4 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-zinc-50 md:text-lg text-zinc-300'
                : 'text-zinc-300'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'social' ? 'Social Links' : 'Airmails'}
          </button>
        ))}
      </div>

      {/* Tab Content: Social Links */}
      {activeTab === 'social' && (
        <div
          className="pt-4 px-4 bg-no-repeat bg-center bg-cover border border-zinc-700 max-w-full md:max-w-full mx-auto"
          style={{
            backgroundImage: `url(${Monterey})`,
          }}
          >
          {/* Top Bar with Dots + Tabs */}
          {/* Obsessed with MacOS terminal tab UI >_<  */}
          <div className="flex items-center bg-zinc-800 px-3 pt-2 rounded-t-lg border border-zinc-700 relative">
            {/* Mac-style Dots */}
            <div className="flex items-center space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          
            {/* Tabs */}
           <div className="flex gap-1 flex-wrap items-center">
            {socialLinksTyped
              .filter(({ coloredIcon }) => coloredIcon)
              .map((link: SocialLink) => { // Menggunakan 'link' sebagai nama variabel yang lebih jelas
                // Jika nama link adalah 'resume', kembalikan null (atau tambahkan logika download di sini)
                if (link.name === 'CV') {
                  return (
                    <div
                      key={link.name}
                      rel="noopener noreferrer"
                      onClick={handleDownloadCv}
                      className="cursor-pointer group flex text-white items-center gap-2 px-4 py-1.5 bg-zinc-700 hover:bg-zinc-600 rounded-t-md border border-zinc-600 border-b-0 transition-all duration-200 transform hover:scale-[1.05] hover:-translate-y-[1px]"
                    >
                      <FaDochub />
                      <span className="hidden sm:inline text-sm text-zinc-200">{link.name}</span>
                    </div>
                  )

                }

                // Untuk semua link sosial lainnya, kembalikan elemen <a>
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center gap-2 px-4 py-1.5 bg-zinc-700 hover:bg-zinc-600 rounded-t-md border border-zinc-600 border-b-0 transition-all duration-200 transform hover:scale-[1.05] hover:-translate-y-[1px]"
                  >
                    <img src={iconMapTyped[link.coloredIcon]} alt={link.name} className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm text-zinc-200">{link.name}</span>
                  </a>
                );
              })}
          </div>
          </div>
      
          {/* Will modify this into an image in the future :)) */}

          <div className="py-10 bg-neutral-800 ">
              <div className="flex flex-col gap-3 items-center">
               <div className="flex items-center gap-2 bg-green-600/10 px-4 py-2 rounded-full">
                 <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                 <span className="text-xs font-light text-zinc-300">Available to Work</span>
               </div>
               <BlurText
                 text="Let's Connect 👋"
                 delay={150} 
                 animateBy="words"
                 direction="top"
                 onAnimationComplete={handleAnimationComplete}
                 className="text-xl md:text-5xl lg:text-5xl font-bold mb-4 lg:text-center"
               >
               </BlurText>
              </div>
          </div>
        </div>
      )}

      {/* Tab Content: Mail Stack */}
      {activeTab === 'mail' && (
        <div className="flex flex-col items-center justify-center mt-10 px-4">
          <div className="relative w-full max-w-[700px] aspect-[7/4]">
            {mailDataTyped.map((mail: MailItem, index: number) => {
              const isHovered: boolean = hoveredMailId === mail.id;
              return (
                <div
                  key={mail.id}
                  className={`absolute w-full h-full cursor-pointer transition-transform duration-300 ease-in-out
                    bg-contain bg-center bg-no-repeat shadow-xl rounded-md
                    flex flex-col items-start justify-start p-4 ${
                      isHovered ? 'z-50 scale-105' : 'scale-100'
                    }`}
                  style={{
                    zIndex: isHovered ? 50 : index,
                    top: `${index * 30}px`,
                    transform: `rotate(${(index - 1) * 3}deg)`,
                    backgroundImage: `url(${PlainMail})`,
                  }}
                  onClick={() => openMail(mail)}
                  onMouseEnter={() => setHoveredMailId(mail.id)}
                  onMouseLeave={() => setHoveredMailId(null)}
                >
                  <div className="absolute top-10 left-10 text-zinc-700 text-xs sm:text-sm font-sans">
                    <span className="block">{mail.date}</span>
                    <span className="block">{mail.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal: Airmail content preview, sneaky <_< */}
      {openedMail && (
        <div
          className="fixed inset-0 bg-zinc-900/80 flex items-center justify-center z-50"
          onClick={closeMail}
        >
          <div
            className="max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={openedMail.preview}
              alt="Opened Mail"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;