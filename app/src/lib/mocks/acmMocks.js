// acmMocks.js

export default {
  secret: {
    version: '2.1.0',
    classif: 'S',
    owner_prod: [],
    atom_energy: [],
    sar_id: [],
    sci_ctrls: [],
    disponly_to: [],
    dissem_ctrls: [
      'OC'
    ],
    non_ic: [],
    rel_to: [],
    fgi_open: [],
    fgi_protect: [],
    portion: 'S//OC',
    banner: 'SECRET//ORCON',
    accms: [],
    macs: [],
    oc_attribs: [
      {
        'orgs': [
          'cia'
        ],
        'missions': [],
        'regions': []
      }
    ],
    disp_only: ''
  },
  topSecret: {
    version: '2.1.0',
    banner: 'TOP SECRET//SI/TALENT KEYHOLE//USA/AFG/AIA EYES ONLY',
    classif: 'TS',
    classif_rank: '5000',
    rel_to: [
      'USA',
      'AFG',
      'AIA'
    ],
    dissem_ctrls: [
      'EYES'
    ],
    portion: 'TS//SI/TK//USA/AFG/AIA EYES ONLY',
    sci_ctrls: [
      'SI',
      'TK'
    ]
  },
  confidential: {
    version: '2.1.0',
    classif: 'C',
    owner_prod: [],
    atom_energy: [],
    sar_id: [],
    sci_ctrls: [],
    disponly_to: [],
    dissem_ctrls: [
      'OC'
    ],
    non_ic: [],
    rel_to: [],
    fgi_open: [],
    fgi_protect: [],
    portion: 'C//OC',
    banner: 'CONFIDENTIAL//ORCON',
    accms: [],
    macs: [],
    oc_attribs: [
      {
        orgs: [
          'cia'
        ],
        missions: [],
        regions: []
      }
    ],
    disp_only: ''
  },
  openAttributed: {
    version: '2.1.0',
    banner: 'UNCLASSIFIED//DISPLAY ONLY AFG, FVEY',
    portion: 'U//DISPLAY ONLY AFG, FVEY',
    classif: 'U',
    classif_rank: '100',
    dissem_ctrls: [
      'DISPLAYONLY'
    ],
    disponly_to: [
      'AFG',
      'FVEY'
    ],
    fgi_open: []
  },
  unclassified: {
    version: '2.1.0',
    banner: 'UNCLASSIFIED',
    portion: 'U',
    classif: 'U'
  }
};
