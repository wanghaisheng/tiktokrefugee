const navData = [
  {
    key: "home",
    url: "/",
    children: []
  },
  {
    key: "about",
    url: "/about",
    children: []
  },
  {
    key: "tutorials",
    children: [
      {
        key: "rednote",
        url: "/tutorials/rednote/"
      },
      // {
        // key: "tutorial-2",
        // url: "/tutorials/tutorial-2/"
      // }
    ]
  },

  {
    key: "memes",
    children: [{

      key: "refugee",
      url: "/memes/refugee/"

    }]

  },
  {
    key: "blog",
    url: "/blog",
    children: []
  },
  {
    key: "contact",
    url: "/contact",
    children: []
  },
]
export default navData