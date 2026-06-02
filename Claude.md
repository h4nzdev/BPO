<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>KineticBPO | Operational Excellence at Scale</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&amp;family=Syne:wght@600;700;800&amp;family=Space+Mono:wght@700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary-container": "#0b1f3a",
                    "primary-fixed-dim": "#b5c7ea",
                    "surface-dim": "#d8dadd",
                    "on-secondary-fixed": "#00201b",
                    "on-primary-fixed": "#071c36",
                    "tertiary-container": "#2e1b00",
                    "tertiary": "#0d0500",
                    "error-container": "#ffdad6",
                    "inverse-primary": "#b5c7ea",
                    "on-primary-container": "#7587a7",
                    "on-error-container": "#93000a",
                    "secondary": "#006b5c",
                    "on-background": "#191c1e",
                    "outline-variant": "#c4c6ce",
                    "on-tertiary-fixed-variant": "#643f00",
                    "surface-container-highest": "#e0e3e6",
                    "surface-container-high": "#e6e8eb",
                    "tertiary-fixed": "#ffddb5",
                    "surface-bright": "#f7f9fc",
                    "surface-variant": "#e0e3e6",
                    "inverse-surface": "#2d3133",
                    "on-error": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "outline": "#75777e",
                    "error": "#ba1a1a",
                    "on-primary-fixed-variant": "#364764",
                    "surface": "#f7f9fc",
                    "on-tertiary-container": "#ba7900",
                    "surface-container": "#eceef1",
                    "tertiary-fixed-dim": "#ffb957",
                    "on-surface-variant": "#44474d",
                    "inverse-on-surface": "#eff1f4",
                    "secondary-fixed-dim": "#41ddc2",
                    "on-secondary-fixed-variant": "#005045",
                    "on-surface": "#191c1e",
                    "surface-tint": "#4d5f7d",
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed": "#65fade",
                    "secondary-container": "#65fade",
                    "on-primary": "#ffffff",
                    "on-secondary-container": "#007262",
                    "primary": "#000615",
                    "background": "#f7f9fc",
                    "on-secondary": "#ffffff",
                    "primary-fixed": "#d6e3ff",
                    "surface-container-low": "#f2f4f7",
                    "on-tertiary-fixed": "#2a1800"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "container-max": "1280px",
                    "gutter": "24px",
                    "xs": "4px",
                    "margin-mobile": "16px",
                    "sm": "12px",
                    "base": "8px",
                    "md": "24px",
                    "lg": "48px",
                    "xl": "80px"
            },
            "fontFamily": {
                    "body-md": ["DM Sans"],
                    "display-lg-mobile": ["Syne"],
                    "button": ["DM Sans"],
                    "body-lg": ["DM Sans"],
                    "headline-xl-mobile": ["Syne"],
                    "display-lg": ["Syne"],
                    "label-sm": ["Space Mono"],
                    "headline-md": ["Syne"],
                    "headline-xl": ["Syne"]
            },
            "fontSize": {
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "display-lg-mobile": ["40px", {"lineHeight": "1.2", "fontWeight": "800"}],
                    "button": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-xl-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                    "display-lg": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "700"}],
                    "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                    "headline-xl": ["48px", {"lineHeight": "1.2", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        .word-reveal span {
            display: inline-block;
            opacity: 0;
            transform: translateY(20px);
            animation: reveal 0.5s forwards;
        }
        @keyframes reveal {
            to { opacity: 1; transform: translateY(0); }
        }
        .kinetic-line {
            width: 40px;
            height: 2px;
            background-color: #00C2A8;
            display: inline-block;
            vertical-align: middle;
            margin-right: 12px;
        }
        .stagger-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .stagger-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-surface font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
<div class="flex justify-between items-center px-gutter max-w-container-max mx-auto h-20">
<div class="text-headline-md font-headline-md font-bold text-primary">KineticBPO</div>
<div class="hidden md:flex items-center space-x-lg">
<a class="font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1" href="#">Solutions</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Industries</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Technology</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Company</a>
</div>
<button class="bg-primary text-on-primary px-md py-sm font-button text-button rounded-lg active:scale-95 transition-transform duration-200">
                Get a Quote
            </button>
