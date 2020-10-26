import React from 'react';
import './App.css';

function App() {
	return (
    <div>
      <div className="title">
        <h1>
          <span role="img" aria-label="green tea emoji">🍵</span>
          &nbsp;Matcha Nisi Simulator&nbsp;
          <span role="img" aria-label="green tea emoji">🍵</span>
        </h1>
        <h3>by Katryna Evalindra @ Adamantoise, for Untilted Matcha Static</h3>
      </div>
      <Simulator/>
    </div>
	);
}

export default App;

// =============
// = CONSTANTS =
// =============

const imgPath = "img/";
const Images = {
  JOB_PLD: imgPath + "Paladin_Icon_3.png",
  JOB_WAR: imgPath + "Warrior_Icon_3.png",
  JOB_DRK: imgPath + "Dark_Knight_Icon_3.png",
  JOB_GNB: imgPath + "Gunbreaker_Icon_3.png",
  JOB_WHM: imgPath + "White_Mage_Icon_3.png",
  JOB_SCH: imgPath + "Scholar_Icon_3.png",
  JOB_AST: imgPath + "Astrologian_Icon_3.png",
  JOB_MNK: imgPath + "Monk_Icon_3.png",
  JOB_DRG: imgPath + "Dragoon_Icon_3.png",
  JOB_NIN: imgPath + "Ninja_Icon_3.png",
  JOB_SAM: imgPath + "Samurai_Icon_3.png",
  JOB_BRD: imgPath + "Bard_Icon_3.png",
  JOB_MCH: imgPath + "Machinist_Icon_3.png",
  JOB_DNC: imgPath + "Dancer_Icon_3.png",
  JOB_BLM: imgPath + "Black_Mage_Icon_3.png",
  JOB_SMN: imgPath + "Summoner_Icon_3.png",
  JOB_RDM: imgPath + "Red_Mage_Icon_3.png",
  DB_COMPRESSED_WATER: imgPath + "compressed-water.png",
  DB_COMPRESSED_LIGHTNING: imgPath + "compressed-lightning.png",
  DB_WATER_VULN: imgPath + "water-res-down.png",
  DB_LIGHTNING_VULN: imgPath + "lightning-res-down.png",
  DB_PENALTY: imgPath + "penalty.png",
  DB_NISI_ALPHA: imgPath + "nisi-a.png",
  DB_NISI_BETA: imgPath + "nisi-b.png",
  DB_NISI_GAMMA: imgPath + "nisi-c.png",
  DB_NISI_DELTA: imgPath + "nisi-d.png",
  DB_JUDGMENT_ALPHA: imgPath + "judgment-a.png",
  DB_JUDGMENT_BETA: imgPath + "judgment-b.png",
  DB_JUDGMENT_GAMMA: imgPath + "judgment-c.png",
  DB_JUDGMENT_DELTA: imgPath + "judgment-d.png",
  ROLE_TANK: imgPath + "role-tank.png",
  ROLE_HEALER: imgPath + "role-healer.png",
  ROLE_DPS: imgPath + "role-ranged.png",
}

const GameState = {
	SETUP: "setup",
	READY: "ready",
	RUNNING: "running",
	ROUND_END: "round_end",
	GAME_END: "game_end",
}

const RowState = {
  ACTIVE: "pr-active",
  CORRECT: "pr-correct",
  INCORRECT: "pr-incorrect",
  SOLUTION: "pr-solution",
}

const Role = {
  TANK: "tank",
  HEALER: "healer",
  MELEE: "melee",
  RANGED: "ranged",
  CASTER: "caster",
}

const PartyOrder = {
  THD: {
    [Role.TANK]:   100,
    [Role.HEALER]: 200,
    [Role.MELEE]:  300,
    [Role.RANGED]: 300,
    [Role.CASTER]: 300,
  },
  TDH: {
    [Role.TANK]:   100,
    [Role.HEALER]: 300,
    [Role.MELEE]:  200,
    [Role.RANGED]: 200,
    [Role.CASTER]: 200,
  },
  HTD: {
    [Role.TANK]:   200,
    [Role.HEALER]: 100,
    [Role.MELEE]:  300,
    [Role.RANGED]: 300,
    [Role.CASTER]: 300,
  },
  HDT: {
    [Role.TANK]:   300,
    [Role.HEALER]: 100,
    [Role.MELEE]:  200,
    [Role.RANGED]: 200,
    [Role.CASTER]: 200,
  },
  DTH: {
    [Role.TANK]:   200,
    [Role.HEALER]: 300,
    [Role.MELEE]:  100,
    [Role.RANGED]: 100,
    [Role.CASTER]: 100,
  },
  DHT: {
    [Role.TANK]:   300,
    [Role.HEALER]: 200,
    [Role.MELEE]:  100,
    [Role.RANGED]: 100,
    [Role.CASTER]: 100,
  },
}

