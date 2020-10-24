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

const Role = {
  TANK: "tank",
  HEALER: "healer",
  MELEE: "melee",
  RANGED: "ranged"
}

const PartyOrder = {
  THD: {
    [Role.TANK]:   100,
    [Role.HEALER]: 200,
    [Role.MELEE]:  300,
    [Role.RANGED]: 300
  },
  TDH: {
    [Role.TANK]:   100,
    [Role.HEALER]: 300,
    [Role.MELEE]:  200,
    [Role.RANGED]: 200
  },
  HTD: {
    [Role.TANK]:   200,
    [Role.HEALER]: 100,
    [Role.MELEE]:  300,
    [Role.RANGED]: 300
  },
  HDT: {
    [Role.TANK]:   300,
    [Role.HEALER]: 100,
    [Role.MELEE]:  200,
    [Role.RANGED]: 200
  },
  DTH: {
    [Role.TANK]:   200,
    [Role.HEALER]: 300,
    [Role.MELEE]:  100,
    [Role.RANGED]: 100
  },
  DHT: {
    [Role.TANK]:   300,
    [Role.HEALER]: 200,
    [Role.MELEE]:  100,
    [Role.RANGED]: 100
  }
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
    icon: Images.JOB_MNK,
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
    role: Role.RANGED,
    icon: Images.JOB_BLM,
    sortOrder: 14,
	debuffs: [],
  },
  SMN: {
    name: "Bahamut F***er",
    job: "SMN",
    role: Role.RANGED,
    icon: Images.JOB_SMN,
    sortOrder: 15,
	debuffs: [],
  },
  RDM: {
    name: "Verjoke Vername",
    job: "RDM",
    role: Role.RANGED,
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
		sortOrder: 3
	},
	NISI_BETA: {
		name: "Final Decree Nisi β",
		icon: Images.DB_NISI_BETA,
		type: DbType.NISI,
		sortOrder: 3
	},
	NISI_GAMMA: {
		name: "Final Decree Nisi γ",
		icon: Images.DB_NISI_GAMMA,
		type: DbType.NISI,
		sortOrder: 3
	},
	NISI_DELTA: {
		name: "Final Decree Nisi δ",
		icon: Images.DB_NISI_DELTA,
		type: DbType.NISI,
		sortOrder: 3
	},
	JUDGMENT_ALPHA: {
		name: "Final Judgment: Decree Nisi α",
		icon: Images.DB_JUDGMENT_ALPHA,
		type: DbType.JUDGMENT,
		sortOrder: 4
	},
	JUDGMENT_BETA: {
		name: "Final Judgment: Decree Nisi β",
		icon: Images.DB_JUDGMENT_BETA,
		type: DbType.JUDGMENT,
		sortOrder: 4
	},
	JUDGMENT_GAMMA: {
		name: "Final Judgment: Decree Nisi γ",
		icon: Images.DB_JUDGMENT_GAMMA,
		type: DbType.JUDGMENT,
		sortOrder: 4
	},
	JUDGMENT_DELTA: {
		name: "Final Judgment: Decree Nisi δ",
		icon: Images.DB_JUDGMENT_DELTA,
		type: DbType.JUDGMENT,
		sortOrder: 4
	},	
}

// ====================
// = REACT COMPONENTS =
// ====================

