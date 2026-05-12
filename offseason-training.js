const programStart = "2026-06-01";
const programEnd = "2026-07-30";
const storageKey = "offSeasonSoccerDoneDates";
const eventStorageKey = "offSeasonSoccerTeamEvents";
const benchmarkStorageKey = "offSeasonSoccerBenchmarkResults";
const journalStorageKey = "offSeasonSoccerJournalEntries";

const weekPlans = [
  {
    week: 1,
    range: "Jun 1-7",
    phase: "Foundation",
    goal: "Build a clean routine: touch quality, joint prep, easy aerobic work, and soreness control.",
    intensity: "RPE 5-6",
    fuelFocus: "Hydrate early and eat normal meals. Do not start the summer under-fueled.",
    cue: "Move quietly, keep the ball close, and finish every rep able to repeat it.",
  },
  {
    week: 2,
    range: "Jun 8-14",
    phase: "First touch and acceleration",
    goal: "Connect first touch with first three steps. Add sharper starts without chasing fatigue.",
    intensity: "RPE 6",
    fuelFocus: "Add a pre-training snack if sessions feel flat or happen between meals.",
    cue: "Touch into space, then accelerate through the next action.",
  },
  {
    week: 3,
    range: "Jun 15-21",
    phase: "Turns, passing rhythm, and deceleration",
    goal: "Improve change of direction, receiving shape, and safe stopping mechanics.",
    intensity: "RPE 6-7",
    fuelFocus: "After training, pair carbohydrates with protein within 60-90 minutes.",
    cue: "Win the stop before you win the next sprint.",
  },
  {
    week: 4,
    range: "Jun 22-28",
    phase: "Speed endurance",
    goal: "Hold technique under repeated efforts and recover faster between soccer actions.",
    intensity: "RPE 7",
    fuelFocus: "Bring extra water. Hot days need longer breaks and lower intensity.",
    cue: "Recover with purpose. Walk tall, breathe down, reset your next rep.",
  },
  {
    week: 5,
    range: "Jun 29-Jul 5",
    phase: "Midpoint test and reset",
    goal: "Measure progress, clean up weak-foot habits, and absorb the first month of work.",
    intensity: "RPE 5-7",
    fuelFocus: "Do not treat recovery days like skipped days. Eat, sleep, and refill the tank.",
    cue: "Test honestly. The number is feedback, not identity.",
  },
  {
    week: 6,
    range: "Jul 6-12",
    phase: "Power and transition",
    goal: "Layer explosive actions onto a better technical base and sharper transition habits.",
    intensity: "RPE 7",
    fuelFocus: "Prioritize breakfast or an early meal before morning training.",
    cue: "Explode, organize, then play the next simple action.",
  },
  {
    week: 7,
    range: "Jul 13-19",
    phase: "Match intensity",
    goal: "Raise repeated sprint quality, body control, and pressure decisions.",
    intensity: "RPE 7-8",
    fuelFocus: "Use water as the default. Avoid energy drinks.",
    cue: "Play fast without becoming rushed.",
  },
  {
    week: 8,
    range: "Jul 20-26",
    phase: "Peak week",
    goal: "Train at tryout speed while protecting freshness and movement quality.",
    intensity: "RPE 8",
    fuelFocus: "This is not a diet week. Fuel the work and recover hard.",
    cue: "Sharp beats sloppy. Stop a set before your technique falls apart.",
  },
  {
    week: 9,
    range: "Jul 27-30",
    phase: "Taper and tryout readiness",
    goal: "Reduce volume, keep speed alive, and finish confident.",
    intensity: "RPE 4-7",
    fuelFocus: "Keep meals familiar. No new supplements, energy drinks, or risky foods before hard days.",
    cue: "Fresh, fast, clean, confident.",
  },
];