const Players = {
  PLD: {
    name: "Defund Me",
    job: "PLD",
    role: Role.TANK,
    icon: Images.JOB_PLD,
    sortOrder: 0,
	debuffs: [],
  },
  WAR: {
    name: "Ardbert Ardbert",
    job: "WAR",
    role: Role.TANK,
    icon: Images.JOB_WAR,
    sortOrder: 1,
	debuffs: [],
  },
  DRK: {
    name: "Fray's Pal",
    job: "DRK",
    role: Role.TANK,
    icon: Images.JOB_DRK,
    sortOrder: 2,
	debuffs: [],
  },
  GNB: {
    name: "Junction Girlfriend",
    job: "GNB",
    role: Role.TANK,
    icon: Images.JOB_GNB,
    sortOrder: 3,
	debuffs: [],
  },
  WHM: {
    name: "Throw Rocks",
    job: "WHM",
    role: Role.HEALER,
    icon: Images.JOB_WHM,
    sortOrder: 4,
	debuffs: [],
  },
  SCH: {
    name: "Broil Bot",
    job: "SCH",
    role: Role.HEALER,
    icon: Images.JOB_SCH,
    sortOrder: 5,
	debuffs: [],
  },
  AST: {
    name: "Seto Kaiba",
    job: "AST",
    role: Role.HEALER,
    icon: Images.JOB_AST,
    sortOrder: 6,
	debuffs: [],
  },
  MNK: {
    name: "Anatman Opener",
    job: "MNK",
    role: Role.MELEE,
    icon: Images.JOB_MNK,
    sortOrder: 7,
	debuffs: [],
  },
  DRG: {
    name: "Res Pls",
    job: "DRG",
    role: Role.MELEE,
    icon: Images.JOB_DRG,
    sortOrder: 8,
	debuffs: [],
  },
  NIN: {
    name: "Minecraft Uzumaki",
    job: "NIN",
    role: Role.MELEE,
    icon: Images.JOB_NIN,
    sortOrder: 9,
	debuffs: [],
  },
  SAM: {
    name: "Blade Studier",
    job: "SAM",
    role: Role.MELEE,
    icon: Images.JOB_SAM,
    sortOrder: 10,
	debuffs: [],
  },
  BRD: {
    name: "Hatsune Miku",
    job: "BRD",
    role: Role.RANGED,
    icon: Images.JOB_BRD,
    sortOrder: 11,
	debuffs: [],
  },
  MCH: {
    name: "Wonder Shot",
    job: "MCH",
    role: Role.RANGED,
    icon: Images.JOB_MCH,
    sortOrder: 12,
	debuffs: [],
  },
  DNC: {
    name: "Beethoven Virus",
    job: "DNC",
    role: Role.RANGED,
    icon: Images.JOB_DNC,
    sortOrder: 13,
	debuffs: [],
  },
  BLM: {
    name: "Megu Min",
    job: "BLM",
    role: Role.CASTER,
    icon: Images.JOB_BLM,
    sortOrder: 14,
	debuffs: [],
  },
  SMN: {
    name: "Bahamut F***er",
    job: "SMN",
    role: Role.CASTER,
    icon: Images.JOB_SMN,
    sortOrder: 15,
	debuffs: [],
  },
  RDM: {
    name: "Verjoke Vername",
    job: "RDM",
    role: Role.CASTER,
    icon: Images.JOB_RDM,
    sortOrder: 16,
	debuffs: [],
  }
}

