import WebCover from '../components/images/web_cover.jpg';
import AndroidCover from '../components/images/android_cover.png';
import AndroidSS1 from '../components/images/android_ss_1.png';
import AndroidSS2 from '../components/images/android_ss_2.png';
import AndroidSS3 from '../components/images/android_ss_3.png';
import AndroidSS4 from '../components/images/android_ss_4.png';

export const ALL_FILTER_TYPE = 'all';
export const ANDROID_FILTER_TYPE = 'android';
export const WEBSITES_FILTER_TYPE = 'Websites';
export const CAD_FILTER_TYPE = 'cad';

export const ALL_PROJECTS_ID = 'All Projects';

export default function getProjectsList() {
  return [
    {
      id: 1,
      name: 'Web Inventory Management System',
      createdAt: '2025',
      description: 'Sistem pelacakan inventaris dan manajemen aset berbasis web yang dibangun untuk PT. Indo Techno Medic.',
      longDescription: 'Merancang dan mengembangkan platform manajemen inventaris berbasis web yang komprehensif dari awal untuk mengelola aset perusahaan (termasuk kendaraan, laptop, dan perangkat elektronik). Tanggung jawab meliputi perancangan struktur database relasional, pemetaan alur pengguna (user flow), dan implementasi arsitektur modular menggunakan PHP dengan framework CodeIgniter 3.',
      image: WebCover,
      imageProject: WebCover,
      type: WEBSITES_FILTER_TYPE,
      tags: [
        "PHP",
        "CodeIgniter 3",
        "MySQL",
        "Desain Database",
        "Manajemen Aset",
        "Sistem Inventaris",
        "Alur Pengguna"
      ],
      images: [
        WebCover
      ]
    },
    {
      id: 2,
      name: 'Native Android Mobile Tracker',
      createdAt: '2025',
      description: 'Aplikasi klien mobile native yang dibangun dengan Java & Android Studio untuk pelacakan dan pemindaian aset.',
      longDescription: 'Aplikasi mobile native yang dirancang untuk melacak aset secara real-time. Dibangun selama masa studi akademis dan eksplorasi pribadi untuk mendalami Android SDK, database lokal SQLite, dan standar desain Material UI yang bersih menggunakan Android Studio.',
      image: AndroidCover,
      imageProject: AndroidCover,
      type: ANDROID_FILTER_TYPE,
      tags: [
        "Java",
        "Android Studio",
        "SQLite",
        "Material Design",
        "Android SDK"
      ],
      images: [
        AndroidSS1,
        AndroidSS2,
        AndroidSS3,
        AndroidSS4
      ]
    }
  ];
}