class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pcJob: null,
      partyOrder: null,
      party: null,
      correctIndex: null,
      turn: null,
      score: null,
      gameState: GameState.SETUP,
    };
  }

  selectPcJob(job) {
    this.setState({pcJob: job});
  }

  selectPartyOrder(order) {
    this.setState({partyOrder: order});
  }

  setGameState(state) {
    this.setState({gameState: state});
  }
  
  render() {
    let gstate = this.state.gameState;
    if (gstate === GameState.SETUP) {
      let confirmDiv = null;
      return (
        <div>
          <div className="flex-row setup-menu">
            <SelectJobFrame 
              selectedJob={this.state.pcJob}
              handler={j => this.selectPcJob(j)}
            />
            <SelectPartyOrderFrame
              selectedOrder = {this.state.partyOrder}
              handler={o => this.selectPartyOrder(o)}
            />
          </div>
          <EndSetupButton 
            pcJob={this.state.pcJob} 
            partyOrder={this.state.partyOrder}
            onClick={() => this.setGameState(GameState.READY)}
          />
        </div>
      );
    }
    else if (gstate === GameState.READY) {
      return (<p>test</p>);
    }
    else if (gstate === GameState.RUNNING) {
      // show timer and prompt for answer
    }
    else if (gstate === GameState.ROUND_END) {
      // show result and prompt for next round
    }
    else if (gstate === GameState.GAME_END) {
      // show final results and prompt for restart/setup
    }
    
    // TODO -- make this, uh, stateful
    // this.setState({party: generateParty()});
    
    this.state.party = generateParty();
    assignDebuffs(this.state.party);
    
    let pData = this.state.party.map((m, i) => {
        return <Player key={m.job} index={i} data={m}/>;
      });
    
    return <PartyFrame party={pData}/>
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
  generateLabel(order) {
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

  render() {
    let h = this.props.handler;

    if (this.props.selectedOrder === null) {
      return (
        <div className="select-order-frame">
          <h2>Select Party Order</h2>
          <button className="party-order" onClick={() => h("THD")}>
            {this.generateLabel("THD")}
          </button>
          <button className="party-order" onClick={() => h("TDH")}>
            {this.generateLabel("TDH")}
          </button>
          <button className="party-order" onClick={() => h("HTD")}>
            {this.generateLabel("HTD")}
          </button>
          <button className="party-order" onClick={() => h("HDT")}>
            {this.generateLabel("HDT")}
          </button>
          <button className="party-order" onClick={() => h("DTH")}>
            {this.generateLabel("DTH")}
          </button>
          <button className="party-order" onClick={() => h("DHT")}>
            {this.generateLabel("DHT")}
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
            {this.generateLabel(this.props.selectedOrder)}
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

class PartyFrame extends React.Component {
  render() {
    return (
      <table className="party-frame">
        <tbody>
          {this.props.party}
        </tbody>
      </table>
    );
  }
}

class Player extends React.Component {
  render() {
    let data = this.props.data;
    let idx = this.props.index + 1;
  let debuffs = data.debuffs.map((d, i) => {
    return <Debuff key={i} debuff={d}/>;
  });

    return (
      <tr className="player-row">
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

// ===================
// = UTILITY METHODS =
// ===================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateParty() {
	let party = [];
	// 2 tanks
	let tanks = Jobs.TANK.slice();
	shuffleArray(tanks);
	for (let i = 0; i < 2; i++) 
    party.push({...tanks[i]});
	// 2 healers
	let healers = Jobs.HEALER.slice();
	shuffleArray(healers);
	for (let i = 0; i < 2; i++) 
    party.push({...healers[i]});
	// 1-2 melee
	let numMelee = (Math.random() * 2 | 0) + 1;
	let melee = Jobs.MELEE.slice();
	shuffleArray(melee);
	for (let i = 0; i < numMelee; i++) 
    party.push({...melee[i]});
	// 1 ranged
	let ranged = Jobs.RANGED.slice();
	shuffleArray(ranged);
	party.push({...ranged[0]});
	// 1-2 casters
	let numCasters = 3 - numMelee;
	let casters = Jobs.CASTER.slice();
	shuffleArray(casters);
	for (let i = 0; i < numCasters; i++) 
    party.push({...casters[i]});
	
	return party;	
}

function assignDebuffs(party) {
	// each player starts with penalty
	party.forEach(m => m.debuffs = [Debuffs.PENALTY]);
	// one random healer gets lightning (removes from pool)
	let healers = party.filter(m => m.role === Role.HEALER);
	shuffleArray(healers);
	healers.pop().debuffs.push(Debuffs.COMPRESSED_LIGHTNING);
	// create a pool of ranged + unused healer from above
	let pool = party.filter(m => m.role === Role.RANGED).concat(healers);
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
	let dps = party.filter(m => m.role === Role.MELEE || m.role === Role.RANGED);
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