</div>
</nav>
<main>
<!-- Section 1: Hero -->
<section class="relative min-h-screen flex items-center bg-primary-container overflow-hidden pt-20">
<div class="absolute inset-0 opacity-40 bg-gradient-to-r from-primary via-primary/50 to-transparent z-0">
<img class="w-full h-full object-cover" data-alt="A vast, high-ceilinged modern office space with minimalist glass architecture and soft blue atmospheric lighting. The environment feels high-tech and professional, echoing a corporate clarity aesthetic with deep navy shadows and sharp white highlights. A large floor-to-ceiling window reveals a blurred urban skyline at twilight, creating a sense of global scale and kinetic energy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4mx8obYcRCm4RyId99Jc9Rgq8AhxwUtFhcyEjw6G9WtgySClh3vUmAUKyuC49mtp4lOwPOkHXX-MBDBFkrFtCGaoF11IJWxan_dfrFyf5cW3lU40Ikr5flHk-O9t7V3ZHXXCmfTJn7pyNxh72dUjZWQ-Nem_rsP7VzlK9g3_ZROPgNda9ZqLbJQsuM9xA7stsEpl4nABVj77fRy-gjRwNOKV77KG07XVVyNcPtNIQHH5VOEUE3DpkDkNK-oWjrXe_XFlYmNRkfWhM"/>
</div>
<div class="relative px-gutter max-w-container-max mx-auto w-full z-10">
<div class="max-w-3xl bg-white/5 backdrop-blur-md p-lg rounded-xl border border-white/10 shadow-2xl relative z-10">
<div class="mb-md">
<span class="kinetic-line"></span>
<span class="font-label-sm text-label-sm uppercase text-secondary-fixed">Global Operations</span>
</div>
<h1 class="font-display-lg text-display-lg text-white mb-lg word-reveal" id="hero-title">Operational <span class="text-secondary-fixed">Excellence</span> at Scale</h1>
<p class="font-body-lg text-body-lg text-on-primary-container mb-xl max-w-xl">
                        Seamlessly integrating precision technology with elite human expertise to accelerate your enterprise growth.
                    </p>
<div class="flex flex-wrap gap-md">
<button class="bg-secondary-fixed text-on-secondary-fixed px-lg py-md font-button text-button rounded uppercase tracking-widest hover:bg-secondary-fixed-dim transition-colors shadow-[0_0_20px_rgba(101,250,222,0.3)]">
                            Get a Quote
                        </button>
<button class="bg-transparent border border-tertiary-fixed text-tertiary-fixed px-lg py-md font-button text-button rounded uppercase tracking-widest hover:bg-tertiary-fixed hover:text-tertiary-container transition-all">
                            See Services
                        </button>