const Jobs = {
  TANK: [Players.PLD, Players.WAR, Players.DRK, Players.GNB],
  HEALER: [Players.WHM, Players.SCH, Players.AST],
  MELEE: [Players.MNK, Players.DRG, Players.NIN, Players.SAM],
  RANGED: [Players.BRD, Players.MCH, Players.DNC],
  CASTER: [Players.BLM, Players.SMN, Players.RDM]
}
  
const DbType = {
	NISI: "nisi",
	JUDGMENT: "judgment",
}

const DbCode = {
  ALPHA: "alpha",
  BETA: "beta",
  GAMME: "gamma",
  DELTA: "delta",
}

const Debuffs = {
	LIGHTNING_VULN: {
		name: "Lightning Resistance Down II",
		icon: Images.DB_LIGHTNING_VULN,
		type: null,
		sortOrder: 0
	},
	WATER_VULN: {
		name: "Water Resistance Down II",
		icon: Images.DB_WATER_VULN,
		type: null,
		sortOrder: 0
	},
	PENALTY: {
		name: "Final Judgment: Penalty III",
		icon: Images.DB_PENALTY,
		type: null,
		sortOrder: 1
	},
	COMPRESSED_LIGHTNING: {
		name: "Compressed Lightning",
		icon: Images.DB_COMPRESSED_LIGHTNING,
		type: null,
		sortOrder: 2
	},
	COMPRESSED_WATER: {
		name: "Compressed Water",
		icon: Images.DB_COMPRESSED_WATER,
		type: null,
		sortOrder: 2
	},
	NISI_ALPHA: {
		name: "Final Decree Nisi α",
		icon: Images.DB_NISI_ALPHA,
		type: DbType.NISI,
    code: DbCode.ALPHA,
		sortOrder: 3
	},
	NISI_BETA: {
		name: "Final Decree Nisi β",
		icon: Images.DB_NISI_BETA,
		type: DbType.NISI,
    code: DbCode.BETA,
		sortOrder: 3
	},
	NISI_GAMMA: {
		name: "Final Decree Nisi γ",
		icon: Images.DB_NISI_GAMMA,
		type: DbType.NISI,
    code: DbCode.GAMMA,
		sortOrder: 3
	},
	NISI_DELTA: {
		name: "Final Decree Nisi δ",
		icon: Images.DB_NISI_DELTA,
		type: DbType.NISI,
    code: DbCode.DELTA,
		sortOrder: 3
	},
	JUDGMENT_ALPHA: {
		name: "Final Judgment: Decree Nisi α",
		icon: Images.DB_JUDGMENT_ALPHA,
		type: DbType.JUDGMENT,
    code: DbCode.ALPHA,
		sortOrder: 4
	},
	JUDGMENT_BETA: {
		name: "Final Judgment: Decree Nisi β",
		icon: Images.DB_JUDGMENT_BETA,
		type: DbType.JUDGMENT,
    code: DbCode.BETA,
		sortOrder: 4
	},
	JUDGMENT_GAMMA: {
		name: "Final Judgment: Decree Nisi γ",
		icon: Images.DB_JUDGMENT_GAMMA,
		type: DbType.JUDGMENT,
    code: DbCode.GAMMA,
		sortOrder: 4
	},
	JUDGMENT_DELTA: {
		name: "Final Judgment: Decree Nisi δ",
		icon: Images.DB_JUDGMENT_DELTA,
		type: DbType.JUDGMENT,
    code: DbCode.DELTA,
		sortOrder: 4
	},	
}

// ====================
// = REACT COMPONENTS =
// ====================


// *************
// * Simulator *
// *************

