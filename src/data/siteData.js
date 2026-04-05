export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "CICOSY", legalName: "CICOSY", tagline: "Technology That Transforms Business",
    description: "Technology That Transforms Business",
    phone: "+263 77 464 3444", phoneRaw: "+263774643444", whatsappNumber: "263774643444", email: "info@cicosy.co.zw",
    address: "10th Floor, Joina City, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 5.0, ratingRounded: 5, reviewCount: 14, established: "2016", yearsExperience: "8+", projectsCompleted: "200+", employees: "25+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "cicosy-consent",
    socialLinks: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "CICOSY", logoLine2: "" },
  hero: {
    badge: "Zimbabwe's Leading IT Solutions Provider",
    titleParts: [{ text: "TECHNOLOGY " }, { text: "THAT TRANSFORMS", highlight: true }, { text: " BUSINESS." }],
    subtitle: "Technology That Transforms Business.",
    ctaPrimary: "Get a Consultation", ctaSecondary: "View Our Work", trustBadge: "200+ Projects",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85", alt: "CICOSY - professional service" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=85", alt: "CICOSY - professional service" },
      { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=85", alt: "CICOSY - professional service" }
    ],
  },
  stats: [
    { number: "200+", label: "Projects Delivered" },
    { number: "8+", label: "Years in Tech" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support Available" }
  ],
  servicesPreview: [
    { title: "Web & App Development", desc: "Custom websites and mobile applications built with modern frameworks, responsive design, and seamless user experiences.", icon: "Lightbulb" },
    { title: "Cloud Solutions", desc: "Migration, hosting, and management of cloud infrastructure on AWS, Azure, and Google Cloud platforms.", icon: "ShieldCheck" },
    { title: "Cybersecurity", desc: "Penetration testing, vulnerability assessments, and managed security services to protect your digital assets.", icon: "Buildings" },
    { title: "IT Support & Managed Services", desc: "24/7 helpdesk, remote monitoring, and on-site support to keep your business running without interruption.", icon: "Rocket" },
    { title: "Network Infrastructure", desc: "Design, installation, and maintenance of enterprise-grade wired and wireless networks.", icon: "Star" },
    { title: "Software Solutions", desc: "Custom ERP, CRM, and business automation software tailored to your operational workflows.", icon: "Target" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "Web & App Development", slug: "web-app-development", desc: "Custom websites and mobile applications built with modern frameworks, responsive design, and seamless user experiences. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
      { title: "Cloud Solutions", slug: "cloud-solutions", desc: "Migration, hosting, and management of cloud infrastructure on AWS, Azure, and Google Cloud platforms. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" },
      { title: "Cybersecurity", slug: "cybersecurity", desc: "Penetration testing, vulnerability assessments, and managed security services to protect your digital assets. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80" },
      { title: "IT Support & Managed Services", slug: "it-support-managed-services", desc: "24/7 helpdesk, remote monitoring, and on-site support to keep your business running without interruption. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
      { title: "Network Infrastructure", slug: "network-infrastructure", desc: "Design, installation, and maintenance of enterprise-grade wired and wireless networks. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" },
      { title: "Software Solutions", slug: "software-solutions", desc: "Custom ERP, CRM, and business automation software tailored to your operational workflows. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "E-Commerce Platform", slug: "e-commerce--platform", category: "Web", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"] },
      { title: "Cloud Migration", slug: "cloud--migration", category: "Cloud", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"] },
      { title: "Security Audit", slug: "security--audit", category: "Security", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80", images: ["https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"] },
      { title: "Network Overhaul", slug: "network--overhaul", category: "Infrastructure", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"] },
      { title: "Custom CRM", slug: "custom--crm", category: "Software", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"] },
      { title: "Mobile App Launch", slug: "mobile--app--launch", category: "Analytics", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80", images: ["https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"] },
      { title: "Data Analytics Dashboard", slug: "data--analytics--dashboard", category: "Mobile", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"] },
      { title: "IoT Integration", slug: "iot--integration", category: "Integration", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from CICOSY. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using CICOSY for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. CICOSY sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at CICOSY went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred CICOSY to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. CICOSY sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["CICOSY was founded in 2016 with a vision to bring world-class technology solutions to Zimbabwean businesses. Operating from the 10th floor of Joina City, we serve clients across every sector.", "With 200+ projects delivered and a perfect 5.0 Google rating, we have proven that technology -- when applied with strategy and expertise -- transforms how businesses operate.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why CICOSY", points: [{ title: "Full-Stack Expertise", desc: "Web, mobile, cloud, security, and infrastructure -- one team, one relationship." },{ title: "99.9% Uptime SLA", desc: "Enterprise-grade reliability you can bank on." },{ title: "Local + Global", desc: "Zimbabwe-based team with international standards and partnerships." },{ title: "Strategic Approach", desc: "We solve business problems first, then apply technology." }] },
  featuredProjects: [{ title: "E-Commerce Platform", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", category: "Web" },{ title: "Cloud Migration", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", category: "Cloud" },{ title: "Security Audit", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80", category: "Security" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "10th Floor, Joina City, Harare, Zimbabwe", phone: "+263 77 464 3444", email: "info@cicosy.co.zw" },
  ] },
  homeCta: {
    title: "TRANSFORM YOUR BUSINESS.", subtitle: "Web development, cloud, cybersecurity, and IT infrastructure. CICOSY brings world-class tech to Zimbabwe.",
    ctaPrimary: "Get a Consultation", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello CICOSY! I'd like to discuss a technology project.",
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85",
  },
  footer: { description: "Zimbabwe's leading IT solutions provider since 2016.", copyright: "CICOSY" },
};

export default siteData;