const sessions = [
  {
    date: "2026-06-01",
    week: 1,
    type: "home",
    label: "Home 1",
    title: "Foundation Touch + Easy Engine",
    duration: "45-50 min",
    intensity: "RPE 5",
    focus: ["Ball mastery", "Aerobic base", "Mobility"],
    highlight: "Set the standard for clean touches and steady breathing.",
    cue: "Soft knees, quiet upper body, eyes up every third touch.",
    reminder: "Start in shade if possible. Stop for dizziness, nausea, or sharp pain.",
    fuel: "Eat a normal meal 3-4 hours before training when possible. Bring water and refill after.",
    blocks: [
      ["Warm-up", "7 min easy jog with ball, ankle rolls, hip openers, skips, and light dribbling."],
      ["Ball mastery", "15 min: toe taps, foundations, sole rolls, pull-pushes, V-cuts. Work 40 sec, rest 20 sec for 3 rounds."],
      ["Easy engine", "12 min: 60 sec relaxed dribble, 30 sec walk. Change surfaces each rep: inside, outside, sole, laces."],
      ["Strength", "2 rounds: 12 squats, 8-12 pushups, 10 reverse lunges each leg, 30 sec plank."],
      ["Cooldown", "5 min walking touches, calf stretch, hip flexor stretch, slow breathing."],
    ],
  },
  {
    date: "2026-06-03",
    week: 1,
    type: "team",
    label: "In-person",
    title: "Technical Standards + 1v1 Basics",
    duration: "70-80 min",
    intensity: "RPE 6",
    focus: ["Clean passing", "Scanning", "1v1 defending"],
    highlight: "Team standard: every player trains at game posture.",
    cue: "Receive half-turned, scan before the ball arrives, pass with a firm ankle.",
    reminder: "Coach sets water breaks every 12-15 minutes in heat.",
    fuel: "Eat a carbohydrate plus protein meal earlier in the day. Pack water and a post-session snack.",
    blocks: [
      ["Activation", "10 min dynamic warm-up with a ball: dribble, open hips, skip, backpedal, accelerate 5 yards."],
      ["Partner rhythm", "15 min two-touch passing. Add scan calls, receive across body, and one-touch returns when clean."],
      ["1v1 channel", "20 min attacker vs defender in a touchline or imaginary lane. Rotate every 45 sec."],
      ["Team game", "20 min keep-away or small-sided possession. Score by connecting five passes or dribbling through an endline."],
      ["Close", "5 min walk, stretch, and each player names one technical cue for the week."],
    ],
  },
  {
    date: "2026-06-05",
    week: 1,
    type: "home",
    label: "Home 2",
    title: "First Touch + Coordination",
    duration: "40-45 min",
    intensity: "RPE 5-6",
    focus: ["First touch", "Coordination", "Core"],
    highlight: "Build the habit of preparing the body before the ball arrives.",
    cue: "Point your first touch where your next action should happen.",
    reminder: "Use a wall if available. If not, toss the ball to yourself and receive on the ground.",
    fuel: "A light snack 30-60 minutes before training is fine if you are hungry.",
    blocks: [
      ["Warm-up", "6 min mobility and ball taps: ankle bounces, hip swings, toe taps, light juggling."],
      ["First-touch ladder", "12 min: inside receive, outside receive, sole stop, laces cushion. 50 quality touches each foot."],
      ["Coordination", "10 min: shuffle around the ball, single-leg balance touches, quick feet over the ball without a ladder."],
      ["Core", "2 rounds: side plank 25 sec each side, dead bug 8 each side, glute bridge 12, mountain climber 20."],
      ["Finish", "3 min weak-foot only dribble and 2 min breathing cooldown."],
    ],
  },
  {
    date: "2026-06-06",
    week: 1,
    type: "home",
    label: "Home 3",
    title: "Strength Circuit + Ball Intervals",
    duration: "45-55 min",
    intensity: "RPE 6",
    focus: ["Bodyweight strength", "Dribble stamina", "Recovery habits"],
    highlight: "Strength supports soccer actions. Keep every rep controlled.",
    cue: "Knees track over toes, chest tall, land softly.",
    reminder: "If legs are heavy from the week, reduce each circuit by one round.",
    fuel: "After training, eat a real meal or snack with carbs and protein.",
    blocks: [
      ["Warm-up", "8 min easy movement: jog, side shuffle, carioca, hip mobility, light ball touches."],
      ["Strength circuit", "3 rounds: 12 squats, 10 lunges each leg, 8 pushups, 12 calf raises, 30 sec plank."],
      ["Ball intervals", "10 rounds: 20 sec fast controlled dribble, 40 sec walk. Keep the ball within two steps."],
      ["Touch challenge", "5 min juggling or ball pops. Count best streak and write it down."],
      ["Cooldown", "5 min stretch calves, quads, hamstrings, hips."],
    ],
  },
  {
    date: "2026-06-08",
    week: 2,
    type: "home",
    label: "Home 1",
    title: "Tight-Space Dribbling + Acceleration",
    duration: "45-50 min",
    intensity: "RPE 6",
    focus: ["Close control", "First step", "Acceleration mechanics"],
    highlight: "The first three steps decide whether a move matters.",
    cue: "Sell the fake with your shoulders, then push the ball out of your feet.",
    reminder: "Need space? Use a driveway, yard, gym line, or any safe flat area.",
    fuel: "If training before lunch, eat breakfast first or add a simple snack.",
    blocks: [
      ["Warm-up", "8 min dynamic warm-up with 5-yard build-ups at 50, 60, and 70 percent."],
      ["Tight touches", "14 min: inside-inside, outside-outside, sole roll, L-turn, stepover exit. 45 sec on, 20 sec rest."],
      ["Acceleration", "8 reps: move for 5 sec, burst 5-8 yards, walk back. Alternate right and left exits."],
      ["Strength", "2 rounds: split squat 8 each leg, pushup 10, single-leg balance 20 sec, plank shoulder tap 12."],
      ["Cooldown", "Walk until breathing settles, then stretch hip flexors and calves."],
    ],
  },
  {
    date: "2026-06-10",
    week: 2,
    type: "team",
    label: "In-person",
    title: "First Touch Forward + Team Speed",
    duration: "75-85 min",
    intensity: "RPE 6-7",
    focus: ["Receiving forward", "Acceleration", "Communication"],
    highlight: "Forward touch only helps when the body is ready before contact.",
    cue: "Scan, open hips, receive into the next pass or dribble.",
    reminder: "No standing lines longer than 60 seconds. Rotate quickly and hydrate.",
    fuel: "Bring water and a snack for after training. A sandwich, yogurt, or smoothie works well.",
    blocks: [
      ["Activation", "10 min movement prep, ball touches, and three progressive accelerations."],
      ["Passing windows", "18 min pairs or groups of three: receive across body, play forward, follow pass."],
      ["Speed reps", "10 min: 6-8 starts from soccer positions: backpedal, side-on, after a touch, after a turn."],
      ["Pressure game", "25 min possession with a rule: first touch must break a line when available."],
      ["Close", "5 min team huddle: one player shares the best cue they heard."],
    ],
  },
  {
    date: "2026-06-12",
    week: 2,
    type: "home",
    label: "Home 2",
    title: "Juggle Ladder + Tempo Runs",
    duration: "45-55 min",
    intensity: "RPE 6",
    focus: ["Touch confidence", "Tempo running", "Balance"],
    highlight: "Juggling is not a trick. It teaches body control and foot feel.",
    cue: "Lock the ankle, lift the knee, cushion the ball down.",
    reminder: "Count honest touches. Restart calmly after every mistake.",
    fuel: "Drink water before and after. Add a salty food at meals if you sweat heavily.",
    blocks: [
      ["Warm-up", "6 min light jog, dynamic mobility, and 60 easy touches."],
      ["Juggle ladder", "14 min: right foot only, left foot only, alternating feet, thigh-foot. Record best streak."],
      ["Tempo", "12 min: 30 sec smooth run, 30 sec walk. No sprinting. Keep breathing controlled."],
      ["Balance strength", "2 rounds: single-leg RDL reach 8 each, lateral lunge 8 each, side plank 25 sec each."],
      ["Cooldown", "5 min walking and gentle stretching."],
    ],
  },
  {
    date: "2026-06-13",
    week: 2,
    type: "home",
    label: "Home 3",
    title: "Agility Cuts + Lower Body Control",
    duration: "45-50 min",
    intensity: "RPE 6",
    focus: ["Change of direction", "Deceleration", "Lower-body strength"],
    highlight: "Fast players can stop without collapsing.",
    cue: "Drop hips, plant under your body, push the ground away.",
    reminder: "Cuts should be sharp, not reckless. Reduce speed on slippery ground.",
    fuel: "Eat enough at dinner after this session. Legs need fuel to rebuild.",
    blocks: [
      ["Warm-up", "8 min ball dribble, lateral shuffle, skips, hamstring sweeps, ankle hops."],
      ["Cut mechanics", "12 min: dribble 5 yards, stop with sole, cut 90 degrees, accelerate. 5 each direction per foot."],
      ["Agility reaction", "10 min: toss ball forward, chase first touch, turn out right or left by choice."],
      ["Strength", "3 rounds: squat 10, reverse lunge 8 each, calf raise 15, wall sit or squat hold 30 sec."],
      ["Cooldown", "Slow dribble and stretch quads, calves, hips."],
    ],
  },
  {
    date: "2026-06-15",
    week: 3,
    type: "home",
    label: "Home 1",
    title: "Turn Library + Deceleration",
    duration: "50-55 min",
    intensity: "RPE 6-7",
    focus: ["Turns", "Deceleration", "Body control"],
    highlight: "Create separation by turning with purpose, not panic.",
    cue: "Check shoulder, turn on the first touch, accelerate out.",
    reminder: "Use any safe line as your turn point. No cones needed.",
    fuel: "Have carbs earlier in the day: rice, pasta, potatoes, oats, fruit, bread, or tortillas.",
    blocks: [
      ["Warm-up", "8 min dynamic warm-up and 4 relaxed build-up runs."],
      ["Turn library", "18 min: inside cut, outside cut, Cruyff, drag-back, L-turn, sole roll turn. 6 clean reps each foot."],
      ["Decel reps", "8 reps: accelerate 8 yards, stop in three steps, hold balance, walk back."],
      ["Strength", "2 rounds: lateral lunge 10 each, pushup 10, plank 35 sec, single-leg calf raise 10 each."],
      ["Cooldown", "5 min easy walk and hip mobility."],
    ],
  },
  {
    date: "2026-06-17",
    week: 3,
    type: "team",
    label: "In-person",
    title: "Passing Angles + Pressure Escape",
    duration: "75-85 min",
    intensity: "RPE 7",
    focus: ["Support angles", "Pressure escape", "Team possession"],
    highlight: "A good angle gives your teammate courage on the ball.",
    cue: "Move while the pass travels. Show a foot, scan, and play simple.",
    reminder: "Pair high-intensity blocks with planned water breaks.",
    fuel: "Bring water. A post-training carb plus protein snack helps the next day feel better.",
    blocks: [
      ["Activation", "10 min dynamic movement and partner passing."],
      ["Angle work", "18 min groups of three: pass, move to a new angle, receive side-on, play away."],
      ["Escape pressure", "18 min 2v1 or 3v2 keep-ball in natural field spaces. Score by escaping through an edge."],
      ["Conditioned game", "24 min small-sided: bonus point for a third-player pass or successful turn away from pressure."],
      ["Close", "5 min breathing reset and player-led standard reminder."],
    ],
  },
  {
    date: "2026-06-19",
    week: 3,
    type: "home",
    label: "Home 2",
    title: "Receive Across Body + Sprint Repeats",
    duration: "45-55 min",
    intensity: "RPE 7",
    focus: ["Receiving shape", "Repeated sprint", "Recovery breathing"],
    highlight: "The body shape before the touch makes the sprint useful.",
    cue: "Open your hips early and take the touch across your body.",
    reminder: "Full recovery means better speed. Walk back slowly between reps.",
    fuel: "Train hydrated. If urine is dark, drink water and delay hard work until you feel normal.",
    blocks: [
      ["Warm-up", "8 min mobility, ball taps, and progressive 10-yard runs."],
      ["Receive pattern", "12 min: toss or roll ball to self, receive across body, burst 5 yards. 20 each foot."],
      ["Sprint repeats", "2 sets of 5 reps: 8-10 sec hard run or dribble, 50 sec walk. Rest 3 min between sets."],
      ["Core", "2 rounds: plank 40 sec, side plank 25 sec each, dead bug 10 each, glute bridge 15."],
      ["Cooldown", "Walk, stretch calves and hip flexors, breathe through the nose."],
    ],
  },
  {
    date: "2026-06-20",
    week: 3,
    type: "home",
    label: "Home 3",
    title: "Core Stability + Weak Foot Challenge",
    duration: "40-50 min",
    intensity: "RPE 6",
    focus: ["Weak foot", "Core", "Mobility"],
    highlight: "Weak-foot reps build options under pressure.",
    cue: "Quality first. A slow clean weak-foot touch beats a rushed bad habit.",
    reminder: "If soreness is high, make this a technique-only day and skip the circuit.",
    fuel: "Use dinner as recovery: protein, carbs, color, and water.",
    blocks: [
      ["Warm-up", "6 min easy touches and mobility."],
      ["Weak-foot block", "16 min: weak-foot dribble, sole stop, inside push, outside cut, short passes to self or wall if available."],
      ["Core circuit", "3 rounds: bear crawl 20 sec, side plank 25 sec each, hollow hold 20 sec, glute bridge march 10 each."],
      ["Skill finisher", "5 min weak-foot juggling or ball pops. Record best streak."],
      ["Cooldown", "5 min slow stretch and breathing."],
    ],
  },
  {
    date: "2026-06-22",
    week: 4,
    type: "home",
    label: "Home 1",
    title: "Ball Mastery Complex + Fartlek",
    duration: "50-60 min",
    intensity: "RPE 7",
    focus: ["Touch speed", "Variable running", "Mental reset"],
    highlight: "Change pace without losing control of the ball.",
    cue: "Fast feet, calm eyes, ball within reach.",
    reminder: "Heat adjustment: cut the running block in half and add water breaks.",
    fuel: "Eat enough carbohydrates at breakfast or lunch before this higher-output day.",
    blocks: [
      ["Warm-up", "8 min movement prep and 100 easy touches."],
      ["Mastery complex", "18 min: foundation to pull-push, sole roll to outside touch, V-cut to burst. 45 sec on, 20 sec rest."],
      ["Fartlek", "14 min: alternate 45 sec smooth run, 15 sec faster run, 60 sec walk. Keep it controlled."],
      ["Strength", "2 rounds: split squat 10 each, pushup 12, lateral lunge 8 each, plank 45 sec."],
      ["Cooldown", "Walk, stretch, and write down one cue that worked."],
    ],
  },
  {
    date: "2026-06-24",
    week: 4,
    type: "team",
    label: "In-person",
    title: "Transition Waves + Finishing Footwork",
    duration: "80-90 min",
    intensity: "RPE 7",
    focus: ["Transition", "Finishing prep", "Team speed"],
    highlight: "The first five seconds after winning or losing the ball matter.",
    cue: "React first, organize second, play the next pass third.",
    reminder: "If no goals are available, use endlines or target zones.",
    fuel: "Bring water and a snack. Hot sessions may need more breaks and less total volume.",
    blocks: [
      ["Activation", "10 min ball warm-up with transitions from dribble to pass to sprint."],
      ["Finishing footwork", "18 min: first touch out, plant, strike motion or pass into target zone. Both feet."],
      ["Transition waves", "24 min: attack to a line, immediate recovery run, then defend the next wave."],
      ["Small-sided", "25 min: after a turnover, team has five seconds to counter or recover shape."],
      ["Close", "5 min cooldown and leadership highlight."],
    ],
  },
  {
    date: "2026-06-26",
    week: 4,
    type: "home",
    label: "Home 2",
    title: "Repeated Sprint Ability + Reset Touch",
    duration: "45-55 min",
    intensity: "RPE 7",
    focus: ["Repeated sprint", "First touch reset", "Breathing"],
    highlight: "Hard reps are useful only if the next touch stays clean.",
    cue: "Sprint through the line, then settle the ball with one calm touch.",
    reminder: "Use longer rest if sprint speed drops badly.",
    fuel: "Refuel after. A carb snack right after training can help replace muscle energy.",
    blocks: [
      ["Warm-up", "10 min dynamic movement, ball touches, and three progressive sprints."],
      ["Reset touch", "10 min: fast dribble 5 yards, stop, pull across body, play away. 8 each side."],
      ["Sprint set", "3 sets of 4 reps: 10 sec hard, 50 sec walk. Rest 3 min between sets."],
      ["Mobility strength", "2 rounds: squat 12, glute bridge 15, calf raise 18, dead bug 10 each."],
      ["Cooldown", "5 min walk and slow breathing."],
    ],
  },
  {
    date: "2026-06-27",
    week: 4,
    type: "home",
    label: "Home 3",
    title: "Strength Endurance + Ball Stamina",
    duration: "50-60 min",
    intensity: "RPE 7",
    focus: ["Strength endurance", "Skill stamina", "Recovery"],
    highlight: "Stay technical while tired.",
    cue: "When fatigue rises, make your first touch simpler.",
    reminder: "No max effort jumping on hard concrete. Choose grass or reduce jumps.",
    fuel: "Plan dinner before training so recovery is easy afterward.",
    blocks: [
      ["Warm-up", "8 min movement prep and ball familiarity."],
      ["Strength circuit", "4 rounds: squat 12, reverse lunge 10 each, pushup 8-12, plank 35 sec, calf raise 15."],
      ["Ball stamina", "12 min continuous technical dribble. Every minute add a turn and 5-yard burst."],
      ["Challenge", "4 min juggling or ball taps. Try to beat Week 1 score."],
      ["Cooldown", "Walk, stretch, and hydrate."],
    ],
  },
  {
    date: "2026-06-29",
    week: 5,
    type: "home",
    label: "Home 1",
    title: "Midpoint Test: Touch, Engine, Core",
    duration: "45-55 min",
    intensity: "RPE 6-7",
    focus: ["Testing", "Accountability", "Technique"],
    highlight: "Honest numbers help you train smarter for July.",
    cue: "Test with the same setup each time so the comparison means something.",
    reminder: "Warm up fully. Do not chase a number through pain.",
    fuel: "Eat familiar foods today. Testing is not the day for new supplements or energy drinks.",
    blocks: [
      ["Warm-up", "10 min easy ball work, mobility, and two build-up runs."],
      ["Touch test", "Best juggling streak in 5 min, then 100 controlled touches as fast as clean technique allows."],
      ["Engine test", "6 min continuous run or dribble-run. Record distance if you know it, or record effort quality."],
      ["Core test", "One quality plank hold. Stop when form breaks."],
      ["Cooldown", "Walk and write down one technical win and one July focus."],
    ],
  },
  {
    date: "2026-07-01",
    week: 5,
    type: "team",
    label: "In-person",
    title: "Midpoint Combine + Team Standards",
    duration: "75-85 min",
    intensity: "RPE 7",
    focus: ["Technical combine", "Team standards", "Competition"],
    highlight: "Compete without cutting corners.",
    cue: "Be exact when tired. Details are the standard.",
    reminder: "Coach records simple benchmarks: juggling, timed dribble, sprint quality, attitude.",
    fuel: "Bring water and eat a normal meal beforehand. Recovery snack after training.",
    blocks: [
      ["Activation", "10 min dynamic warm-up and ball touches."],
      ["Technical stations", "25 min: juggling, weak-foot touches, receiving turn, short pass accuracy to a partner."],
      ["Athletic stations", "15 min: acceleration starts, decel balance, repeated 8-sec efforts with full recovery."],
      ["Competitive game", "25 min small-sided with coach scoring effort, communication, and transition response."],
      ["Close", "5 min team standard: every player names one July commitment."],
    ],
  },
  {
    date: "2026-07-03",
    week: 5,
    type: "home",
    label: "Home 2",
    title: "Active Recovery + Weak Foot",
    duration: "30-40 min",
    intensity: "RPE 4-5",
    focus: ["Recovery", "Weak foot", "Mobility"],
    highlight: "Recovery days keep the next hard week possible.",
    cue: "Slow is smooth. Smooth becomes dependable.",
    reminder: "Keep this light even if you feel good.",
    fuel: "Hydrate and eat full meals. Recovery still needs energy.",
    blocks: [
      ["Warm-up", "5 min easy walk and light ball touches."],
      ["Weak-foot rhythm", "12 min: gentle dribbling, inside push, sole stop, outside cut, all weak foot first."],
      ["Mobility", "12 min: hips, calves, hamstrings, quads, ankles, and thoracic rotation."],
      ["Touch finish", "5 min relaxed juggling or ball taps."],
      ["Cooldown", "2 min quiet breathing."],
    ],
  },
  {
    date: "2026-07-04",
    week: 5,
    type: "home",
    label: "Home 3",
    title: "Independence Challenge + Heat Smart",
    duration: "35-45 min",
    intensity: "RPE 5-6",
    focus: ["Self-led training", "Ball confidence", "Heat awareness"],
    highlight: "Own the session. No coach required.",
    cue: "Choose clean reps over extra reps.",
    reminder: "Holiday heat rule: train early, shorten the session, and hydrate.",
    fuel: "Enjoy normal holiday food, then come back to water and balanced meals.",
    blocks: [
      ["Warm-up", "6 min easy touches and dynamic mobility."],
      ["Player choice skill", "15 min choose two weak areas: juggling, turns, weak foot, first touch, or ball mastery."],
      ["Conditioning", "8 rounds: 20 sec controlled fast dribble, 40 sec walk."],
      ["Strength", "2 rounds: squat 10, pushup 8, lunge 8 each, plank 30 sec."],
      ["Close", "Record one habit you are proud of from June."],
    ],
  },
  {
    date: "2026-07-06",
    week: 6,
    type: "home",
    label: "Home 1",
    title: "Explosive Touches + Power Mechanics",
    duration: "50-55 min",
    intensity: "RPE 7",
    focus: ["Power", "Explosive first touch", "Landing control"],
    highlight: "Power begins with body control.",
    cue: "Load, explode, land quietly, play the next touch.",
    reminder: "Keep jumps low and crisp. Stop if landings get loud or sloppy.",
    fuel: "Breakfast matters. Eat before morning work, even if it is simple.",
    blocks: [
      ["Warm-up", "10 min dynamic movement, ankle hops, light ball touches, and three build-ups."],
      ["Explosive touch", "14 min: receive or self-touch, push 5 yards, accelerate. 6 each foot each direction."],
      ["Power prep", "3 rounds: squat jump 5, lateral bound 5 each, sprint start 2 reps, full walk recovery."],
      ["Strength", "2 rounds: split squat 8 each, pushup 10, plank 40 sec, calf raise 15."],
      ["Cooldown", "Walk and stretch hips, calves, quads."],
    ],
  },
  {
    date: "2026-07-08",
    week: 6,
    type: "team",
    label: "In-person",
    title: "Transition Attack/Defend Team Day",
    duration: "80-90 min",
    intensity: "RPE 7",
    focus: ["Transition", "Communication", "Defending habits"],
    highlight: "The team that reacts together controls the next moment.",
    cue: "First look forward after winning it. First step recovery after losing it.",
    reminder: "Keep teams small enough that everyone works.",
    fuel: "Bring water. If the session is long and hot, a sports drink may be useful, but water stays the default.",
    blocks: [
      ["Activation", "10 min ball warm-up with call-and-response movement cues."],
      ["Transition rondo", "18 min possession with immediate counter-press after loss."],
      ["Attack waves", "22 min 3v2 or 4v3 to an endline. Defender wins it and breaks out."],
      ["Game", "30 min small-sided with transition scoring: counter goal, recovery run, or five-pass regain."],
      ["Close", "5 min cooldown and captain-led reflection."],
    ],
  },
  {
    date: "2026-07-10",
    week: 6,
    type: "home",
    label: "Home 2",
    title: "Fast Feet Patterns + Ball Control",
    duration: "45-50 min",
    intensity: "RPE 6-7",
    focus: ["Foot speed", "Ball control", "Core"],
    highlight: "You do not need a ladder to train quick feet.",
    cue: "Stay light on the balls of your feet and keep the ball close enough to protect.",
    reminder: "Use field lines, driveway cracks, or imaginary squares.",
    fuel: "If appetite is low after training, start with a smoothie or chocolate milk, then eat later.",
    blocks: [
      ["Warm-up", "8 min mobility, light dribble, and fast-feet primer."],
      ["Feet patterns", "12 min: in-in-out-out, lateral quick steps, forward-back steps, ball between feet. 30 sec on, 20 sec off."],
      ["Control under speed", "14 min dribble pattern: 5 quick touches, outside cut, 5-yard burst, sole stop."],
      ["Core", "2 rounds: plank shoulder taps 16, side plank 25 sec each, dead bug 10 each, glute bridge 15."],
      ["Cooldown", "Easy walk and stretch."],
    ],
  },
  {
    date: "2026-07-11",
    week: 6,
    type: "home",
    label: "Home 3",
    title: "Long Engine + Skill Stamina",
    duration: "55-65 min",
    intensity: "RPE 6",
    focus: ["Aerobic base", "Touch volume", "Patience"],
    highlight: "This session builds the engine behind repeated soccer actions.",
    cue: "Breathe steady enough that technique stays calm.",
    reminder: "Choose cooler hours. Carry water if you leave home.",
    fuel: "Eat a normal meal after. This longer day needs total energy, not just a snack.",
    blocks: [
      ["Warm-up", "8 min mobility and easy ball touches."],
      ["Steady engine", "22 min continuous easy run, walk-run, or dribble-run. Keep it conversational."],
      ["Skill stamina", "15 min continuous ball work: turns, sole rolls, weak-foot touches, juggling resets."],
      ["Strength maintenance", "2 rounds: squat 12, pushup 10, reverse lunge 8 each, calf raise 15."],
      ["Cooldown", "8 min walk, stretch, and hydration."],
    ],
  },
  {
    date: "2026-07-13",
    week: 7,
    type: "home",
    label: "Home 1",
    title: "Repeated Sprint with Ball + Body Control",
    duration: "50-60 min",
    intensity: "RPE 7-8",
    focus: ["Repeated sprint", "Ball carrying", "Body control"],
    highlight: "Carry the ball at speed without letting it run away.",
    cue: "Longer touches in open space, shorter touches before the cut.",
    reminder: "If sprint form fades, add rest or end the sprint block.",
    fuel: "Hard session today. Eat carbohydrates before and after.",
    blocks: [
      ["Warm-up", "10 min movement prep, touch prep, and 4 build-ups."],
      ["Ball carry", "12 min: open-space laces dribble, outside cut, accelerate again. 8 each side."],
      ["Sprint block", "3 sets of 5 reps: 8 sec hard dribble or run, 52 sec walk. Rest 3 min between sets."],
      ["Body control", "2 rounds: lateral lunge 10 each, plank 45 sec, single-leg balance 25 sec each."],
      ["Cooldown", "Walk until breathing settles and stretch."],
    ],
  },
  {
    date: "2026-07-15",
    week: 7,
    type: "team",
    label: "In-person",
    title: "High Pressure Possession + Decisions",
    duration: "80-90 min",
    intensity: "RPE 8",
    focus: ["Pressure decisions", "Possession", "Competitive fitness"],
    highlight: "Pressure reveals habits. Stay composed.",
    cue: "Scan early, decide early, then execute with conviction.",
    reminder: "Coach watches heat load. Quality matters more than one extra game.",
    fuel: "Pack water and a recovery snack. Avoid energy drinks before training.",
    blocks: [
      ["Activation", "10 min dynamic warm-up with passing and scanning."],
      ["Pressure rondos", "20 min small grids or natural spaces. Limit touches only when quality is ready."],
      ["Decision waves", "20 min 3v3 or 4v4 to endlines. Bonus for playing out of pressure."],
      ["Competitive game", "30 min small-sided tournament. Short games, fast rotations, water between rounds."],
      ["Close", "5 min cooldown and team cue: play fast without rushing."],
    ],
  },
  {
    date: "2026-07-17",
    week: 7,
    type: "home",
    label: "Home 2",
    title: "Ball Protection + Strength",
    duration: "45-55 min",
    intensity: "RPE 7",
    focus: ["Shielding", "Strength", "Balance"],
    highlight: "Strong players protect the ball without fouling or panicking.",
    cue: "Body between defender and ball, arm for space, eyes for the next pass.",
    reminder: "Use an imaginary defender or a family member shadowing lightly.",
    fuel: "Protein supports repair, but carbs still power soccer. Get both today.",
    blocks: [
      ["Warm-up", "8 min ball touches, hip mobility, and light shoulder checks."],
      ["Shielding", "14 min: sole stop, body turn, roll away, burst. 10 each direction per foot."],
      ["Strength", "3 rounds: split squat 10 each, pushup 10, side plank 30 sec each, calf raise 18."],
      ["Balance finisher", "6 min single-leg touches around the ball and weak-foot control."],
      ["Cooldown", "Walk and stretch hips and calves."],
    ],
  },
  {
    date: "2026-07-18",
    week: 7,
    type: "home",
    label: "Home 3",
    title: "Heat-Safe Stamina + Mental Routine",
    duration: "40-55 min",
    intensity: "RPE 6-7",
    focus: ["Stamina", "Mental reset", "Recovery"],
    highlight: "Consistency is part of toughness.",
    cue: "Control what you can: effort, touch, breathing, response.",
    reminder: "If heat index is high, make this a 25-minute mobility and touches session indoors or in shade.",
    fuel: "Water before, during, and after. Add fruit or a simple snack if training between meals.",
    blocks: [
      ["Warm-up", "8 min easy movement and ball touches."],
      ["Stamina", "14 min: 2 min easy, 30 sec quicker, 1 min walk. Repeat 4 times."],
      ["Mental routine", "6 min: three breaths, visualize first touch, sprint start, and response after mistake."],
      ["Mobility strength", "2 rounds: squat 10, glute bridge 15, dead bug 10 each, calf raise 15."],
      ["Cooldown", "Write one sentence: what kind of teammate will I be this week?"],
    ],
  },
  {
    date: "2026-07-20",
    week: 8,
    type: "home",
    label: "Home 1",
    title: "Sharpness + Acceleration",
    duration: "45-55 min",
    intensity: "RPE 8",
    focus: ["Sharp touches", "Acceleration", "Tryout speed"],
    highlight: "Peak week starts sharp, not sloppy.",
    cue: "Every rep has a beginning, a burst, and a clean reset.",
    reminder: "End the session while you still feel fast.",
    fuel: "Fuel like a game day. Do not skip meals.",
    blocks: [
      ["Warm-up", "10 min movement prep, ball touches, and progressive accelerations."],
      ["Sharp touch", "12 min: one move, one exit, one burst. Choose 4 moves and complete 8 clean reps each."],
      ["Acceleration", "8 reps: 10-yard sprint from different starts, full walk-back recovery."],
      ["Strength primer", "2 rounds: squat jump 4, pushup 8, split squat 6 each, plank 35 sec."],
      ["Cooldown", "Walk and stretch. Leave the field feeling springy."],
    ],
  },
  {
    date: "2026-07-22",
    week: 8,
    type: "team",
    label: "In-person",
    title: "Match Simulation + Tryout Standard",
    duration: "85-95 min",
    intensity: "RPE 8",
    focus: ["Match rhythm", "Communication", "Competing"],
    highlight: "This is the closest full-speed rehearsal of the summer.",
    cue: "Compete every phase: on ball, off ball, transition, recovery.",
    reminder: "Coach protects quality with short games and clear rest.",
    fuel: "Eat 3-4 hours before when possible, hydrate, and bring a post-session snack.",
    blocks: [
      ["Activation", "12 min dynamic warm-up, passing, and speed primer."],
      ["Position actions", "18 min player-specific patterns: receive, play, support, recover, repeat."],
      ["Simulation", "35 min small-sided or half-field games with tryout scoring for effort, decisions, communication, and recovery."],
      ["Pressure finish", "15 min short competitive rounds: next goal wins, must transition immediately."],
      ["Close", "5 min cooldown and one confidence cue for each player group."],
    ],
  },
  {
    date: "2026-07-24",
    week: 8,
    type: "home",
    label: "Home 2",
    title: "Speed Endurance Test + Passing Challenge",
    duration: "45-55 min",
    intensity: "RPE 8",
    focus: ["Speed endurance", "Accuracy", "Focus under fatigue"],
    highlight: "Can you stay accurate after sprinting?",
    cue: "Recover your breath before the pass. Accuracy is a choice.",
    reminder: "Use a wall if available. If not, use self-toss, receive, and target a safe space.",
    fuel: "Refuel quickly after this one. Carbs plus protein are the target.",
    blocks: [
      ["Warm-up", "10 min dynamic prep and ball touches."],
      ["Speed endurance", "2 sets of 6 reps: 10 sec hard, 50 sec walk. Rest 4 min between sets."],
      ["Passing challenge", "12 min: after each sprint, make 5 clean passes to wall or 5 controlled self-receives each foot."],
      ["Core reset", "2 rounds: plank 45 sec, side plank 30 sec each, glute bridge 15."],
      ["Cooldown", "Walk, stretch, hydrate, and record how clean the final reps felt."],
    ],
  },
  {
    date: "2026-07-25",
    week: 8,
    type: "home",
    label: "Home 3",
    title: "Resilience Circuit + Recovery Finish",
    duration: "45-55 min",
    intensity: "RPE 7",
    focus: ["Strength endurance", "Mental resilience", "Recovery"],
    highlight: "Finish peak week with composure.",
    cue: "Do the next right rep.",
    reminder: "If the week was heavy, reduce this to two rounds and a long cooldown.",
    fuel: "Eat a full dinner and prioritize sleep tonight.",
    blocks: [
      ["Warm-up", "8 min mobility and ball work."],
      ["Resilience circuit", "3 rounds: 45 sec ball mastery, 10 squats, 8 pushups, 8 lunges each, 30 sec plank, 60 sec walk."],
      ["Skill under fatigue", "8 min weak-foot dribble and turns at controlled speed."],
      ["Recovery finish", "8 min mobility: calves, hips, hamstrings, quads, back."],
      ["Close", "Write one tryout strength and one habit to protect this week."],
    ],
  },
  {
    date: "2026-07-27",
    week: 9,
    type: "home",
    label: "Home 1",
    title: "Technical Polish + Short Speed",
    duration: "35-45 min",
    intensity: "RPE 6-7",
    focus: ["Sharpness", "Confidence", "Short speed"],
    highlight: "Reduce volume. Keep the quality high.",
    cue: "Clean first touch, fast first step, calm next action.",
    reminder: "This is not a conditioning day. Leave energy in the tank.",
    fuel: "Keep meals familiar and steady. Hydrate without overdoing it.",
    blocks: [
      ["Warm-up", "8 min light ball work and mobility."],
      ["Technical polish", "14 min favorite moves, weak-foot touch, receiving across body, juggling confidence."],
      ["Short speed", "6 reps: 5-8 yard accelerations with full recovery."],
      ["Core primer", "1-2 rounds: plank 30 sec, glute bridge 12, calf raise 12."],
      ["Cooldown", "Walk and visualize your first five minutes of tryout."],
    ],
  },
  {
    date: "2026-07-28",
    week: 9,
    type: "home",
    label: "Home 2",
    title: "Mobility + Weak-Foot Confidence",
    duration: "25-35 min",
    intensity: "RPE 4-5",
    focus: ["Mobility", "Weak foot", "Freshness"],
    highlight: "Fresh legs are the priority.",
    cue: "Smooth touches, smooth breathing, no forced speed.",
    reminder: "Stop before you feel tired.",
    fuel: "Normal meals, water, and no last-minute experiments.",
    blocks: [
      ["Warm-up", "5 min easy walk and touches."],
      ["Mobility", "10 min hips, calves, hamstrings, quads, ankles, and back."],
      ["Weak-foot confidence", "10 min light touches, simple cuts, and 20 clean weak-foot contacts."],
      ["Breathing", "3 min slow breathing and posture reset."],
      ["Close", "Pick one cue for tomorrow: scan, compete, recover, or communicate."],
    ],
  },
  {
    date: "2026-07-29",
    week: 9,
    type: "team",
    label: "In-person",
    title: "Final Team Rehearsal",
    duration: "60-75 min",
    intensity: "RPE 6-7",
    focus: ["Tryout rehearsal", "Team cues", "Freshness"],
    highlight: "The final team day is about clarity, not exhaustion.",
    cue: "Simple, sharp, connected.",
    reminder: "Coach keeps volume low and confidence high.",
    fuel: "Eat familiar foods and hydrate. Bring water and a light snack.",
    blocks: [
      ["Activation", "10 min dynamic warm-up and ball confidence touches."],
      ["Technical rhythm", "15 min passing, receiving, and first-touch patterns at clean speed."],
      ["Game rehearsal", "25 min short-sided games with tryout cues: communicate, transition, recover, compete."],
      ["Set standards", "10 min team reminders: effort, body language, coachability, teammate response."],
      ["Close", "5 min cooldown and final confidence cue."],
    ],
  },
  {
    date: "2026-07-30",
    week: 9,
    type: "home",
    label: "Home 3",
    title: "Sendoff Checklist + Recovery Touches",
    duration: "20-30 min",
    intensity: "RPE 3-4",
    focus: ["Recovery", "Confidence", "Readiness"],
    highlight: "Finish the program fresh and prepared.",
    cue: "Trust the work. Keep the ball friendly and the body relaxed.",
    reminder: "Pack gear, water, snack, and any school forms. Sleep matters tonight.",
    fuel: "Eat a normal balanced dinner. Avoid energy drinks and unfamiliar foods.",
    blocks: [
      ["Easy touches", "8 min relaxed dribbling, juggling, and favorite move at half speed."],
      ["Mobility", "8 min hips, calves, hamstrings, quads, ankles, and gentle back rotation."],
      ["Readiness check", "Pack gear, confirm schedule, fill water bottle, choose recovery snack."],
      ["Mental cue", "2 min visualize first touch, first recovery run, and positive response after a mistake."],
      ["Close", "Write one sentence: I am ready because I have trained the habits."],
    ],
  },
];