</div><div class="mt-xl flex items-center gap-lg opacity-60 grayscale filter">
<span class="font-label-sm text-[10px] text-white/50 uppercase tracking-widest">Trusted Industry Standards:</span>
<div class="flex gap-md">
<span class="material-symbols-outlined text-white text-3xl">verified</span>
<span class="material-symbols-outlined text-white text-3xl">security</span>
<span class="material-symbols-outlined text-white text-3xl">database</span>
<span class="material-symbols-outlined text-white text-3xl">workspace_premium</span>
</div>
</div>
</div>
</div>
</section>
<!-- Section 2: Stats Strip -->
<section class="bg-surface-container-low py-lg border-b border-outline-variant/10">
<div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-md text-center">
<div class="flex flex-col items-center">
<span class="font-headline-xl text-headline-xl text-primary counter" data-target="50">0</span>
<span class="font-label-sm text-label-sm uppercase text-on-surface-variant">Global Clients</span>
</div>
<div class="flex flex-col items-center">
<span class="font-headline-xl text-headline-xl text-primary counter" data-target="5">0</span>
<span class="font-label-sm text-label-sm uppercase text-on-surface-variant">Years of Innovation</span>
</div>
<div class="flex flex-col items-center">
<span class="font-headline-xl text-headline-xl text-primary counter" data-target="98">0</span>
<span class="font-label-sm text-label-sm uppercase text-on-surface-variant">Retention Rate</span>
</div>
</div>
</section>
<!-- Section 3: Why Nexa -->
<section class="py-xl bg-surface">
<div class="max-w-container-max mx-auto px-gutter">
<div class="mb-xl">
<span class="kinetic-line"></span>
<span class="font-label-sm text-label-sm uppercase text-secondary">The Edge</span>
<h2 class="font-headline-xl text-headline-xl text-primary mt-sm">Why Partner with KineticBPO</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-md">
<div class="stagger-card bg-white p-md border border-outline-variant/30 hover:border-secondary transition-all group">
<span class="material-symbols-outlined text-secondary text-4xl mb-md group-hover:translate-x-1 transition-transform">precision_manufacturing</span>
<h3 class="font-headline-md text-headline-md mb-sm text-primary">Precise Execution</h3>
<p class="text-on-surface-variant">Rigorous process engineering ensures zero-defect delivery across all business functions.</p>
</div>
<div class="stagger-card bg-white p-md border border-outline-variant/30 hover:border-secondary transition-all group">
<span class="material-symbols-outlined text-secondary text-4xl mb-md group-hover:translate-x-1 transition-transform">bolt</span>
<h3 class="font-headline-md text-headline-md mb-sm text-primary">Kinetic Agility</h3>
<p class="text-on-surface-variant">Fast-response infrastructure designed to scale with your market demands in real-time.</p>
</div>
<div class="stagger-card bg-white p-md border border-outline-variant/30 hover:border-secondary transition-all group">
<span class="material-symbols-outlined text-secondary text-4xl mb-md group-hover:translate-x-1 transition-transform">verified_user</span>
<h3 class="font-headline-md text-headline-md mb-sm text-primary">Secure Infrastructure</h3>
<p class="text-on-surface-variant">Enterprise-grade security protocols protecting your data at every touchpoint.</p>
</div>
</div>
</div>
</section>
<!-- Section 4: Services Preview -->
<section class="py-xl bg-surface-container">
<div class="max-w-container-max mx-auto px-gutter">
<div class="flex justify-between items-end mb-xl">
<div>
<span class="kinetic-line"></span>
<span class="font-label-sm text-label-sm uppercase text-secondary">Our Expertise</span>
<h2 class="font-headline-xl text-headline-xl text-primary mt-sm">Enterprise Solutions</h2>
</div>
<a class="font-button text-button text-secondary uppercase hover:underline" href="#">View All Services</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-md">
<div class="bg-white rounded shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div class="h-48 relative">
<img class="w-full h-full object-cover" data-alt="A focused professional wearing a modern headset working in a clean, brightly lit office environment. The scene is dominated by a cool teal and white color palette with soft depth of field. The aesthetic is modern corporate minimalism, conveying reliability and high-end customer service." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxLoYkyOJXQX7v1M2W2Fsu4Zc6jXST1m5c_UXYLqKwrOnEuGWvlAQxWfxYwmZxKVfNJqmNdCHK9Cwqet6ajnHm23vC_NqbBtcXiwTY5E93wqDW025kcnhbAA0fN_2QjNy4zjgZJAM2gcUnn8Y2K3JDV1Q_beRoILRsV8FFH9HgODcknRywE4-S-ZE4X7gz-okUcnAxaDIyJ5dvsC_SC7Iae1kaHGtjh3izzKY7QV4Ux58gRveVfEchNfbmhiDDXDoEAT2vlwWQeUnb"/>
</div>
<div class="p-md">
<h4 class="font-headline-md text-headline-md text-primary mb-sm">Customer Support</h4>
<p class="text-on-surface-variant mb-md">24/7 multi-channel support that builds brand loyalty through every interaction.</p>
<button class="text-secondary font-bold flex items-center gap-xs">Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
<div class="bg-white rounded shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div class="h-48 relative">
<img class="w-full h-full object-cover" data-alt="A top-down view of a minimalist desk with a high-end laptop, a sleek black notebook, and a glass of water. Sharp shadows and a bright white surface define the corporate clarity style. The image represents efficient back-office operations and structured professional focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAE159VOoiGez2dX3u8bjxC8dejmEHIW7fdyCmK-WkY5fmPKu3lxr4Y3Q8iNbLp2fwv-ik53om_uh1B8x1L7ddGuiektIAzmtSJ5rr2J8Hw-5CbGisDkQSfrMspJBuiRZ1AW6e-duDHhNU8SyvScKJhttVoXp5mAEyvE9OQH5NVj9vuDz1VyScbTvaiTPcJSd0FXvUmK4C0_sYXEzZdDzjmt7mnXM_Dboee1b1q2yNwQbjivXqGkQ5UuZa8zDtCUT2P1KNLaoxJlfB"/>
</div>
<div class="p-md">
<h4 class="font-headline-md text-headline-md text-primary mb-sm">Back Office</h4>
<p class="text-on-surface-variant mb-md">Streamlined data processing and administrative workflows for maximum efficiency.</p>
<button class="text-secondary font-bold flex items-center gap-xs">Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
<div class="bg-white rounded shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div class="h-48 relative">
<img class="w-full h-full object-cover" data-alt="Close-up of glowing circuit board traces with blue and teal light pulses. The visual style is abstract and high-tech, using deep blacks and vibrant neon accents to represent IT infrastructure and innovative technology solutions in a modern corporate setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL8b1ezGDgC9GEFutjAeeSTpwmGX-Kaqy8bwDLGzmVzT1qQI2RLTMC-hGWltDOu-26_FaHs3NhZPs44xyk6i3ema1Kzf2ixXwMQv-95fmczXZwQ84omJ8x_vFDy5jHPsvkSDW0dCVfLrHsT5B3NqZrHe-b9zfR-IJdOnd0KWbbBPnh3AH3GIDbIZKh6wjAPcIBUj-4jmZKbbsVZEfNF5ZMmsrM261lbXBdS5XrQS79ySmmqWc8ir4zROWsa5f_FfYuCoHdvcDJuqre"/>
</div>
<div class="p-md">
<h4 class="font-headline-md text-headline-md text-primary mb-sm">IT Solutions</h4>
<p class="text-on-surface-variant mb-md">Custom technical support and infrastructure management for the modern enterprise.</p>
<button class="text-secondary font-bold flex items-center gap-xs">Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>
</div>
</section>
<!-- Section 5: Testimonials Carousel -->
<section class="py-xl bg-surface overflow-hidden">
<div class="max-w-container-max mx-auto px-gutter">
<div class="text-center mb-xl">
<h2 class="font-headline-xl text-headline-xl text-primary">Trusted by Industry Leaders</h2>
</div>
<div class="flex gap-md overflow-x-auto pb-lg snap-x no-scrollbar">
<div class="min-w-[320px] md:min-w-[400px] bg-surface-container-low p-lg snap-center">
<span class="material-symbols-outlined text-secondary text-4xl mb-md">format_quote</span>
<p class="font-body-lg italic mb-lg text-primary">"KineticBPO transformed our support operations from a cost center into a strategic advantage. Their precision is unmatched."</p>
<div class="flex items-center gap-sm">
<div class="w-12 h-12 bg-primary rounded-full"></div>
<div>
<p class="font-bold text-primary">Sarah Jenkins</p>
<p class="text-xs uppercase text-on-surface-variant">COO, TechFlow Inc.</p>
</div>
</div>
</div>
<div class="min-w-[320px] md:min-w-[400px] bg-surface-container-low p-lg snap-center">
<span class="material-symbols-outlined text-secondary text-4xl mb-md">format_quote</span>
<p class="font-body-lg italic mb-lg text-primary">"The scalability they offer allowed us to enter three new markets in six months without missing a beat. Truly elite service."</p>
<div class="flex items-center gap-sm">
<div class="w-12 h-12 bg-primary rounded-full"></div>
<div>
<p class="font-bold text-primary">Marcus Thorne</p>
<p class="text-xs uppercase text-on-surface-variant">Director of Operations, GlobalLogistics</p>
</div>
</div>
</div>
<div class="min-w-[320px] md:min-w-[400px] bg-surface-container-low p-lg snap-center">
<span class="material-symbols-outlined text-secondary text-4xl mb-md">format_quote</span>
<p class="font-body-lg italic mb-lg text-primary">"Security was our main concern, and KineticBPO's protocols exceeded our internal standards. A partner we can trust."</p>
<div class="flex items-center gap-sm">
<div class="w-12 h-12 bg-primary rounded-full"></div>
<div>
<p class="font-bold text-primary">Elena Rodriguez</p>
<p class="text-xs uppercase text-on-surface-variant">CTO, FinGuard Solutions</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section 6: Lead Magnet -->
<section class="bg-secondary-container py-xl">
<div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
<div>
<h2 class="font-headline-xl text-headline-xl text-on-secondary-container mb-md">Scale Your Business Efficiency</h2>
<p class="font-body-lg text-on-secondary-container opacity-80 mb-lg">Download our exclusive whitepaper on Operational Velocity: 10 strategies to optimize your BPO partnerships for growth.</p>
<button class="bg-primary-container text-on-primary-container px-lg py-md font-button text-button rounded flex items-center gap-sm hover:translate-x-1 transition-transform">
                        Download Ebook <span class="material-symbols-outlined">download</span>
