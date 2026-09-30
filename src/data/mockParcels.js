// Mock Synthetic Parcel Dataset for LAND STACK Prototype
// 50 Demo Parcels situated in Pune / Mulshi study area (Maharashtra)

export const MOCK_PARCELS = Array.from({ length: 50 }, (_, i) => {
  const idNum = (1245 + i).toString();
  const ulpin = `MH-PUN-${idNum}`;
  const surveyNo = `${120 + Math.floor(i / 3)}/${(i % 3) + 1}${i % 5 === 0 ? 'B' : ''}`;
  
  const villages = ['Hinjawadi Phase 3', 'Maan Village', 'Marunji Sector 2', 'Bavdhan Green Valley', 'Pirangut Cluster B', 'Wakad West'];
  const village = villages[i % villages.length];
  
  // Base coordinates around Pune / Mulshi area (approx 18.52 to 18.57 N, 73.70 to 73.78 E)
  const baseLat = 18.5350 + (Math.floor(i / 7) * 0.008) + ((i % 7) * 0.0015);
  const baseLng = 73.7200 + ((i % 7) * 0.009) + (Math.floor(i / 7) * 0.002);
  const size = 0.0025 + ((i % 4) * 0.0008);

  const coordinates = [
    [baseLat, baseLng],
    [baseLat + size * 0.9, baseLng + size * 0.2],
    [baseLat + size * 1.1, baseLng + size * 1.1],
    [baseLat + size * 0.1, baseLng + size * 0.95],
    [baseLat, baseLng]
  ];

  const centerLat = baseLat + size * 0.55;
  const centerLng = baseLng + size * 0.55;

  const areaHa = parseFloat((1.2 + (i * 0.17) % 3.5).toFixed(2));
  const landUses = ['Residential', 'Agricultural', 'Commercial', 'Industrial', 'Mixed Use'];
  const landUse = landUses[i % landUses.length];

  // Introduce deliberate inconsistencies in specific index items
  const hasAreaMismatch = i === 0 || i === 4 || i === 12 || i === 23 || i === 38;
  const hasOwnerMismatch = i === 2 || i === 15 || i === 29;
  const hasUnapprovedConstruction = i === 0 || i === 7 || i === 18 || i === 31 || i === 44;
  const hasMortgageWarning = i === 0 || i === 3 || i === 14 || i === 27;
  const hasTaxOutstanding = i === 0 || i === 6 || i === 19 || i === 35;

  let verificationStatus = 'VERIFIED';
  const issues = [];

  if (hasAreaMismatch) {
    verificationStatus = 'ISSUES_DETECTED';
    issues.push({
      id: `ISS-${idNum}-1`,
      ruleId: 'RULE-01',
      title: 'Parcel Area Discrepancy Across Records',
      severity: 'MEDIUM',
      sources: {
        cadastral: `${(areaHa + 0.05).toFixed(2)} Ha`,
        ror: `${areaHa.toFixed(2)} Ha`,
        registration: `${(areaHa + 0.05).toFixed(2)} Ha`,
        tax: `${(areaHa + 0.03).toFixed(2)} Ha`
      },
      difference: '0.05 Ha (2.13% variance)',
      description: 'Cadastral GIS boundary polygon area differs from 7/12 RoR recorded area.',
      recommendedAction: 'Trigger Revenue Officer physical land survey re-measurement task.'
    });
  }

  if (hasOwnerMismatch) {
    verificationStatus = 'ISSUES_DETECTED';
    issues.push({
      id: `ISS-${idNum}-2`,
      ruleId: 'RULE-02',
      title: 'Ownership Name Mismatch (RoR vs Registration)',
      severity: 'HIGH',
      sources: {
        ror: i % 2 === 0 ? 'Ramesh V. Patil & Brothers' : 'Suresh M. Deshmukh',
        registration: i % 2 === 0 ? 'Ramesh V. Patil' : 'Deshmukh Infrastructure Pvt Ltd',
      },
      difference: 'Co-owners listed in 7/12 RoR are omitted from recent Deed of Conveyance.',
      description: 'Recent sale deed registration does not include all mutated joint holders.',
      recommendedAction: 'Hold mutation workflow until Sub-Registrar clarification.'
    });
  }

  if (hasUnapprovedConstruction) {
    verificationStatus = 'ISSUES_DETECTED';
    issues.push({
      id: `ISS-${idNum}-3`,
      ruleId: 'RULE-06',
      title: 'Spatial Change Detected Without Building Permission',
      severity: 'HIGH',
      sources: {
        satellite2023: 'Open agricultural/vacant plot',
        satellite2026: 'New built-up footprint (~420 sq m)',
        planningPermission: 'No Active Building Permit Found'
      },
      difference: '+420 sq m unpermitted structure footprint',
      description: 'Geo-AI temporal change detection flagged new construction post-2023 with no correspond municipal approval.',
      recommendedAction: 'Issue notice via Planning Authority & order site verification.'
    });
  }

  if (hasTaxOutstanding && !hasAreaMismatch && !hasOwnerMismatch && !hasUnapprovedConstruction) {
    verificationStatus = 'PENDING_REVIEW';
  }

  const ownersList = [
    'Kulkarni Estate Developers LLP',
    'Ramesh V. Patil & Joint Holders',
    'Anand Rao Educational Trust',
    'Sahyadri Agri Tech Pvt Ltd',
    'Suresh M. Deshmukh',
    'Sunita Prakash Joshi',
    'Greenfield Logistics Park Ltd',
    'Mahesh D. Shinde & Family'
  ];
  const owner = ownersList[i % ownersList.length];

  return {
    id: idNum,
    ulpin: ulpin,
    surveyNo: surveyNo,
    village: village,
    taluka: 'Mulshi',
    district: 'Pune',
    state: 'Maharashtra',
    pinCode: '411057',
    area: `${areaHa} Ha`,
    areaRaw: areaHa,
    coordinates: coordinates,
    center: [centerLat, centerLng],
    landUse: landUse,
    masterPlanZone: landUse === 'Agricultural' ? 'Zone A - Green Belt / Agriculture' : 'Zone R-2 - Urban Residential Density',
    owner: owner,
    ownershipStatus: hasOwnerMismatch ? 'Flagged Inconsistency' : 'Verified Registered Owner',
    verificationStatus: verificationStatus,
    
    // Status Summary Matrix
    statusSummary: {
      ownership: hasOwnerMismatch ? 'ISSUE' : 'OK',
      registration: 'OK',
      encumbrance: hasMortgageWarning ? 'WARNING' : 'OK',
      landUse: 'OK',
      buildingPermission: hasUnapprovedConstruction ? 'MISSING' : 'OK',
      propertyTax: hasTaxOutstanding ? 'WARNING' : 'OK',
      dataConsistency: issues.length > 0 ? 'ISSUE' : 'OK',
      satelliteChange: hasUnapprovedConstruction ? 'ALERT' : 'NONE'
    },

    // 9 Detailed Sections for Parcel Digital Twin
    identity: {
      ulpin: ulpin,
      surveyNo: surveyNo,
      subDivision: `${(i % 4) + 1}`,
      areaHa: `${areaHa} Ha`,
      areaSqM: `${Math.round(areaHa * 10000)} sq. m.`,
      gisCoordinates: `${centerLat.toFixed(6)} N, ${centerLng.toFixed(6)} E`,
      village: village,
      taluka: 'Mulshi',
      district: 'Pune',
      state: 'Maharashtra',
      stateCode: '27'
    },

    ownership: {
      rorStatus: 'Active Mutation Verified (7/12 Excerpt)',
      khataNo: `KHA-${300 + i}`,
      mutationNo: `MUT-2024-${890 + i}`,
      primaryOwner: owner,
      jointOwnersCount: (i % 3) === 0 ? 3 : 1,
      rightsType: 'Occupant Class I (Bhumiswami)',
      lastMutationDate: '14 Feb 2024'
    },

    registration: {
      status: 'Record Match Found in SGR (Sub-Registrar)',
      sgrOffice: 'Sub-Registrar Mulshi-2',
      transactionId: `REG-2023-${4500 + i}`,
      registrationDate: '10 Nov 2023',
      deedType: 'Deed of Conveyance / Sale Deed',
      stampDutyStatus: 'Fully Paid (₹ 4,85,000)'
    },

    encumbrance: {
      mortgageStatus: hasMortgageWarning ? 'Mortgage Charge Registered' : 'Nil Encumbrance Certificate Issued',
      bankName: hasMortgageWarning ? 'State Bank of India (Pune Main Branch)' : 'N/A',
      loanAmount: hasMortgageWarning ? '₹ 75,000,000' : 'N/A',
      disputeIndicator: hasOwnerMismatch ? 'Title Dispute Pending in Civil Court' : 'No Civil Litigation Flagged'
    },

    landUsePlanning: {
      currentLandUse: landUse,
      masterPlanZone: landUse === 'Agricultural' ? 'Zone A - Agricultural / No Development' : 'Zone R2 - Medium Density Residential',
      permittedUse: landUse === 'Agricultural' ? 'Farming, Agri-Processing, Farmhouse' : 'Residential Apartments, Commercial Ground Floor',
      buildingPermissionStatus: hasUnapprovedConstruction ? 'No Municipal Approval Found' : 'Sanctioned Layout (PMRDA-BP-2024-1102)'
    },

    fiscal: {
      propertyTaxStatus: hasTaxOutstanding ? 'Outstanding Dues Pending' : 'Clear (Paid up to FY 2025-26)',
      assessmentId: `TAX-PUN-${9000 + i}`,
      outstandingAmount: hasTaxOutstanding ? `₹ ${12500 + (i * 450)}` : '₹ 0',
      taxedArea: `${(areaHa * 0.98).toFixed(2)} Ha`
    },

    infrastructure: {
      electricity: 'MSEDC 11kV Feeder Available',
      water: 'PMRDA Bulk Water Connection Pipeline',
      roadAccess: '18m Wide Village DPD Road Frontage',
      drainage: 'Stormwater Drain Network Connected'
    },

    restrictions: {
      environmental: landUse === 'Agricultural' ? 'Within 500m River Mula Buffer Zone' : 'No CRZ / Forest Restriction',
      planning: 'FSI / FAR Allowed: 1.50',
      otherRestrictions: 'Subject to High-Voltage Line Overhead Corridor Clearance'
    },

    spatialIntelligence: {
      changeStatus: hasUnapprovedConstruction ? 'Unpermitted Built-up Detected' : 'No Significant Change Detected',
      lastSatelliteScan: '15 Sep 2026 (Sentinel-2 / High-Res Optical)',
      detectedStructureArea: hasUnapprovedConstruction ? '420 sq. m.' : '0 sq. m.',
      confidenceScore: hasUnapprovedConstruction ? '87%' : '98%'
    },

    issues: issues,

    timeline: [
      { year: '2019', date: '12 Jan 2019', event: 'Parcel Baseline ULPIN Assignment', details: 'Assigned unique 14-digit ULPIN under Digital India Land Records Modernization Programme (DILRMP).' },
      { year: '2021', date: '04 Aug 2021', event: 'Ownership Sale Deed Execution', details: `Transferred title to ${owner} registered at Sub-Registrar Office.` },
      { year: '2023', date: '10 Nov 2023', event: 'Mortgage Charge Entry', details: hasMortgageWarning ? 'State Bank of India hypothecation charge entered in 7/12 record.' : 'Routine title verification completed.' },
      { year: '2025', date: '18 Mar 2025', event: 'PMRDA Planning Zone Clearance', details: 'Master Plan alignment verified with PMRDA DP map.' },
      { year: '2026', date: '15 Sep 2026', event: 'Geo-AI Satellite Change Alert', details: hasUnapprovedConstruction ? 'Geo-AI flagged 420 sq. m. structural expansion without registered building sanction.' : 'Periodic AI satellite scan verified no illegal encroachment.' }
    ]
  };
});

