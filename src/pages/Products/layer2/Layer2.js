import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Layer2.css';
import {
  Search, Filter, ChevronDown, ChevronUp, Pill, Syringe,
  Droplets, Eye, Heart, Bone, Brain, Shield, Activity,
  ChevronLeft, ChevronRight
} from 'lucide-react';

// ── Import your product images (adjust paths as needed) ──────────────────────
import calbocin        from '../../../components/Images/Products/New Images/Calbocin L.jpeg';
import CalbocinK27     from '../../../components/Images/Products/Calbocin.png';
import DexorocinSyrup  from '../../../components/Images/Products/Dexorecin B12.png';
import Dexorocin       from '../../../components/Images/Products/Dexorecin.png';
import Flexocin        from '../../../components/Images/Products/Flexocin.png';
import Omecin          from '../../../components/Images/Products/Omecin.png';
import Fixocin         from '../../../components/Images/Products/Fixocin.png';
import Zivocin         from '../../../components/Images/Products/zivocin.png';
import Nutricin        from '../../../components/Images/Products/Nutricin.png';
import NutricinL       from '../../../components/Images/Products/Nutricin L.png';
import Amoclacin       from '../../../components/Images/Products/Amoxycilinn.png';
import Respicin        from '../../../components/Images/Products/Respicin.png';
import Telsucin        from '../../../components/Images/Products/Telsucin.png';
import Montycin        from '../../../components/Images/Products/Calbocin.png';