</button>
</div>
<div class="relative flex justify-center">
<div class="bg-white/20 p-md backdrop-blur-md rounded-xl border border-white/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div class="bg-primary text-white p-lg w-64 h-80 rounded shadow-xl flex flex-col justify-end">
<div class="mb-auto font-label-sm text-secondary-fixed">WHITEPAPER 2024</div>
<h5 class="font-headline-md">OPERATIONAL VELOCITY</h5>
</div>
</div>
</div>
</div>
</section>
<!-- Section 7: Newsletter Strip -->
<section class="bg-surface py-md border-y border-outline-variant/30">
<div class="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-md">
<span class="font-label-sm text-label-sm uppercase text-primary">Get the Kinetic Edge Monthly</span>
<form class="flex flex-1 max-w-md w-full">
<input class="flex-1 bg-surface-container border-none focus:ring-2 focus:ring-secondary text-primary px-md py-sm" placeholder="Corporate email" type="email"/>
<button class="bg-primary text-on-primary px-lg font-button text-button uppercase">Subscribe</button>
</form>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-tertiary w-full py-xl">
<div class="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter max-w-container-max mx-auto">
<div class="col-span-1 md:col-span-1">
<div class="text-headline-md font-headline-md font-bold text-on-primary dark:text-tertiary-fixed mb-md">KineticBPO</div>
<p class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 font-body-md text-body-md">Driving operational velocity for the world's most ambitious companies.</p>
</div>
<div class="flex flex-col gap-sm">
<h5 class="text-on-primary font-bold mb-xs">Services</h5>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">Customer Support</a>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">Back Office</a>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">IT Solutions</a>
</div>
<div class="flex flex-col gap-sm">
<h5 class="text-on-primary font-bold mb-xs">Legal</h5>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">Privacy Policy</a>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">Terms of Service</a>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">Compliance</a>
</div>
<div class="flex flex-col gap-sm">
<h5 class="text-on-primary font-bold mb-xs">Connect</h5>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">LinkedIn</a>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">Twitter</a>
<a class="text-on-primary/70 dark:text-tertiary-fixed-dim/70 hover:text-secondary-fixed transition-all duration-300 hover:translate-x-1" href="#">Contact</a>
</div>
</div>
<div class="max-w-container-max mx-auto px-gutter mt-xl pt-lg border-t border-outline-variant/10 text-on-primary/40 text-sm flex justify-between items-center">
<span>© 2024 KineticBPO Services. All rights reserved.</span>
<div class="flex gap-md">
<span class="material-symbols-outlined text-sm">globe</span>
<span class="material-symbols-outlined text-sm">shield</span>
</div>
</div>
</footer>
<script>
        // Hero Reveal Effect
        document.addEventListener('DOMContentLoaded', () => {
            const title = document.getElementById('hero-title');
            const words = title.innerText.split(' ');
            title.innerHTML = '';
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.innerText = word + ' ';
                span.style.animationDelay = `${index * 0.1}s`;
                title.appendChild(span);
            });

            // Intersection Observer for Stagger Cards
            const observerOptions = {
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        // If it's a counter, animate it
                        const counter = entry.target.querySelector('.counter');
                        if (counter) animateCounter(counter);
                        
                        // Specifically animate children if it's the stats container
                        entry.target.querySelectorAll('.counter').forEach(animateCounter);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.stagger-card').forEach(card => observer.observe(card));
            document.querySelectorAll('.counter').forEach(counter => observer.observe(counter.parentElement));

            function animateCounter(el) {
                const target = parseInt(el.getAttribute('data-target'));
                const duration = 2000;
                let startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const current = Math.floor(progress * target);
                    el.innerText = current + (el.innerText.includes('+') || target > 10 ? '+' : '');
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        el.innerText = target + (target === 98 ? '%' : '+');
                    }
                }
                window.requestAnimationFrame(step);
            }
        });
    </script>
</body></html>