const restDayTemplates = {
  0: {
    title: "Full Rest + Family Day",
    duration: "0-20 min",
    focus: ["Rest", "Sleep", "Hydration"],
    highlight: "Let the body absorb the week.",
    cue: "Rest is part of training.",
    reminder: "Optional walk and gentle stretching only.",
    fuel: "Eat normal meals and keep water nearby.",
    blocks: [["Recovery", "Optional 10-20 min walk, light stretch, and early bedtime. No hard conditioning."]],
  },
  2: {
    title: "Recovery Mobility",
    duration: "10-25 min",
    focus: ["Mobility", "Tissue reset", "Hydration"],
    highlight: "Freshness for the next soccer day.",
    cue: "Slow down enough to notice tight spots.",
    reminder: "If sore, walk and stretch. If sharp pain appears, tell a parent, coach, or athletic trainer.",
    fuel: "Keep meals balanced. Under-eating makes soreness linger.",
    blocks: [["Mobility", "10-25 min easy walk, hip openers, calf stretch, hamstring stretch, quad stretch, and breathing."]],
  },
  4: {
    title: "Reset Day",
    duration: "10-20 min",
    focus: ["Recovery", "School-life balance", "Sleep"],
    highlight: "Protect the weekend training block.",
    cue: "Low stress, clean habits.",
    reminder: "Check shoes, water bottle, and training space for tomorrow.",
    fuel: "Add color to meals today: fruit, vegetables, and enough carbohydrates.",
    blocks: [["Reset", "Optional ball walk or light juggling only. No sprints. Get to bed on time."]],
  },
};