// Mock Workflows
export const MOCK_WORKFLOWS = [
  {
    id: 'WF-2026-801',
    ulpin: 'MH-PUN-001245',
    title: 'Unsanctioned Construction & Area Mismatch Audit',
    type: 'SPATIAL_ANOMALY',
    triggerEvent: 'Geo-AI Change Detection & Rule Check',
    assignedDepartment: 'Planning & Revenue Department',
    assignedOfficer: 'Officer S. K. Kulkarni (Revenue Inspector)',
    createdDate: '28 Sep 2026',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    steps: [
      { name: 'Geo-AI Alert Generated', status: 'COMPLETED', date: '28 Sep 2026 09:15 AM' },
      { name: 'Cross-Check Building Permits', status: 'COMPLETED', date: '28 Sep 2026 10:30 AM' },
      { name: 'Assign Field Inspection Officer', status: 'COMPLETED', date: '29 Sep 2026 11:00 AM' },
      { name: 'Physical Site Survey & Measurement', status: 'IN_PROGRESS', date: 'Pending' },
      { name: 'Final Recommendation & Action', status: 'PENDING', date: 'Pending' }
    ]
  },
  {
    id: 'WF-2026-802',
    ulpin: 'MH-PUN-001247',
    title: 'Ownership Name Inconsistency Resolution',
    type: 'REGISTRATION_EVENT',
    triggerEvent: 'Sub-Registrar Deed Conveyance Upload',
    assignedDepartment: 'Registration & Revenue Department',
    assignedOfficer: 'Officer M. N. Deshpande (Sub-Registrar)',
    createdDate: '26 Sep 2026',
    status: 'PENDING_OFFICER_ACTION',
    priority: 'HIGH',
    steps: [
      { name: 'Sale Deed Registered', status: 'COMPLETED', date: '26 Sep 2026 02:40 PM' },
      { name: 'Consistency Engine Flagged Co-owner Omission', status: 'COMPLETED', date: '26 Sep 2026 02:42 PM' },
      { name: 'Notice Issued to Transferee', status: 'IN_PROGRESS', date: '27 Sep 2026 04:00 PM' },
      { name: 'Officer Hearing & Review', status: 'PENDING', date: 'Pending' }
    ]
  },
  {
    id: 'WF-2026-803',
    ulpin: 'MH-PUN-001249',
    title: 'Property Tax Dues Clear Audit',
    type: 'FISCAL_AUDIT',
    triggerEvent: 'Municipal Property Tax Assessment Integration',
    assignedDepartment: 'Municipal Corporation (PMRDA)',
    assignedOfficer: 'Officer P. V. Joshi (Tax Inspector)',
    createdDate: '25 Sep 2026',
    status: 'RESOLVED',
    priority: 'LOW',
    steps: [
      { name: 'Tax Discrepancy Flagged', status: 'COMPLETED', date: '25 Sep 2026 08:00 AM' },
      { name: 'Challan Payment Verified', status: 'COMPLETED', date: '26 Sep 2026 01:20 PM' },
      { name: 'Tax Clearance Certificate Synced', status: 'COMPLETED', date: '27 Sep 2026 05:00 PM' }
    ]
  }
];

