// Facts taken from https://xkcd.com/1930/ and used under the terms of CC BY-NC 2.5 (https://creativecommons.org/licenses/by-nc/2.5/)

var facts = [
  "Did you know that",
  {
    choice: [
      [
        "the",
        {choice: ["fall", "spring"]},
        "equinox"
      ],
      [
        "the",
        {choice: ["winter", "summer"]},
        {choice: ["solstice", "olympics"]}
      ],
      [
        "the",
        {choice: ["earliest", "latest"]},
        {choice: ["sunrise", "sunset"]}
      ],
      [
        "daylight",
        {choice: ["saving", "savings"]},
        "time"
      ],
      [
        "leap",
        {choice: ["day", "year"]}
      ],
      "easter",
      [
        "the",
        {choice: ["harvest", "super", "blood"]},
        "moon"
      ],
      "Toyota Truck Month",
      "Shark Week"
    ]
  },
  {
    choice: [
      [
        "happens",
        {choice: ["earlier", "later", "at the wrong time"]},
        "every year"
      ],
      [
        "drifts out of sync with the",
        {choice: [
          "sun",
          "moon",
          "zodiac",
          [
            {choice: ["Gregorian", "Mayan", "Lunar", "iPhone"]},
            "calendar"
          ],
          "atomic clock in Colorado"
        ]}
      ],
      [
        "might",
        {choice: ["not happen", "happen twice"]},
        "this year"
      ]
    ]
  },
  "because of",
  {
    choice: [
      [
        "time zone legislation in",
        {choice: ["Indiana", "Arizona", "Russia"]}
      ],
      "a decree by the Pope in the 1500s",
      [
        {choice:["precession", "libration", "nutation", "libation", "eccentricity", "obliquity"]},
        "of the",
        {choice: [
          "moon",
          "sun",
          "Earth's axis",
          "equator",
          "Prime Meridian",
          [
            {choice: ["International Date", "Mason-Dixon"]},
            "line"
          ]
        ]}
      ],
      "magnetic field reversal",
      [
        "an arbitrary decision by",
        {choice: ["Benjamin Franklin", "Isaac Newton", "F.D.R."]}
      ]
    ]
  },
  "? Apparently",
  {
    choice: [
      "it causes a predictable increase in car accidents",
      "that's why we have leap seconds",
      "scientists are really worried",
      [
        "it was even more extreme during the",
        {choice:["bronze age", "ice age", "cretaceous", "1990s"]}
      ],
      [
        "there's a proposal to fix it, but it",
        {choice:[
          "will never happen",
          "actually makes things worse",
          "is stalled in congress",
          "might be unconstitutional"
        ]}
      ],
      "it's getting worse and no one knows why"
    ]
  },
  "."
];

function resolve(spec) {
  var output = "";

  if (spec instanceof Array) {
      for (var i = 0; i < spec.length; i++) {
        output += (resolve(spec[i]) + " ");
      }
  } else if (spec.choice != undefined) {
    output += resolve(spec.choice[Math.floor(Math.random() * spec.choice.length)]);
  } else {
    output += spec;
  }

  return output;
}

console.log(resolve(facts));
