import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

 export const SiderItem = [
   {
    "title": "Dashboard",
    "icon": "bx bx-grid-alt",
    // "path": "/dashboard"
   },
   {
        "title": "Patient",
        "icon": 'bi bi-person-fill',
        "childrens": [
            {
                "title": "Add New Patient",
                // "icon": "bi-house-fill",
                // "path": "/"
            },
            {
                "title": "Patient",
                // "icon": "bi-info-circle-fill",
                // "path": "/about"
            },
            
            {
                "title": "Patient Family",
                // "icon": "bi-question-circle-fill"
            }
        ]
    },
    {
        "title": "Appointment",
        "icon": "bi bi-journal-text",
        "childrens": [
            {
                "title": "Add New Appointment",
                // "path": "/login"
            },
            {
                "title": "View Appointments",
                // "path": "/register"
            },
            
        ]
    },
    {
      "title": "Lab Work",
      "icon": "bi bi-clipboard-plus",
      // "path": "/support"
  },
  {
    "title": "Communication",
    "icon": "bi bi-headset",
    // "path": "/support"
},
    {
        "title": "Acounts",
        "icon": "bi bi-people-fill",
        "childrens": [
            {
                "title": "Add New Account",
                "path": "/search"
            },
            {
                "title": "View Accounts",
                "path": "/history"   
            }
        ]
    },
    {
      "title": "Report",
      "icon": "bi bi-bar-chart-line-fill",
      "path": "/report-bug"
  },
    {
        "title": "Admistrator",
        "icon": "bi bi-person-workspace",
        "path": "/support"
    },
    {
      "title": "Inventory",
      "icon": "bi bi-bar-chart-line-fill",
      "path": "/support"
  },
  {
    "title": "Help",
    "icon": "bi bi-question-circle",
    "path": "/support"
},
]