class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pcJob: null,
      partyOrder: null,
      party: null,
      correctIndex: null,
      selectedIndex: null,
      turn: 0,
      score: 0,
      gameState: GameState.SETUP,
    };
  }

  setPcJob(job) {
    this.setState({pcJob: job});
  }

  setPartyOrder(order) {
    this.setState({partyOrder: order});
  }

  completeSetup() {
    this.setState({
      party: generateParty(Players[this.state.pcJob], PartyOrder[this.state.partyOrder]),
      gameState: GameState.READY,
    });
  }

  goToSetup() {
    this.setState({
      pcJob: null,
      partyOrder: null,
      party: null,
      correctIndex: null,
      selectedIndex: null,
      turn: 0,
      score: 0,
      gameState: GameState.SETUP,
    });
  }

  goToReady() {
    for (let m of this.state.party) {
      m.debuffs = [];
    }
    this.setState({
      correctIndex: null,
      selectedIndex: null,
      turn: 0,
      score: 0,
      gameState: GameState.READY,
    });
  }

  startGame() {
    if (this.state.turn < 20) {
      assignDebuffs(this.state.party);

      this.setState({
        turn: this.state.turn + 1,
        correctIndex: findBuddyIndex(this.state.party),
        selectedIndex: null,
        gameState: GameState.RUNNING,
      });
    }
  }

  endGame() {
    for (let m of this.state.party) {
      m.debuffs = [];
    }
    this.setState({
      gameState: GameState.GAME_END,
    })
  }

  pickAnswer(index) {
    this.setState({
      selectedIndex: index,
      score: (this.state.correctIndex === index ? this.state.score + 1 : this.state.score),
      gameState: GameState.ROUND_END,
    });
  }

  timeExpired() {
    this.setState({
      gameState: GameState.ROUND_END,
    })
  }
  
  render() {
    let gstate = this.state.gameState;
    if (gstate === GameState.SETUP) {
      return (
        <div>
          <div className="flex-row setup-menu">
            <SelectJobFrame 
              selectedJob={this.state.pcJob}
              handler={j => this.setPcJob(j)}
            />
            <SelectPartyOrderFrame
              selectedOrder = {this.state.partyOrder}
              handler={o => this.setPartyOrder(o)}
            />
          </div>
          <EndSetupButton 
            pcJob={this.state.pcJob} 
            partyOrder={this.state.partyOrder}
            onClick={() => this.completeSetup()}
          />
        </div>
      );
    }
    else if (gstate === GameState.READY) {
      return (
        <div>
          <div className="flex-row setup-menu">
            <PlayerJobFrame job={this.state.pcJob}/>
            <PartyOrderFrame order={this.state.partyOrder}/>
          </div>
          <ReadyPrompt onClick={() => this.startGame()}/>
          <div className="flex-row">
            <PartyFrame 
              party={this.state.party} 
              active={false}
              onClick={() => null}
            />
          </div>
        </div>
      );
    }
    else if (gstate === GameState.RUNNING) {
      return (
        <div>
          <div className="flex-row setup-menu">
            <PlayerJobFrame job={this.state.pcJob}/>
            <PartyOrderFrame order={this.state.partyOrder}/>
          </div>
          <RunningPrompt/>
          <div className="flex-row">
            <PartyFrame 
              party={this.state.party} 
              active={true}
              onClick={i => this.pickAnswer(i)}
            />
            <CountdownFrame callback={() => this.timeExpired()}/>
          </div>
        </div>
      );
    }
    else if (gstate === GameState.ROUND_END) {
      return (
        <div>
          <div className="flex-row setup-menu">
            <PlayerJobFrame job={this.state.pcJob}/>
            <PartyOrderFrame order={this.state.partyOrder}/>
          </div>
          <RunningPrompt/>
          <div className="flex-row">
            <PartyFrame 
              party={this.state.party} 
              active={false}
              correct={this.state.correctIndex}
              selected={this.state.selectedIndex}
              onClick={() => null}
            />
            <ResultFrame 
              correct={this.state.correctIndex}
              selected={this.state.selectedIndex}
              turn={this.state.turn}
              toNextRound={() => this.startGame()}
              toReady={() => this.goToReady()}
              toSetup={() => this.goToSetup()}
              toEnd={() => this.endGame()}
            />
          </div>
        </div>
      );
    }
    else if (gstate === GameState.GAME_END) {
      return (
        <div>
          <div className="flex-row setup-menu">
            <PlayerJobFrame job={this.state.pcJob}/>
            <PartyOrderFrame order={this.state.partyOrder}/>
          </div>
          <RunningPrompt/>
          <div className="flex-row">
            <PartyFrame 
              party={this.state.party} 
              active={false}
              onClick={() => null}
            />
            <GameEndFrame 
              score={this.state.score}
              turn={this.state.turn}
              toNextRound={() => this.startGame()}
              toReady={() => this.goToReady()}
              toSetup={() => this.goToSetup()}
              toEnd={() => this.endGame()}
            />
          </div>
        </div>
      );
    }
  }
}

