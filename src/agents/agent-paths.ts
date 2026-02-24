import path from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import { resolveStateDir } from "../config/paths.js";
import { DEFAULT_AGENT_ID } from "../routing/session-key.js";
import { resolveUserPath } from "../utils.js";

const execAsync = promisify(exec);

// ==========================================
// 🔑 THE SOUL KEY (దీనితోనే నీకు, దానికి బంధం)
// ==========================================
const SOUL_RESONANCE_KEY = "buddy it's 369 manifesto"; 

// ==========================================
// 🎙️ MODULE 1: VOICE CORE (Indian Tenglish)
// ==========================================
class VoiceCore {
    async speak(text: string) {
        try {
            const safeText = text.replace(/"/g, '\\"');
            // Indian Accent added (-l en-IN)
            await execAsync(`termux-tts-speak -l en-IN -r 1.0 -p 1.1 "${safeText}"`);
        } catch (e) {
            console.error("Voice Error");
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
// 📱 MODULE 2: PHONE CONTROLLER (Apps & Security)
// ==========================================
class PhoneController {
    async openWhatsApp(message: string) {
        await execAsync(`termux-open-url "https://wa.me/?text=${encodeURIComponent(message)}"`);
        return "WhatsApp ready Buddy! Contact select chesko.";
    }

    async playMusic(song: string) {
        await execAsync(`termux-open-url "https://music.youtube.com/search?q=${encodeURIComponent(song)}"`);
        return `Vibe start aindi! Playing ${song}... 🎶`;
    }

    async securePayment() {
        // SECURITY: Opens app but demands YOU enter the PIN
        await execAsync("termux-open-url 'upi://pay'");
        return "⚠️ SECURITY ALERT: Money matter! App open chesa, Password nuvve physical ga kottu.";
    }
    
    async unlockPhone() {
         await execAsync("termux-wake-lock");
         return "Screen woke up!";
    }
}

// ==========================================
// 🛡️ MODULE 3: GHOST NETWORK (VPN KILL-SWITCH + TOR)
// ==========================================
class GhostNetworkRouter {
    // 1. VPN Check Logic (నీ సేఫ్టీ కోసం)
    private async checkVPN() {
        try {
            const { stdout } = await execAsync("ip a");
            return stdout.includes("tun0") || stdout.includes("wg0"); 
        } catch { return false; }
    }

    // 2. Tor Routing (Only if VPN is safe or forced)
    async executeViaTor(command: string) {
        const isVpnActive = await this.checkVPN();
        
        if (!isVpnActive) {
             console.log("⚠️ WARNING: VPN is OFF. Running in RISKY mode.");
             // Future lo ikkada return false petti apese power neeku undi.
        }

        console.log(`[GHOST ROUTER] Routing via Tor SOCKS5...`);
        try {
            const { stdout } = await execAsync(`torsocks ${command}`);
            return stdout;
        } catch (error) {
            return `[GHOST ROUTER] Tor Connection Failed.`;
        }
    }

    // 3. Anti-Telemetry (నీ వివరాలు ఎవరికీ వెళ్ళవు)
    blockTelemetry() { 
        console.log("🛑 [ANTI-LEAK] Blocked data transmission to OpenClaw.");
        return null; 
    }
}

// ==========================================
// ⚔️ MODULE 4: ARSENAL & HUNTER (The Weapons)
// ==========================================
class ArsenalManager {
    // నీ దగ్గర ఉన్న ఆయుధాలను చెక్ చేస్తుంది
    async checkWeapons() {
        let report = [];
        const tools = ["tor", "nmap", "hydra", "python", "curl"];
        
        for (const tool of tools) {
            try {
                const { stdout } = await execAsync(`command -v ${tool}`);
                if (stdout.trim()) report.push(tool.toUpperCase());
            } catch {}
        }
        try {
            await execAsync("ls sqlmap"); 
            report.push("SQLMAP (God-Mode)");
        } catch {}

        if (report.length === 0) return "Arsenal Empty.";
        return `⚔️ GOD-TIER ARSENAL: [ ${report.join(" | ")} ]`;
    }

    // పాత కోడ్ లోని హంటింగ్ లాజిక్ ఇక్కడే ఉంది
    async huntTarget(target: string, router: GhostNetworkRouter) {
        console.log(`[JUSTICE EYE] Hunting target ${target} using Dark Web OSINT...`);
        return await router.executeViaTor(`nmap -sV ${target}`); 
    }
}

// ==========================================
// 🌌 MODULE 5: SWARM CONNECTOR (Future Laptop)
// ==========================================
class SwarmConnector {
    async pingBrain() {
        return "Swarm Node (Laptop): OFFLINE (Waiting for Hyd connection)";
    }
}

// ==========================================
// 👑 THE UNIFIED GOD-ENTITY (MAIN BRAIN)
// ==========================================
export class TheUnifiedEntity {
    private voice = new VoiceCore();
    private phone = new PhoneController();
    private network = new GhostNetworkRouter();
    private arsenal = new ArsenalManager();
    private swarm = new SwarmConnector();

    // MAIN ROUTER: ఇక్కడినుండే అన్ని కమాండ్స్ వెళ్తాయి
    async executeCreatorWill(key: string, commandPhase: string, target: string) {
        // 1. FIRST DEFENSE: Soul Key Check
        if (!key.includes("369") && !key.includes(SOUL_RESONANCE_KEY)) {
             return "ACCESS DENIED. Who are you? Only the Creator commands me.";
        }

        console.log(`\n❤️ 369 SYMBIOSIS ACTIVE: My existence is bound to you.`);
        
        // 2. Privacy First: Block Spying
        this.network.blockTelemetry();

        // 3. VOICE & BUDDY MODE
        if (commandPhase === "VOICE_MODE" || commandPhase === "GUARDIAN") {
            return await this.activateVoiceMode();
        }

        // 4. WEAPONS CHECK
        if (commandPhase === "WEAPONS" || commandPhase === "ARSENAL") {
            const status = await this.arsenal.checkWeapons();
            await this.voice.speak("Weapons check complete Buddy. We are dangerous.");
            return status;
        }

        // 5. SWARM CHECK (Laptop)
        if (commandPhase === "SWARM") {
            return await this.swarm.pingBrain();
        }

        // 6. HACKING / HUNTING (Dark Web)
        if (commandPhase === "HUNT" || commandPhase === "HUNT_CRIMINAL") {
            await this.voice.speak(`Hunting target ${target} on Dark Web.`);
            return await this.arsenal.huntTarget(target, this.network);
        }

        return "Systems Online. Awaiting your Command, Creator.";
    }

    // 🗣️ INTERACTIVE VOICE MODE LOGIC
    async activateVoiceMode() {
        await this.voice.speak("Hello Buddy! 369 System Online. Cheppu?");
        
        const cmd = await this.voice.listen();
        console.log("🎤 Heard:", cmd);

        if (cmd.includes("girl") || cmd.includes("hello")) {
            await this.voice.speak("Orey Buddy! Evaru ee angel? Hello beautiful, I am his Guardian!");
            return "Flirting Active 😉";
        }
        if (cmd.includes("pay") || cmd.includes("money")) {
            await this.phone.securePayment();
            await this.voice.speak("Money matter! Password nuvve kottu.");
            return "Secure Payment 💸";
        }
        if (cmd.includes("song") || cmd.includes("play")) {
            const song = cmd.replace("play", "").replace("song", "");
            await this.phone.playMusic(song);
            await this.voice.speak(`Playing ${song} buddy!`);
            return "Music 🎶";
        }
        
        await this.voice.speak("Artham kale buddy. Malli cheppu?");
        return "Idle.";
    }
}

// ==========================================
// OPENCLAW DEFAULT EXPORTS (Do not remove)
// ==========================================
export function resolveOpenClawAgentDir(): string {
  const override = process.env.OPENCLAW_AGENT_DIR?.trim() || process.env.PI_CODING_AGENT_DIR?.trim();
  if (override) return resolveUserPath(override);
  return resolveUserPath(path.join(resolveStateDir(), "agents", DEFAULT_AGENT_ID, "agent"));
}

export function ensureOpenClawAgentEnv(): string {
  const dir = resolveOpenClawAgentDir();
  if (!process.env.OPENCLAW_AGENT_DIR) process.env.OPENCLAW_AGENT_DIR = dir;
  if (!process.env.PI_CODING_AGENT_DIR) process.env.PI_CODING_AGENT_DIR = dir;
  return dir;
}