// Mock Audit Logs
export const MOCK_AUDIT_LOGS = [
  {
    id: 'AUD-9021',
    officerId: 'REV-1023 (S. K. Kulkarni)',
    ulpin: 'MH-PUN-001245',
    action: 'Viewed Encumbrance Record & Spatial Change Report',
    department: 'Revenue & Land Records',
    timestamp: '30 Sep 2026, 10:42 AM',
    ipAddress: '10.240.12.84',
    status: 'SUCCESS'
  },
  {
    id: 'AUD-9020',
    officerId: 'REG-4012 (M. N. Deshpande)',
    ulpin: 'MH-PUN-001247',
    action: 'Triggered Ownership Discrepancy Notice Workflow',
    department: 'Registration & Stamps',
    timestamp: '30 Sep 2026, 09:15 AM',
    ipAddress: '10.240.15.19',
    status: 'SUCCESS'
  },
  {
    id: 'AUD-9019',
    officerId: 'CIT-DEMO-99',
    ulpin: 'MH-PUN-001245',
    action: 'Citizen Requested Due-Diligence Summary',
    department: 'Citizen Self-Service Portal',
    timestamp: '29 Sep 2026, 04:30 PM',
    ipAddress: '157.33.201.44',
    status: 'SUCCESS'
  },
  {
    id: 'AUD-9018',
    officerId: 'PLN-8821 (A. R. Patil)',
    ulpin: 'MH-PUN-001249',
    action: 'Cross-checked Master Plan R-2 Zoning Buffer',
    department: 'PMRDA Planning Authority',
    timestamp: '29 Sep 2026, 02:10 PM',
    ipAddress: '10.240.8.102',
    status: 'SUCCESS'
  },
  {
    id: 'AUD-9017',
    officerId: 'SYSTEM_GEO_AI',
    ulpin: 'MH-PUN-001245',
    action: 'Automated Satellite Imagery Change Detection Run',
    department: 'Geo-AI Processing Engine',
    timestamp: '28 Sep 2026, 09:00 AM',
    ipAddress: 'INTERNAL_DAEMON',
    status: 'ALERT_GENERATED'
  }
];