const defaultTeamEvents = [];

const sampleTeamEvents = [
  {
    id: "sample-1",
    type: "practice",
    date: "2026-06-03",
    time: "18:00",
    title: "Team Training",
    location: "High school stadium",
    notes: "Ball, cleats, water, white shirt.",
  },
  {
    id: "sample-2",
    type: "scrimmage",
    date: "2026-07-15",
    time: "18:30",
    title: "Controlled Scrimmage",
    location: "Practice field",
    notes: "Arrive 20 minutes early for warm-up.",
  },
  {
    id: "sample-3",
    type: "meeting",
    date: "2026-07-27",
    time: "17:30",
    title: "Tryout Readiness Meeting",
    location: "Team room",
    notes: "Bring notebook and completed benchmark results.",
  },
  {
    id: "sample-4",
    type: "game",
    date: "2026-08-18",
    time: "19:00",
    title: "Preseason Game vs. Rival HS",
    location: "Home stadium",
    notes: "Report time 5:45 PM.",
  },
];

const benchmarkDefinitions = [
  {
    id: "juggling",
    title: "Max Juggling Streak",
    category: "Technical",
    setup: "Best clean streak in five minutes. Count only controlled contacts.",
    score: "Record best streak and strongest surface.",
    target: "Build steady improvement. A strong team target is 50+ clean touches.",
  },
  {
    id: "weak-foot-passes",
    title: "Weak-Foot Passes",
    category: "Technical",
    setup: "Use a wall or safe target. Complete as many clean weak-foot passes as possible in 60 seconds.",
    score: "Record clean passes, misses, and dominant correction.",
    target: "Goal: fewer rushed touches each retest.",
  },
  {
    id: "ball-mastery-100",
    title: "100-Touch Ball Mastery",
    category: "Technical",
    setup: "Complete 100 assigned touches: foundations, toe taps, sole rolls, pull-pushes.",
    score: "Record time only if technique stays clean.",
    target: "Goal: faster without the ball drifting away.",
  },
  {
    id: "ten-yard",
    title: "10-Yard Burst",
    category: "Speed",
    setup: "Three starts from a soccer stance. Full recovery between reps.",
    score: "Record best time or rank reps as sharp, average, or slow.",
    target: "Goal: better first step, lower body angle, and clean acceleration.",
  },
  {
    id: "five-ten-five",
    title: "5-10-5 Shuttle",
    category: "Agility",
    setup: "Sprint 5 yards, change direction 10 yards, change direction 5 yards back.",
    score: "Record best of two clean reps.",
    target: "Goal: lower hips before the plant and no extra steps out of the turn.",
  },
  {
    id: "six-minute",
    title: "6-Minute Run",
    category: "Engine",
    setup: "Run or dribble-run for six minutes on a safe route or track.",
    score: "Record distance, laps, or honest effort quality.",
    target: "Goal: finish controlled, not collapsed.",
  },
  {
    id: "plank",
    title: "Quality Plank Hold",
    category: "Strength",
    setup: "Hold a front plank with straight body line. Stop when form breaks.",
    score: "Record time and form note.",
    target: "A useful target is 60-90 seconds with clean form.",
  },
  {
    id: "repeated-sprint",
    title: "Repeated Sprint Set",
    category: "Match fitness",
    setup: "Six reps of 8-10 seconds hard with 50 seconds walk recovery.",
    score: "Record whether final reps stayed fast and technical.",
    target: "Goal: small drop-off from first rep to last rep.",
  },
];

