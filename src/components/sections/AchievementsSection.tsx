import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Award, Users, Calendar, CheckCircle, Briefcase, ChevronRight } from 'lucide-react';

import Pengabdian1 from '../images/pengabdian_1.jpg';
import Pengabdian2 from '../images/pengabdian_2.jpg';
import Pengabdian3 from '../images/pengabdian_3.jpg';

const workExperiences = [
    {
        role: 'Web Developer',
        company: 'PT. INDO TECHNO MEDIC',
        date: 'Sep 2025 - Jan 2026',
        bullets: [
            'Merancang dan mengembangkan sistem inventaris berbasis web secara mandiri untuk mengelola aset perusahaan (kendaraan, laptop, perangkat elektronik).',
            'Mendesain arsitektur database relasional dan menyusun alur penggunaan web (user flow) dari perencanaan hingga tahap siap dikembangkan.',
            'Mengimplementasikan dan membangun aplikasi web menggunakan framework CodeIgniter 3 (CI3) sesuai dengan standar perusahaan.'
        ]
    },
    {
        role: 'Production Engineering Assembling',
        company: 'CV. KARYA HIDUP SENTOSA',
        date: 'Agu 2022 - Mei 2023',
        bullets: [
            'Menyusun dan merumuskan dokumen panduan kerja (Instruksi Kerja / SOP) yang komprehensif untuk standar operasional perakitan mesin traktor.',
            'Merancang desain 3D untuk alat bantu perakitan (jig & fixture) menggunakan software Solid Edge guna mendukung kelancaran dan presisi proses produksi.',
            'Memastikan dokumentasi teknis dan desain alat bantu sesuai dengan standar kualitas manufaktur perusahaan.'
        ]
    }
];

const organizations = [
    {
        role: 'Volunteer Divisi Perlengkapan & Artistik',
        organization: 'Festival Bahasa dan Budaya (FBB 2025)',
        date: '20 September 2025',
        bullets: [
            'Bertanggung jawab penuh atas manajemen logistik, inventaris alat, dan tata letak venue untuk kelancaran operasional.',
            'Merancang dan mengeksekusi dekorasi panggung estetis bertema "Preserving Culture and Language, Building a Valuable Intellectual Civilization".',
            'Berkoordinasi dengan UKM SPBA UIN Sunan Kalijaga Yogyakarta.'
        ]
    },
    {
        role: 'Panitia (Divisi Perlengkapan/Teknis)',
        organization: 'FusionTech Challenge 2025',
        date: '20 Maret 2025',
        bullets: [
            'Panitia pelaksana kompetisi teknologi bertema "Menjembatani Kreativitas dan Teknologi untuk Kehidupan yang Lebih Cerdas".',
            'Kolaborasi aktif antara Himpunan Mahasiswa Sistem Informasi (HMSI) dan Himpunan Mahasiswa Teknik Komputer (HIMTEK) Universitas Teknologi Yogyakarta.'
        ]
    },
    {
        role: 'Panitia Pelaksana',
        organization: 'Pengabdian Masyarakat HMSI IMPACT',
        date: '27 April 2025',
        bullets: [
            'Bertanggung jawab menyukseskan program pengabdian masyarakat bertema "Menuju Smart Village: Pemberdayaan Dusun Melalui Teknologi Digital".',
            'Membantu penyuluhan teknologi digital untuk warga dusun sasaran program.'
        ],
        images: [Pengabdian1, Pengabdian2, Pengabdian3]
    },
    {
        role: 'Anggota Divisi Hubungan Masyarakat',
        organization: 'Himpunan Mahasiswa Sistem Informasi (HMSI) UTY',
        date: 'Periode Kepengurusan 2024/2025',
        bullets: [
            'Mengikuti rangkaian seminar teknologi dan workshop keahlian untuk memperbarui wawasan tren industri IT terkini.',
            'Berpartisipasi aktif dalam latihan dasar kepemimpinan (LDK) untuk melatih disiplin dan critical thinking.',
            'Terlibat dalam forum diskusi dan sharing session untuk membangun relasi antarmahasiswa dan alumni.'
        ]
    }
];

const achievements = [
    {
        type: 'Award & Competition',
        title: 'Juara 1 LKS SMK Tingkat DIY',
        subtitle: 'Bidang Lomba Teknik Pencetakan Plastik (Plastic Die Engineering)',
        date: 'Jan 2021',
        description: 'Meraih peringkat pertama tingkat Daerah Istimewa Yogyakarta. Berhasil mendemonstrasikan keahlian teknis tingkat lanjut dalam perancangan dan proses manufaktur cetakan plastik dengan tingkat presisi tinggi di bawah tekanan kompetisi.',
        icon: <Award className="text-amber-400" size={24} />
    },
    {
        type: 'Certification',
        title: 'English Proficiency Test (EPT)',
        subtitle: 'UTY Education, Certification, and Training Center',
        date: '20 Februari 2026',
        description: 'Meraih skor EPT 487 dengan rincian: Listening Comprehension (430), Structure and Written Expression (530), dan Reading Comprehension (500).',
        icon: <Award className="text-emerald-400" size={24} />
    },
    {
        type: 'Certification',
        title: 'SISource Academy Training',
        subtitle: 'Himpunan Mahasiswa Sistem Informasi UTY',
        date: 'Desember 2024 - Maret 2025',
        description: 'Telah mengikuti dan lulus pelatihan intensif akademik dengan fokus topik "Essentials of Information System Modeling" dan "Bootstrap Essentials for Web Design Beginners".',
        icon: <Award className="text-blue-400" size={24} />
    },
    {
        type: 'Certification',
        title: 'Latihan Dasar Kepemimpinan (LDK)',
        subtitle: 'Tema: Unlocking Leadership Potential: From Vision To Impact',
        date: '13 April 2025',
        description: 'Sertifikat kompetensi kepemimpinan sebagai Peserta LDK yang diselenggarakan oleh Himpunan Mahasiswa Sistem Informasi (HMSI) Universitas Teknologi Yogyakarta.',
        icon: <Award className="text-cyan-400" size={24} />
    },
    {
        type: 'Certification',
        title: 'Seminar & Musyawarah Besar HMSI 2024',
        subtitle: 'Tema: Reignite the Spirit: HMSI 2024 - Semangat Baru, Langkah Baru',
        date: '17-18 September 2024',
        description: 'Berpartisipasi aktif sebagai Peserta dalam kegiatan Seminar dan Musyawarah Besar Himpunan Mahasiswa Sistem Informasi (HMSI) di Kampus 2 Universitas Teknologi Yogyakarta.',
        icon: <Award className="text-cyan-400" size={24} />
    }
];

