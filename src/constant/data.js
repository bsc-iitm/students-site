export const carouselList = [
  {
    link: "https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e05b8de27076e3216_Landing-1-web.jpg",
    caption: "Lorem ipsum dolor sit amet consecutor la adipes"
  },
  {
    link: "https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63d2e79e716606bc471ee600_Landing-4-web.jpg",
    caption: "Lorem ipsum dolor sit amet consecutor la adipes"
  },
  {
    link: "https://uploads-ssl.webflow.com/63a4093ca918637551d8e43e/63e1eaf5e07cdb90e2dbd922_IMG-20220306-WA0028.jpg",
    caption: "Lorem ipsum dolor sit amet consecutor la adipes"
  }
];

// const fetchSECMembers = () => {
//   fetch("https://docs.google.com/spreadsheets/d/1O-20WEkUfIkmcZNpqWTKCVBlbVeb6suyl4Y8Gvzu88s/gviz/tq?tqx=out:json&gid=0").then((r) => {
//     console.log(r);
//     r.text().then((d) => {
//       const a = d.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/);
//       if (!!a && a.length == 2) {
//         const obj = JSON.parse(a[1]);
//         const table = obj.table;
//         const header = table.cols.map(({label}) => label);
//         const rows = table.rows.map(({c}) => c.slice(0, 4).map(( (x) => x && x.v || null )));
//         console.log(rows)
//       }
//     }).catch((e) => {console.log(e)})
//   }).catch((e) => {
//     console.log(e)
//   })
// }
// // fetchSECMembers();

export const mainEvents = [
  {
    name: "Paradox '22",
    desc: "Event Description",
    date: "20 May 2022",
    imgURL: "https://noufal.engineer/iitmbsc.org//banners/banner1.webp"
  },
  {
    name: "Event 2",
    desc: "Event Description",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 3",
    desc: "Event Description",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  }
];