const strategyCategories = ["All", "Attack", "Defend", "Transition", "Set pieces", "Mindset"];

const strategyModules = [
  {
    id: "width-depth",
    category: "Attack",
    title: "Width and Depth",
    principle: "Stretch the field so the player on the ball has room, options, and a forward picture.",
    cues: ["Wide players hold the line", "Forward pins the back line", "Midfield supports underneath"],
    questions: ["Where is the space before I receive?", "Am I making the field bigger or smaller?"],
    dots: [
      ["team", 15, 50, "LW"],
      ["team", 50, 18, "ST"],
      ["team", 85, 50, "RW"],
      ["team", 35, 64, "CM"],
      ["team", 62, 64, "CM"],
      ["ball", 35, 64, ""],
    ],
  },
  {
    id: "third-player",
    category: "Attack",
    title: "Third-Player Runs",
    principle: "Use one teammate to find another who can face forward.",
    cues: ["Pass and move", "Support below the ball", "Run when the defender turns their head"],
    questions: ["Who is the bounce player?", "Who can receive facing forward?"],
    dots: [
      ["team", 38, 65, "A"],
      ["team", 50, 45, "B"],
      ["team", 64, 30, "C"],
      ["ball", 38, 65, ""],
      ["opponent", 52, 52, ""],
      ["opponent", 60, 38, ""],
    ],
  },
  {
    id: "compact-defense",
    category: "Defend",
    title: "Compact Defending",
    principle: "Make the dangerous space small and force play where help is waiting.",
    cues: ["Pressure the ball", "Cover behind", "Balance the far side", "Recover goal-side"],
    questions: ["Can I see ball and player?", "Is our back line connected?"],
    dots: [
      ["opponent", 28, 38, "B"],
      ["ball", 28, 38, ""],
      ["team", 34, 42, "P"],
      ["team", 48, 46, "C"],
      ["team", 60, 54, "B"],
      ["team", 72, 58, ""],
      ["opponent", 62, 28, ""],
    ],
  },
  {
    id: "pressing",
    category: "Defend",
    title: "Pressing Triggers",
    principle: "Press together when the opponent gives a cue: bad touch, back pass, slow pass, or sideline trap.",
    cues: ["First player curves the run", "Second player blocks the escape", "Back line squeezes"],
    questions: ["Did my run remove a passing lane?", "Are we pressing as one unit?"],
    dots: [
      ["opponent", 22, 52, "CB"],
      ["ball", 22, 52, ""],
      ["opponent", 42, 35, "CM"],
      ["opponent", 42, 66, "FB"],
      ["team", 32, 58, "9"],
      ["team", 49, 48, "10"],
      ["team", 53, 70, "W"],
    ],
  },
  {
    id: "five-second",
    category: "Transition",
    title: "Five-Second Response",
    principle: "The first five seconds after a turnover decide whether we counter, counter-press, or recover.",
    cues: ["Win it: first look forward", "Lose it: nearest player pressures", "Far players recover inside"],
    questions: ["Can we attack before they organize?", "If not, can we stop the first pass?"],
    dots: [
      ["team", 42, 48, "8"],
      ["ball", 42, 48, ""],
      ["team", 63, 30, "9"],
      ["team", 70, 63, "W"],
      ["opponent", 48, 54, ""],
      ["opponent", 56, 44, ""],
    ],
  },
  {
    id: "corner-roles",
    category: "Set pieces",
    title: "Corner Kick Roles",
    principle: "Every player has a job: target run, screen, rebound, safety, or counter-press.",
    cues: ["Attack space, not the crowd", "Arrive late", "One player protects the top"],
    questions: ["What is my role before the service?", "Where does the second ball land?"],
    dots: [
      ["ball", 92, 20, ""],
      ["team", 78, 30, "Near"],
      ["team", 70, 46, "Target"],
      ["team", 82, 62, "Far"],
      ["team", 56, 66, "Top"],
      ["opponent", 74, 48, ""],
      ["opponent", 84, 42, ""],
    ],
  },
  {
    id: "scanning",
    category: "Mindset",
    title: "Scan Before the Ball",
    principle: "Information creates speed. Scan early so the first touch has a purpose.",
    cues: ["Look before", "Open body", "Name the next action", "Check again after pass"],
    questions: ["What did I see before receiving?", "Was my first touch connected to that picture?"],
    dots: [
      ["team", 34, 60, "6"],
      ["ball", 34, 60, ""],
      ["team", 55, 42, "8"],
      ["team", 68, 28, "9"],
      ["opponent", 48, 55, ""],
      ["opponent", 64, 50, ""],
    ],
  },
];