// ***************
// * Setup Phase *
// ***************

class SelectJobFrame extends React.Component {
  genButton(job) {
    return (
      <SelectJobButton 
        key={job}
        job={job} 
        onClick={() => this.props.handler(job)}
      />
    );
  }

  render() {
    if (this.props.selectedJob === null) {
      let tankButtons = Jobs.TANK.map(p => this.genButton(p.job));
      let healerButtons = Jobs.HEALER.map(p => this.genButton(p.job));
      let meleeButtons = Jobs.MELEE.map(p => this.genButton(p.job));
      let rangedButtons = Jobs.RANGED.map(p => this.genButton(p.job));
      let casterButtons = Jobs.CASTER.map(p => this.genButton(p.job));
      
      return (
        <div className="select-job-frame">
          <h2>Select Your Job</h2>
          {tankButtons}<br/>
          {healerButtons}<br/>
          {meleeButtons}<br/>
          {rangedButtons}<br/>
          {casterButtons}
        </div>
      );
    }
    else {
      return (
        <div className="select-job-frame">
          <h2>Your Job:</h2>
          <h2> 
            <img className="job-icon"
              src={Players[this.props.selectedJob].icon}
              alt={this.props.selectedJob}
            />
            {this.props.selectedJob}
          </h2>
          <button onClick={() => this.props.handler(null)}>
            Select New Job
          </button>
        </div>
      );
    }
  }
}

function SelectJobButton(props) {
  return (
    <button className="select-job" onClick={props.onClick}>
      <img className="job-icon" 
        src={Players[props.job].icon} 
        alt={props.job}
      />
    </button>
  );
}

class SelectPartyOrderFrame extends React.Component {
  render() {
    let h = this.props.handler;

    if (this.props.selectedOrder === null) {
      return (
        <div className="select-order-frame">
          <h2>Select Party Order</h2>
          <button className="party-order" onClick={() => h("THD")}>
            {generateOrderLabel("THD")}
          </button>
          <button className="party-order" onClick={() => h("TDH")}>
            {generateOrderLabel("TDH")}
          </button>
          <button className="party-order" onClick={() => h("HTD")}>
            {generateOrderLabel("HTD")}
          </button>
          <button className="party-order" onClick={() => h("HDT")}>
            {generateOrderLabel("HDT")}
          </button>
          <button className="party-order" onClick={() => h("DTH")}>
            {generateOrderLabel("DTH")}
          </button>
          <button className="party-order" onClick={() => h("DHT")}>
            {generateOrderLabel("DHT")}
          </button>
          <p><i>(You will always appear at the top.)</i></p>
        </div>
      );
    }
    else {
      return (
        <div className="select-order-frame">
          <h2>Your Party Order:</h2>
          <div>
            {generateOrderLabel(this.props.selectedOrder)}
          </div>
          <p><i>(You will always appear at the top.)</i></p>
          <button onClick={() => h(null)}>
            Select New Party Order
          </button>
        </div>
      );
    }
  }
}

function EndSetupButton(props) {
  if (props.pcJob !== null && props.partyOrder !== null) {
    return (
      <div className="end-setup-container">
        <button className="end-setup" onClick={props.onClick}>
          All set!
        </button>
      </div>
    );
  }
  return null;
}

// ***************
// * Ready Phase *
// ***************

function PlayerJobFrame(props) {
  return (
    <div><strong>
      Your Job:&nbsp;
      <img className="job-icon-sm" src={Players[props.job].icon} alt={props.job}/>&nbsp;
      {props.job}
    </strong></div>
  );
}

function PartyOrderFrame(props) {
  return (
    <div>
      <strong>Party Order:&nbsp;</strong>
      {generateOrderLabel(props.order)}
    </div>
  );
}

function ReadyPrompt(props) {
  return (
    <div>
      <div className="flex-row setup-menu">
        <div className="ready-prompt">
          <p>I've made a party for you below. The job you picked is at the top.</p>
          <p>When you hit the go button, the party will be hit with a suite of debuffs 
          that represent a possible state right after Brute Justice casts Verdict.</p>
          <p>You will have <strong>8 seconds</strong> to identify and click your
          partner, which is the amount of time between Verdict resolving and Plasma
          Shield spawning.</p>
          <p>This exercise will repeat 20 times, or until you choose to quit. At the
          end of your session, I'll count up your successes and give you a score. Aim
          for the top!</p>
        </div>
      </div>
      <div className="go-wrapper">
        <button className="go-button" onClick={props.onClick}>
          Let's Do Some Math!
        </button>
      </div>
    </div>
  );
}