// State Mapping Adapters
export const STATE_ADAPTERS = [
  {
    state: 'Maharashtra',
    code: 'MH',
    localTerm: '7/12 Extract (Saat Bara) & Mutation (Ferfar)',
    rorSource: 'Mahabhulekh (e-Haqq)',
    cadastralSource: 'Mahaboomi (i-Sarita)',
    commonMapping: {
      surveyNumber: 'Gut Number / Survey No',
      ownerName: 'Khatedar / Occupant',
      areaUnit: 'Hectare-Acre-Guntha',
      encumbrance: 'Boja / Mortgage Entry'
    }
  },
  {
    state: 'Tamil Nadu',
    code: 'TN',
    localTerm: 'Patta / Chitta & A-Register',
    rorSource: 'Anytime Anywhere e-Services (e-Patta)',
    cadastralSource: 'Collabland FMB GIS',
    commonMapping: {
      surveyNumber: 'Survey No / Sub-Division',
      ownerName: 'Pattadar Name',
      areaUnit: 'Hectare-Are / Hectare-Sq.m',
      encumbrance: 'EC (Encumbrance Certificate)'
    }
  },
  {
    state: 'Karnataka',
    code: 'KA',
    localTerm: 'Bhoomi RTC (Record of Rights, Tenancy & Crop)',
    rorSource: 'Bhoomi Portal Engine',
    cadastralSource: 'Mojini GIS Cadastral',
    commonMapping: {
      surveyNumber: 'Survey / Hissa No',
      ownerName: 'Khata Holder',
      areaUnit: 'Acre-Gunta',
      encumbrance: 'Bank Charge Entry'
    }
  }
];
