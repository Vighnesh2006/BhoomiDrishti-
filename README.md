# LAND STACK — Intelligent Parcel-Centric Land Governance & Verification Platform

> **Tagline:** "One Parcel. One Identity. Connected Data. Intelligent Governance."

---

## 🏛️ Executive Summary

**LAND STACK** is an interoperable intelligence and verification layer built on top of existing Indian land governance systems (such as 7/12 RoR Mahabhulekh, Sub-Registrar Deed Conveyance, PMRDA Master Plan Zoning, and Municipal Property Tax engines).

Rather than replacing existing government portals, **LAND STACK** unifies disparate records around a 14-digit **ULPIN (Unique Land Parcel Identification Number)** identity to:
1. **Detect multi-source record inconsistencies** (area discrepancies, un-mutated joint holders, missing links).
2. **Flag unpermitted spatial changes** using temporal Geo-AI satellite imagery analysis.
3. **Trigger event-driven departmental workflows** with automated officer task assignment.
4. **Empower citizens** with public due-diligence verification reports.

---

## 🚀 Key Modules & Architectural Highlights

### 1. ULPIN-Centric GIS Parcel Explorer (`/explorer`)
- Full-screen interactive Leaflet GIS interface over a synthetic study area in Pune / Mulshi.
- 50 synthetic parcels with color-coded boundaries (*Green = Verified*, *Amber = Discrepancy Flagged*, *Red = Geo-AI Alert*).
- Instant search by ULPIN, Survey Number, Village, District, or Owner Name.

### 2. Parcel Digital Twin (`/parcel/:id`)
- Unified 360° view across 9 record layers:
  - **A. Identity & Baseline Geometry** (ULPIN, survey no, GIS coordinates)
  - **B. Rights & Ownership** (7/12 RoR, Khata no, mutation status)
  - **C. Registration & Stamps** (Sub-Registrar deed conveyance, stamp duty)
  - **D. Encumbrances & Disputes** (Bank mortgage charges, civil litigation flags)
  - **E. Land Use & Planning** (Current land use, PMRDA Master Plan DP zoning)
  - **F. Fiscal & Tax** (Municipal property tax assessment balance)
  - **G. Infrastructure** (Electricity, bulk water, 18m road frontage)
  - **H. Statutory Restrictions** (River buffer zones, permissible FAR/FSI)
  - **I. Spatial Intelligence** (Satellite scan footprint detection)
- Automated Status Summary Matrix & Printable Official Parcel Verification Report generator.

### 3. Data Consistency Engine (`/verification`)
- Executes 10 deterministic cross-reconciliation rules across 4 connected datasets.
- Example: Cadastral Map (2.40 Ha) vs 7/12 RoR (2.35 Ha) vs Sub-Registrar (2.40 Ha) vs Property Tax (2.38 Ha) -> Flags **0.05 Ha Discrepancy** with medium severity recommendation.

### 4. Geo-AI Spatial Change Detection (`/changes`)
- Side-by-side temporal satellite viewer comparing 2023 baseline against 2026 satellite scans.
- Flags unpermitted structural expansions (+420 sq. m. footprint on ULPIN `MH-PUN-001245`) with 87% confidence rating.
- Interactive parcel lifecycle timeline (2019 baseline → 2021 sale → 2023 mortgage → 2025 planning → 2026 satellite alert).

### 5. Event-Driven Departmental Workflow (`/workflows`)
- Automated task pipelines for Revenue, Registration, and Planning officers triggered by deed registrations or satellite alerts.
- Officer progress tracking and action dispatch (Approve, Order Survey, Issue Notice).

### 6. Citizen Due-Diligence Portal (`/citizen`)
- Privacy-masked access tier (Public vs Controlled vs Restricted attributes).
- Public verification search and official service request submission form.

### 7. Executive Officer Dashboard (`/officer`)
- Real-time governance metrics and 4 interactive Recharts visualizations:
  - Data consistency issues by type
  - Spatial satellite alerts trend
  - Workflows by department
  - Parcel verification status distribution

### 8. State Adapter Architecture & Developer API (`/interoperability`)
- Visual state adapter schema mapping (Maharashtra 7/12, Tamil Nadu Patta, Karnataka Bhoomi → Common Land Data Model → ULPIN).
- Interactive REST API sandbox with JSON response viewers (`GET /api/parcels/{ulpin}`, `POST /api/workflows`).

---

## 🛠️ Technology Stack

- **Frontend Core:** React 19, Vite
- **Styling:** Custom Institutional CSS Design System (Government Palette: `#0757A0`, `#063B6D`, `#EAF4FC`)
- **GIS Mapping:** Leaflet, React-Leaflet
- **Data Visualizations:** Recharts
- **Icons:** Lucide React

---

## ⚡ Quick Start & Local Run

```bash
# Clone repository
git clone https://github.com/Vighnesh2006/BhoomiDrishti-.git
cd BhoomiDrishti-

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open `http://localhost:5173/` in your browser.

---

## ⚠️ Responsible AI & Prototype Disclaimer

- **Geo-AI alerts and consistency checks serve as administrative flags and do NOT constitute final legal ownership decisions.**
- **All parcel boundaries, owner names, and dataset records are 100% synthetic for prototype demonstration.**