const sessionMap = new Map(sessions.map((session) => [session.date, session]));
const doneDates = loadDoneDates();
let teamEvents = loadTeamEvents();
let benchmarkResults = loadBenchmarkResults();
let journalEntries = loadJournalEntries();
let activeStrategyCategory = "All";
let selectedStrategyId = strategyModules[0].id;
let selectedDate = getInitialDate();
let activeMonth = parseDate(selectedDate).getMonth();

const calendarGrid = document.querySelector("#calendar-grid");
const calendarTitle = document.querySelector("#calendar-title");
const completeCount = document.querySelector("#complete-count");
const eventCount = document.querySelector("#event-count");
const journalCount = document.querySelector("#journal-count");
const sessionDetail = document.querySelector("#session-detail");
const weekList = document.querySelector("#week-list");
const monthButtons = document.querySelectorAll(".month-button");
const viewTabs = document.querySelectorAll(".view-tab");
const resetButton = document.querySelector("#reset-progress");
const monthToggle = document.querySelector(".month-toggle");
const eventForm = document.querySelector("#event-form");
const eventList = document.querySelector("#event-list");
const loadSampleEventsButton = document.querySelector("#load-sample-events");
const clearEventsButton = document.querySelector("#clear-events");
const benchmarkGrid = document.querySelector("#benchmark-grid");
const benchmarkForm = document.querySelector("#benchmark-form");
const benchmarkSelect = document.querySelector("#benchmark-select");
const benchmarkResultsList = document.querySelector("#benchmark-results");
const journalForm = document.querySelector("#journal-form");
const journalList = document.querySelector("#journal-list");
const strategyFilter = document.querySelector("#strategy-filter");
const strategyList = document.querySelector("#strategy-list");
const strategyDetail = document.querySelector("#strategy-detail");

const dailyMap = buildDailyProgram();

renderAll();
bindEvents();
registerServiceWorker();