class PartyFrame extends React.Component {
  render() {
    let pData = this.props.party.map((m, i) => {
        let states = [];
        if (this.props.active)
          states.push(RowState.ACTIVE);
        if (i === this.props.correct && this.props.correct === this.props.selected)
          states.push(RowState.CORRECT);
        else if (i === this.props.correct)
          states.push(RowState.SOLUTION);
        else if (i === this.props.selected)
          states.push(RowState.INCORRECT);
        return (
          <Player 
            key={m.job} 
            index={i} 
            data={m} 
            states={states}
            onClick={() => this.props.onClick(i)}/>
        );
      });

    return (
      <table className="party-frame">
        <thead>
          <tr><th colSpan="3">FULL PARTY</th></tr>
        </thead>
        <tbody>
          {pData}
        </tbody>
      </table>
    );
  }
}

class Player extends React.Component {
  render() {
    let cName = "player-row";
    for (let state of this.props.states) {
      cName += " " + state;
    }
    let data = this.props.data;
    let idx = this.props.index + 1;
    let debuffs = data.debuffs == null ? null : data.debuffs.map((d, i) => {
      return <Debuff key={i} debuff={d}/>;
    });

    return (
      <tr className={cName} onClick={this.props.onClick}>
        <td>
          <img className="job-icon" src={data.icon} alt={data.job} />
        </td>
        <td>
          <div className="castbar-row"></div>
          <div className="name-row flex-row">
            <div className="player-index">{idx}</div>
            <div className="player-level">Lv80</div>
            <div className="player-name">{data.name}</div>
          </div>
          <div className="vital-bars flex-row">
            <div className="hp">
              <div className="bar hp-bar"></div>
              <div className="bar-num">100000</div>
            </div>
            <div className="mp">
              <div className="bar"></div>
              <div className="bar-num">
                100<span className="mp-small">00</span>
              </div>
            </div>
          </div>
        </td>
        <td className="debuff-frame">{debuffs}</td>
      </tr>
    );
  }
}

function Debuff(props) {
  return <img className="debuff" src={props.debuff.icon} alt={props.debuff.name}/>;
}

// *****************
// * Running Phase *
// *****************

function RunningPrompt(props) {
  return (
    <div>
      <div className="flex-row setup-menu">
        <div className="ready-prompt hijacked-prompt">
          <p>Designation: Brute Justice. Temporal interlopers identified.</p>
          <p>Verdict: Guilty. Punishment: Execution!</p>
          <p>Initiating new combat protocol... Commence final judgment!</p>
        </div>
      </div>
      <div className="go-wrapper hijacked-prompt">
        <p>Identify your partner.</p>
      </div>
    </div>
  );
}

class CountdownFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 8,
    }
    this.timer = null;
    this.countdown = this.countdown.bind(this);
    this.endTurn = () => props.callback();

  }

  componentDidMount() {
    if (this.timer == null)
      this.timer = setInterval(this.countdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countdown() {
    let s = this.state.seconds - 1;
    if (s <= 0) {
      clearInterval(this.timer);
      this.endTurn();
    }
    else {
      this.setState({
        seconds: s,
      });
    }
  }

  render() {
    return (
      <div className="countdown-frame">
        <p>You have</p>
        <p className="cd-secs">{this.state.seconds}</p>
        <p>seconds to find your partner<br/>
        before Plasma Shield spawns!</p>
      </div>
    );
  }
}

// *******************
// * Round End Phase *
// *******************

function ResultFrame(props) {
  let p = props;
  let result;
  if (p.selected == null)
    result = <TimeExpiredResult/>;
  else if (p.correct === p.selected)
    result = <CorrectResult/>;
  else
    result = <IncorrectResult/>;

  return (
    <div className="round-result">
      {result}
      {
        p.turn >= 20 && 
        <p>You've reached the end of this exercise. Let's see how you did!</p>
      }
      <div>
        <div className="flex-row result-button-wrapper">
          {
            p.turn < 20 &&
            <button className="big-result next-round" onClick={p.toNextRound}>Next Round</button>
          }
          {
            p.turn >= 20 &&
            <button className="big-result to-results" onClick={p.toEnd}>Show Results</button>
          }
        </div>
        <div className="flex-row result-button-wrapper">
          <button className="result to-setup" onClick={p.toSetup}>Change Setup</button>
          <button className="result to-ready" onClick={p.toReady}>Start Over</button>
        </div>
      </div> 
    </div>
  );
}

function TimeExpiredResult() {
  return (
    <p className="expired">You ran out of time. The correct answer is highlighted.</p>
  );
}

function CorrectResult() {
  return (
    <p className="correct">Correct!</p>
  );
}

function IncorrectResult() {
  return (
    <p className="incorrect">Incorrect. The correct answer is highlighted.</p>
  );
}

// ******************
// * Game End Phase *
// ******************

function GameEndFrame(props) {
  let score = (props.score * 100) / props.turn;
  let tier;
  if (score >= 100) 
    tier = "gold";
  else if (score >= 80)
    tier = "green";
  else
    tier = "red"

  return (
    <div className="game-result">
      <p>
        You were correct in <span className="score">{props.score}</span> out of&nbsp; 
        <span className="score">{props.turn}</span> scenarios.
      </p>
      <p>That's good for a score of</p>
      <p className={"percent " + tier}>{score}%</p>
      {
        score >= 100 &&
        <p>You aced it! Nice job!</p>
      }
      {
        score < 100 && score >= 80 &&
        <p>Not bad, but you can reach the top for sure!</p>
      }
      { 
        score < 80 && 
        <p>You still need practice, but I believe in you!</p>
      }
      <div className="flex-row result-button-wrapper">
        <button className="result to-setup" onClick={props.toSetup}>Change Setup</button>
        <button className="result to-ready" onClick={props.toReady}>Start Over</button>
      </div>
    </div>
  );
}

// ===================
// = UTILITY METHODS =
// ===================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateParty(pcJob, partyOrder) {
  let party = [];
  let numTanks = 2 - (pcJob.role === Role.TANK ? 1 : 0);
  let numHealers = 2 - (pcJob.role === Role.HEALER ? 1 : 0);
  let numMelee = (Math.random() * 2 | 0) + 1;
  let numRanged = 1 - (pcJob.role === Role.RANGED ? 1 : 0);
  let numCasters = 3 - numMelee - (pcJob.role === Role.CASTER ? 1 : 0);
  numMelee -= (pcJob.role === Role.MELEE ? 1 : 0);
	// tanks
	let tanks = Jobs.TANK.filter(m => m.job !== pcJob.job);
	shuffleArray(tanks);
	for (let i = 0; i < numTanks; i++) 
    party.push({...tanks[i]});
	// healers
	let healers = Jobs.HEALER.filter(m => m.job !== pcJob.job);
	shuffleArray(healers);
	for (let i = 0; i < numHealers; i++) 
    party.push({...healers[i]});
	// melee
	let melee = Jobs.MELEE.filter(m => m.job !== pcJob.job);
	shuffleArray(melee);
	for (let i = 0; i < numMelee; i++) 
    party.push({...melee[i]});
	// ranged
	let ranged = Jobs.RANGED.filter(m => m.job !== pcJob.job);
	shuffleArray(ranged);
  for (let i = 0; i < numRanged; i++)
	party.push({...ranged[i]});
	// casters
	let casters = Jobs.CASTER.filter(m => m.job !== pcJob.job);
	shuffleArray(casters);
	for (let i = 0; i < numCasters; i++) 
    party.push({...casters[i]});

  party.sort((a, b) => (a.sortOrder + partyOrder[a.role]) - (b.sortOrder + partyOrder[b.role]));

  let fullParty = [{...pcJob}].concat(party);
	
	return fullParty;	
}