type TabType = 'work' | 'activities' | 'certificates';

const AchievementsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('work');
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.tab-content-item', 
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [activeTab]);

    return (
        <section ref={containerRef} className="w-full px-6 md:px-12 lg:px-16 py-24 max-w-[1600px] mx-auto relative">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-100/80 border border-gray-800 text-primary-400 text-sm font-semibold mb-4 shadow-sm w-fit">
                    <Briefcase size={16} /> Portfolio Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-black text-white text-center">
                    Pengalaman & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Aktivitas</span>
                </h2>
            </div>

            {/* Clean Tab Buttons */}
            <div className="relative z-10 flex justify-center gap-2 md:gap-4 mb-12 max-w-lg mx-auto bg-dark-200/60 p-1.5 rounded-full border border-gray-800 backdrop-blur-md">
                {(['work', 'activities', 'certificates'] as TabType[]).map((tab) => {
                    const label = tab === 'work' ? 'Pengalaman Kerja' : tab === 'activities' ? 'Kepanitiaan & Organisasi' : 'Sertifikat & Prestasi';
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 text-center py-3 px-4 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                                activeTab === tab 
                                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg' 
                                    : 'text-gray-400 hover:text-white hover:bg-dark-100/50'
                            }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* Dynamic Tab Contents */}
            <div className="relative z-10 w-full mx-auto font-sans">
                {activeTab === 'work' && (
                    <div className="flex flex-wrap justify-center gap-6">
                        {workExperiences.map((work, idx) => (
                            <div
                                key={idx}
                                className="tab-content-item p-8 bg-dark-200/40 border border-gray-800 rounded-3xl hover:border-primary-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.05)] flex flex-col justify-between w-full md:w-[calc(50%-16px)] lg:w-[calc(33%-18px)] max-w-[420px] min-h-[380px]"
                            >
                                <div>
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="p-3.5 bg-dark-100 border border-gray-800 rounded-xl text-primary-400 flex-shrink-0">
                                            <Briefcase size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white leading-snug">{work.role}</h3>
                                            <p className="text-sm font-semibold text-primary-400">{work.company}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {work.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                                <ChevronRight className="text-primary-500 flex-shrink-0 mt-1" size={14} />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <span className="text-xs text-gray-500 flex items-center gap-1 border-t border-gray-800/50 pt-4">
                                    <Calendar size={12} /> {work.date}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'activities' && (
                    <div className="flex flex-wrap justify-center gap-6">
                        {organizations.map((org, idx) => (
                            <div
                                key={idx}
                                className="tab-content-item p-8 bg-dark-200/40 border border-gray-800 rounded-3xl hover:border-primary-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.05)] flex flex-col justify-between w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] max-w-[340px] min-h-[360px]"
                            >
                                <div>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-dark-100 border border-gray-800 rounded-xl text-cyan-400 flex-shrink-0">
                                            <Users size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-white leading-snug">{org.role}</h3>
                                            <p className="text-xs text-cyan-400 font-semibold">{org.organization}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2.5 mb-4">
                                        {org.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="text-gray-400 text-xs leading-relaxed flex items-start gap-2">
                                                <CheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" size={12} />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {org.images && org.images.length > 0 && (
                                        <div className="grid grid-cols-3 gap-2 mt-4 mb-2">
                                            {org.images.map((img, imgIdx) => (
                                                <div key={imgIdx} className="h-12 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all cursor-pointer">
                                                    <img src={img} alt="Aktivitas" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <span className="text-[11px] text-gray-500 flex items-center gap-1 border-t border-gray-800/50 pt-3">
                                    <Calendar size={12} /> {org.date}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'certificates' && (
                    <div className="flex flex-wrap justify-center gap-6">
                        {achievements.map((ach, idx) => (
                            <div
                                key={idx}
                                className="tab-content-item p-8 bg-dark-200/40 border border-gray-800 rounded-3xl hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.05)] flex flex-col justify-between w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] max-w-[340px] min-h-[360px]"
                            >
                                <div>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-2.5 bg-dark-100 border border-gray-800 rounded-xl flex-shrink-0">
                                            {ach.icon}
                                        </div>
                                        <div>
                                            <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 uppercase tracking-wider mb-1">
                                                {ach.type}
                                            </span>
                                            <h3 className="text-base font-bold text-white leading-snug">{ach.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-xs font-semibold text-amber-400 mb-2">{ach.subtitle}</p>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{ach.description}</p>
                                </div>
                                <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-auto border-t border-gray-800/50 pt-3">
                                    <Calendar size={12} /> {ach.date}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AchievementsSection;
