/* eslint-disable indent, quotes */

export default {
    "messages": [{"foo": "bar"}],
    "user": {
        "firstName": "tester10",
        "middleInitial": null,
        "lastName": "test",
        "createdDt": "2016-03-11 01:41:44+0000",
        "updatedDt": "2016-03-21 17:43:23+0000",
        "lastVerifiedDt": "2016-03-21 17:43:23+0000",
        "status": "ACTIVE",
        "tokens": [
            {
                "tokenHash": "6dc9f74a036f634f5e46ccfbf12e629b",
                "tokenValue": "cn=test tester10,ou=people,ou=dae,ou=chimera,o=u.s. government,c=us",
                "createdDt": "2016-03-11 01:41:44+0000",
                "updatedDt": "2016-03-21 17:43:23+0000",
                "status": "ENABLED"
            }
        ],
        "phones": [
            {
                "phoneNumber": "123-213-1234 1234",
                "isPrimary": true,
                "phoneType": "UNKNOWN"
            }
        ],
        "emailAddresses": [
            {
                "address": "test.tester10@sipr.com",
                "isPrimary": false,
                "type": "SIPR"
            },
            {
                "address": "test.tester10@ic.com",
                "isPrimary": true,
                "type": "JWICS"
            },
            {
                "address": "test.tester10@nipr.com",
                "isPrimary": false,
                "type": "NIPR"
            }
        ],
        "aacAttribs": {
            "userDN": "cn=test tester10,ou=people,ou=dae,ou=chimera,o=u.s. government,c=us",
            "diasUserGroups": {
                "projects": [
                    {
                        "projectName": "Chimera",
                        "groupNames": [
                            "chimera",
                            "era_rest",
                            "era_rest_admin",
                            "era_oversight",
                            "era_audit",
                            "df_01",
                            "df_02",
                            "df_03",
                            "srv_user_admin",
                            "sri_blue"
                        ]
                    },
                    {
                        "projectName": "RMT",
                        "groupNames": [
                            "Reader",
                            "MAC_UNKNOWN",
                            "USP_II",
                            "USP_PII",
                            "SC",
                            "DEA",
                            "CIR_A1",
                            "CIR_A2",
                            "CIR_A3",
                            "DR_A1",
                            "TELCOM",
                            "LIGHTSPEED",
                            "WIRES",
                            "AUTOBOTS",
                            "OPTIMUS_PRIME",
                            "BUMBLEBEE",
                            "HOTROD",
                            "JAZZ",
                            "WHEELJACK",
                            "IRONHIDE",
                            "RED_ALERT",
                            "LAMPSHADE",
                            "BROWN",
                            "BLUE",
                            "PURPLE",
                            "DISCEPTICON",
                            "MEGATON",
                            "STARSCREAM",
                            "SHOCKWAVE",
                            "FULL_TILT"
                        ]
                    },
                    {
                        "projectName": "Focal Point",
                        "groupNames": [
                            "Reader",
                            "ACCM_UNKNOWN",
                            "BLACK_ASH",
                            "BIGTOOTH_ASPEN",
                            "QUAKING_ASPEN",
                            "AMERICAN_BEECH",
                            "PAPER_BIRCH",
                            "YELLOW_BIRCH",
                            "BLACK_CHERRY",
                            "AMERICAN_CHESTNUT",
                            "CUCUMBER_TREE",
                            "SLIPPERY_ELM",
                            "BALSAM_FIR",
                            "EASTERN_HEMLOCK",
                            "BITTERNUT_HICKORY",
                            "BLACK_LOCUST",
                            "SILVER_MAPLE",
                            "BLACK_OAK",
                            "CHESTNUT_OAK",
                            "SCARLET_OAK",
                            "RED_SPRUCE",
                            "TULIP_TREE",
                            "WHITE_ASH"
                        ]
                    }
                ]
            },
            "whitePageAttributes": {
                "firstName": "tester10",
                "surName": "test",
                "uid": "",
                "companyName": "",
                "telephoneNumber": "123-213-1234 1234",
                "icEMail": "test.tester10@ic.com",
                "siprnetEmail": "test.tester10@sipr.com",
                "niprnetEmail": "test.tester10@nipr.com"
            },
            "userClearance": {
                "clearance": "TS",
                "clearanceRank": 0,
                "formalAccess": [
                    "HCS",
                    "TK",
                    "SI",
                    "-G"
                ],
                "citizenship": "USA"
            },
            "gimmeeAttributes": {
                "organization": "DIA",
                "topic": [],
                "region": [],
                "isAICP": false
            },
            "localUserGroups": {
                "projects": []
            },
            "nAccms": [
                {
                    "coi": "ACCM_UNKNOWN",
                    "disp_nm": "ACCM UNKNOWN",
                    "coi_ctrls": null
                },
                {
                    "coi": "BLACK_ASH",
                    "disp_nm": "BLACK ASH",
                    "coi_ctrls": null
                },
                {
                    "coi": "WHITE_ASH",
                    "disp_nm": "WHITE ASH",
                    "coi_ctrls": null
                },
                {
                    "coi": "BIGTOOTH_ASPEN",
                    "disp_nm": "BIGTOOTH ASPEN",
                    "coi_ctrls": null
                },
                {
                    "coi": "QUAKING_ASPEN",
                    "disp_nm": "QUAKING ASPEN",
                    "coi_ctrls": null
                },
                {
                    "coi": "AMERICAN_BEECH",
                    "disp_nm": "AMERICAN BEECH",
                    "coi_ctrls": null
                },
                {
                    "coi": "PAPER_BIRCH",
                    "disp_nm": "PAPER BIRCH",
                    "coi_ctrls": null
                },
                {
                    "coi": "YELLOW_BIRCH",
                    "disp_nm": "YELLOW BIRCH",
                    "coi_ctrls": null
                },
                {
                    "coi": "BLACK_CHERRY",
                    "disp_nm": "BLACK CHERRY",
                    "coi_ctrls": null
                },
                {
                    "coi": "AMERICAN_CHESTNUT",
                    "disp_nm": "AMERICAN CHESTNUT",
                    "coi_ctrls": null
                },
                {
                    "coi": "CUCUMBER_TREE",
                    "disp_nm": "CUCUMBER TREE",
                    "coi_ctrls": null
                },
                {
                    "coi": "SLIPPERY_ELM",
                    "disp_nm": "SLIPPERY ELM",
                    "coi_ctrls": null
                },
                {
                    "coi": "BALSAM_FIR",
                    "disp_nm": "BALSAM FIR",
                    "coi_ctrls": null
                },
                {
                    "coi": "EASTERN_HEMLOCK",
                    "disp_nm": "EASTERN HEMLOCK",
                    "coi_ctrls": null
                },
                {
                    "coi": "BITTERNUT_HICKORY",
                    "disp_nm": "BITTERNUT HICKORY",
                    "coi_ctrls": null
                },
                {
                    "coi": "BLACK_LOCUST",
                    "disp_nm": "BLACK LOCUST",
                    "coi_ctrls": null
                },
                {
                    "coi": "SILVER_MAPLE",
                    "disp_nm": "SILVER MAPLE",
                    "coi_ctrls": null
                },
                {
                    "coi": "BLACK_OAK",
                    "disp_nm": "BLACK OAK",
                    "coi_ctrls": null
                },
                {
                    "coi": "CHESTNUT_OAK",
                    "disp_nm": "CHESTNUT OAK",
                    "coi_ctrls": null
                },
                {
                    "coi": "SCARLET_OAK",
                    "disp_nm": "SCARLET OAK",
                    "coi_ctrls": null
                },
                {
                    "coi": "RED_SPRUCE",
                    "disp_nm": "RED SPRUCE",
                    "coi_ctrls": null
                },
                {
                    "coi": "TULIP_TREE",
                    "disp_nm": "TULIP TREE",
                    "coi_ctrls": null
                }
            ],
            "nFormalAccess": [
                "HCS",
                "TK",
                "SI",
                "-G"
            ],
            "status": "SUCCESS",
            "nMacs": [
                {
                    "coi": "MAC_UNKNOWN",
                    "disp_nm": "MAC UNKNOWN"
                },
                {
                    "coi": "USP_II",
                    "disp_nm": "USP II"
                },
                {
                    "coi": "DEA",
                    "disp_nm": "DEA"
                },
                {
                    "coi": "CIR_A1",
                    "disp_nm": "CIR A1"
                },
                {
                    "coi": "CIR_A2",
                    "disp_nm": "CIR A2"
                },
                {
                    "coi": "CIR_A3",
                    "disp_nm": "CIR A3"
                },
                {
                    "coi": "DR_A1",
                    "disp_nm": "DR A1"
                },
                {
                    "coi": "TELCOM",
                    "disp_nm": "TELCOM"
                },
                {
                    "coi": "LIGHTSPEED",
                    "disp_nm": "LIGHTSPEED"
                },
                {
                    "coi": "WIRES",
                    "disp_nm": "WIRES"
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS"
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "OPTIMUS_PRIME",
                            "disp_nm": "OPTIMUS PRIME"
                        }
                    ]
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "BUMBLEBEE",
                            "disp_nm": "BUMBLEBEE"
                        }
                    ]
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "HOTROD",
                            "disp_nm": "HOTROD"
                        }
                    ]
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "JAZZ",
                            "disp_nm": "JAZZ"
                        }
                    ]
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "WHEELJACK",
                            "disp_nm": "WHEELJACK"
                        }
                    ]
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "IRONHIDE",
                            "disp_nm": "IRONHIDE"
                        }
                    ]
                },
                {
                    "coi": "AUTOBOTS",
                    "disp_nm": "AUTOBOTS",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "RED_ALERT",
                            "disp_nm": "RED ALERT"
                        }
                    ]
                },
                {
                    "coi": "LAMPSHADE",
                    "disp_nm": "LAMPSHADE"
                },
                {
                    "coi": "LAMPSHADE",
                    "disp_nm": "LAMPSHADE",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "BROWN",
                            "disp_nm": "BROWN"
                        }
                    ]
                },
                {
                    "coi": "LAMPSHADE",
                    "disp_nm": "LAMPSHADE",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "BLUE",
                            "disp_nm": "BLUE"
                        }
                    ]
                },
                {
                    "coi": "LAMPSHADE",
                    "disp_nm": "LAMPSHADE",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "PURPLE",
                            "disp_nm": "PURPLE"
                        }
                    ]
                },
                {
                    "coi": "DISCEPTICON",
                    "disp_nm": "DISCEPTICON"
                },
                {
                    "coi": "DISCEPTICON",
                    "disp_nm": "DISCEPTICON",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "MEGATON",
                            "disp_nm": "MEGATON"
                        }
                    ]
                },
                {
                    "coi": "DISCEPTICON",
                    "disp_nm": "DISCEPTICON",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "STARSCREAM",
                            "disp_nm": "STARSCREAM"
                        }
                    ]
                },
                {
                    "coi": "DISCEPTICON",
                    "disp_nm": "DISCEPTICON",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "SHOCKWAVE",
                            "disp_nm": "SHOCKWAVE"
                        }
                    ]
                },
                {
                    "coi": "DISCEPTICON",
                    "disp_nm": "DISCEPTICON",
                    "coi_ctrls": [
                        {
                            "coi_ctrl": "FULL_TILT",
                            "disp_nm": "FULL TILT"
                        }
                    ]
                },
                {
                    "coi": "DF_01",
                    "disp_nm": "DF 01"
                },
                {
                    "coi": "DF_02",
                    "disp_nm": "DF 02"
                },
                {
                    "coi": "DF_03",
                    "disp_nm": "DF 03"
                }
            ]
        }
    }
};

/* eslint-enable indent, quotes */