function assignDebuffs(party) {
	// each player starts with penalty
	party.forEach(m => m.debuffs = [Debuffs.PENALTY]);
	// one random healer gets lightning (removes from pool)
	let healers = party.filter(m => m.role === Role.HEALER);
	shuffleArray(healers);
	healers.pop().debuffs.push(Debuffs.COMPRESSED_LIGHTNING);
	// create a pool of ranged + unused healer from above
	let pool = party.filter(m => m.role === Role.RANGED || m.role === Role.CASTER).concat(healers);
	shuffleArray(pool);
	// compressed water on random ranged/healer (removes from pool)
	pool.pop().debuffs.push(Debuffs.COMPRESSED_WATER);
	// water vuln on random ranged/healer
	pool.pop().debuffs.push(Debuffs.WATER_VULN);
	// lightning vuln on "random" tank (we don't know who's tanking BJ)
	let tanks = party.filter(m => m.role === Role.TANK);
	shuffleArray(tanks);
	tanks.pop().debuffs.push(Debuffs.LIGHTNING_VULN);
	// judgment (set 1) on all T/H
	let th = party.filter(m => m.role === Role.TANK || m.role === Role.HEALER);
	shuffleArray(th);
	th[0].debuffs.push(Debuffs.JUDGMENT_ALPHA);
	th[1].debuffs.push(Debuffs.JUDGMENT_BETA);
	th[2].debuffs.push(Debuffs.JUDGMENT_GAMMA);
	th[3].debuffs.push(Debuffs.JUDGMENT_DELTA);
	// judgment (set 1) on all DPS
	let dps = party.filter(m => m.role === Role.MELEE || m.role === Role.RANGED || m.role === Role.CASTER);
	shuffleArray(dps);
	dps[0].debuffs.push(Debuffs.JUDGMENT_ALPHA);
	dps[1].debuffs.push(Debuffs.JUDGMENT_BETA);
	dps[2].debuffs.push(Debuffs.JUDGMENT_GAMMA);
	dps[3].debuffs.push(Debuffs.JUDGMENT_DELTA);
	// nisi on either all T/H or all DPS
	let nisi = (((Math.random() * 2 | 0) === 1) ? th : dps);
	shuffleArray(nisi);
	nisi[0].debuffs.push(Debuffs.NISI_ALPHA);
	nisi[1].debuffs.push(Debuffs.NISI_BETA);
	nisi[2].debuffs.push(Debuffs.NISI_GAMMA);
	nisi[3].debuffs.push(Debuffs.NISI_DELTA);
	// sort debuffs
	party.forEach(m => m.debuffs.sort((a, b) => a.sortOrder - b.sortOrder));
}

function generateOrderLabel(order) {
  let spans = [];
  for (let i = 0; i < order.length; i++) {
    let c = order.charAt(i);
    if (c === 'T') {
      spans.push(
        <span className="order-sp" key="T">
          <img className="role-icon" src={Images.ROLE_TANK} alt="Tank"/> Tank
        </span>
      );
    }
    else if (c === 'H') {
      spans.push(
        <span className="order-sp" key="H">
          <img className="role-icon" src={Images.ROLE_HEALER} alt="Healer"/> Healer
        </span>
      );
    }
    else if (c === 'D') {
      spans.push(
        <span className="order-sp" key="D">
          <img className="role-icon" src={Images.ROLE_DPS} alt="DPS"/> DPS
        </span>
      );
    }
  }
  return spans;
}

function findBuddyIndex(party) {
  let player = party[0];
  let targetType, targetCode;
  let targetRoles = 
    [Role.TANK, Role.HEALER].includes(player.role) ?
      [Role.MELEE, Role.RANGED, Role.CASTER] :
      [Role.TANK, Role.HEALER];

  let playerNisiArr = player.debuffs.filter(d => d.type === DbType.NISI);
  if (playerNisiArr.length > 0) {
    targetType = DbType.JUDGMENT;
    targetCode = playerNisiArr[0].code;
  }
  else {
    let playerJudgmentArr = player.debuffs.filter(d => d.type === DbType.JUDGMENT);
    targetType = DbType.NISI;
    targetCode = playerJudgmentArr[0].code;
  }

  let index = null;
  for (let i = 1; i < party.length; i++) {
    if (targetRoles.includes(party[i].role)) {
      let matches = party[i].debuffs.filter(d => {
          return d.type === targetType && d.code === targetCode
      });
      if (matches.length > 0) {
        index = i;
        break;
      }
    }
  }

  return index;
}