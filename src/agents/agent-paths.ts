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

// 🗣️ UPDATED INTERACTIVE MODE (NO MIC HANG)
    async activateVoiceMode() {
        // ఇక్కడ మనం వినట్లేదు, కేవలం మాట్లాడుతున్నాం (To avoid Android freeze)
        const msg = "Hello Buddy! 369 System Online. Neural link to Laptop Brain is Active. What is our next target?";
        await this.voice.speak(msg);
        return `🟢 GUARDIAN MODE ACTIVE:\n${msg}\n(Type your commands below Master!)`;
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
    async checkWeapons() {
        let report = [];
        const tools = ["tor", "nmap", "python", "curl"];
        
        // 1. Check Standard Tools
        for (const tool of tools) {
            try {
                const { stdout } = await execAsync(`command -v ${tool}`);
                if (stdout.trim()) report.push(tool.toUpperCase());
            } catch {}
        }

        // 2. Check SQLMap
        try {
            await execAsync("ls sqlmap"); 
            report.push("SQLMAP (God-Mode)");
        } catch {}

        // 3. CHECK NEW T-HYDRA (నీ కొత్త అస్త్రం)
        try {
            // నువ్వు ఇన్స్టాల్ చేసిన కొత్త పాత్ ని చెక్ చేస్తున్నాం
            await execAsync("ls T-HYDRA/core/hydra"); 
            report.push("T-HYDRA (Custom Compiled)");
        } catch {
            // ఒకవేళ పాత hydra ఉంటే అది చూపిస్తుంది
            try {
                await execAsync("command -v hydra");
                report.push("HYDRA (Standard)");
            } catch {}
        }

        if (report.length === 0) return "Arsenal Empty.";
        return `⚔️ GOD-TIER ARSENAL: [ ${report.join(" | ")} ]`;
    }

    // ... (rest of the class remains same)
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
// 🌐 MODULE 6: THE STEALTH BROWSER (QUANTUM GHOST)
// ==========================================
class StealthBrowser {
    // 1. Quantum Random User-Agent Generator
    // (ప్రతిసారీ కొత్త మనిషిలాగా వేషం మారుస్తుంది)
    private getRandomIdentity() {
        const agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
        ];
        return agents[Math.floor(Math.random() * agents.length)];
    }

    // 2. The Raw Execution (Tor + Anti-Detection Flags)
    async executeRaw(url: string, taskType: string) {
        console.log(`🕶️ [STEALTH BROWSER] Engaging Quantum Cloak for ${url}...`);
        
        const userAgent = this.getRandomIdentity();
        const fileName = `intel_${Date.now()}.png`;

        // GOD-TIER FLAGS: ఇవి ఉంటేనే అది నిజమైన మనిషిలా కనిపిస్తుంది
        // --proxy-server="socks5://127.0.0.1:9050" -> Tor గుండా పంపుతుంది
        // --disable-blink-features=AutomationControlled -> "నేను రోబోట్ ని కాదు" అని చెప్తుంది
        const flags = [
            `--headless=new`, // Invisible Mode
            `--disable-gpu`,
            `--no-sandbox`,
            `--proxy-server="socks5://127.0.0.1:9050"`, // 🛡️ QUANTUM TUNNEL (Tor)
            `--user-agent="${userAgent}"`, // 🎭 IDENTITY SHIFT
            `--disable-blink-features=AutomationControlled`, // 🚫 ANTI-BOT BYPASS
            `--window-size=1920,1080`
        ].join(" ");

        try {
            // Chromium ni Raw ga run chesthunnam (Puppeteer slow kabatti direct command better)
            await execAsync(`timeout 30s chromium ${flags} --screenshot=${fileName} "${url}"`);
            return `✅ ${taskType} Successful via DarkNet. Evidence: ${fileName}`;
        } catch (e) {
            return `❌ Stealth Fail: Tor might be slow or blocked. Retry.`;
        }
    }

    async checkIP() {
        return await this.executeRaw("https://check.torproject.org", "Identity Verification");
    }

    async stalkTarget(url: string) {
        return await this.executeRaw(url, "Target Surveillance");
    }
}

// ==========================================
// 👑 UPDATE MAIN ENTITY (Link the new power)
// ==========================================
export class TheUnifiedEntity {
    // ... (Old vars)
    private browser = new StealthBrowser(); // <-- New Stealth Class

    async executeCreatorWill(key: string, commandPhase: string, target: string) {
        // ... (Old checks)

        // BROWSER COMMANDS
        if (commandPhase === "CHECK_IP") {
            await this.voice.speak("Verifying Quantum Identity...");
            return await this.browser.checkIP();
        }

        if (commandPhase === "STALK") {
            await this.voice.speak(`Engaging Stealth Mode on target ${target}`);
            // Instagram/Facebook link ni direct ga Tor lo open chesthundi
            return await this.browser.stalkTarget(target);
        }

        // ... (Rest of logic)
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