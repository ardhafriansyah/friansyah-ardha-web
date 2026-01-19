import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Download, ExternalLink, Mail, Linkedin, Instagram, Youtube, 
  Code, PenTool, Beaker, GraduationCap, Briefcase, Users, ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA SKILLS ---
const skills = [
  { name: "Kimia & Lab", level: 85, color: "bg-blue-500", icon: Beaker },
  { name: "Desain Grafis", level: 70, color: "bg-purple-500", icon: PenTool },
  { name: "Web Development", level: 70, color: "bg-pink-500", icon: Code },
  { name: "Public Speaking", level: 80, color: "bg-cyan-500", icon: Users },
];

// --- DATA RESUME ---
const resumeData = {
  kerja: [
    { title: "QC Department (Intern)", place: "PT Propan Raya ICC", date: "Juli 2025 - Agustus 2025", desc: "Quality Control Internship" },
    { title: "Mentor OSN Kebumian", place: "SMAN 3 Kab Tangerang", date: "Maret - Juni 2025", desc: "Membimbing siswa persiapan olimpiade." },
    { title: "Private Tutor", place: "Superprof", date: "Des 2024 - Jan 2025", desc: "Pengajar privat akademik." },
    { title: "Visual Graphic Designer", place: "Indonesia Mengajar", date: "Agt - Des 2023", desc: "Membuat aset visual untuk kampanye sosial." },
  ],
  edukasi: [
    { title: "Awardee", place: "Djarum Beasiswa Plus", date: "2025 - Saat Ini", desc: "" },
    { title: "S1 Kimia", place: "Universitas Negeri Semarang", date: "2023 - Saat Ini", desc: "GPA 3.50/4.00" },
    { title: "MIPA", place: "SMAN 3 Kab Tangerang", date: "2020 - 2023", desc: "GPA 87/100 " },
  ],
  organisasi: [
    { title: "Ketua Umum", place: "Himpunan Mahasiswa Kimia UNNES", date: "Jan 2025 - Jan 2026", desc: "Memimpin organisasi kemahasiswaan." },
    { title: "Ketua 1 OSIS", place: "SMAN 3 Kab Tangerang", date: "Des 2020 - Des 2022", desc: "Kepemimpinan siswa." },
    { title: "Wakil Ketua", place: "Forum Rohis Kab Tangerang", date: "Des 2020 - Des 2021", desc: "Kepemimpinan siswa muslim." },
  ],
};