function bindEvents() {
  monthButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeMonth = Number(button.dataset.month);
      renderCalendar();
    });
  });

  viewTabs.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveView(button.dataset.view);
    });
  });

  calendarGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-date]");
    if (!button) return;
    selectDate(button.dataset.date);
    setActiveView("training");
  });

  sessionDetail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-toggle-done]");
    if (!button) return;
    toggleDone(button.dataset.toggleDone);
  });

  weekList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-week-date]");
    if (!button) return;
    selectDate(button.dataset.weekDate);
    activeMonth = parseDate(selectedDate).getMonth();
    setActiveView("training");
  });

  resetButton.addEventListener("click", () => {
    doneDates.clear();
    saveDoneDates();
    renderAll();
  });

  eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(eventForm);
    teamEvents = [
      ...teamEvents,
      {
        id: createId("event"),
        type: String(formData.get("type") || "practice"),
        date: String(formData.get("date") || ""),
        time: String(formData.get("time") || ""),
        title: String(formData.get("title") || "").trim(),
        location: String(formData.get("location") || "").trim(),
        notes: String(formData.get("notes") || "").trim(),
      },
    ].filter((item) => item.date && item.title);
    saveTeamEvents();
    eventForm.reset();
    setDefaultFormDates();
    renderStatus();
    renderTeamEvents();
  });

  eventList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-event]");
    if (!button) return;
    teamEvents = teamEvents.filter((item) => item.id !== button.dataset.deleteEvent);
    saveTeamEvents();
    renderStatus();
    renderTeamEvents();
  });

  loadSampleEventsButton.addEventListener("click", () => {
    teamEvents = sampleTeamEvents.map((item) => ({ ...item, id: createId("sample") }));
    saveTeamEvents();
    renderStatus();
    renderTeamEvents();
  });

  clearEventsButton.addEventListener("click", () => {
    teamEvents = [];
    saveTeamEvents();
    renderStatus();
    renderTeamEvents();
  });

  benchmarkForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(benchmarkForm);
    benchmarkResults = [
      {
        id: createId("benchmark"),
        benchmark: String(formData.get("benchmark") || ""),
        date: String(formData.get("date") || ""),
        result: String(formData.get("result") || "").trim(),
        notes: String(formData.get("notes") || "").trim(),
      },
      ...benchmarkResults,
    ].filter((item) => item.benchmark && item.date && item.result);
    saveBenchmarkResults();
    benchmarkForm.reset();
    setDefaultFormDates();
    renderBenchmarks();
  });

  benchmarkResultsList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-benchmark]");
    if (!button) return;
    benchmarkResults = benchmarkResults.filter((item) => item.id !== button.dataset.deleteBenchmark);
    saveBenchmarkResults();
    renderBenchmarks();
  });

  journalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(journalForm);
    journalEntries = [
      {
        id: createId("journal"),
        date: String(formData.get("date") || ""),
        energy: String(formData.get("energy") || "Good"),
        soreness: String(formData.get("soreness") || "Light"),
        training: String(formData.get("training") || "").trim(),
        mindset: String(formData.get("mindset") || "").trim(),
      },
      ...journalEntries,
    ].filter((item) => item.date && (item.training || item.mindset));
    saveJournalEntries();
    journalForm.reset();
    setDefaultFormDates();
    renderStatus();
    renderJournal();
  });

  journalList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-journal]");
    if (!button) return;
    journalEntries = journalEntries.filter((item) => item.id !== button.dataset.deleteJournal);
    saveJournalEntries();
    renderStatus();
    renderJournal();
  });

  strategyFilter.addEventListener("click", (event) => {
    const button = event.target.closest("[data-strategy-category]");
    if (!button) return;
    activeStrategyCategory = button.dataset.strategyCategory;
    const firstModule = getFilteredStrategies()[0];
    selectedStrategyId = firstModule?.id || strategyModules[0].id;
    renderStrategy();
  });

  strategyList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-strategy-id]");
    if (!button) return;
    selectedStrategyId = button.dataset.strategyId;
    renderStrategy();
  });

  setDefaultFormDates();
}

function renderAll() {
  renderStatus();
  renderCalendar();
  renderSession();
  renderWeeks();
  renderTeamEvents();
  renderBenchmarks();
  renderJournal();
  renderStrategy();
}

function setActiveView(view) {
  viewTabs.forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll("[data-panel]").forEach((panel) => {
    const name = panel.dataset.panel;
    const shouldShow =
      (view === "training" && (name === "calendar" || name === "session")) ||
      (view === "weeks" && name === "weeks") ||
      (view === "team" && name === "team") ||
      (view === "benchmarks" && name === "benchmarks") ||
      (view === "journal" && name === "journal") ||
      (view === "strategy" && name === "strategy") ||
      (view === "fuel" && name === "fuel");

    panel.classList.toggle("is-hidden", !shouldShow);
  });

  monthToggle.hidden = view !== "training";
}

function buildDailyProgram() {
  const days = new Map();
  for (let date = parseDate(programStart); date <= parseDate(programEnd); date.setDate(date.getDate() + 1)) {
    const id = toIso(date);
    const training = sessionMap.get(id);
    if (training) {
      days.set(id, { ...training, training: true });
      continue;
    }

    const template = restDayTemplates[date.getDay()] || {
      title: "Light Day",
      duration: "0-20 min",
      focus: ["Recovery", "Hydration", "Sleep"],
      highlight: "Keep the body fresh.",
      cue: "Easy means easy.",
      reminder: "No hard work needed today.",
      fuel: "Eat normal meals and drink water.",
      blocks: [["Recovery", "Optional walk, stretching, or relaxed ball touches. No hard conditioning."]],
    };

    const week = getWeekForDate(id);
    days.set(id, {
      ...template,
      date: id,
      week: week?.week || "",
      type: "recovery",
      label: "Recovery",
      intensity: "Easy",
      training: false,
    });
  }
  return days;
}

function renderStatus() {
  completeCount.textContent = String(doneDates.size);
  eventCount.textContent = String(teamEvents.length);
  journalCount.textContent = String(journalEntries.length);
}

function renderCalendar() {
  const monthName = activeMonth === 5 ? "June" : "July";
  calendarTitle.textContent = `${monthName} 2026`;
  monthButtons.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.month) === activeMonth);
  });

  const firstDay = new Date(2026, activeMonth, 1, 12);
  const daysInMonth = new Date(2026, activeMonth + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstDay.getDay(); i += 1) {
    cells.push(`<button class="calendar-day is-outside" type="button" tabindex="-1"></button>`);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(2026, activeMonth, day, 12);
    const id = toIso(date);
    const item = dailyMap.get(id);
    const outsideProgram = !item;
    const kind = item?.type === "team" ? "team" : item?.type === "home" ? "home" : "recovery";
    const selected = id === selectedDate ? " is-selected" : "";
    const done = doneDates.has(id) ? " is-done" : "";
    const outside = outsideProgram ? " is-outside" : "";
    const label = item?.type === "team" ? "Team" : item?.type === "home" ? "Home" : "Rest";
    const focus = item?.training ? item.focus[0] : item?.title || "";

    cells.push(`
      <button class="calendar-day kind-${kind}${selected}${done}${outside}" type="button" data-date="${id}" ${outsideProgram ? 'tabindex="-1"' : ""}>
        <span class="calendar-number">${day}</span>
        <span class="day-kind">${label}</span>
        <span class="calendar-focus">${escapeHtml(focus)}</span>
      </button>
    `);
  }

  calendarGrid.innerHTML = cells.join("");
}

function renderSession() {
  const item = dailyMap.get(selectedDate);
  if (!item) return;

  const dateText = formatDate(selectedDate);
  const week = getWeekForDate(selectedDate);
  const badgeClass = item.type === "team" ? "team" : item.type === "home" ? "home" : "recovery";
  const isDone = doneDates.has(selectedDate);
  const blocks = item.blocks
    .map(
      ([title, body]) => `
        <article class="training-block">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(body)}</p>
        </article>
      `
    )
    .join("");

  sessionDetail.innerHTML = `
    <div class="session-main">
      <div class="session-date-row">
        <span class="session-badge ${badgeClass}">${escapeHtml(item.label)}</span>
        <span class="session-date">${escapeHtml(dateText)}${week ? ` - Week ${week.week}` : ""}</span>
      </div>
      <h2>${escapeHtml(item.title)}</h2>
      <ul class="session-meta">
        <li>${escapeHtml(item.duration)}</li>
        <li>${escapeHtml(item.intensity)}</li>
        ${item.focus.map((focus) => `<li>${escapeHtml(focus)}</li>`).join("")}
      </ul>
      <div class="block-list">${blocks}</div>
    </div>
    <aside class="session-side" aria-label="Session cues and reminders">
      <div class="cue-card">
        <h3>Highlight</h3>
        <p><strong>${escapeHtml(item.highlight)}</strong></p>
      </div>
      <div class="cue-card">
        <h3>Cue</h3>
        <p>${escapeHtml(item.cue)}</p>
      </div>
      <div class="cue-card">
        <h3>Reminder</h3>
        <p>${escapeHtml(item.reminder)}</p>
      </div>
      <div class="cue-card">
        <h3>Fuel</h3>
        <p>${escapeHtml(item.fuel)}</p>
      </div>
      <div class="done-card">
        <h3>${item.training ? "Completion" : "Recovery day"}</h3>
        <p>${item.training ? "Mark this session when the work is complete." : "No training checkbox needed. Protect recovery."}</p>
        ${
          item.training
            ? `<button class="done-button ${isDone ? "is-done" : ""}" type="button" data-toggle-done="${selectedDate}">
                ${isDone ? "Completed" : "Mark Complete"}
              </button>`
            : ""
        }
      </div>
    </aside>
  `;
}

function renderWeeks() {
  weekList.innerHTML = weekPlans
    .map((week) => {
      const weekSessions = sessions.filter((session) => session.week === week.week);
      const buttons = weekSessions
        .map(
          (session) => `
            <button type="button" data-week-date="${session.date}">
              ${formatShortDate(session.date)} - ${escapeHtml(session.label)}: ${escapeHtml(session.title)}
            </button>
          `
        )
        .join("");

      return `
        <article class="week-card">
          <p class="week-range">Week ${week.week} - ${escapeHtml(week.range)} - ${escapeHtml(week.intensity)}</p>
          <h3>${escapeHtml(week.phase)}</h3>
          <p>${escapeHtml(week.goal)}</p>
          <p><strong>Fuel:</strong> ${escapeHtml(week.fuelFocus)}</p>
          <p><strong>Cue:</strong> ${escapeHtml(week.cue)}</p>
          <div class="week-days">${buttons}</div>
        </article>
      `;
    })
    .join("");
}

