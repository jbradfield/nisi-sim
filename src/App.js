import React from 'react';
import './App.css';



function App() {
	return (
		<PartyFrame/>
	);
}

export default App;


class PartyFrame extends React.Component {
  render() {
    let party = generateParty()
      .map((m, i) => {
        return <Player key={m.job} index={i} data={m}/>
      });

    return (
      <table className="party-frame">
        <tbody>
          {party}
        </tbody>
      </table>
    );
  }
}

class Player extends React.Component {
  render() {
    let data = this.props.data;
    let idx = this.props.index + 1;

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
              <div className="bar-num">100<span className="mp-small">00</span></div>
            </div>
          </div>
        </td>
        <td>(ph debuffs)</td>
      </tr>
    );
  }
}


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
  DB_WATER_VULN: imgPath + "waster-res-down.png",
  DB_LIGHTNING_VULN: imgPath + "lightning-res-down.png",
  DB_PENALTY: imgPath + "penalty.png",
  DB_NISI_ALPHA: imgPath + "nisi-a.png",
  DB_NISI_BETA: imgPath + "nisi-b.png",
  DB_NISI_GAMMA: imgPath + "nisi-c.png",
  DB_NISI_DELTA: imgPath + "nisi-d.png",
  DB_JUDGMENT_ALPHA: imgPath + "judgment-a.png",
  DB_JUDGMENT_BETA: imgPath + "judgment-b.png",
  DB_JUDGMENT_GAMMA: imgPath + "judgment-c.png",
  DB_JUDGMENT_DELTA: imgPath + "judgment-d.png"
};

const Role = {
  TANK: "tank",
  HEALER: "healer",
  DPS: "dps"
}

const Players = {
  PLD: {
    name: "Defund Me",
    job: "PLD",
    role: Role.TANK,
    icon: Images.JOB_PLD,
    sortOrder: 0
  },
  WAR: {
    name: "Ardbert Ardbert",
    job: "WAR",
    role: Role.TANK,
    icon: Images.JOB_WAR,
    sortOrder: 1
  },
  DRK: {
    name: "Fray's Pal",
    job: "DRK",
    role: Role.TANK,
    icon: Images.JOB_DRK,
    sortOrder: 2
  },
  GNB: {
    name: "Junction Girlfriend",
    job: "GNB",
    role: Role.TANK,
    icon: Images.JOB_GNB,
    sortOrder: 3
  },
  WHM: {
    name: "Throw Rocks",
    job: "WHM",
    role: Role.HEALER,
    icon: Images.JOB_WHM,
    sortOrder: 4
  },
  SCH: {
    name: "Broil Bot",
    job: "SCH",
    role: Role.HEALER,
    icon: Images.JOB_SCH,
    sortOrder: 5
  },
  AST: {
    name: "Seto Kaiba",
    job: "AST",
    role: Role.HEALER,
    icon: Images.JOB_AST,
    sortOrder: 6
  },
  MNK: {
    name: "Anatman Opener",
    job: "MNK",
    role: Role.DPS,
    icon: Images.JOB_MNK,
    sortOrder: 7
  },
  DRG: {
    name: "Res Pls",
    job: "DRG",
    role: Role.DPS,
    icon: Images.JOB_DRG,
    sortOrder: 8
  },
  NIN: {
    name: "Minecraft Uzumaki",
    job: "NIN",
    role: Role.DPS,
    icon: Images.JOB_NIN,
    sortOrder: 9
  },
  SAM: {
    name: "Blade Studier",
    job: "SAM",
    role: Role.DPS,
    icon: Images.JOB_SAM,
    sortOrder: 10
  },
  BRD: {
    name: "Hatsune Miku",
    job: "BRD",
    role: Role.DPS,
    icon: Images.JOB_BRD,
    sortOrder: 11
  },
  MCH: {
    name: "Wonder Shot",
    job: "MCH",
    role: Role.DPS,
    icon: Images.JOB_MNK,
    sortOrder: 12
  },
  DNC: {
    name: "Beethoven Virus",
    job: "DNC",
    role: Role.DPS,
    icon: Images.JOB_DNC,
    sortOrder: 13
  },
  BLM: {
    name: "Megu Min",
    job: "BLM",
    role: Role.DPS,
    icon: Images.JOB_BLM,
    sortOrder: 14
  },
  SMN: {
    name: "Bahamut F***er",
    job: "SMN",
    role: Role.DPS,
    icon: Images.JOB_SMN,
    sortOrder: 15
  },
  RDM: {
    name: "Verjoke Vername",
    job: "RDM",
    role: Role.DPS,
    icon: Images.JOB_RDM,
    sortOrder: 16
  }
}

const Jobs = {
  TANK: [Players.PLD, Players.WAR, Players.DRK, Players.GNB],
  HEALER: [Players.WHM, Players.SCH, Players.AST],
  MELEE: [Players.MNK, Players.DRG, Players.NIN, Players.SAM],
  RANGED: [Players.BRD, Players.MCH, Players.DNC],
  CASTER: [Players.BLM, Players.SMN, Players.RDM]
}

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
    party.push(tanks[i]);
	// 2 healers
	let healers = Jobs.HEALER.slice();
	shuffleArray(healers);
	for (let i = 0; i < 2; i++) 
    party.push(healers[i]);
	// 1-2 melee
	let numMelee = (Math.random() * 2 | 0) + 1;
	let melee = Jobs.MELEE.slice();
	shuffleArray(melee);
	for (let i = 0; i < numMelee; i++) 
    party.push(melee[i]);
	// 1 ranged
	let ranged = Jobs.RANGED.slice();
	shuffleArray(ranged);
	party.push(ranged[0]);
	// 1-2 casters
	let numCasters = 3 - numMelee;
	let casters = Jobs.CASTER.slice();
	shuffleArray(casters);
	for (let i = 0; i < numCasters; i++) 
    party.push(casters[i]);
	
	return party;	
}