// --- DATA PROJECT ---
// Path gambar disesuaikan agar membaca dari folder 'public/img'
const projects = [
  { 
    id: 1, 
    title: "SEED 2025", 
    category: "Kimia & K3", 
    img: "public/sertif seed 2025 ardha.jpg", 
    link: "https://linkedin.com/in/ardha-hafiidh-friansyah-446928265/" 
  },
  { 
    id: 2, 
    title: "Project Design", 
    category: "Desain", 
    img: "public/projek desain1.jpg", 
    link: "https://instagram.com/ardhafiidh3/" 
  },
  { 
    id: 3, 
    title: "Sertifikasi K3 Lab", 
    category: "Kimia & K3", 
    img: "public/k3LAB.jpeg", 
    link: "#" // Ganti dengan link sertifikat jika ada
  },
  { 
    id: 4, 
    title: "ISO 17025", 
    category: "Kimia & K3", 
    img: "public/iso17025.jpeg", 
    link: "#" 
  },
  { 
    id: 5, 
    title: "Good Lab Practice", 
    category: "Kimia & K3", 
    img: "public/Sertifikat Training Good Laboratory Practice.jpeg", 
    link: "#" 
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Utama', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kemampuan', href: '#skill' },
    { name: 'Proyek', href: '#project' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 flex items-center gap-1">
          Ardha<span className="text-purple-600">Web</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600 font-medium">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Chemistry Enthusiast", "Web Developer", "Graphic Designer", "Researcher"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden relative">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">👋 Halo, Saya</h3>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Ardha H. Friansyah</h1>
            <div className="h-8 mb-6">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block"
                >
                  {roles[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Mahasiswa Kimia dengan passion kuat di bidang penelitian, namun memiliki ketertarikan mendalam pada teknologi web dan desain kreatif.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
              >
                Hubungi Saya
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#project" 
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Lihat Karya
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20 blur-2xl"></div>
              {/* Pastikan file ini ada di public/img/profilardha2.png */}
              <img 
                src="/img/profilardha2.png" 
                alt="Profile" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl z-10"
                onError={(e) => { e.target.src = 'public/profilardha2.png' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10" />
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex flex-col items-center justify-center shadow-lg transform -rotate-6">
                  <span className="text-3xl font-bold">20</span>
                  <span className="text-xs">Tahun</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Chemistry & Tech</h3>
                  <p className="text-gray-500">Researcher & Developer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Saya adalah mahasiswa aktif Universitas Negeri Semarang yang berdedikasi dalam bidang sains, 
                namun terus mengasah kemampuan dalam pengembangan teknologi informasi.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Mail className="text-blue-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Email</p>
                  <p className="text-xs text-gray-500 break-words">ardhafriansyah@students.unnes.ac.id</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <GraduationCap className="text-purple-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Pendidikan</p>
                  <p className="text-xs text-gray-500">Universitas Negeri Semarang</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Kemampuan Digital</h2>
            <div className="grid grid-cols-1 gap-6">
              <motion.div whileHover={{ y: -5 }} className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><Code size={24}/></div>
                  <h4 className="text-xl font-bold text-gray-800">Web Development</h4>
                </div>
                <p className="text-gray-600">HTML, CSS, JavaScript, React, Python (Dasar)</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl border border-purple-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600"><PenTool size={24}/></div>
                  <h4 className="text-xl font-bold text-gray-800">Graphic Design</h4>
                </div>
                <p className="text-gray-600">Adobe Photoshop, Illustrator, Figma, Canva</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsAndResume = () => {
  const [activeTab, setActiveTab] = useState('kerja');

  return (
    <section id="skill" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Keahlian Teknis</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className={`w-5 h-5 ${skill.color.replace('bg-', 'text-')}`} />
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: 0.2 }} className={`h-2.5 rounded-full ${skill.color}`}></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Pengalaman</h2>
            <div className="flex gap-2 p-1 bg-white rounded-xl shadow-sm mb-6 overflow-x-auto">
              {['kerja', 'edukasi', 'organisasi'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold capitalize transition-all whitespace-nowrap ${
                    activeTab === tab ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-4 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                  {resumeData[activeTab].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 mb-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 group-hover:h-full h-0 transition-all duration-300"></div>
                      <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-blue-600 font-medium mb-1">{item.date}</p>
                      <h5 className="text-md text-gray-700 mb-1">{item.place}</h5>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('Semua');
  
  const filteredProjects = filter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || (filter === 'Desain' && p.category === 'Desain'));

  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Proyek & Sertifikasi</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kumpulan pencapaian, sertifikasi kompetensi, dan proyek desain yang telah saya kerjakan.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {['Semua', 'Desain', 'Kimia & K3'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] cursor-pointer"
              >
                {/* Image Component dengan Fallback */}
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-4">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                  
                  <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {/* Tombol Lihat Detail / Link */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/40 backdrop-blur-sm text-white transition-colors"
                      title="Lihat Detail / Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                    
                    {/* Tombol Download */}
                    <a 
                      href={project.img} 
                      download={`${project.title}.jpg`}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/40 backdrop-blur-sm text-white transition-colors"
                      title="Unduh Sertifikat/Gambar"
                    >
                      <Download size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Mari Terhubung</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Tertarik berkolaborasi dalam penelitian kimia, proyek web, atau desain? Jangan ragu untuk menghubungi saya.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg"><Mail size={20}/></div>
                  <span className="text-sm md:text-base break-all">ardhafriansyah@students.unnes.ac.id</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="https://www.instagram.com/ardhafiidh3/" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:-translate-y-1">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.youtube.com/@ardhahafiidhfriansyah1578" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-red-600 transition-all transform hover:-translate-y-1">
                    <Youtube size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/ardha-hafiidh-friansyah-446928265/" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-blue-700 transition-all transform hover:-translate-y-1">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -mr-16 -mt-16 opacity-50 blur-xl"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 font-medium">Nama</label>
                  <input type="text" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 font-medium">Email</label>
                  <input type="email" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="email@contoh.com" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 font-medium">Pesan</label>
                  <textarea rows="4" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-black transition-colors shadow-lg">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">&copy; 2025 <span className="text-white font-semibold">Ardha Friansyah</span>. All Rights Reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">Designed with <HeartIcon /> by <span className="text-blue-400">ArdhaWeb</span></p>
          </div>
        </div>
      </div>
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};

const HeartIcon = () => <span className="text-red-500 mx-1">❤</span>;

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <SkillsAndResume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}