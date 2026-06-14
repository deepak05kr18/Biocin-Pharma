import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Showcase.css";

// ── Images ────────────────────────────────────────────────────────────────────
import calbocin       from "../../../components/Images/Products/webp_products/Calbocin_L.webp";
import CalbocinK27    from "../../../components/Images/Products/webp_products/Calbocin_L.webp";
import DexorocinSyrup from "../../../components/Images/Products/webp_products/Dexorocin.webp";
import Dexorocin      from "../../../components/Images/Products/webp_products/Dexorocin_Tablet.webp";
import Flexocin       from "../../../components/Images/Products/webp_products/Flexocin_Tablets.webp";
import Omecin         from "../../../components/Images/Products/webp_products/Omecin.webp";
import Fixocin        from "../../../components/Images/Products/webp_products/Fixocin.webp";
import Zivocin        from "../../../components/Images/Products/webp_products/Zivocin_t.webp";
import Nutricin       from "../../../components/Images/Products/webp_products/Nutricin_T.webp";
import NutricinL      from "../../../components/Images/Products/webp_products/Nutricin_Liquid.webp";
import Amoclacin      from "../../../components/Images/Products/webp_products/Amociacin__2_.webp";
import RespicinActi       from '../../../components/Images/Products/webp_products/Respicin Acti.jpeg';
import RespicinDx        from '../../../components/Images/Products/webp_products/Respicin Dx.jpeg';
import RespicinLs        from '../../../components/Images/Products/webp_products/Respicin LS.jpeg';
import Telsucin       from "../../../components/Images/Products/webp_products/Telsucin.webp";
import Montycin       from "../../../components/Images/Products/webp_products/Montycin.webp";
import Panzocin       from "../../../components/Images/Products/webp_products/Panzocin.webp";
import NutricinD3     from "../../../components/Images/Products/webp_products/Nutricin.webp";
import Amoclacin625   from "../../../components/Images/Products/webp_products/Amoclocin_T.webp";
import Amoclacin457   from "../../../components/Images/Products/webp_products/Amociacin.webp";
import Glytracin      from "../../../components/Images/Products/webp_products/GLytracin.webp";
import Meftacin       from "../../../components/Images/Products/webp_products/Meftacin.webp";

