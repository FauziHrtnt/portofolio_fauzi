import WebCover from '../components/images/web_cover.jpg';
import AndroidCover from '../components/images/android_cover.png';
import AndroidSS1 from '../components/images/android_ss_1.png';
import AndroidSS2 from '../components/images/android_ss_2.png';
import AndroidSS3 from '../components/images/android_ss_3.png';
import AndroidSS4 from '../components/images/android_ss_4.png';
import KasgoCover from '../components/images/kasgo_cover.png';
import KasgoSS1 from '../components/images/kasgo_ss_1.png';
import KasgoSS2 from '../components/images/kasgo_ss_2.png';
import KasgoSS3 from '../components/images/kasgo_ss_3.png';
import KasgoSS4 from '../components/images/kasgo_ss_4.png';
import KasgoSS5 from '../components/images/kasgo_ss_5.png';
import KasgoSS6 from '../components/images/kasgo_ss_6.png';

export default function getFeaturedProjectsList() {
    return [
        {
            id: 1,
            name: 'Web Inventory Management System',
            createdAt: '2025',
            description: 'Sistem pelacakan inventaris dan manajemen aset berbasis web yang dibangun untuk PT. Indo Techno Medic.',
            longDescription: 'Merancang dan mengembangkan platform manajemen inventaris berbasis web yang komprehensif dari awal untuk mengelola aset perusahaan (termasuk kendaraan, laptop, dan perangkat elektronik). Tanggung jawab meliputi perancangan struktur database relasional, pemetaan alur pengguna (user flow), dan implementasi arsitektur modular menggunakan PHP dengan framework CodeIgniter 3.',
            image: WebCover,
            imageProject: WebCover,
            type: 'web',
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
            type: 'Android',
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
        },
        {
            id: 3,
            name: 'KasGo (Simpan Pinjam RT05)',
            createdAt: '2026',
            description: 'Aplikasi Android modern untuk mengelola tabungan (simpanan), pinjaman mandiri, serta arisan warga secara digital dan transparan.',
            longDescription: 'KasGo dikembangkan menggunakan Android native dengan Jetpack Compose & Material Design 3. Mengikuti arsitektur Clean Architecture + MVVM, Room Database untuk penyimpanan lokal, Dagger Hilt untuk dependency injection, dan BiometricPrompt API untuk sistem keamanan biometrik bawaan. Aplikasi ini juga mendukung ekspor laporan PDF dinamis serta file Excel (Spreadsheet) untuk memudahkan pencatatan keuangan warga.',
            image: KasgoCover,
            imageProject: KasgoCover,
            type: 'ANDROID_APP',
            tags: [
                "Android Native",
                "Jetpack Compose",
                "Material Design 3",
                "Clean Architecture",
                "MVVM",
                "Room Database",
                "Dagger Hilt",
                "Biometric API",
                "PDF/Excel Export"
            ],
            images: [
                KasgoSS1,
                KasgoSS2,
                KasgoSS3,
                KasgoSS4,
                KasgoSS5,
                KasgoSS6
            ]
        }
    ];
}