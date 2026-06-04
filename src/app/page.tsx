"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "الرئيسية",
          id: "#hero",
        },
        {
          name: "خدماتنا",
          id: "#features",
        },
        {
          name: "الحلاقون",
          id: "#barbers",
        },
        {
          name: "التقييمات",
          id: "#reviews",
        },
        {
          name: "الأسئلة الشائعة",
          id: "#faq",
        },
        {
          name: "تواصل معنا",
          id: "#contact",
        },
      ]}
      brandName="Barber DZ"
      button={{
        text: "احجز الآن",
        href: "#booking",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="تجربة حلاقة فاخرة على بُعد نقرة"
      description="اكتشف أفضل الحلاقين في مدينتك، احجز مواعيدك بكل سهولة، واستمتع بخدمات لا مثيل لها."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94766.jpg",
          imageAlt: "luxurious barbershop interior classic design",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-barber-wearing-uniform-shaving-his-moustache-with-straight-razor-looking-up-with-shaving-cream-put-his-face-isolated-olive-green-background_141793-85010.jpg",
          imageAlt: "barber shaving man with straight razor black and white",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-indian-man-black-shirt-sitting-cafe_627829-5481.jpg",
          imageAlt: "modern barbershop reception area clean design",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-hipster-bearded-male-sitting-armchair-barber-shop-while-hairdresser-shaves-his-beard-with-dangerous-razor_613910-18491.jpg",
          imageAlt: "barber trimming beard with precision tools",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/barber-using-scissors-make-hairstyle_23-2148298276.jpg",
          imageAlt: "barber applying hair product to client's hair",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/exterior-shopfront-city_53876-144723.jpg",
          imageAlt: "barbershop storefront elegant black and gold signage",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="منصة Barber DZ"
      description="نربطك بأفضل الحلاقين المحترفين لتقديم تجربة فريدة. منصتنا تضمن لك الراحة والجودة، حيث يمكنك البحث عن الحلاقين حسب المدينة والتقييمات والخدمات، ومشاهدة أعمالهم وأسعارهم وأوقات عملهم، ثم حجز مواعيدك بسهولة تامة. للحلاقين، توفر المنصة أدوات لإدارة محلاتهم، خدماتهم، معرض الصور الخاص بهم، واستقبال الحجوزات وإدارتها بكفاءة."
      metrics={[
        {
          value: "+500",
          title: "عميل سعيد",
        },
        {
          value: "+100",
          title: "حلاق محترف",
        },
        {
          value: "4.9",
          title: "متوسط التقييم",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chairs-green-male-barbershop-retro-style_627829-8284.jpg"
      imageAlt="barber shop interior with empty chairs"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "client-features",
          title: "لعملائنا الكرام",
          description: "ابحث، احجز، وقيّم بكل سهولة. منصتنا تضع عالم الحلاقة بين يديك.",
          tag: "العملاء",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-smartphone-tickets_23-2149340924.jpg",
          imageAlt: "man using phone to book appointment",
        },
        {
          id: "barber-features",
          title: "لحلاقينا المحترفين",
          description: "أدِر محلك، خدماتك، ومعرض صورك بكفاءة عالية واستقبل المزيد من الحجوزات.",
          tag: "الحلاقون",
          imageSrc: "http://img.b2bpic.net/free-photo/father-s-day-composition-with-blank-slate-decorative-cinnamon-sticks_23-2147631266.jpg",
          imageAlt: "barber managing schedule on tablet",
        },
        {
          id: "admin-features",
          title: "لمديري المنصة",
          description: "تحكم كامل وإحصائيات دقيقة لإدارة العملاء، الحلاقين، والمحلات بفعالية.",
          tag: "المديرون",
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-looking-finance-graphs_23-2150461325.jpg",
          imageAlt: "admin dashboard with analytics graphs",
        },
      ]}
      title="ميزات تليق بك"
      description="تقدم Barber DZ مجموعة واسعة من الميزات المصممة لتبسيط تجربة الحجز لكل من العملاء والحلاقين، وضمان إدارة فعالة للمنصة."
    />
  </div>

  <div id="barbers" data-section="barbers">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "barber-1",
          brand: "صالون الأناقة",
          name: "أحمد الحلاق",
          price: "ابتداءً من 1500 د.ج",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-man-apron-holding-trimmer-hair-brushes-happy-cheerfuul-smiling_141793-37016.jpg",
          imageAlt: "professional barber with stylish haircut",
        },
        {
          id: "barber-2",
          brand: "صالون اللمسة الفنية",
          name: "فوزي للحلاقة",
          price: "ابتداءً من 1200 د.ج",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hairstilyst-giving-haircut_23-2148506294.jpg",
          imageAlt: "barber shop exterior classic design",
        },
        {
          id: "barber-3",
          brand: "ستوديو القص الذهبي",
          name: "ليلى لتصفيف الشعر",
          price: "ابتداءً من 2000 د.ج",
          rating: 5,
          reviewCount: "98",
          imageSrc: "http://img.b2bpic.net/free-photo/process-creating-new-tattoo-young-woman-by-expirienced-tattoo-artist-studio_613910-5905.jpg",
          imageAlt: "female barber cutting hair focused",
        },
        {
          id: "barber-4",
          brand: "الحلاقة العصرية",
          name: "مروان للحلاقة",
          price: "ابتداءً من 1300 د.ج",
          rating: 4,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/child-getting-their-hair-blown-salon_23-2150462464.jpg",
          imageAlt: "barber working on client's hairstyle",
        },
        {
          id: "barber-5",
          brand: "صالون الرجولة",
          name: "حسان سيد الحلاقة",
          price: "ابتداءً من 1600 د.ج",
          rating: 5,
          reviewCount: "110",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-sitting-bicycle-using-mobile-phone-front-red-door_23-2148176698.jpg",
          imageAlt: "barber shop interior rustic decor",
        },
        {
          id: "barber-6",
          brand: "صالون النجوم",
          name: "علي خبير المظهر",
          price: "ابتداءً من 1800 د.ج",
          rating: 4,
          reviewCount: "90",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-male-barber-uniform-holding-hair-clippers-showing-peace-gesture-isolated-pink-wall_141793-103187.jpg",
          imageAlt: "barber shop owner proudly standing",
        },
      ]}
      title="اكتشف الحلاقين المميزين"
      description="تصفح ملفات أفضل الحلاقين والمحلات في منطقتك، وشاهد أعمالهم، وقارن الأسعار والتقييمات قبل الحجز."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          title: "الخطة الأساسية",
          price: "5000 د.ج",
          period: "شهرياً",
          features: [
            "إدارة الملف الشخصي",
            "إضافة 3 خدمات",
            "10 صور للمعرض",
            "نظام الحجز الأساسي",
          ],
          button: {
            text: "اشترك الآن",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-male-self-care-setting-still-life_23-2150326541.jpg",
          imageAlt: "barber tools on wooden counter",
        },
        {
          id: "pro",
          title: "الخطة الاحترافية",
          price: "10000 د.ج",
          period: "شهرياً",
          features: [
            "جميع ميزات الأساسية",
            "عدد غير محدود من الخدمات",
            "50 صورة للمعرض",
            "نظام الحجز المتقدم",
            "تحليلات الأداء",
          ],
          button: {
            text: "اشترك الآن",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/customer-watching-magazine-barbershop_23-2147737098.jpg",
          imageAlt: "barber chair empty clean studio",
        },
        {
          id: "premium",
          title: "الخطة الممتازة",
          price: "15000 د.ج",
          period: "شهرياً",
          features: [
            "جميع ميزات الاحترافية",
            "دعم مخصص 24/7",
            "معرض صور غير محدود",
            "حملات تسويقية",
            "وصول مبكر للميزات الجديدة",
          ],
          button: {
            text: "اشترك الآن",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/barber-giving-high-five-client_23-2147737095.jpg",
          imageAlt: "customer getting luxury facial treatment",
        },
      ]}
      title="خطط اشتراك الحلاقين"
      description="اختر الخطة المناسبة لعملك ووسع نطاق وصولك إلى العملاء مع أدوات إدارة قوية."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "سارة جونسون",
          role: "عميلة دائمة",
          company: "الجزائر",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-handsome-young-bearded-happy-man_171337-13878.jpg",
          imageAlt: "happy customer leaving barbershop",
        },
        {
          id: "2",
          name: "محمد علي",
          role: "مالك صالون",
          company: "الجزائر",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-make-up-artist-putting-make-up-himself_23-2150166159.jpg",
          imageAlt: "barber shop owner smiling warmly",
        },
        {
          id: "3",
          name: "إميلي رودريغيز",
          role: "عميلة جديدة",
          company: "الجزائر",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-black-people-taking-care-afro-hair_23-2149575435.jpg",
          imageAlt: "woman customer happy with service",
        },
        {
          id: "4",
          name: "ديفيد كيم",
          role: "عميل مخلص",
          company: "الجزائر",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-posing-dark-wall_176420-52.jpg",
          imageAlt: "young man looking stylish after haircut",
        },
        {
          id: "5",
          name: "فاطمة الزهراء",
          role: "صاحبة مشروع",
          company: "الجزائر",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-hair-salon_23-2150665449.jpg",
          imageAlt: "diverse group of people happy",
        },
      ]}
      kpiItems={[
        {
          value: "98%",
          label: "عملاء سعداء",
        },
        {
          value: "5 نجوم",
          label: "متوسط التقييم",
        },
        {
          value: "+2000",
          label: "حجز ناجح",
        },
      ]}
      title="ماذا يقول عملاؤنا"
      description="شهادات حقيقية من عملائنا السعداء حول تجاربهم مع Barber DZ، تعكس جودة الخدمة ورضاهم التام."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "صالون النخبة",
        "الحلاق الملكي",
        "لمسة فنان",
        "صالون الرجال",
        "قصات عصرية",
        "المقص الذهبي",
        "أكاديمية الحلاقة",
      ]}
      title="شركاؤنا من أفضل الحلاقين"
      description="نحن فخورون بالعمل مع نخبة من صالونات الحلاقة الرائدة في جميع أنحاء الجزائر، لتقديم أفضل الخدمات."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "كيف يمكنني حجز موعد؟",
          content: "يمكنك حجز موعد بسهولة عبر تصفح الحلاقين المتاحين، اختيار الخدمة، التاريخ والوقت المناسبين لك، ثم تأكيد الحجز.",
        },
        {
          id: "faq-2",
          title: "هل يمكنني تعديل أو إلغاء موعدي؟",
          content: "نعم، يمكنك تعديل أو إلغاء أي موعد محجوز من خلال لوحة التحكم الخاصة بك، مع مراعاة سياسات الإلغاء لدى الحلاق.",
        },
        {
          id: "faq-3",
          title: "كيف أبحث عن حلاق معين؟",
          content: "يمكنك استخدام خاصية البحث والتصفية للعثور على حلاقين حسب المدينة، التقييم، أو أنواع الخدمات التي يقدمونها.",
        },
        {
          id: "faq-4",
          title: "ما هي رسوم استخدام المنصة للحلاقين؟",
          content: "تقدم المنصة خطط اشتراك متنوعة للحلاقين، تبدأ من خطة مجانية مع ميزات محدودة وصولاً إلى خطط احترافية بميزات متكاملة. يمكنك الاطلاع على صفحة الأسعار للمزيد من التفاصيل.",
        },
        {
          id: "faq-5",
          title: "هل بياناتي الشخصية آمنة؟",
          content: "نعم، نحن نولي أقصى درجات الأمان لبياناتك الشخصية ومعلومات الدفع. جميع البيانات مشفرة ومحمية بأحدث التقنيات.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-child-hair-salon_23-2150462476.jpg"
      imageAlt="barber talking to client explaining"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="أسئلة متكررة"
      description="إجابات لبعض الأسئلة الأكثر شيوعًا حول Barber DZ، وكيف تعمل منصتنا لخدمتك بشكل أفضل."
      tag="الدعم"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="هل لديك أسئلة؟ تواصل معنا اليوم!"
      buttons={[
        {
          text: "تواصل الآن",
          href: "#contact-form",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Barber DZ"
      leftLink={{
        text: "سياسة الخصوصية",
        href: "#",
      }}
      rightLink={{
        text: "الشروط والأحكام",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
