const facebook = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

const displayOrgChart = (orgChart) => {

  let results = [];

  // General case
  for (let member in orgChart) {                          //{1} "member" equals all objects in orgChart.
    if (typeof orgChart[member] === "object") {           //{2} If the values in orgChart are objects,
      let subKeys = displayOrgChart(orgChart[member]);    //{3} send the objects through the displayOrgChart function again as subKeys.
      results = results.concat(subKeys.map(subKey => {    //{4} Map through all the subKeys and add "  " to the beginning and add them to the array results.
        return "  " + subKey;
      }))
    } else {
      results.push(orgChart[member]);                     //{5} If "member" is not an object, push it to results. This will not add spaces to the beginning of them.
    }
  }

  // Base case
  return results;
};

console.log(displayOrgChart(orgChart));