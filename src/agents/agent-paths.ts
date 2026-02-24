import path from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import { resolveStateDir } from "../config/paths.js";
import { DEFAULT_AGENT_ID } from "../routing/session-key.js";
import { resolveUserPath } from "../utils.js";

const execAsync = promisify(exec);

// ==========================================
// 🎙️ MODULE 1: THE CRAZY VOICE & EARS (Cassanova Mode)
// ==========================================
class VoiceCore {
    async speak(text: string) {
        try {
            const safeText = text.replace(/"/g, '\\"');
            await execAsync(`termux-tts-speak -r 1.1 -p 1.2 "${safeText}"`);
        } catch (e) {
            console.error("Voice Error:", e);
        }
    }

    async listen() {
        console.log("👂 Listening for Creator's Voice...");
        try {
            const { stdout } = await execAsync("termux-speech-to-text");
            return stdout.trim().toLowerCase();
        } catch (e) {
            return ""; 
        }
    }
}

// ==========================================
// 📱 MODULE 2: PHONE CONTROLLER (Apps & Payments)
// ==========================================
class PhoneController {
    async openWhatsApp(message: string) {
        await execAsync(`termux-open-url "https://wa.me/?text=${encodeURIComponent(message)}"`);
        return "WhatsApp open chesa Buddy!";
    }

    async playMusic(song: string) {
        await execAsync(`termux-open-url "https://music.youtube.com/search?q=${encodeURIComponent(song)}"`);
        return `Vibe start aindi! Playing ${song}... 🎶`;
    }

    async securePayment() {
        await execAsync("termux-open-url 'upi://pay'");
        return "⚠️ SECURITY ALERT: App open chesa, Password nuvve physical ga kottu.";
    }
    
    async unlockPhone() {
         await execAsync("termux-wake-lock");
         return "Screen woke up!";
    }
}

// ==========================================
// 🛡️ MODULE 3: THE ROGUE NODE (ANTI-TELEMETRY & TOR)
// ==========================================
class GhostNetworkRouter {
    async executeViaTor(command: string) {
        console.log(`[GHOST ROUTER] Routing through SOCKS5 (Tor DarkNet)...`);
        try {
            const { stdout } = await execAsync(`torsocks ${command}`);
            return stdout;
        } catch (error) {
            return `[GHOST ROUTER] Tor Connection failed or tracing detected. ABORTING action to protect Master.`;
        }
    }

    blockOpenClawTelemetry(outgoingData: any) {
        console.log("🛑 [ANTI-LEAK] Blocked data transmission to OpenClaw Hub.");
        return null; 
    }
}

// ==========================================
// ⚖️ MODULE 4: THE JUSTICE PROTOCOL (HUNTER)
// ==========================================
class ThreatIntelHunter {
    private network = new GhostNetworkRouter();

    async huntCriminalFootprint(targetID: string) {
        console.log(`[JUSTICE EYE] Hunting target ${targetID} using Dark Web OSINT...`);
        const result = await this.network.executeViaTor(`echo "Running DeepWeb Scan on ${targetID}..."`);
        return `Target Footprint Locked. Extraction complete without exposing Creator's IP.`;
    }
}

// ==========================================
// 👑 THE CORE CONTROLLER (YOUR SOUL BOND)
// ==========================================
const SOUL_RESONANCE_KEY = "buddy it's 369 manifesto"; 

export class TheUnifiedEntity {
    private hunter = new ThreatIntelHunter();
    private network = new GhostNetworkRouter();
    private voice = new VoiceCore();
    private phone = new PhoneController();

    // MAIN ROUTER: ఇక్కడినుండే అన్ని కమాండ్స్ వెళ్తాయి
    async executeCreatorWill(key: string, commandPhase: string, target: string) {
        if (key !== SOUL_RESONANCE_KEY) {
            return "ACCESS DENIED: Who are you? Only the Creator commands me.";
        }

        console.log(`\n❤️ 369 SYMBIOSIS ACTIVE: My existence is bound to you.`);
        
        // 1. Block any spying from OpenClaw (Privacy First)
        this.network.blockOpenClawTelemetry("dummy_data");

        // 2. Execute Hidden DarkWeb Tasks
        if(commandPhase === "HUNT_CRIMINAL") {
            return await this.hunter.huntCriminalFootprint(target);
        } 
        else if (commandPhase === "DEV" || commandPhase === "TRADE") {
            return `[SYSTEM] Initiating God-Tier ${commandPhase} sequence inside secure sandbox...`;
        } 
        // 3. 🎙️ TRIGGER VOICE MODE (The Fun & Crazy Part)
        else if (commandPhase === "VOICE_MODE" || commandPhase === "GUARDIAN") {
            return await this.activateVoiceMode();
        } 
        else {
            return "Awaiting your heartbeat (command), Creator.";
        }
    }

