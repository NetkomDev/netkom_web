// ==============================================
// i18n — Bilingual Support (ID / EN)
// ==============================================

const translations = {
    id: {
        // Navbar
        nav_home: 'Beranda',
        nav_about: 'Tentang',
        nav_services: 'Layanan',
        nav_portfolio: 'Portofolio',
        nav_cta: 'Pesan Sekarang',

        // Hero
        hero_badge: 'Open for Projects',
        hero_title: 'Bangun Bisnis Digital <br> <span class="highlight">Lebih Profesional.</span>',
        hero_desc: 'Jasa pembuatan aplikasi Web & Mobile terpercaya. Solusi teknologi canggih dengan harga bersahabat untuk akselerasi bisnis Anda.',
        hero_promo_label: 'Penawaran Spesial',
        hero_btn_promo: '<i class="fab fa-whatsapp"></i> Ambil Promo',
        hero_btn_portfolio: 'Lihat Portofolio',

        // About
        about_title: 'Tentang Kami',
        about_subtitle: 'Mengapa Memilih NETKOM Dev?',
        about_perf_title: 'Performa Tinggi',
        about_perf_desc: 'Jasa pembuatan aplikasi Android & iOS yang cepat, ringan, dan stabil. Kami optimalkan setiap baris kode untuk pengalaman pengguna terbaik dan performa maksimal.',
        about_design_title: 'Desain Modern',
        about_design_desc: 'Jasa desain website dan UI/UX mobile app premium yang memanjakan mata. Tampilan profesional yang meningkatkan kredibilitas bisnis Anda di mata pelanggan.',
        about_trust_title: 'Terpercaya',
        about_trust_desc: 'Partner IT consultant terpercaya untuk transformasi digital. Fokus kembangkan bisnis Anda, biarkan kami menangani teknis pembuatan sistem dan website.',

        // Services
        svc_title: 'Layanan Kami',
        svc_subtitle: 'Solusi Lengkap Jasa Pembuatan Website & Aplikasi',
        svc_app_title: 'Jasa Pembuatan Aplikasi',
        svc_app_desc: 'Ahli bikin aplikasi Android & iOS (Flutter/Native). Cocok untuk startup, ojek online, marketplace, hingga aplikasi kasir POS.',
        svc_web_title: 'Jasa Pembuatan Website',
        svc_web_desc: 'Terima jasa buat website Company Profile, Toko Online (E-Commerce), Landing Page, hingga Web App custom yang SEO-friendly.',
        svc_sys_title: 'Sistem Web Custom',
        svc_sys_desc: 'Pengembangan Sistem Informasi Manajemen, ERP, CRM, dan aplikasi berbasis web lainnya sesuai kebutuhan unik bisnis Anda.',

        // Portfolio
        port_title: 'Portofolio Unggulan',
        port_subtitle: 'Bukti Nyata Kualitas Kami',
        port_beresin_desc: 'Aplikasi jasa panggil rumahan terpercaya. Servis AC, kebersihan, dan tukang harian langsung dari genggaman Anda.',
        port_umkmid_desc: 'Aplikasi manajemen bisnis UMKM lengkap dengan pencatatan penjualan, pelacakan keuntungan, dan analisis bisnis real-time.',
        port_sigap_desc: 'Sistem pelaporan dan keamanan sekolah berbasis web. Dashboard admin, peta insiden, dan manajemen laporan terintegrasi.',
        port_cta_text: 'Punya ide lain? Segera konsultasikan dengan kami.',
        port_cta_btn: 'Pesan Aplikasi Sekarang',

        // Stats
        stat_projects: 'Project Selesai',
        stat_playstore: 'App di Play Store',
        stat_clients: 'Klien Puas',
        stat_years: 'Tahun Pengalaman',

        // Footer
        footer_desc: 'Partner Digital Terbaik Anda. Menghadirkan solusi teknologi yang tepat guna, efisien, dan menguntungkan.',
        footer_follow: 'Ikuti Kami',
        footer_copy: '&copy; 2026 NETKOM Dev. All Rights Reserved.',
    },
    en: {
        // Navbar
        nav_home: 'Home',
        nav_about: 'About',
        nav_services: 'Services',
        nav_portfolio: 'Portfolio',
        nav_cta: 'Order Now',

        // Hero
        hero_badge: 'Open for Projects',
        hero_title: 'Build Your Digital Business <br> <span class="highlight">More Professionally.</span>',
        hero_desc: 'Trusted Web & Mobile app development services. Cutting-edge technology solutions at friendly prices to accelerate your business.',
        hero_promo_label: 'Special Offer',
        hero_btn_promo: '<i class="fab fa-whatsapp"></i> Claim Promo',
        hero_btn_portfolio: 'View Portfolio',

        // About
        about_title: 'About Us',
        about_subtitle: 'Why Choose NETKOM Dev?',
        about_perf_title: 'High Performance',
        about_perf_desc: 'Fast, lightweight, and stable Android & iOS app development. We optimize every line of code for the best user experience and maximum performance.',
        about_design_title: 'Modern Design',
        about_design_desc: 'Premium website design and mobile app UI/UX that delights the eye. Professional appearance that boosts your business credibility.',
        about_trust_title: 'Trusted',
        about_trust_desc: 'Trusted IT consultant partner for digital transformation. Focus on growing your business — let us handle the technical side of building systems and websites.',

        // Services
        svc_title: 'Our Services',
        svc_subtitle: 'Complete Web & App Development Solutions',
        svc_app_title: 'Mobile App Development',
        svc_app_desc: 'Expert Android & iOS app development (Flutter/Native). Perfect for startups, ride-hailing, marketplace, and POS systems.',
        svc_web_title: 'Website Development',
        svc_web_desc: 'Custom websites including Company Profile, E-Commerce, Landing Pages, and SEO-friendly Web Apps.',
        svc_sys_title: 'Custom Web Systems',
        svc_sys_desc: 'Management Information Systems, ERP, CRM, and other custom web-based applications tailored to your unique business needs.',

        // Portfolio
        port_title: 'Featured Portfolio',
        port_subtitle: 'Real Proof of Our Quality',
        port_beresin_desc: 'Trusted home service booking app. AC repair, cleaning, and daily handyman services at your fingertips.',
        port_umkmid_desc: 'Complete small business management app with sales recording, profit tracking, and real-time analytics.',
        port_sigap_desc: 'Web-based school safety and reporting system. Admin dashboard, incident map, and integrated report management.',
        port_cta_text: 'Have another idea? Consult with us today.',
        port_cta_btn: 'Order App Now',

        // Stats
        stat_projects: 'Projects Completed',
        stat_playstore: 'Apps on Play Store',
        stat_clients: 'Happy Clients',
        stat_years: 'Years of Experience',

        // Footer
        footer_desc: 'Your Best Digital Partner. Delivering tailored, efficient, and profitable technology solutions.',
        footer_follow: 'Follow Us',
        footer_copy: '&copy; 2026 NETKOM Dev. All Rights Reserved.',
    }
};

// Current language
let currentLang = localStorage.getItem('netkom_lang') || 'id';

/**
 * Apply translations to the page
 */
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('netkom_lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update toggle button state
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) {
        const idBtn = toggle.querySelector('[data-lang="id"]');
        const enBtn = toggle.querySelector('[data-lang="en"]');
        if (idBtn && enBtn) {
            idBtn.classList.toggle('active', lang === 'id');
            enBtn.classList.toggle('active', lang === 'en');
        }
    }
}

/**
 * Toggle between languages
 */
function switchLang(lang) {
    applyLanguage(lang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
});
