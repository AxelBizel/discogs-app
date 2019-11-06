import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const release = {
      styles: ["Euro-Disco"],
      videos: [
        {
          duration: 213,
          description: "Rick Astley - Never Gonna Give You Up (Video)",
          embed: true,
          uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "Rick Astley - Never Gonna Give You Up (Video)"
        },
        {
          duration: 346,
          description: "Never Gonna Give You Up (Cake Mix)    Rick Astley 1987",
          embed: true,
          uri: "https://www.youtube.com/watch?v=1lN2bSlL5SE",
          title: "Never Gonna Give You Up (Cake Mix)    Rick Astley 1987"
        },
        {
          duration: 436,
          description:
            "Rick Astley - Never Gonna Give You Up (Stephen Gilham - PHD Extended Mix)",
          embed: true,
          uri: "https://www.youtube.com/watch?v=afKTEsELh_s",
          title:
            "Rick Astley - Never Gonna Give You Up (Stephen Gilham - PHD Extended Mix)"
        },
        {
          duration: 422,
          description: "Never Gonna Give You Up (Escape to NY Mix)",
          embed: true,
          uri: "https://www.youtube.com/watch?v=xoPIl7xvK5Q",
          title: "Never Gonna Give You Up (Escape to NY Mix)"
        }
      ],
      series: [],
      labels: [
        {
          name: "RCA",
          entity_type: "1",
          catno: "PB 41447",
          resource_url: "https://api.discogs.com/labels/895",
          id: 895,
          entity_type_name: "Label"
        }
      ],
      year: 1987,
      community: {
        status: "Accepted",
        rating: { count: 124, average: 3.68 },
        have: 1496,
        contributors: [
          {
            username: "memory",
            resource_url: "https://api.discogs.com/users/memory"
          },
          {
            username: "vargind",
            resource_url: "https://api.discogs.com/users/vargind"
          },
          {
            username: "alistairk",
            resource_url: "https://api.discogs.com/users/alistairk"
          },
          {
            username: "hog",
            resource_url: "https://api.discogs.com/users/hog"
          },
          {
            username: "rwrackham",
            resource_url: "https://api.discogs.com/users/rwrackham"
          },
          {
            username: "jan_marian",
            resource_url: "https://api.discogs.com/users/jan_marian"
          },
          {
            username: "_80_",
            resource_url: "https://api.discogs.com/users/_80_"
          },
          {
            username: "chillyboy64",
            resource_url: "https://api.discogs.com/users/chillyboy64"
          },
          {
            username: "strummin",
            resource_url: "https://api.discogs.com/users/strummin"
          },
          {
            username: "djcarbines",
            resource_url: "https://api.discogs.com/users/djcarbines"
          },
          {
            username: "Skinheadmate",
            resource_url: "https://api.discogs.com/users/Skinheadmate"
          },
          {
            username: "Stathisan",
            resource_url: "https://api.discogs.com/users/Stathisan"
          }
        ],
        want: 241,
        submitter: {
          username: "memory",
          resource_url: "https://api.discogs.com/users/memory"
        },
        data_quality: "Needs Vote"
      },
      artists: [
        {
          join: "",
          name: "Rick Astley",
          anv: "",
          tracks: "",
          role: "",
          resource_url: "https://api.discogs.com/artists/72872",
          id: 72872
        }
      ],
      images: [
        {
          uri: "",
          height: 600,
          width: 600,
          resource_url: "",
          type: "primary",
          uri150: ""
        },
        {
          uri: "",
          height: 600,
          width: 600,
          resource_url: "",
          type: "secondary",
          uri150: ""
        },
        {
          uri: "",
          height: 600,
          width: 600,
          resource_url: "",
          type: "secondary",
          uri150: ""
        },
        {
          uri: "",
          height: 600,
          width: 600,
          resource_url: "",
          type: "secondary",
          uri150: ""
        }
      ],
      format_quantity: 1,
      id: 249504,
      artists_sort: "Rick Astley",
      genres: ["Electronic", "Pop"],
      thumb: "",
      num_for_sale: 75,
      title: "Never Gonna Give You Up",
      date_changed: "2019-08-21T23:30:18-07:00",
      master_id: 96559,
      lowest_price: 0.96,
      status: "Accepted",
      released_formatted: "Jul 1987",
      estimated_weight: 60,
      master_url: "https://api.discogs.com/masters/96559",
      released: "1987-07-00",
      date_added: "2004-04-30T08:10:05-07:00",
      tracklist: [
        {
          duration: "3:32",
          position: "A",
          type_: "track",
          title: "Never Gonna Give You Up"
        },
        {
          duration: "3:30",
          position: "B",
          type_: "track",
          title: "Never Gonna Give You Up (Instrumental)"
        }
      ],
      extraartists: [
        {
          join: "",
          name: "Me Company",
          anv: "Me Co",
          tracks: "",
          role: "Design",
          resource_url: "https://api.discogs.com/artists/547352",
          id: 547352
        },
        {
          join: "",
          name: "Mark McGuire",
          anv: "",
          tracks: "",
          role: "Engineer",
          resource_url: "https://api.discogs.com/artists/78275",
          id: 78275
        },
        {
          join: "",
          name: "Mike Duffy",
          anv: "",
          tracks: "",
          role: "Engineer",
          resource_url: "https://api.discogs.com/artists/95941",
          id: 95941
        },
        {
          join: "",
          name: "Miles Showell",
          anv: "MS",
          tracks: "",
          role: "Lacquer Cut By",
          resource_url: "https://api.discogs.com/artists/383408",
          id: 383408
        },
        {
          join: "",
          name: "Pete Hammond",
          anv: "Mixmaster Pete Hammond",
          tracks: "",
          role: "Mixed By",
          resource_url: "https://api.discogs.com/artists/34067",
          id: 34067
        },
        {
          join: "",
          name: "Stock, Aitken & Waterman",
          anv: "Stock / Aitken / Waterman",
          tracks: "",
          role: "Producer, Written-By",
          resource_url: "https://api.discogs.com/artists/20942",
          id: 20942
        }
      ],
      country: "UK",
      notes:
        'UK Release has a black label with the text "Manufactured In England" printed on it.\n\nSleeve:\n\u2117 1987 \u2022 BMG Records (UK) Ltd. \u00a9 1987 \u2022 BMG Records (UK) Ltd.\nDistributed in the UK by BMG Records \u2022  Distribu\u00e9 en Europe par BMG/Ariola \u2022 Vertrieb en Europa d\u00fcrch BMG/Ariola.\n\nCenter labels:\n\u2117 1987 Pete Waterman Ltd.\nOriginal Sound Recording made by PWL.\nBMG Records (UK) Ltd. are the exclusive licensees for the world.\n\nDurations do not appear on the release.\n',
      identifiers: [
        { type: "Barcode", value: "5012394144777" },
        { type: "Label Code", value: "LC 0316" },
        {
          type: "Matrix / Runout",
          description: "A side runout etchings, variants 1&3",
          value: "PB 41447 A2 UTOPIA MS [encircled]"
        },
        {
          type: "Matrix / Runout",
          description: "B side runout etchings, variant 1&3",
          value: "PB 41447-B.2 UTOPIA MS [encircled]"
        },
        {
          type: "Matrix / Runout",
          description: "A side runout etchings, variant 2",
          value: "PB 41447 A4 UTOPIA MS."
        },
        {
          type: "Matrix / Runout",
          description: "B side runout etchings, variant 2",
          value: "PB 41447 B4 UTOPIA MS \u2665 RD."
        },
        {
          type: "Matrix / Runout",
          description: "A&B side runouts, stamped, variant 3",
          value: "B"
        },
        {
          type: "Matrix / Runout",
          description: "A side label",
          value: "PB 41447 A\u2021"
        },
        {
          type: "Matrix / Runout",
          description: "B side label",
          value: "PB 41447 B\u2021"
        },
        { type: "Price Code", description: "D:", value: "AC" },
        { type: "Price Code", description: "F:", value: "RC110" },
        { type: "Price Code", description: "UK:", value: "AA" }
      ],
      companies: [
        {
          name: "BMG Records (UK) Ltd.",
          entity_type: "13",
          catno: "",
          resource_url: "https://api.discogs.com/labels/82835",
          id: 82835,
          entity_type_name: "Phonographic Copyright (p)"
        },
        {
          name: "BMG Records (UK) Ltd.",
          entity_type: "14",
          catno: "",
          resource_url: "https://api.discogs.com/labels/82835",
          id: 82835,
          entity_type_name: "Copyright (c)"
        },
        {
          name: "Pete Waterman Ltd.",
          entity_type: "13",
          catno: "",
          resource_url: "https://api.discogs.com/labels/301937",
          id: 301937,
          entity_type_name: "Phonographic Copyright (p)"
        },
        {
          name: "All Boys Music Ltd.",
          entity_type: "21",
          catno: "",
          resource_url: "https://api.discogs.com/labels/273945",
          id: 273945,
          entity_type_name: "Published By"
        },
        {
          name: "BMG Records",
          entity_type: "9",
          catno: "",
          resource_url: "https://api.discogs.com/labels/26385",
          id: 26385,
          entity_type_name: "Distributed By"
        },
        {
          name: "BMG Ariola",
          entity_type: "9",
          catno: "",
          resource_url: "https://api.discogs.com/labels/33652",
          id: 33652,
          entity_type_name: "Distributed By"
        },
        {
          name: "RCA Records",
          entity_type: "8",
          catno: "",
          resource_url: "https://api.discogs.com/labels/29656",
          id: 29656,
          entity_type_name: "Marketed By"
        },
        {
          name: "Utopia Studios",
          entity_type: "30",
          catno: "",
          resource_url: "https://api.discogs.com/labels/266218",
          id: 266218,
          entity_type_name: "Lacquer Cut At"
        },
        {
          name: "BMG Records (UK) Ltd.",
          entity_type: "5",
          catno: "",
          resource_url: "https://api.discogs.com/labels/82835",
          id: 82835,
          entity_type_name: "Licensed To"
        },
        {
          name: "PWL",
          entity_type: "4",
          catno: "",
          resource_url: "https://api.discogs.com/labels/30024",
          id: 30024,
          entity_type_name: "Record Company"
        },
        {
          name: "CBS Pressing Plant, Aston Clinton",
          entity_type: "17",
          catno: "",
          resource_url: "https://api.discogs.com/labels/553982",
          id: 553982,
          entity_type_name: "Pressed By"
        }
      ],
      uri:
        "https://www.discogs.com/Rick-Astley-Never-Gonna-Give-You-Up/release/249504",
      formats: [
        { descriptions: ['7"', "45 RPM", "Single"], name: "Vinyl", qty: "1" }
      ],
      resource_url: "https://api.discogs.com/releases/249504",
      data_quality: "Needs Vote"
    };
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