function renderTeamEvents() {
  const sortedEvents = [...teamEvents].sort(compareEvents);

  eventList.innerHTML = sortedEvents.length
    ? sortedEvents
        .map(
          (item) => `
            <article class="event-card event-${escapeHtml(item.type)}">
              <div>
                <div class="event-date-row">
                  <span class="event-type">${escapeHtml(labelCase(item.type))}</span>
                  <span class="event-date">${escapeHtml(formatEventDate(item.date, item.time))}</span>
                </div>
                <h3>${escapeHtml(item.title)}</h3>
                ${item.location ? `<p class="event-location">${escapeHtml(item.location)}</p>` : ""}
                ${item.notes ? `<p>${escapeHtml(item.notes)}</p>` : ""}
              </div>
              <button class="icon-button" type="button" data-delete-event="${escapeHtml(item.id)}" aria-label="Delete ${escapeHtml(item.title)}">Delete</button>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state"><h3>No team events saved.</h3><p>Add practices, games, scrimmages, meetings, and report times here.</p></div>`;
}

function renderBenchmarks() {
  benchmarkSelect.innerHTML = benchmarkDefinitions
    .map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.title)}</option>`)
    .join("");

  benchmarkGrid.innerHTML = benchmarkDefinitions
    .map(
      (item) => `
        <article class="benchmark-card">
          <p class="card-kicker">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <dl>
            <div><dt>Setup</dt><dd>${escapeHtml(item.setup)}</dd></div>
            <div><dt>Score</dt><dd>${escapeHtml(item.score)}</dd></div>
            <div><dt>Target</dt><dd>${escapeHtml(item.target)}</dd></div>
          </dl>
        </article>
      `
    )
    .join("");

  const sortedResults = [...benchmarkResults].sort((a, b) => b.date.localeCompare(a.date));
  benchmarkResultsList.innerHTML = sortedResults.length
    ? sortedResults
        .map((item) => {
          const definition = benchmarkDefinitions.find((benchmark) => benchmark.id === item.benchmark);
          return `
            <article class="result-card">
              <div>
                <p class="card-kicker">${escapeHtml(formatShortDate(item.date))}</p>
                <h3>${escapeHtml(definition?.title || item.benchmark)}</h3>
                <p><strong>${escapeHtml(item.result)}</strong>${item.notes ? ` - ${escapeHtml(item.notes)}` : ""}</p>
              </div>
              <button class="icon-button" type="button" data-delete-benchmark="${escapeHtml(item.id)}" aria-label="Delete benchmark result">Delete</button>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-state"><h3>No benchmark results saved.</h3><p>Record baseline numbers, retest after Week 5, and compare again before tryouts.</p></div>`;
}

function renderJournal() {
  const sortedEntries = [...journalEntries].sort((a, b) => b.date.localeCompare(a.date));
  journalList.innerHTML = sortedEntries.length
    ? sortedEntries
        .map(
          (item) => `
            <article class="journal-card">
              <div class="journal-card-head">
                <div>
                  <p class="card-kicker">${escapeHtml(formatShortDate(item.date))}</p>
                  <h3>Energy ${escapeHtml(item.energy)} - Soreness ${escapeHtml(item.soreness)}</h3>
                </div>
                <button class="icon-button" type="button" data-delete-journal="${escapeHtml(item.id)}" aria-label="Delete journal entry">Delete</button>
              </div>
              ${item.training ? `<p><strong>Training:</strong> ${escapeHtml(item.training)}</p>` : ""}
              ${item.mindset ? `<p><strong>Mindset:</strong> ${escapeHtml(item.mindset)}</p>` : ""}
            </article>
          `
        )
        .join("")
    : `<div class="empty-state"><h3>No journal entries saved.</h3><p>Track training quality, energy, soreness, confidence, and response to mistakes.</p></div>`;
}

function renderStrategy() {
  strategyFilter.innerHTML = strategyCategories
    .map(
      (category) => `
        <button class="filter-button ${category === activeStrategyCategory ? "is-active" : ""}" type="button" data-strategy-category="${escapeHtml(category)}">
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");

  const filtered = getFilteredStrategies();
  if (!filtered.some((item) => item.id === selectedStrategyId)) {
    selectedStrategyId = filtered[0]?.id || strategyModules[0].id;
  }

  strategyList.innerHTML = filtered
    .map(
      (item) => `
        <button class="strategy-item ${item.id === selectedStrategyId ? "is-active" : ""}" type="button" data-strategy-id="${escapeHtml(item.id)}">
          <span>${escapeHtml(item.category)}</span>
          ${escapeHtml(item.title)}
        </button>
      `
    )
    .join("");

  const selected = strategyModules.find((item) => item.id === selectedStrategyId) || strategyModules[0];
  strategyDetail.innerHTML = `
    <div class="strategy-board" aria-label="${escapeHtml(selected.title)} field diagram">
      <div class="field-line midfield"></div>
      <div class="field-line box left-box"></div>
      <div class="field-line box right-box"></div>
      ${selected.dots.map(([kind, x, y, label]) => renderDot(kind, x, y, label)).join("")}
    </div>
    <p class="card-kicker">${escapeHtml(selected.category)}</p>
    <h3>${escapeHtml(selected.title)}</h3>
    <p>${escapeHtml(selected.principle)}</p>
    <div class="strategy-columns">
      <div>
        <h4>Cues</h4>
        <ul>${selected.cues.map((cue) => `<li>${escapeHtml(cue)}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Questions</h4>
        <ul>${selected.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function selectDate(date) {
  selectedDate = date;
  activeMonth = parseDate(selectedDate).getMonth();
  renderCalendar();
  renderSession();
}

function toggleDone(date) {
  if (doneDates.has(date)) {
    doneDates.delete(date);
  } else {
    doneDates.add(date);
  }
  saveDoneDates();
  renderStatus();
  renderCalendar();
  renderSession();
}

function loadDoneDates() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return new Set(saved.filter((date) => sessionMap.has(date)));
  } catch (error) {
    return new Set();
  }
}

function saveDoneDates() {
  localStorage.setItem(storageKey, JSON.stringify([...doneDates]));
}

function loadTeamEvents() {
  return loadStoredArray(eventStorageKey, defaultTeamEvents);
}

function saveTeamEvents() {
  localStorage.setItem(eventStorageKey, JSON.stringify(teamEvents));
}

function loadBenchmarkResults() {
  return loadStoredArray(benchmarkStorageKey, []);
}

function saveBenchmarkResults() {
  localStorage.setItem(benchmarkStorageKey, JSON.stringify(benchmarkResults));
}

function loadJournalEntries() {
  return loadStoredArray(journalStorageKey, []);
}

function saveJournalEntries() {
  localStorage.setItem(journalStorageKey, JSON.stringify(journalEntries));
}

function loadStoredArray(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    return Array.isArray(saved) ? saved : [...fallback];
  } catch (error) {
    return [...fallback];
  }
}

function getInitialDate() {
  const today = toIso(new Date());
  return dailyMapHas(today) ? today : programStart;
}

function dailyMapHas(date) {
  return date >= programStart && date <= programEnd;
}

function getWeekForDate(date) {
  const dayMs = 24 * 60 * 60 * 1000;
  const offset = Math.floor((parseDate(date) - parseDate(programStart)) / dayMs);
  if (offset < 0) return undefined;
  const index = Math.min(Math.floor(offset / 7), weekPlans.length - 1);
  return weekPlans[index];
}

function parseDate(value) {
  return new Date(`${value}T12:00:00`);
}

function toIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(parseDate(value));
}

function formatShortDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(parseDate(value));
}

function formatEventDate(date, time) {
  const dateText = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(parseDate(date));

  if (!time) return dateText;
  const [hours, minutes] = time.split(":").map(Number);
  const eventDate = parseDate(date);
  eventDate.setHours(hours, minutes || 0, 0, 0);
  const timeText = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(eventDate);
  return `${dateText} at ${timeText}`;
}

function compareEvents(a, b) {
  return `${a.date}T${a.time || "23:59"}`.localeCompare(`${b.date}T${b.time || "23:59"}`);
}

function labelCase(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function createId(prefix) {
  if (window.crypto?.randomUUID) {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function setDefaultFormDates() {
  const today = toIso(new Date());
  const fallbackDate = today < programStart ? programStart : today;
  eventForm.elements.date.value ||= fallbackDate;
  benchmarkForm.elements.date.value ||= fallbackDate;
  journalForm.elements.date.value ||= fallbackDate;
}

function getFilteredStrategies() {
  if (activeStrategyCategory === "All") return strategyModules;
  return strategyModules.filter((item) => item.category === activeStrategyCategory);
}

function renderDot(kind, x, y, label) {
  return `
    <span class="field-dot ${escapeHtml(kind)}" style="left:${Number(x)}%; top:${Number(y)}%;">
      ${escapeHtml(label)}
    </span>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  navigator.serviceWorker.register("training-sw.js").catch(() => {});
}