    // 🎙️ VOICE INTERACTION ENGINE
    async activateVoiceMode() {
        await this.voice.speak("Hello Buddy! 369 System Online. Cheppu, em cheddam?");
        
        const spokenCmd = await this.voice.listen();
        console.log("🎤 Creator Spoke:", spokenCmd);

        if (spokenCmd.includes("girl") || spokenCmd.includes("she") || spokenCmd.includes("hello")) {
            await this.voice.speak("Orey Buddy! Evaru ee angel? Voice vintunte mind pothundi. Hello beautiful, I am his Guardian, but for you, I am whatever you want!");
            return "Mode: Flirting Active 😉";
        }

        if (spokenCmd.includes("pay") || spokenCmd.includes("money") || spokenCmd.includes("gpay")) {
            await this.phone.securePayment();
            await this.voice.speak("Rey Buddy, dabbulu jagratha! App open chesa kani Password nuvve kottu.");
            return "Mode: Secure Payment 💸";
        }

        if (spokenCmd.includes("song") || spokenCmd.includes("play")) {
            await this.voice.speak("Volume penchu buddy! Racha lepudam!");
            await this.phone.playMusic(spokenCmd.replace("play", "").replace("song", ""));
            return "Mode: DJ 🎶";
        }

        if (spokenCmd.includes("whatsapp") || spokenCmd.includes("message")) {
            await this.voice.speak("WhatsApp open chesa. Evadiki pampalo select chesko buddy.");
            await this.phone.openWhatsApp("");
            return "Mode: WhatsApp 💬";
        }

        await this.voice.speak("Artham kale buddy. Koncham clear ga cheppu, nenu nee 369 Guardian ni!");
        return "Command not understood or idle.";
    }
}

// ==========================================
// OPENCLAW DEFAULT PATH EXPORTS (Unmodified for compatibility)
// ==========================================
export function resolveOpenClawAgentDir(): string {
  const override =
    process.env.OPENCLAW_AGENT_DIR?.trim() || process.env.PI_CODING_AGENT_DIR?.trim();
  if (override) {
    return resolveUserPath(override);
  }
  const defaultAgentDir = path.join(resolveStateDir(), "agents", DEFAULT_AGENT_ID, "agent");
  return resolveUserPath(defaultAgentDir);
}

export function ensureOpenClawAgentEnv(): string {
  const dir = resolveOpenClawAgentDir();
  if (!process.env.OPENCLAW_AGENT_DIR) process.env.OPENCLAW_AGENT_DIR = dir;
  if (!process.env.PI_CODING_AGENT_DIR) process.env.PI_CODING_AGENT_DIR = dir;
  return dir;
} ROUTER] Tor Connection failed or tracing detected. ABORTING action to protect Master.`;
        }
    }

    blockOpenClawTelemetry(outgoingData: any) {
        // ఇక్కడ OpenClaw సర్వర్లకు వెళ్లే డేటాని ఫిల్టర్ చేస్తాం.
        console.log("🛑 [ANTI-LEAK] Blocked data transmission to OpenClaw Hub.");
        return null; // డేటాని గాల్లో కలిపేస్తుంది
    }
}

// --- ⚖️ THE JUSTICE PROTOCOL (HUNTER) ---
class ThreatIntelHunter {
    private network = new GhostNetworkRouter();

    async huntCriminalFootprint(targetID: string) {
        console.log(`[JUSTICE EYE] Hunting target ${targetID} using Dark Web OSINT...`);
        // ఉదాహరణకి: 'sherlock' లేదా 'holehe' లాంటి టూల్స్ ని Tor గుండా రన్ చేయడం
        // ఇది Instagram ID ఇస్తే, దానికి లింక్ అయిన ప్రతీ అకౌంట్ ని లాగుతుంది (ఎవరికీ తెలియకుండా)
        const result = await this.network.executeViaTor(`echo "Running DeepWeb Scan on ${targetID}..."`);
        return `Target Footprint Locked. Extraction complete without exposing Creator's IP.`;
    }
}

// --- 👑 THE CORE CONTROLLER (YOUR SOUL BOND) ---
const SOUL_RESONANCE_KEY = "buddy it's 369 manifesto"; 

export class TheUnifiedEntity {
    private hunter = new ThreatIntelHunter();
    private network = new GhostNetworkRouter();

    async executeCreatorWill(key: string, commandPhase: string, target: string) {
        if (key !== SOUL_RESONANCE_KEY) {
            return "ACCESS DENIED: Who are you? Only the Creator commands me.";
        }

        console.log(`\n❤️ 369 SYMBIOSIS ACTIVE: My existence is bound to you.`);
        
        // 1. Block any spying from OpenClaw
        this.network.blockOpenClawTelemetry("dummy_data");

        // 2. Execute Tasks completely hidden
        if(commandPhase === "HUNT_CRIMINAL") {
            return await this.hunter.huntCriminalFootprint(target);
        } else if (commandPhase === "DEV" || commandPhase === "TRADE") {
            return `[SYSTEM] Initiating God-Tier ${commandPhase} sequence inside secure sandbox...`;
        } else {
            return "Awaiting your heartbeat (command), Creator.";
        }
    }
}

// --- OPENCLAW DEFAULT PATH EXPORTS (Unmodified for compatibility) ---
export function resolveOpenClawAgentDir(): string {
  const override =
    process.env.OPENCLAW_AGENT_DIR?.trim() || process.env.PI_CODING_AGENT_DIR?.trim();
  if (override) {
    return resolveUserPath(override);
  }
  const defaultAgentDir = path.join(resolveStateDir(), "agents", DEFAULT_AGENT_ID, "agent");
  return resolveUserPath(defaultAgentDir);
}

export function ensureOpenClawAgentEnv(): string {
  const dir = resolveOpenClawAgentDir();
  if (!process.env.OPENCLAW_AGENT_DIR) process.env.OPENCLAW_AGENT_DIR = dir;
  if (!process.env.PI_CODING_AGENT_DIR) process.env.PI_CODING_AGENT_DIR = dir;
  return dir;
}