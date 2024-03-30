import { TimelineOptions } from 'vis-timeline';

export const options: TimelineOptions = {
  stack: true,
  start: 0,
  end: 10,
  margin: { axis: 0 },
  showMajorLabels: true,
  orientation: 'top',
  verticalScroll: true,
  minHeight: '300px',
  zoomMin: 24 * 60 * 60 * 1000 * 7,
  // zoomMax: 1000 * 60 * 60 * 24 * 365 * 10,
};

export const dataset = [
  {
    id: 1,
    start: '1975-06',
    title: 'World Cup 1975 - West Indies',
    description:
      `England and New Zealand finished as the top two teams in Group A, while the West Indies finished top of the Group B table ahead of Australia as the four teams qualified through to the semi-finals. After Australia defeated England and the West Indies defeated New Zealand in the semi-finals, the West Indies which came into the tournament as favourites, defeated Australia in the final at Lord's by 17 runs to become the first World Cup winners. New Zealand batsman, Glenn Turner was the top run-scorer for the tournament with 333 runs, whilst Australian bowler Gary Gilmour was the top wicket-taker with 11 wickets despite only playing in the final two matches.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Prudential_Cup_75_logo.svg/800px-Prudential_Cup_75_logo.svg.png',
    video: 'https://www.youtube.com/embed/ZTIeO0d2dF8?si=P3VSWQiK9u76jsWT',
  },
  {
    id: 2,
    title: 'World Cup 1979 - West Indies',
    start: '1979-06',
    description:
      `England joined first-time semi-finalists Pakistan as the qualifiers from Group A, while the West Indies finished top of Group B ahead of New Zealand. After the West Indies and England both won their semi-finals over Pakistan and New Zealand respectively, they met in the final at Lord's with the West Indies defending their title from four years earlier with a 92 run victory. West Indian batsman, Gordon Greenidge ended the tournament as the leading run scorer with 253 runs from four matches with English player Mike Hendrick ending up as the leading wicket taker with ten wickets.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Prudential_Cup_79_logo.svg/800px-Prudential_Cup_79_logo.svg.png',
    video: 'https://www.youtube.com/embed/TswfqKwIJDE?si=MsM9SCDGvJ6I-9qX',
  },
  {
    id: 3,
    title: 'World Cup 1983 - India',
    start: '1983-06',
    description:
      `The 1983 Cricket World Cup (officially the Prudential Cup '83) was the 3rd edition of the Cricket World Cup tournament. It was held from 9 to 25 June 1983 in England and Wales and was won by India. Eight countries participated in the event. England, India, Pakistan and West Indies qualified for the semi-finals. The preliminary matches were played in two groups of four teams each, and each country played the others in its group twice. The top two teams in each group qualified for the semi-finals.

The matches consisted of 60 overs per innings and were played in traditional white clothing and with red balls. They were all played during the day.There was also a biopic made on the 1983 ICC Prudential World Cup namely, 83 with Ranveer Singh starring as Kapil Dev.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Prudential_Cup_83_logo.svg/800px-Prudential_Cup_83_logo.svg.png',
    video: 'https://www.youtube.com/embed/WmKQ7W-Miso?si=zqK2-dpwyaaKEHsS',
  },
  {
    id: 4,
    title: 'World Cup 1987 - Australia',
    start: '1987-11',
    description:
      `The competition was won, for the first time, by Australia who defeated their arch-rivals England by seven runs in the second-most closely fought World Cup final to date in Kolkata's Eden Gardens stadium. The two host nations, India and Pakistan failed to reach the final, after both being eliminated in the semi-finals. The West Indies failed to live up to expectations and did not advance from the group stage.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/1987_Cricket_World_Cup_Logo.svg/800px-1987_Cricket_World_Cup_Logo.svg.png',
    video: 'https://www.youtube.com/embed/XF4Sb68jKxI?si=IZV7vHuud446sxxs',
  },
  {
    id: 5,
    title: 'World Cup 1992 - Pakistan',
    start: '1992-03',
    description:
      `The 1992 Cricket World Cup (known as the Benson & Hedges World Cup 1992 for sponsorship reasons) was the fifth Cricket World Cup, the premier One Day International cricket tournament for men's national teams, organised by the International Cricket Council (ICC). It was held in Australia and New Zealand from 22 February to 25 March 1992, and finished with Pakistan beating England by 22 runs in the final to become the World Cup champions for the first time. The tournament is remembered for the controversial "rain rule".`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/World_Cup_1992_logo.svg/1024px-World_Cup_1992_logo.svg.png',
    video: 'https://www.youtube.com/embed/QXVcXQCpz_E?si=o2fTSSXbLNtkM9uI',
  },
  {
    id: 6,
    title: 'World Cup 1996 - Sri Lanka',
    start: '1996-03',
    description:
      `The 1996 Cricket World Cup, also called the Wills World Cup 1996 after the Wills Navy Cut brand produced by tournament sponsor ITC, was the sixth Cricket World Cup organised by the International Cricket Council (ICC). It was the second World Cup to be hosted by Pakistan and India (who had also hosted the 1987 Cricket World Cup) but Sri Lanka were hosts for the first time. The tournament was won by Sri Lanka, who defeated Australia by seven wickets in the final on 17 March 1996 at the Gaddafi Stadium in Lahore, Pakistan.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Wills_World_Cup_1996.svg/1920px-Wills_World_Cup_1996.svg.png',
    video: 'https://www.youtube.com/embed/ICBMV8U6oCQ?si=BV0s5AZ1N1Lbtu2v',
  },
  {
    id: 7,
    title: 'World Cup 1999 - Australia',
    start: '1996-06',
    description:
      `The 1999 ICC Cricket World Cup, also branded as England '99, was the seventh edition of the Cricket World Cup, organised by the International Cricket Council (ICC). It was hosted primarily by England, with selected matches also played in Scotland, Ireland, Wales and the Netherlands. The tournament was won by Australia, who beat Pakistan by 8 wickets in the final at Lord's in London.
The tournament was hosted three years after the previous Cricket World Cup, deviating from the usual four-year gap.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/2/2e/Wc99.png',
    video: 'https://www.youtube.com/embed/mXhRWyb5uSI?si=jNWw1_hlHuMw9dPw',
  },
  {
    id: 8,
    title: 'World Cup 2003 - Australia',
    start: '2003-03',
    description:
      `The tournament saw numerous upsets, with South Africa, Pakistan, West Indies and England all being eliminated at the group stage (South Africa missed by 1 run after misreading the Duckworth-Lewis method rules). England forfeited their match with Zimbabwe, due to the political unrest in the country, which ultimately enabled that team to reach the Super Sixes. Similarly, New Zealand forfeited their match with Kenya, due to security reasons which enabled the latter to reach the semi-finals, the only non-Test playing nation to do so. Another shock wave came two days after the tournament had started, when Shane Warne, at the time one of the game's leading spinners, was sent home in disgrace after testing positive for a banned substance.
        The tournament was eventually won by Australia who won all 11 of their matches, beating India in the final played at the Wanderers Stadium in Johannesburg. This was Australia's third World Cup win, the only team to do so. Pakistani player Shoaib Akhtar also set a world record, becoming the fastest bowler in the history of cricket, delivering a record top speed of 161.3 km/h (100.23 mph) in a pool match against England.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Cricket_World_Cup_Logo_2003.svg/800px-Cricket_World_Cup_Logo_2003.svg.png',
    video: 'https://www.youtube.com/embed/o6UM2KDuqb8?si=ztb0f7pG_FakVtDu',
  },
  {
    id: 9,
    title: 'World Cup 2007 - Australia',
    start: '2007-04',
    description:
      `The 16 competing teams were initially divided into four groups, with the two best-performing teams from each group moving on to a "Super 8" format.Every team played total 6 matches in super eight round.Teams didn't played with teams of their own group in super 8 round.They played total 6 teams from another three group(Top 2 teams of all three groups) From this, Australia, New Zealand, Sri Lanka, and South Africa won through to the semi-finals, with Australia defeating Sri Lanka in the final to win their third consecutive World Cup and their fourth overall. Australia's unbeaten record in the tournament increased their total to 29 consecutive World Cup matches without loss, a streak dating back to 23 May 1999, during the group stage of the 1999 World Cup. The tournament also saw upsets and surprise results, with pre-tournament favourites India and Pakistan failing to make it past the group stage, while Bangladesh, the second-lowest ranked ICC Full Member at the time, and World Cup debutant Ireland, which was an ICC Associate Member at the time, made it to the "Super 8", beating India and Pakistan respectively en route. Ireland became only the second associate nation to make it past the first round of a Cricket World Cup, the first being Kenya in 2003.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/2007_Cricket_World_Cup_logo.svg/1024px-2007_Cricket_World_Cup_logo.svg.png',
    video: 'https://www.youtube.com/embed/aK4fLgM8Pw0?si=Q--HnS2NSj2AXR0V',
  },
  {
    id: 10,
    title: 'World Cup 2011 - India',
    start: '2011-04',
    description:
      `The 2011 ICC Cricket World Cup was the tenth Cricket World Cup. It was played in India, Sri Lanka, and for the first time in Bangladesh. India won the tournament, defeating Sri Lanka by 6 wickets in the final at Wankhede Stadium in Mumbai, thus becoming the first country to win the Cricket World Cup final on home soil. India's Yuvraj Singh was declared as the player of the tournament. This was the first time in World Cup history that two Asian teams had appeared in the final. It was also the first time since the 1992 World Cup that the final match did not feature Australia.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/2011_Cricket_World_Cup_Logo.svg/800px-2011_Cricket_World_Cup_Logo.svg.png',
    video: 'https://www.youtube.com/embed/YphL3Whh5B0?si=X_kNAYoAppWVSWv0',
  },
  {
    id: 11,
    title: 'World Cup 2015 - Australia',
    start: '2015-03',
    description:
      `The 2015 ICC Cricket World Cup was the 11th Cricket World Cup, a quadrennial One Day International (ODI) cricket tournament contested by men's national teams and organised by the International Cricket Council (ICC). It was jointly hosted by Australia and New Zealand from 14 February to 29 March 2015, and was won by Australia, defeating New Zealand by 7 wickets in the final. This was the second time the tournament was held in Australia and New Zealand, the first having been the 1992 Cricket World Cup. India were the defending champions having won the previous edition in 2011, but they were eliminated by eventual champions Australia in the semi-finals.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/2015_Cricket_World_Cup_Logo.svg/800px-2015_Cricket_World_Cup_Logo.svg.png',
    video: 'https://www.youtube.com/embed/pEMePnorNDA?si=o02ia9n1i-5AwFVb',
  },
  {
    id: 12,
    title: 'World Cup 2019 - England',
    start: '2019-07',
    description:
      `In the knockout stage, England and New Zealand won their respective semi-finals to qualify for the final, which was played at Lord's in London. The final ended in a tie after the match ended with both teams scoring 241 runs, followed by the first Super Over in an ODI; England won the title, their first, on the boundary countback rule after the Super Over also finished level. The total attendance throughout the 2019 ICC Cricket World Cup was 752,000. Overall, videos of the group stages amassed over 2.6 billion views from around the world, making it the most-watched cricket competition as of 2019.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/ICC_Cricket_World_Cup_2019_logo.svg/800px-ICC_Cricket_World_Cup_2019_logo.svg.png',
    video: 'https://www.youtube.com/embed/pQ5xEiZ-5IE?si=LozWgjDDZ4MZas79',
  },
  {
    id: 13,
    title: 'World Cup 2023 - Australia',
    start: '2023-11',
    description:
      `The tournament was contested by ten national teams, maintaining the same format used in 2019. In the knockout stage, India and Australia beat New Zealand and South Africa respectively to advance to the final, played on 19 November at Narendra Modi Stadium. Australia won by 6 wickets, winning their sixth Cricket World Cup title.`,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/2023_CWC_Logo.svg/800px-2023_CWC_Logo.svg.png',
    video: 'https://www.youtube.com/embed/YqKYpgZ9FWU?si=ZMBrMzRAlkNWsEfz',
  },

];


export interface popupData {
  title: string,
  video: string,
  description: string,
  date: Date;
}