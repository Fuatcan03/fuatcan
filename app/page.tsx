"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  Globe,
  Instagram,
  Code2,
  Palette,
  Newspaper,
  Camera,
  MessageCircle,
  ArrowUp,
} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [showScrollButtons, setShowScrollButtons] = useState(false)
  const fullText = "Web Developer & Digital Designer"

  useEffect(() => {
    setMounted(true)

    let currentIndex = 0
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typewriterInterval)
      }
    }, 80)

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButtons(true)
      } else {
        setShowScrollButtons(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(typewriterInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top duration-500">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/profile.png"
                alt="Fuat Can Ağcabay"
                width={40}
                height={40}
                className="rounded-full border-2 border-primary/20"
              />
              <div className="text-base font-semibold tracking-tight">Fuat Can Ağcabay</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Deneyim
              </a>
              <a href="#education" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Eğitim
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Yetenekler
              </a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Portfolyo
              </a>
              <a href="#news" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Basında
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                İletişim
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-12 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in zoom-in duration-500">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium font-mono">
                    {typewriterText}
                    <span className="inline-block w-0.5 h-4 bg-primary ml-1 animate-pulse" />
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95]">
                  Fuat Can
                  <br />
                  Ağcabay
                </h1>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Web geliştirme, SAP sistemleri ve dijital tasarım konusunda uzmanlaşmış tam yığın yazılım geliştirici.
                  Next.js, React, WordPress ile modern web uygulamaları ve Canva ile profesyonel sosyal medya içerikleri
                  üretiyorum.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="gap-2 h-12 px-6">
                  <a href="#contact">
                    İletişime Geç
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 h-12 px-6 bg-transparent">
                  <a href="https://linkedin.com/in/fuatcan3arp/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-700">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <Image
                  src="/profile.png"
                  alt="Fuat Can Ağcabay"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-primary/20 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 mt-16 border-t border-border/40">
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</div>
              <a
                href="mailto:fuatcanagcabay08@gmail.com"
                className="text-sm hover:text-primary transition-colors block"
              >
                fuatcanagcabay08@gmail.com
              </a>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Telefon</div>
              <a href="tel:+905338809593" className="text-sm hover:text-primary transition-colors block">
                +90 533 880 9593
              </a>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Konum</div>
              <div className="text-sm">Kıbrıs</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Doğum</div>
              <div className="text-sm">30 Eylül 1995</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-12 border-y border-border/40 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 50, label: "Tamamlanan Proje", suffix: "+" },
              { value: 3, label: "Yıl Deneyim", suffix: "+" },
              { value: 20, label: "Freelance Proje", suffix: "+" },
              { value: 5, label: "Sosyal Medya Hesabı", suffix: "+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CounterAnimation targetValue={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Eğitim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Akademik geçmiş ve profesyonel sertifikalar</p>
          </div>

          <div className="space-y-6">
            {[
              {
                degree: "Bilgisayar Teknolojisi ve Bilişim Sistemleri (Lisans)",
                school: "Doğu Akdeniz Üniversitesi",
                period: "2016 – 2021",
                note: "İngilizce Eğitim",
              },
              {
                degree: "Bilgisayar Programcılığı (Ön Lisans)",
                school: "Doğu Akdeniz Üniversitesi",
                period: "2013 – 2016",
              },
              {
                degree: "Pedagojik Formasyon Sertifikası",
                school: "Kıbrıs İlim Üniversitesi",
                period: "Haziran 2023",
                note: "Öğretmenlik Yeterliliği",
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 bg-card/50 border-border/40 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                    <div className="text-muted-foreground">{edu.school}</div>
                    {edu.note && (
                      <Badge variant="secondary" className="text-xs mt-2">
                        {edu.note}
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground lg:text-right">{edu.period}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 animate-in fade-in slide-in-from-bottom duration-500">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Yetenekler & Teknolojiler</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Modern web teknolojileri ve dijital tasarım araçlarında deneyimliyim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Frontend",
                skills: ["Next.js", "React", "WordPress", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
              },
              {
                icon: Globe,
                title: "Backend & Sistem",
                skills: ["PHP", "MySQL", "RESTful API", "SAP", "WordPress Plugins"],
              },
              {
                icon: Palette,
                title: "Dijital Tasarım",
                skills: ["Canva Pro", "UI/UX Design", "Social Media Design", "Grafik Tasarım"],
              },
              {
                icon: Instagram,
                title: "Dil & Diğer",
                skills: ["İngilizce (C1)", "SEO", "Sosyal Medya Yönetimi"],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 border-border/40 hover:bg-card transition-all hover:scale-105 hover:shadow-xl animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <category.icon className="h-8 w-8 text-primary animate-bounce-slow" />
                </div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Profesyonel Deneyim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Kurumsal ve freelance projelerdeki başarılı çalışmalarım
            </p>
          </div>

          <div className="space-y-8">
            {/* SAP Position */}
            <Card className="p-8 bg-card/50 border-border/40 group hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      SAP Uygulama Uzmanı
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-lg text-muted-foreground">Near East Technology, Lefkoşa</div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge variant="secondary" className="text-xs">
                    Nisan 2025 – Devam Ediyor
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                SAP sistemleri üzerine yoğun eğitim alarak uygulama geliştirme ve sistem entegrasyonu konularında
                uzmanlaşma sürecindeyim. Hızlı öğrenme yeteneğimle kurumsal müşteriler için SAP tabanlı çözümlere
                katkıda bulunuyorum.
              </p>
            </Card>

            {/* Software Developer Position */}
            <Card className="p-8 bg-card/50 border-border/40 group hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      Yazılım Geliştirici
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-lg text-muted-foreground">Near East Technology, Lefkoşa</div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge variant="secondary" className="text-xs">
                    Mayıs 2022 – Mart 2025
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Next.js, React ve WordPress kullanarak kurumsal düzeyde web uygulamaları geliştirdim ve bakımını
                  yaptım. WordPress temaları ve eklentilerini özelleştirdim, performans optimizasyonu ve SEO uyumluluğu
                  sağladım.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">50+ aktif proje</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">3-5 kişilik takımlar</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 border-border/40 group hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      Güvenlik Görevlisi
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-lg text-muted-foreground">Kaya Artemis Resort Hotel, Bafra</div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge variant="secondary" className="text-xs">
                    2016 – 2020
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Yoğun tempolu turizm sektöründe vardiyalı düzende çalışarak sorumluluk alma ve stres altında görev yapma
                becerisi kazandım. Otel güvenliği ve misafir memnuniyeti konularında deneyim edindim.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/40 group hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      Freelance Fotoğrafçı
                    </h3>
                    <Camera className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-lg text-muted-foreground">Kıbrıs Hayat 360</div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge variant="secondary" className="text-xs">
                    2020 – 2021
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Etkinlik ve mekan çekimleri gerçekleştirdim. Serbest çalışma temposuna uyum sağladım ve zaman yönetimi
                becerilerimi geliştirdim.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/40 group hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">Kasiyer</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-lg text-muted-foreground">Nuhun Gemisi Hotel, Bafra</div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Badge variant="secondary" className="text-xs">
                    2014 (3 Ay)
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Kasa işlemleri, müşteri iletişimi ve temel ön muhasebe süreçlerinde deneyim sahibi oldum.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Portfolyo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Web geliştirmeden sosyal medya tasarımına kadar geniş yelpazede projeler
            </p>
          </div>

          {/* Web Development Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="h-6 w-6 text-primary animate-spin-slow" />
              <h3 className="text-2xl font-semibold">Web Geliştirme Projeleri</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Oneri Nakliyat",
                  url: "onerinakliyat.com",
                  tech: "Next.js & React",
                  desc: "Ankara'nın güvenilir nakliyat çözümü - Modern, hızlı ve SEO uyumlu",
                  type: "Next.js",
                },
                {
                  title: "Mustafa Ağcabay Oto Galeri",
                  url: "mustafaagcabayotogaleri.com",
                  tech: "WordPress",
                  desc: "Araç galerisi yönetim sistemi ve web sitesi",
                  type: "WordPress",
                },
                {
                  title: "Cyprus Terrace Cube",
                  url: "cyprusterracube.com",
                  tech: "WordPress",
                  desc: "Kurumsal gayrimenkul web sitesi",
                  type: "WordPress",
                },
                {
                  title: "Yakın Doğu Üniversitesi",
                  tech: "WordPress",
                  desc: "Kurumsal üniversite web sitesi - 3 geliştirici",
                  type: "WordPress",
                },
                {
                  title: "Near East Hospital",
                  tech: "WordPress",
                  desc: "Sağlık sektörü platformu - 2 geliştirici",
                  type: "WordPress",
                },
                {
                  title: "BRTK",
                  tech: "WordPress",
                  desc: "Radyo Televizyon Kurumu resmi sitesi",
                  type: "WordPress",
                },
                {
                  title: "Neon Cyprus",
                  tech: "Next.js & React",
                  desc: "Modern kurumsal web sitesi",
                  type: "Next.js",
                },
                {
                  title: "Konferans Siteleri",
                  tech: "WordPress",
                  desc: "ICIER, USC, NRSEM, IMSH - Çoklu proje",
                  type: "WordPress",
                },
                {
                  title: "Oto Galeri Yazılımı",
                  tech: "WordPress",
                  desc: "Özel araç yönetim sistemi",
                  type: "WordPress",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 hover:bg-card transition-all duration-300 group cursor-pointer border-border/40 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl animate-in fade-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Code2 className="h-4 w-4 text-primary/50 animate-pulse" />
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
                        {project.title}
                      </h4>
                      {project.url && <div className="text-xs text-primary/70 font-mono">{project.url}</div>}
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media & Design Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Palette className="h-6 w-6 text-primary animate-wiggle" />
              <h3 className="text-2xl font-semibold">Sosyal Medya & Dijital Tasarım</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Mustafa Ağcabay Oto Galeri",
                  platform: "Web & Instagram",
                  desc: "Web sitesi geliştirme ve Instagram içerik tasarımları (Canva)",
                  scope: "Tam Yönetim",
                },
                {
                  title: "demir_home_center",
                  platform: "Instagram",
                  desc: "Ev dekorasyonu ve mobilya mağazası için tüm görsel tasarımlar",
                  scope: "Canva Tasarım",
                },
                {
                  title: "monobadi_restaurant",
                  platform: "Instagram",
                  desc: "Restoran için menü, etkinlik ve promosyon görselleri",
                  scope: "Canva Tasarım",
                },
                {
                  title: "kumyalsahilrestoranvebar",
                  platform: "Instagram",
                  desc: "Sahil restoranı için yaz temalı içerik tasarımları",
                  scope: "Canva Tasarım",
                },
                {
                  title: "zoianelibeauty",
                  platform: "Instagram",
                  desc: "Güzellik merkezi için sosyal medya yönetimi ve görsel tasarımlar",
                  scope: "Tam Yönetim",
                },
                {
                  title: "herseykibris",
                  platform: "Instagram & Facebook",
                  desc: "Kıbrıs ilan sayfası - Kurucu ve içerik yöneticisi",
                  scope: "Kurucu & Yönetici",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 hover:bg-card transition-all duration-300 group cursor-pointer border-border/40 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl animate-in fade-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Palette className="h-4 w-4 text-primary/50 animate-pulse" />
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
                        {project.title}
                      </h4>
                      <div className="text-xs text-muted-foreground">{project.platform}</div>
                    </div>
                    <Instagram className="h-5 w-5 text-primary/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.scope}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center animate-in fade-in duration-700">
            <p className="text-muted-foreground">+ 20 freelance proje ve sayısız dijital tasarım çalışması</p>
          </div>
        </div>
      </section>

      <section id="news" className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="h-8 w-8 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold">Basında</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Spor ve toplum hizmetleri alanındaki çalışmalarımdan haberler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Kumyalı'da Başkan Ağcabay",
                source: "Halkın Sesi Kıbrıs",
                url: "https://www.halkinsesikibris.com/kumyalida-baskan-agcabay",
                excerpt: "Kumyalı futbol takımı başkanlık görevim",
              },
              {
                title: "Karpaz'dan Ortaköy'e",
                source: "Tribün Kıbrıs",
                url: "https://tribunkibris.com/karpazdan-ortakoye/",
                excerpt: "Futbol kariyerim ve transfer haberleri",
              },
              {
                title: "Kumyalı Toplandı",
                source: "Kıbrıs Postası",
                url: "https://www.kibrispostasi.com/c41-SPOR/n278077-kumyali-toplandi",
                excerpt: "Takım toplantısı ve sezon hazırlıkları",
              },
              {
                title: "Kumyalı Zirveyi Ele Geçirdi",
                source: "Kıbrıs Postası",
                url: "https://www.kibrispostasi.com/c41-SPOR/n285901-kumyali-zirveyi-ele-gecirdi-22052019",
                excerpt: "Lig liderligi ve takım başarısı",
              },
              {
                title: "Fuatcan da Ergazi'de",
                source: "Tribün Kıbrıs",
                url: "https://tribunkibris.com/fuatcan-da-ergazide/",
                excerpt: "Ergazi takımına transfer",
              },
              {
                title: "Fuatcan Tecrübelerini Paylaşıyor",
                source: "Tribün Kıbrıs",
                url: "https://tribunkibris.com/fuatcan-tecrubelerini-percincinin-gencleriyle-paylasiyor/",
                excerpt: "Genç futbolculara mentorluk ve deneyim aktarımı",
              },
              {
                title: "Kumyalı Yönetimi İlkleri Gerçekleştiriyor",
                source: "Halkın Sesi Kıbrıs",
                url: "https://www.halkinsesikibris.com/kumyali-yonetimi-ilkleri-gerceklestiriyor",
                excerpt: "Yöneticilik döneminde gerçekleştirilen yenilikler",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 hover:bg-card transition-all duration-300 group cursor-pointer border-border/40 hover:border-primary/30"
              >
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-xs text-primary/70 font-medium mb-2 uppercase tracking-wider">
                        {article.source}
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2 leading-tight">
                        {article.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Topluluk & Girişimcilik</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Liderlik ve sosyal sorumluluk projeleri</p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-card/50 border-border/40 hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2 lg:mb-0">Kulüp Başkanı – Kumyalı Spor Kulübü</h3>
                <Badge variant="secondary" className="text-xs w-fit">
                  2019
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Kulübün ilk "Deniz Panayırı" etkinliğinin planlanması ve uygulanmasında lider rol üstlendim. Etkinlik
                fikrini ortaya koyarak, sponsorluklar ve lojistik süreçleri organize ettim.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-border/40 hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2 lg:mb-0">Kurucu – herseykibris Sosyal Medya Sayfası</h3>
                <Badge variant="secondary" className="text-xs w-fit">
                  2024 – Devam Ediyor
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Instagram ve Facebook'ta aktif olarak yönetilen ilan sayfası. İçerik yönetimi, kullanıcı etkileşimi ve
                dijital pazarlama süreçleriyle sayfa organik olarak büyütüldü.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center animate-in fade-in zoom-in duration-700">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-balance">Birlikte bir şeyler oluşturalım</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Yeni bir proje için işbirliği yapmak, mevcut bir projede yardım almak veya sadece sohbet etmek isterseniz,
              benimle iletişime geçmekten çekinmeyin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="gap-2 h-12 px-8 hover:scale-105 transition-transform">
                <a href="mailto:fuatcanagcabay08@gmail.com">
                  <Mail className="h-5 w-5" />
                  E-posta Gönder
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 h-12 px-8 bg-transparent hover:scale-105 transition-transform"
              >
                <a href="https://linkedin.com/in/fuatcan3arp/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn'de Bağlan
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-16 border-t border-border/40">
              <div className="text-center sm:text-left">
                <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-medium">Email</div>
                <a href="mailto:fuatcanagcabay08@gmail.com" className="text-sm hover:text-primary transition-colors">
                  fuatcanagcabay08@gmail.com
                </a>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-medium">Telefon</div>
                <a href="tel:+905338809593" className="text-sm hover:text-primary transition-colors">
                  +90 533 880 9593
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-border/40 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">© 2025 Fuat Can Ağcabay. Tüm hakları saklıdır.</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Next.js & Tailwind CSS ile geliştirildi</span>
              <Badge variant="secondary" className="text-xs">
                v2.0
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      {showScrollButtons && (
        <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-bottom duration-300">
          {/* WhatsApp Button */}
          <Button
            asChild
            size="icon"
            className="w-14 h-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BD5A] border-2 border-background hover:scale-110 transition-transform"
          >
            <a
              href="https://wa.me/905338809593"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile iletişime geç"
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </a>
          </Button>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="secondary"
            className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform"
            aria-label="Yukarı çık"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  )
}

function CounterAnimation({ targetValue, suffix }: { targetValue: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = targetValue
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [targetValue])

  return (
    <div className="text-4xl lg:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  )
}
