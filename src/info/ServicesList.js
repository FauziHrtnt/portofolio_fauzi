export function getSkillsList() {
    return [
        {
            title: "Pengembangan Web",
            description: "Membangun Aplikasi Web dengan PHP, CodeIgniter 3 (CI3), MySQL, merancang skema database, alur pengguna, dan sistem manajemen aset/inventaris."
        }, {
            title: "Pengembangan Android",
            description: "Membangun Aplikasi Android dengan Java, Android Studio, integrasi SDK, manajemen database lokal, dan desain UI Material/XML yang responsif."
        }, {
            title: "CAD 3D & Pemodelan",
            description: "Membuat model perakitan 3D dan alat bantu manufaktur menggunakan Solid Edge, menyelaraskan dengan standar produksi industri."
        }, {
            title: "Penulisan Teknis",
            description: "Menyusun prosedur operasional standar (SOP), dokumentasi teknis, dan panduan perakitan peralatan."
        }
    ];
}

export default function getServicesList() {
    return [
        {
            tag: "Web Developer",
            title: "Web Applications",
            description: "Membangun sistem web responsif dengan PHP, CodeIgniter 3, dan database relasional. Merancang dan mengoptimalkan alat manajemen inventaris serta solusi kustom perusahaan."
        },
        {
            tag: "Mobile Developer",
            title: "Pengembangan Android",
            description: "Merancang dan mengembangkan aplikasi Android native menggunakan Java dan Android Studio, berfokus pada performa, tata letak modular, dan pengalaman pengguna yang bersih."
        },
        {
            tag: "CAD Engineer",
            title: "CAD 3D & Dokumentasi",
            description: "Membuat desain 3D yang sangat akurat untuk perakitan (jig & fixture) dengan Solid Edge serta menyusun Prosedur Operasional Standar (SOP) profesional."
        }
    ];
}