export const opportunities = [
  {
    name: "CLUBS",
    "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "STUDY GROUPS",
    "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "EXECUTIVE OFFICE",
    "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  }
];

export const support = [
  {
    name: "WELLNESS CENTER",
    imgURL: "https://media.cntraveler.com/photos/5c4f70bbfdd6962d13041539/master/w_1600%2Cc_limit/YO1-Wellness-Center__2019_285A8155-HDR.jpg",
    to: "/services/wellness-center"
  },
  {
    name: "GRIEVENCE CELL",
    imgURL: "https://www.mpgi.edu.in/images/social-reverence-01.jpg",
    to: "/services/grievance-redressal"
  },
  {
    name: "SUPPORT",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
    to: "/services/support"
  }
];

export const sec = [
  {
    name: "Madhurima Ghosh",
    house: "Bandipur",
    imgURL: "https://lh6.googleusercontent.com/R_JfAiEHcYoiq6svW8LWUmeKO5jJCDO7FcCVIxzW-U2Bvt33pS0a-FOXERbDQmjERVj9trYK-CLldA7g4H-FFmae6xdYIl6q65otcSGcI49Ei-M6xiR6eeTluU4cvlyM9A=w1280"
  },
  {
    name: "Gagneet Kaur",
    house: "Corbett",
    imgURL: "https://lh3.googleusercontent.com/vYPy_lcFaFj7coa-EFt3ssCsfsuuKd_UazQmi9RMRBX7LmpCo2VzUmaLDE9sIG9hjEq08ZfZ_3JrBexKg06AyNAni4PD3855FaUQRTzNVwIE9HaH-8O9Iis3jTJE3PFZXQ=w1280"
  },
  {
    name: "Harsh Kumar Upadhyay",
    house: "Gir",
    imgURL: "https://lh6.googleusercontent.com/fLnGF0f0sU1mpM-Q1765a3k8uLO293V7mxdJ_om0KzF_N3fBWAlk5xV7-MtMCLiCh_egWxmBQMgQ441zZH-ypoI=w1280"
  },
  {
    name: "Aditi Manthiripragada",
    house: "Kanha",
    imgURL: "https://lh4.googleusercontent.com/XPYCnxV25e7RvCICs8binMupwiZ6_BeO_1dG9nHWrulFA3HM9rlRKIE1z1j4Au8XnJLBpzdl2Edzz2kAhImz41zpVD-Hli4PFq2CLFVfs4tEXSleHC3ZO-NPe763RIFRZw=w1280"
  },
  {
    name: "Rahul Sharma",
    house: "Kaziranga",
    imgURL: ""
  },
  {
    name: "Dheeraj Mukhirala",
    house: "Nallamala",
    imgURL: "https://lh6.googleusercontent.com/F8MErLuESx3jP7iD-XjFPEOMgcuN_9gKfMoCfOZvzenzn7EbqFFsyWBO4K0GIsrjBuT_u4HpgD4LZIN2FJrdFs8x6L-kP8o6TU7CDYRU6R2S9k2MKApIZ6TMu1a2vgdSTA=w1280"
  },
  {
    name: "Saharsh Samir",
    house: "Namdapha",
    imgURL: "https://lh6.googleusercontent.com/yNIRWgqlOUgUd546cpJypPCwAfpRxPcX13duHLNgliKGsOfLOhckMfX_PhHdIn9xCWPmvu3Qw_mNEWb2A0fCTC2l12lH36STleB9SoZ-IVLr30JXRMtvqJWNR2w8gfHjzA=w1280"
  },
  {
    name: "Gokulakrishnan",
    house: "Nilgiri",
    imgURL: ""
  },
  {
    name: "Kirupa Krishnan",
    house: "Pichavaram",
    imgURL: ""
  },
  {
    name: "Anurag Mondal",
    house: "Saranda",
    imgURL: "https://lh4.googleusercontent.com/vp-xEE9W6BIPgdY60frxzCrRpb3aab-xLfpuaqtATJRr0Wb4giH4ZyGdAE5P4BEQVfR7BwcF369Fn2riZKkKsUFrbTTVHem4LMN5bu5zpCnlJz6Vm-z6BefngWvmZz-CwQ=w1280"
  },
  {
    name: "Anshuman Bhasin",
    house: "Sunderbans",
    imgURL: ""
  },
  {
    name: "Tushar Rana",
    house: "Wayanad",
    imgURL: "https://lh6.googleusercontent.com/-DEdbh1Ie3l8iRt9es9ouOnVwSnDfqUpf1qmAcJ00W0lXoJCNY1IQyq_wxKcL2nWU4PQ_ip0WM7SFHo3_heWAou6wrwmbRWY2wcToMQql9x0O9LFRtezRonVR-_aF_RDHw=w1280"
  }
]

export const ds = [
  {
    name: "Harshvardan Kadwe",
    house: "Bandipur",
    imgURL: "https://lh5.googleusercontent.com/VstUloiWPsmP3YsYpTj_-fHn9hOkTqqMWERrD1WRFG6YLMbjjnR8oClTfNAb81UWxk8HMvSx1VP1YuPUhVqo1y_PphelaP2oqzAD7XOPUPMdiDN0cjz6l-3PoW-SVFbiYQ=w1280"
  },
  {
    name: "Aarthi",
    house: "Corbett",
    imgURL: "https://lh6.googleusercontent.com/Rcqd3HN4ov8PdyKA1tg7T9NoKW5T3syCZ2jjLEE0JXPL_lQDEVda9Tm1DEMfymus8xR_A2g4CJeUZJT6w2HsM8xcK9XUgNedJMuZBEvhDO27JOrOxMx2pe1h1hAoGKCUqw=w1280"
  },
  {
    name: "Myisha Singh",
    house: "Gir",
    imgURL: "https://lh3.googleusercontent.com/nez4tuqgk49XaCKoy6Z00T9q1_CA8Dd7AKCuJTx-PtSx4QJl-jyyIBtSLR9uU0U4xMqg03FPSnKNvA2F5vPxRZabNW63BhiO-2pBvCPu7yFgNcx-9InRDsBtSTPrTrx3zg=w1280"
  },
  {
    name: "Vineet Donthi",
    house: "Kanha",
    imgURL: "https://lh4.googleusercontent.com/96pehZhN_i8CAcqgjD4I7cXQyk92SjJ-DMtV4HzAYxlMF_TjgZTsfYufT-Wi3aGYjfbxyzKVFabC2lXSKU2O124D1sDdoSuufTzseb-r6gk3EL9aZosGLRDuZzjVe3EUiw=w1280"
  },
  {
    name: "Shraddha Kajle",
    house: "Kaziranga",
    imgURL: "https://lh6.googleusercontent.com/ABFueRveKMr4VFZNyV0ui3XIIH6M3pS-qEe6eiWCe9qCzLIP6eEPkid4CrQbpCz5VQxbHNgbKPsebMM1BKjqMF-kOtkPvVA9quTArNaNKIxHm-5qSiQmA634lDvTfitl1g=w1280"
  },
  {
    name: "Shalini Singh",
    house: "Nallamala",
    imgURL: "https://lh6.googleusercontent.com/3Qk6Qn6Esczfl5ZoEHHO147DT2wsZyN1zU3TPRoa8eLaPCDddtW2uOiTNJmRAd9aNbldCXDVlYDs5lwJOpEvWE-3s7MEc1A7cJIXbP_JVaPwviyvcSsGICtrL_0P3WgG7g=w1280"
  },
  {
    name: "Nathania Fernandes",
    house: "Namdapha",
    imgURL: "https://lh6.googleusercontent.com/SLKAIOut5vKY9b1NTOE9hmZsFvVQlbk_SYGoI6dzYhGKrIdU_WsKXJuOk5f45zGObHBIdsHoEWHzVJTQmz3UARLK-ZUOWZ_i8ODnAw6EumIr50DU5fICsyHqMaBOrgpkCA=w1280"
  },
  {
    name: "Gokulakrishnan",
    house: "Nilgiri",
    imgURL: ""
  },
  {
    name: "Chikirsha Gulati",
    house: "Pichavaram",
    imgURL: ""
  },
  {
    name: "Pranjal Choudury",
    house: "Saranda",
    imgURL: "https://lh5.googleusercontent.com/ofSfq2yN0rQU5r5nrd_tGLAUbjtQQfyr5DiNOWc3FMnp58PjzKyIfTNqkxshFm-YrlXGPvgVxhYnzxSVcTk35H9Z3DrrswOY8AEPpdUxF6BcYAW6z8Tvb66qhCfxC85vuQ=w1280"
  },
  {
    name: "Utkarsh Gaurav",
    house: "Sunderbans",
    imgURL: ""
  },
  {
    name: "Satabarna Tapadar",
    house: "Wayanad",
    imgURL: "https://lh3.googleusercontent.com/oJa4cyEKw0ZnOzRWjmk3cVfKt8_yid8S29otD3GLV9XIiygJ5NK1_6HPVjiuDJh_CcnErt8tZ7-deAOH5MOU7UY=w1280"
  }
]

export const wa = [
  {
    name: "Ashwin Hebbar",
    house: "Bandipur",
    imgURL: "https://lh3.googleusercontent.com/TDNMF1_GlCeClRLjTfGuX_DrQeijlcf5vz3kojDyzJ_HNOZc1dfnNFb46EQLvmOSjs0uNqQmJi_G_uYBfIgFm3tpJ2p1a5snk4Ypfpnzt8UET7kgyzX3lIbqc8zJ0wP9aQ=w1280"
  },
  {
    name: "Unknown",
    house: "Corbett",
    imgURL: ""
  },
  {
    name: "Athul Srinivas",
    house: "Gir",
    imgURL: "https://lh3.googleusercontent.com/cY9jswtx21IhXYyFTuOdkJNkJZi8RV_3MWEso-1EAqotuY4YBcxISkwQ8_ebXW4edJ8Q_oiBpDHpkRV0eqtZJaCvcitsmSkd6R_mSOnI4vDAoOHJAtWTt1MGa9rOA-Jpsg=w1280"
  },
  {
    name: "Jagannidhi Namasivayam",
    house: "Kanha",
    imgURL: "https://lh4.googleusercontent.com/ak99BYjcBjSTsi2G7Z4LEEBhLqQNG6u3RMjWy4Mvel3_muIjZXB5HQz-G5_M_g9QkKo4EcOZ6svFFSnOsWYDX9hj87NsSBTf0mUlCocHD6kqd9j0LZIlrnEaH5lQQy0bwQ=w1280"
  },
  {
    name: "Kandhapu Snehith",
    house: "Kaziranga",
    imgURL: ""
  },
  {
    name: "Swapnadeep Pradhan",
    house: "Nallamala",
    imgURL: "https://lh6.googleusercontent.com/HxYukRypBGZo9SDp-BCflmgqHIEbrOYB9t2DOec8fsPmg6AhESFYXDUOxyE8Pt8qMf7JDJWNGmYzyn5uaZL8QBN8UNqO9bVf92w9qNtUVnhXxRJlB9XIi_-H9twpBc2Ggw=w1280"
  },
  {
    name: "Yawar Mushtaq",
    house: "Namdapha",
    imgURL: "https://lh6.googleusercontent.com/6XoWf2YMBNxG75Mskt8aU4SH-MA0ntOOiZnCcR8pkwr_-m5hZwDN-JlS1ZWBltQnVK8YcWZLFmKKk7Th7VIUoWEGgVEIQOankwFurp8_lElmfovJLMES2OxyJ3suiOmwEw=w1280"
  },
  {
    name: "Unknown",
    house: "Nilgiri",
    imgURL: ""
  },
  {
    name: "Gurneet Bhuller",
    house: "Pichavaram",
    imgURL: ""
  },
  {
    name: "Vigneshwaran",
    house: "Saranda",
    imgURL: "https://lh3.googleusercontent.com/7-Ua0dUyCb-7D_97_K2AObA5HOvZmji_M1ch6Ezwl-3NwStJ5WW3CxuvPP0cbXG7OOtIonKD3wHK1nQg5A6uikPmrG3hI6e4wSfRofE1MgYc212ADokK2n7Usro6ohyQOw=w1280"
  },
  {
    name: "Abhigyan Das",
    house: "Sunderbans",
    imgURL: ""
  },
  {
    name: "Archit Srivastava",
    house: "Wayanad",
    imgURL: "https://lh5.googleusercontent.com/h1WD_ue6RjBq63MTe4sQ-VwHJmaAKnHErCG9q4GJ2YfeffiqqW-wIpoagXsd1wFfKYA7EBUVa-HKMSlWf8KL9Sg=w1280"
  }
]

export const events = [
  {
    name: "Event 1",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 2",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 3",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 4",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 5",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 6",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 7",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 8",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 9",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 10",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 11",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  },
  {
    name: "Event 12",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
    date: "01 Jan 2022",
    imgURL: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
  }
];

export const execOpenings = [
  {
    title: "Regional Coordinator",
    desc: "Take the responsibility of arranging meets and events in your area"
  },
  {
    title: "Regional Coordinator",
    desc: "Take the responsibility of arranging meets and events in your area"
  },
  {
    title: "Regional Coordinator",
    desc: "Take the responsibility of arranging meets and events in your area"
  },
  {
    title: "Regional Coordinator",
    desc: "Take the responsibility of arranging meets and events in your area"
  },
  {
    title: "Regional Coordinator",
    desc: "Take the responsibility of arranging meets and events in your area"
  }
];
export const clubs = [
  {
    name: "Coding Club",
    imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
  },
  {
    name: "MuFix",
    imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
  },
  {
    name: "Wanderbee",
    imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
  },
  {
    name: "Heighers eSports",
    imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
  },
  {
    name: "Cosmos",
    imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
    desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
  }
]

export const wps = {
  labels: [
    "Students",
    "Working Professionals"
  ],
  datasets: [{
    label: "Learners in this category",
    data: [560,101],
    backgroundColor: ["#79201b","#d7a74f"]
  }]
}

export const field_data = {
  labels: [
    "Engineering/Technology",
    "Arts/Science/Commerce",
    "Management",
    "Computer Application",
    "Others"
  ],
  datasets: [{
    label: "Educational background of learners",
    data: [69.0,25.6,1.5,0.2,3.7],
    backgroundColor: [
      '#79201b',
      '#d7a74f',
      'rgb(74, 146, 70)',
      'rgb(123, 123, 123)',
      'rgb(74, 146, 70)'
    ],
  }]
}

export const cgpa = {
  labels: [
    "< 7",
    "7-8",
    "8-9",
    "9-10"
  ],
  datasets: [{
    label: "Percentage of learners with CGPA in range",
    data: [3.4,21.8,45.8,29],
    backgroundColor: "#79201b",
  }]
}

export const age = {
  labels: [
    "< 21",
    "21-30",
    "31-40",
    "41-50"
  ],
  datasets: [{
    label: "Number of learners in age-group",
    data: [373, 243, 35, 6],
    backgroundColor: "#d7a74f"
  }]
}

export const expec_term_data = {
  labels: [
    "Aug 2022",
    "Dec 2022",
    "Apr 2023",
    "Aug 2023"
  ],
  datasets: [{
    label: "Expected term of completion of both diplomas",
    data: [196,345,73,41],
    backgroundColor: '#79201b'
  }]
}