// ── Data ──────────────────────────────────────────────────────────────────────
const products = [
  { image: calbocin,       category: "Calcium & Mineral Supplement", title: "Calbocin",               composition: "Calcium Carbonate 625 mg + Magnesium 180 mg + Zinc Gluconate 14 mg + Vitamin D3 200 IU",                                                                    description: "Complete calcium supplement with magnesium, zinc and vitamin D3 for strong bones and healthy mineral balance." },
  { image: CalbocinK27,    category: "Bone Health",                   title: "Calbocin® K27",          composition: "CALCITRIOL IP 0.25 MCG + CALCIUM CITRATE USP 1000 MG + METHYLCOBALAMIN IP 1500 MCG+ VITAMIN -K27 50 MCG + FOLIC ACID IP 1.5 MG + ZINC SULPHATE MONOHYDERATE 7.5 MG",                           description: "Advanced bone health formula with active vitamin D3, calcium, and essential co-nutrients for maximum absorption." },
  { image: DexorocinSyrup, category: "Hematinic",                     title: "Dexorocin® B12 Syrup",   composition: "Ferric Ammonium Citrate IP 160 mg + Cyanocobalamin IP 7.5 mcg + Folic Acid IP 0.5 mg / 5 mg",                                                                       description: "Iron supplement with vitamin B12 and folic acid for effective anaemia treatment and red blood cell support." },
  { image: Dexorocin,      category: "Hematinic",                     title: "Dexorocin® XT Tablets",  composition: "Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg",                                                                                                           description: "Advanced iron formulation with enhanced bioavailability for fast correction of iron deficiency." },
  { image: Flexocin,       category: "Analgesic & Anti-inflammatory", title: "Flexocin® SP Tablets",   composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",                                                                                       description: "Triple-action pain relief combining anti-inflammatory, analgesic, and enzyme therapy for musculoskeletal pain." },
  { image: Omecin,         category: "Cardiovascular Health",         title: "Omecin Softgel Capsules",composition: "Omega-3 Fatty Acids 1000 mg",                                                                                                                            description: "High-potency Omega-3 fatty acids supporting cardiovascular function, brain health, and reducing triglycerides." },
  { image: Fixocin,        category: "Antibiotic",                    title: "Fixocin® 200 Tablets",   composition: "Cefixime 200 mg",                                                                                                                                        description: "Third-generation cephalosporin antibiotic with broad-spectrum activity against bacterial infections." },
  { image: Panzocin,       category: "Gastrointestinal",              title: "Panzocin® D Tablets",    composition: "Pantoprazole 40 mg + Domperidone 10 mg",                                                                                                                 description: "Combination therapy for acid reflux and GERD — proton pump inhibition with prokinetic antiemetic action." },
  { image: Zivocin,        category: "Immunity Booster",              title: "Zivocin™ Tablets",        composition: "Zinc 17 mg + Biotin 40 mcg + Vitamin C 500 mg + Antioxidants",                                                                                           description: "Complete immunity and skin health supplement packed with antioxidants for daily cellular protection." },
  { image: Nutricin,       category: "Multivitamin",                  title: "Nutricin Tablets",        composition: "Ginseng + Multivitamins + Minerals + Antioxidants",                                                                                                     description: "Comprehensive multivitamin formula with ginseng extract for sustained energy, vitality, and mental clarity." },
  { image: NutricinD3,     category: "Vitamin Supplement",            title: "Nutricin D3 Nanosomoids", composition: "Vitamin D3 60,000 IU (Cholecalciferol)",                                                                                                                description: "High-dose vitamin D3 nanosomoid formulation for rapid correction of vitamin D deficiency." },
  { image: NutricinL,      category: "Pediatric Supplement",          title: "Nutricin-L Syrup",        composition: "Multivitamin + Multiminerals + L-Lysine",                                                                                                               description: "Complete nutritional supplement for children with appetite-stimulating L-Lysine for healthy growth." },
  { image: Amoclacin625,   category: "Antibiotic",                    title: "Amoclacin-625 Tablets",   composition: "Amoxicillin 500 mg + Clavulanic Acid 125 mg",                                                                                                           description: "Broad-spectrum antibiotic with beta-lactamase inhibitor for resistant bacterial infections." },
  { image: Amoclacin,      category: "Pediatric Antibiotic",          title: "Amoclacin-228 Syrup",     composition: "Amoxicillin 200 mg + Clavulanic Acid 28.5 mg / 5 ml",                                                                                                   description: "Antibiotic suspension formulated for paediatric bacterial infections with pleasant palatability." },
  { image: Amoclacin457,   category: "Pediatric Antibiotic",          title: "Amoclacin-457 Syrup",     composition: "Amoxicillin 400 mg + Clavulanic Acid 57 mg / 5 ml",                                                                                                     description: "High-strength antibiotic suspension for children requiring stronger anti-infective therapy." },
  { image: Glytracin,      category: "Anti-diabetic",                 title: "Glytracin-M Tablets",     composition: "Metformin 500 mg + Glimepiride 2 mg",                                                                                                                   description: "Dual-mechanism combination therapy for Type 2 diabetes mellitus." },
  { image: RespicinActi,       category: "Respiratory",                   title: "Respicin-Acti Syrup",     composition: "Ambroxol 15 mg + Guaiphenesin 50 mg + Terbutaline 1.25 mg / 5 ml",                                                                                      description: "Triple-action cough syrup combining mucolytic, expectorant, and bronchodilator for productive cough relief." },
  { image: RespicinDx,       category: "Respiratory",                   title: "Respicin-Dx Syrup",       composition: "Dextromethorphan 10 mg + Chlorpheniramine 2 mg + Phenylephrine 5 mg / 5 ml",                                                                            description: "Dry cough formula with decongestant and antihistamine action for upper respiratory tract relief." },
  { image: RespicinLs,       category: "Respiratory",                   title: "Respicin-LS Syrup",       composition: "Levosalbutamol 1 mg + Ambroxol 30 mg + Guaiphenesin 50 mg / 5 ml",                                                                                      description: "Bronchodilator with mucolytic combination for asthma management and chronic bronchitis." },
  { image: Telsucin,       category: "Cardiovascular",                title: "Telsucin-AM Tablets",     composition: "Telmisartan 40 mg + Amlodipine 5 mg",                                                                                                                   description: "ARB and calcium channel blocker combination for superior 24-hour blood pressure control." },
  { image: Montycin,       category: "Anti-allergic",                 title: "Montycin-L Tablets",      composition: "Levocetirizine 5 mg + Montelukast 10 mg",                                                                                                               description: "Dual-action therapy combining antihistamine and leukotriene antagonist for allergic rhinitis and asthma." },
  { image: Meftacin,       category: "Pediatric Analgesic",           title: "Meftacin® Syrup",         composition: "Mefenamic Acid 50 mg + Paracetamol 125 mg / 5 ml",                                                                                                      description: "Paediatric analgesic and antipyretic syrup for safe relief of fever and mild-to-moderate pain." },
];

// How many cards visible at a time (by viewport)
const getVisible = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 480) return 1;
  if (window.innerWidth < 768) return 2;
  if (window.innerWidth < 1100) return 3;
  return 4;
};

const CARD_W = 280;   // must match CSS flex-basis
const GAP    = 24;

const ProductShowcase = () => {
  const [index, setIndex]     = useState(0);   // leftmost visible card
  const [visible, setVisible] = useState(getVisible);
  const timerRef = useRef(null);
  const total = products.length;

  // keep visible count in sync with window width
  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = total - visible;

  const go = useCallback((dir) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  }, [maxIndex]);

  // Auto-advance every 3.5 s
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), 3500);
  }, [go]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handleNav = (dir) => { go(dir); resetTimer(); };
  const handleDot = (i)   => { setIndex(i); resetTimer(); };

  const offset = index * (CARD_W + GAP);

  // dots: one per "page"
  const pageCount = maxIndex + 1;

  return (
    <section className="showcase-section">
      <div className="showcase-header">
        <h2>Our Product Range</h2>
        <p>
          A complete portfolio of pharmaceutical formulations — crafted for
          precision, safety, and therapeutic excellence.
        </p>
      </div>

      <div className="sc-viewport">
        <div
          className="sc-track"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {products.map((prod, i) => (
            <div className="p-card" key={i}>
              <div className="p-card-img-wrap">
                <img src={prod.image} alt={prod.title} loading="lazy" />
              </div>
              <div className="p-card-body">
                <p className="p-card-category">{prod.category}</p>
                <h3 className="p-card-title">{prod.title}</h3>
                <p className="p-card-desc">{prod.description}</p>
                <p className="p-card-composition">{prod.composition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
        <button className="nav-btn" onClick={() => handleNav(-1)} aria-label="Previous">
          ‹
        </button>

        <div className="dots">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => handleDot(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        <button className="nav-btn" onClick={() => handleNav(1)} aria-label="Next">
          ›
        </button>
      </div>

      <p className="sc-counter">
        {index + 1} – {Math.min(index + visible, total)} of {total} products
      </p>
    </section>
  );
};

export default ProductShowcase;