// ── Data ─────────────────────────────────────────────────────────────────────
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Calbocin',
    composition: 'CALCIUM CARBONATE 625 MG + MAGNESIUM 180 MG + ZINC GLUCONATE 14 MG + VITAMIN D3 200 IU',
    category: 'Calcium & Mineral Supplement',
    description: 'Complete calcium supplement with magnesium, zinc and vitamin D3 for bone health',
    image: calbocin,
  },
  {
    id: 2,
    name: 'Calbocin® K27',
    composition: 'CALCITRIOL 25 MCG + CALCIUM CITRATE 1000 MG + METHYLCOBALAMIN 1500 MCG + VITAMIN K2 7.5 MCG + FOLIC ACID 1.5 MG + ZINC 7.5 MG',
    category: 'Bone Health',
    description: 'Advanced bone health formula with active vitamin D3, calcium, and essential nutrients',
    image: CalbocinK27,
  },
  {
    id: 3,
    name: 'Dexorocin® B12 Syrup',
    composition: 'FERRIC AMMONIUM CITRATE 150 MG + CYANOCOBALAMIN 7.5 MG + FOLIC ACID 0.5 MG / 5ML',
    category: 'Hematinic',
    description: 'Iron supplement with vitamin B12 and folic acid for anemia treatment',
    image: DexorocinSyrup,
  },
  {
    id: 4,
    name: 'Dexorocin® XT Tablets',
    composition: 'FERROUS ASCORBATE 100 MG + FOLIC ACID 1.5 MG',
    category: 'Hematinic',
    description: 'Advanced iron formulation with enhanced absorption for iron deficiency',
    image: Dexorocin,
  },
  {
    id: 5,
    name: 'Flexocin® SP Tablets',
    composition: 'ACECLOFENAC 60 MG + PARACETAMOL 325 MG + SERRATIOPEPTIDASE 15 MG',
    category: 'Analgesic & Anti-inflammatory',
    description: 'Triple action pain relief for musculoskeletal pain and inflammation',
    image: Flexocin,
  },
  {
    id: 6,
    name: 'Omecin Softgel Capsules',
    composition: 'OMEGA-3 FATTY ACIDS 1000 MG',
    category: 'Cardiovascular Health',
    description: 'High potency Omega-3 fatty acids for heart and brain health',
    image: Omecin,
  },
  {
    id: 7,
    name: 'Fixocin® 200 Tablets',
    composition: 'CEFIXIME 200 MG',
    category: 'Antibiotic',
    description: 'Third generation cephalosporin antibiotic for bacterial infections',
    image: Fixocin,
  },
  {
    id: 8,
    name: 'Panzocin® D Tablets',
    composition: 'PANTOPRAZOLE 40 MG + DOMPERIDONE 10 MG',
    category: 'Gastrointestinal',
    description: 'Combination therapy for acid reflux and GERD with antiemetic action',
    image: null,
  },
  {
    id: 9,
    name: 'Zivocin™ Tablets',
    composition: 'ZINC 50 MG + BIOTIN 10 MG + VITAMIN C 500 MG + ANTIOXIDANTS',
    category: 'Immunity Booster',
    description: 'Complete immunity and skin health supplement with antioxidants',
    image: Zivocin,
  },
  {
    id: 10,
    name: 'Nutricin Tablets',
    composition: 'GINSENG + MULTIVITAMINS + MINERALS + ANTIOXIDANTS',
    category: 'Multivitamin',
    description: 'Comprehensive multivitamin formula with ginseng for energy and vitality',
    image: Nutricin,
  },
  {
    id: 11,
    name: 'Nutricin D3 Nanosomoids',
    composition: 'VITAMIN D3 60,000 IU (CHOLECALCIFEROL)',
    category: 'Vitamin Supplement',
    description: 'High dose vitamin D3 for rapid correction of vitamin D deficiency',
    image: null,
  },
  {
    id: 12,
    name: 'Nutricin-L 200ml Syrup',
    composition: 'MULTIVITAMIN + MULTIMINERALS + L-LYSINE',
    category: 'Pediatric Supplement',
    description: 'Complete nutritional supplement for children with appetite stimulant',
    image: NutricinL,
  },
  {
    id: 13,
    name: 'Amoclacin-625 Tablets',
    composition: 'AMOXICILLIN 500 MG + CLAVULANIC ACID 125 MG',
    category: 'Antibiotic',
    description: 'Broad spectrum antibiotic with beta-lactamase inhibitor',
    image: null,
  },
  {
    id: 14,
    name: 'Amoclacin-228 Syrup',
    composition: 'AMOXICILLIN 200 MG + CLAVULANIC ACID 28.5 MG / 5ML',
    category: 'Pediatric Antibiotic',
    description: 'Antibiotic suspension for pediatric bacterial infections',
    image: Amoclacin,
  },
  {
    id: 15,
    name: 'Amoclacin-457 Syrup',
    composition: 'AMOXICILLIN 400 MG + CLAVULANIC ACID 57 MG / 5ML',
    category: 'Pediatric Antibiotic',
    description: 'High strength antibiotic suspension for children',
    image: null,
  },
  {
    id: 16,
    name: 'Glytracin-M Tablets',
    composition: 'METFORMIN 500 MG + GLIMEPIRIDE 2 MG',
    category: 'Anti-diabetic',
    description: 'Combination therapy for Type 2 diabetes mellitus',
    image: null,
  },
  {
    id: 17,
    name: 'Respicin-Acti Cough Syrup',
    composition: 'AMBROXOL 30 MG + GUAIPHENESIN 50 MG + TERBUTALINE 1.25 MG / 5ML',
    category: 'Respiratory',
    description: 'Triple action cough syrup for productive cough and bronchospasm',
    image: Respicin,
  },
  {
    id: 18,
    name: 'Respicin-Dx Syrup',
    composition: 'DEXTROMETHORPHAN 10 MG + CHLORPHENIRAMINE 2 MG + PHENYLEPHRINE 5 MG / 5ML',
    category: 'Respiratory',
    description: 'Dry cough syrup with decongestant and antihistamine',
    image: Respicin,
  },
  {
    id: 19,
    name: 'Respicin-LS Syrup',
    composition: 'LEVOSALBUTAMOL 1 MG + AMBROXOL 30 MG + GUAIPHENESIN 50 MG / 5ML',
    category: 'Respiratory',
    description: 'Bronchodilator with mucolytic for asthma and bronchitis',
    image: Respicin,
  },
  {
    id: 20,
    name: 'Telsucin-AM Tablets',
    composition: 'TELMISARTAN 40 MG + AMLODIPINE 5 MG',
    category: 'Cardiovascular',
    description: 'Combination antihypertensive for better blood pressure control',
    image: Telsucin,
  },
  {
    id: 21,
    name: 'Montycin-L Tablets',
    composition: 'LEVOCETIRIZINE 5 MG + MONTELUKAST 10 MG',
    category: 'Anti-allergic',
    description: 'Dual action therapy for allergic rhinitis and asthma',
    image: Montycin,
  },
  {
    id: 22,
    name: 'Meftacin® Syrup',
    composition: 'MEFENAMIC ACID 50 MG + PARACETAMOL 125 MG',
    category: 'Pediatric Analgesic',
    description: 'Pediatric analgesic syrup for fever and pain relief',
    image: null,
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const CATEGORY_COLORS = {
  'Antibiotic': '#ef4444',
  'Pediatric Antibiotic': '#f87171',
  'Hematinic': '#dc2626',
  'Analgesic & Anti-inflammatory': '#f59e0b',
  'Pediatric Analgesic': '#fbbf24',
  'Gastrointestinal': '#10b981',
  'Cardiovascular': '#3b82f6',
  'Cardiovascular Health': '#60a5fa',
  'Respiratory': '#06b6d4',
  'Anti-diabetic': '#8b5cf6',
  'Anti-allergic': '#a855f7',
  'Calcium & Mineral Supplement': '#6366f1',
  'Bone Health': '#818cf8',
  'Multivitamin': '#ec4899',
  'Vitamin Supplement': '#f472b6',
  'Pediatric Supplement': '#c084fc',
  'Immunity Booster': '#84cc16',
};

const getCategoryColor = (cat) => CATEGORY_COLORS[cat] || '#6b7280';

const getCategoryIcon = (category) => {
  const map = {
    'Antibiotic': Syringe, 'Pediatric Antibiotic': Syringe,
    'Hematinic': Activity, 'Analgesic & Anti-inflammatory': Eye,
    'Pediatric Analgesic': Eye, 'Gastrointestinal': Droplets,
    'Cardiovascular': Heart, 'Cardiovascular Health': Heart,
    'Respiratory': Droplets, 'Anti-diabetic': Activity,
    'Anti-allergic': Eye, 'Calcium & Mineral Supplement': Bone,
    'Bone Health': Bone, 'Multivitamin': Shield,
    'Vitamin Supplement': Shield, 'Pediatric Supplement': Shield,
    'Immunity Booster': Shield,
  };
  return map[category] || Pill;
};

const getDosageForm = (name) => {
  if (name.includes('Syrup') || name.includes('Suspension')) return 'Oral Liquid';
  if (name.includes('Tablets')) return 'Tablet';
  if (name.includes('Capsules')) return 'Capsule';
  return 'Various Forms';
};

// ── Carousel radius calculation ───────────────────────────────────────────────
const CARD_W = 200;
const getRadius = (n) => Math.round(CARD_W / (2 * Math.tan(Math.PI / n)));

// ── Placeholder icon component ────────────────────────────────────────────────
const PlaceholderIcon = ({ category, size = 28 }) => {
  const Icon = getCategoryIcon(category);
  return (
    <div className="image-placeholder">
      <Icon size={size} />
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// 3-D CAROUSEL
// ═════════════════════════════════════════════════════════════════════════════
const Carousel3D = ({ products, onSelectProduct }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const autoRef = useRef(null);
  const n = products.length;
  const angleStep = 360 / n;
  const radius = getRadius(n);

  const goTo = useCallback((idx) => {
    setCurrentIdx(((idx % n) + n) % n);
    onSelectProduct && onSelectProduct(products[((idx % n) + n) % n]);
  }, [n, products, onSelectProduct]);

  const prev = () => { goTo(currentIdx - 1); resetAuto(); };
  const next = () => { goTo(currentIdx + 1); resetAuto(); };

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setCurrentIdx(i => (i + 1) % n), 3500);
  }, [n]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  useEffect(() => {
    onSelectProduct && onSelectProduct(products[currentIdx]);
  }, [currentIdx]); // eslint-disable-line

  return (
    <div className="carousel-wrapper">
      {/* 3-D scene */}
      <div className="carousel-scene">
        <div
          className="carousel-3d"
          style={{ transform: `rotateY(${-currentIdx * angleStep}deg)` }}
        >
          {products.map((p, i) => {
            const col = getCategoryColor(p.category);
            const angle = i * angleStep;
            const isActive = i === currentIdx;
            return (
              <div
                key={p.id}
                className={`carousel-card ${isActive ? 'carousel-card--active' : ''}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  borderColor: isActive ? col : undefined,
                }}
                onClick={() => { goTo(i); clearInterval(autoRef.current); resetAuto(); }}
              >
                {/* image or icon */}
                <div className="carousel-card__img-wrap" style={{ background: `${col}18` }}>
                  {p.image
                    ? <img src={p.image} alt={p.name} className="carousel-card__img" />
                    : <PlaceholderIcon category={p.category} size={36} />
                  }
                </div>

                <div className="carousel-card__name">{p.name}</div>
                <div className="carousel-card__cat">{p.category}</div>
                <div className="carousel-card__comp">{p.composition}</div>

                <span
                  className="carousel-card__badge"
                  style={{ background: `${col}22`, color: col, border: `1px solid ${col}55` }}
                >
                  {p.category.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="carousel-nav">
        <button className="carousel-nav__btn" onClick={prev} aria-label="Previous">
          <ChevronLeft size={20} />
        </button>

        <div className="carousel-nav__dots">
          {products.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === currentIdx ? 'carousel-dot--active' : ''}`}
              onClick={() => { goTo(i); resetAuto(); }}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>

        <button className="carousel-nav__btn" onClick={next} aria-label="Next">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// ACTIVE PRODUCT INFO STRIP
// ═════════════════════════════════════════════════════════════════════════════
const ActiveProductInfo = ({ product }) => {
  if (!product) return null;
  const col = getCategoryColor(product.category);
  return (
    <div className="active-product-info" style={{ borderColor: col }}>
      <div className="active-product-info__name" style={{ color: col }}>{product.name}</div>
      <div className="active-product-info__desc">{product.description}</div>
      <div className="active-product-info__comp">{product.composition}</div>
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// MAIN PRODUCT PAGE
// ═════════════════════════════════════════════════════════════════════════════
const Product = () => {
  const [products] = useState(PRODUCTS_DATA);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [expandedRow, setExpandedRow] = useState(null);
  const [activeCarouselProduct, setActiveCarouselProduct] = useState(PRODUCTS_DATA[0]);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter + search
  useEffect(() => {
    let result = [...products];
    if (selectedCategory !== 'All') result = result.filter(p => p.category === selectedCategory);
    if (searchTerm) {
      const t = searchTerm.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(t) ||
        p.composition.toLowerCase().includes(t) ||
        p.category.toLowerCase().includes(t) ||
        p.description.toLowerCase().includes(t)
      );
    }
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  // Sort
  const requestSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
    setFilteredProducts(prev =>
      [...prev].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
      })
    );
  };

  const toggleRow = (id) => setExpandedRow(expandedRow === id ? null : id);

  return (
    <div className="product-container">

      {/* ── Header ── */}
      <div className="product-header">
        <div className="company-logo">
          <h1 className="company-name">Biocin Pharma</h1>
          <p className="company-tagline">Panacea For Global Care</p>
        </div>
        <p className="product-subtitle">Browse our comprehensive pharmaceutical product portfolio</p>
      </div>

      {/* ── 3-D Carousel Section ── */}
      <div className="carousel-section">
        <Carousel3D
          products={products}
          onSelectProduct={setActiveCarouselProduct}
        />
        <ActiveProductInfo product={activeCarouselProduct} />
      </div>

      {/* ── Divider ── */}
      <div className="section-divider">
        <span className="section-divider__label">Product Catalogue</span>
      </div>

      {/* ── Filters ── */}
      <div className="product-controls">
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search products by name, composition, or category…"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <Filter className="filter-icon" size={20} />
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="product-stats">
            <span className="stat-badge">
              {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
            </span>
          </div>
        </div>
      </div>

      {/* ── Table ── */}
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th className="image-col">Image</th>
              <th className="sortable" onClick={() => requestSort('name')}>
                <div className="th-content">
                  Product Name
                  {sortConfig.key === 'name'
                    ? (sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)
                    : null}
                </div>
              </th>
              <th className="sortable" onClick={() => requestSort('composition')}>
                <div className="th-content">
                  Composition
                  {sortConfig.key === 'composition'
                    ? (sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)
                    : null}
                </div>
              </th>
              <th className="sortable" onClick={() => requestSort('category')}>
                <div className="th-content">
                  Category
                  {sortConfig.key === 'category'
                    ? (sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)
                    : null}
                </div>
              </th>
              <th className="action-col">Details</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => {
                const CategoryIcon = getCategoryIcon(product.category);
                const col = getCategoryColor(product.category);
                return (
                  <React.Fragment key={product.id}>
                    <tr className="product-row" onClick={() => toggleRow(product.id)}>

                      {/* Image */}
                      <td className="product-image-cell" data-label="">
                        <div className="product-image-container">
                          {product.image
                            ? <img src={product.image} alt={product.name} className="product-image" />
                            : <PlaceholderIcon category={product.category} />
                          }
                        </div>
                      </td>

                      {/* Name */}
                      <td className="product-name" data-label="Product Name">
                        <strong>{product.name}</strong>
                        <div className="product-form">{getDosageForm(product.name)}</div>
                      </td>

                      {/* Composition */}
                      <td className="composition" data-label="Composition">
                        {product.composition}
                      </td>

                      {/* Category */}
                      <td className="category" data-label="Category">
                        <span
                          className="category-badge"
                          style={{
                            background: `linear-gradient(135deg, ${col} 0%, ${col}99 100%)`,
                            border: `1px solid ${col}`,
                          }}
                        >
                          <CategoryIcon size={14} style={{ marginRight: 4 }} />
                          {product.category}
                        </span>
                      </td>

                      {/* Expand toggle */}
                      <td className="action-cell" data-label="Details">
                        <button className="details-btn">
                          {expandedRow === product.id
                            ? <ChevronUp size={20} />
                            : <ChevronDown size={20} />}
                        </button>
                      </td>
                    </tr>

                    {/* Expanded detail row */}
                    {expandedRow === product.id && (
                      <tr className="expanded-row">
                        <td colSpan="5">
                          <div className="product-details" style={{ borderLeftColor: col }}>
                            <div className="detail-header">

                              {/* Expanded image */}
                              <div className="detail-image">
                                {product.image
                                  ? <img src={product.image} alt={product.name} className="expanded-product-image" />
                                  : (
                                    <div className="expanded-image-placeholder">
                                      <PlaceholderIcon category={product.category} size={40} />
                                    </div>
                                  )
                                }
                              </div>

                              <div className="detail-info">
                                <div className="detail-section">
                                  <h4>Product Description</h4>
                                  <p>{product.description}</p>
                                </div>
                                <div className="detail-grid">
                                  <div className="detail-item">
                                    <h4>Product ID</h4>
                                    <code className="product-id">
                                      BIOCIN-{product.id.toString().padStart(3, '0')}
                                    </code>
                                  </div>
                                  <div className="detail-item">
                                    <h4>Therapeutic Class</h4>
                                    <span className="therapeutic-class">{product.category}</span>
                                  </div>
                                  <div className="detail-item">
                                    <h4>Dosage Form</h4>
                                    <span className="dosage-form">{getDosageForm(product.name)}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="no-results">
                  <div className="empty-state">
                    <Search size={48} />
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
