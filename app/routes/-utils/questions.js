const ANSWERS = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
};

export const QUESTIONS = [
  {
    question: '1. Indiana law prohibits motorists from operating a motor vehicle while using a:',
    options: [
      'Wireless phone (unless being used to call 911)',
      'Personal digital assistant',
      'Pager or text messaging device',
      'All of the above',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '2. The state minimum insurance standard is:',
    options: [
      '$25,000 for bodily injury to, or the death of, one individual; $50,000 for bodily injury to, or the death of, two or more people in any one accident; and $25,000 for property damages in any one accident',
      '$25,000 for bodily injury to, or the death of, one individual; $25,000 for bodily injury to, or the death of, two or more people in any one accident; and $10,000 for property damages in any one accident',
      '$25,000 for bodily injury to, or the death of, one individual; $50,000 for bodily injury to, or the death of, two or more people in any one accident; and $10,000 for property damages in any one accident',
      '$15,000 for bodily injury to, or the death of, one individual; $5,000 for bodily injury to, or the death of, two or more people in any one accident; and $10,000 for property damages in any one accident',
    ],
    answer: ANSWERS.A,
    metadata: {},
  },
  {
    question: '3. Yellow lane markings separate multiple lanes of traffic going in opposite directions. You may cross a broken yellow line to pass another vehicle:',
    options: [
      'When approaching a hill or curve',
      'When oncoming traffic has its turn signals on',
      'When it is safe',
      'When the motorist in front of you is driving too slow',
    ],
    answer: ANSWERS.C,
    metadata: {},
  },
  {
    question: '4. A solid double yellow lane marking separate multiple lanes of traffic going in opposite directions. You cannot cross that line except to',
    options: [
      'Pass a motorist that is front of you',
      'Turn left when it is safe',
      'Check your text messages',
      'Pass a slow moving agricultural vehicle',
    ],
    answer: ANSWERS.B,
    metadata: {},
  },
  {
    question: '5. When changing lanes to prepare for a turn, you must signal your intention to do so',
    options: [
      'At least 50 feet prior to changing lanes of turning',
      'At least 200 feet prior to changing lanes or turning',
      'At least 500 feet prior to changing lanes or turning',
      'At least ½ mile prior to changing lanes or turning',
    ],
    answer: ANSWERS.B,
    metadata: {},
  },
  {
    question: '6. On a multilane highway, slower vehicles should use:',
    options: [
      'The right lane and leave the far left lane for tractor trailers',
      'The far left lane and leave the right lane for faster-moving or passing vehicles',
      'The right lane and leave the far left lane for faster moving vehicles',
      'Any lane is fine as long as you are traveling at the minimum designated speed for that road',
    ],
    answer: ANSWERS.C,
    metadata: {},
  },
  {
    question: '7. It is dangerous and illegal to try to pass other vehicles if:',
    options: [
      'A yellow, pennant-shaped “No Passing Zone” is posted on the left-hand side of the road, or a white rectangular “Do Not Pass” sign is posted on the right-hand side of the road',
      'When you are driving on or approaching a curve or the crest of a hill in the road',
      'Within 100 feet of an intersection, railroad crossing, bridge, viaduct, or tunnel',
      'All of the above',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '8. When approaching a roundabout',
    options: [
      'Incoming traffic must stop and let traffic to the right go first',
      'Incoming traffic always yields to the circulating traffic already in the roundabout',
      'Incoming traffic must yield to traffic to the right',
      'All answers are correct',
    ],
    answer: ANSWERS.B,
    metadata: {},
  },
  {
    question: '9. A roundabout is a circular intersection',
    options: [
      'In which traffic enters or exits only through right turns and moves counter-clockwise',
      'That has no speed limit',
      'In which traffic enters or exits only through left turns and moves counter-clockwise',
      'No answers are correct',
    ],
    answer: ANSWERS.A,
    metadata: {},
  },
  {
    question: '10. When approaching or driving through a multilane roundabout:',
    options: [
      'Look at other drivers and assume they will yield the right of way to you',
      'Drivers must yield the right of way to large vehicles driving through the roundabout at the same time',
      'Turn on your left turn blinker and accelerate to the posted speed limit',
      'All answers are correct',
    ],
    answer: ANSWERS.B,
    metadata: {},
  },
  {
    question: '11. On rural interstate highways that are located outside urban areas:',
    options: [
      'Passenger vehicles may not exceed 55 miles per hour or the posted speed limit',
      'Passenger vehicles may not exceed 65 miles per hour or the posted speed limit',
      'Passenger vehicles may not exceed 70 miles per hour or the posted speed limit',
      'Passenger vehicles may not exceed 45 miles per hour or the posted speed limit',
    ],
    answer: ANSWERS.C,
    metadata: {},
  },
  {
    question: '12. The following speed limit rules apply in urban areas:',
    options: [
      'On the interstate, vehicles may not exceed 55 miles per hour or the posted speed limit.',
      'Vehicles traveling in residential areas may not exceed 30 miles per hour or the posted speed limit.',
      'On non-divided state highway, vehicles may not exceed 55 miles per hour or the posted speed limit',
      'All of the above',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '13. When driving through a school zone:',
    options: [
      'You must use the left lane until clear of the school zone',
      'You must not exceed the posted maximum established speed limit at all times',
      'You must not exceed the posted maximum established speed limit while the warning lights are flashing',
      'You may stop your vehicle on the side of the roadway to load and unload students',
    ],
    answer: ANSWERS.C,
    metadata: {},
  },
  {
    question: '14. You must reduce your speed when:',
    options: [
      'There is a hazard on the road',
      'There is low visibility',
      'There are slick or icy roads',
      'All of the above',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '15. A good rule for drivers to follow during heavy traffic times is:',
    options: [
      'Speed up and pass any motorist that is not traveling at your preferred speed',
      'Stay at least two to three seconds behind the motorist ahead of you',
      'Get as close as possible to the motorist in front of you so they know you are not satisfied with their performance',
      'All of the above',
    ],
    answer: ANSWERS.B,
    metadata: {},
  },
  {
    question: '16. Indiana has a "Move Over" law. This law requires motorists to change lanes by moving away from an emergency vehicle when approaching them or when they are approaching you. Which of the following is considered an emergency vehicle:',
    options: [
      'A fire truck with its lights flashing',
      'A police vehicle with its lights flashing',
      'A recovery vehicle with its lights flashing',
      'All of the above',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '17. Drivers must use headlights between',
    options: [
      'Sunset and sunrise as well as at any other time in which visibility is less than 1 mile',
      'At all times of the day or night',
      'When the sun is shining',
      'Sunset and sunrise as well as at any other time in which visibility is less than 500 feet.',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '18. Accidents related to drowsy driving can be very serious, leading to severe injuries or even death. What are the signs that you are experiencing drowsiness:',
    options: [
      'Yawning excessively',
      'Difficulty remembering the last few miles',
      'Driving off the road or changing lanes unexpectedly',
      'All of the above',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '19. Distracted driving is a major contributor to accidents and in many cases is the result of illegal activity, which of the following is not considered distracted driving:',
    options: [
      'Checking and sending text messages',
      'Eating while driving',
      'Driving 2-3 seconds behind the vehicle in front of you',
      'Taking your hands off the steering wheel while moving',
    ],
    answer: ANSWERS.C,
    metadata: {},
  },
  {
    question: '20. Sending or reading a text takes your eyes off the road for 5 seconds. At 55 mph, five seconds of driving is equivalent to',
    options: [
      'Driving the length of an entire football field with your eyes closed',
      'Driving 25 feet through high water',
      'Driving the length of an Olympic swimming pool with your eyes closed',
      'None of the above',
    ],
    answer: ANSWERS.A,
    metadata: {},
  },
  {
    question: '21. Work zones pose dangers both for drivers and for workers, to avoid an accident',
    options: [
      'Stay alert and slow down',
      'Pay attention to flaggers',
      'Don\'t tailgate',
      'All of the above',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '22. If a flagger is using a paddle sign, you should',
    options: [
      'Continue driving while avoiding the flaggers direction',
      'Stop immediately and ask questions',
      'Pull over and call 211 for more information',
      'Obey the direction of the flagger and their sign',
    ],
    answer: ANSWERS.D,
    metadata: {},
  },
  {
    question: '23. When a flagger extends a fluorescent orange/red flag in a horizontal position into the line of traffic',
    options: [
      'You must stop and not proceed until the flagger has indicated it is safe to do so',
      'You must drive to the side of them without stopping',
      'You must continue driving as if they were not alerting you to a hazardous situation',
      'You must drive on the shoulder of the road until clear of the hazardous situation',
    ],
    answer: ANSWERS.A,
    metadata: {},
  },
  {
    question: '24. What does this sign mean?',
    options: [
      'Heavy loads only',
      'Flagger Ahead',
      'Merging Traffic',
      'Accident Ahead',
    ],
    answer: ANSWERS.B,
    metadata: {
      imgPath: 'q24.png',
    },
  },
  {
    question: '25. What does this sign mean?',
    options: [
      'School zone',
      'Hold hands while crossing',
      'School buses ahead',
      'None of the above',
    ],
    answer: ANSWERS.A,
    metadata: {
      imgPath: 'q25.png',
    },
  },
  {
    question: '26. What does this sign mean?',
    options: [
      'Rest area ahead',
      'Pedestrian crossing',
      'Railroad crossing',
      'Workers ahead',
    ],
    answer: ANSWERS.C,
    metadata: {
      imgPath: 'q26.png',
    },
  },
  {
    question: '27. What does this sign mean?',
    options: [
      'No digging zone',
      'Yield to oncoming traffic',
      'Obey flagger',
      'Workers ahead',
    ],
    answer: ANSWERS.D,
    metadata: {
      imgPath: 'q27.png',
    },
  },
  {
    question: '28. What does this sign mean?',
    options: [
      'Merging traffic',
      'School zone',
      'Slow moving vehicle',
      'Flagger ahead',
    ],
    answer: ANSWERS.A,
    metadata: {
      imgPath: 'q28.png',
    },
  },
  {
    question: '29. What does this sign mean?',
    options: [
      'Merging traffic',
      'Obey flagger',
      'Entering roundabout',
      'School zone',
    ],
    answer: ANSWERS.C,
    metadata: {
      imgPath: 'q29.png',
    },
  },
  {
    question: '30. What does this sign mean?',
    options: [
      'Stop ahead',
      'Yield',
      'Slow moving vehicle',
      'Railroad crossing',
    ],
    answer: ANSWERS.B,
    metadata: {
      imgPath: 'q30.png',
    },
  }
];
/*

*/